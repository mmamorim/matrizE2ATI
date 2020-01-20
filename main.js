

var v_nodes = [];
var v_edges = [];

v_nodes.push({
  id: 'raiz', label: ' <b>E2A</b>',
  type: "Raiz", shape: "circle", radius: 10, color:'#ffffff', open: true, level: 0,
  margin: { top: 0, bottom: 0, left: -10, right: 0 },
  widthConstraint: 120,
  color: { background: 'black', border: '#ede8ff', highlight: { border: '#d1c8ec', background: 'rgba(34, 14, 99, 0.62)' } },
  font: { multi: true, color: '#f0f8fc', size: 48, face: 'Roboto Condensed' }
});


function buildAreaNode(bd, bgColor, bgColorH, borderColor, borderColorH, fontColor) {
  v_nodes.push({
    id: bd.idArea, label: '<b>Área:</b> '+bd.nomeArea,  mass: 5, widthConstraint: 100,
    type: "Grande Área", shape: "circle", size: 30, open: false, level: 1,
    color: { background: bd.bgColor, border: bd.borderColor, highlight: { background: bd.bgColorH, border: bd.borderColorH } },
    font: { multi: true, color: bd.fontColor, size: 15, face: 'Raleway' }
  });
  v_edges.push({ from: bd.idArea, to: 'raiz', id: 'e_raiz'+bd.idArea, color:{color:'white'} });
  buildCursos(bd);
}

buildAreaNode(bd_TI);
buildAreaNode(bd_AUD);
buildAreaNode(bd_CH);
buildAreaNode(bd_ENG);
buildAreaNode(bd_CBS);
buildAreaNode(bd_CA);
buildAreaNode(bd_CJ);
buildAreaNode(bd_GN);
buildAreaNode(bd_CAMA);
buildAreaNode(bd_TH);

function buildCursos(bd) {
  log("criando cursos para Área: "+bd.nomeArea);
  var tnode_Curso = {
    type: "Área", shape: "box", size: 15, level: 2, open: true, mass: 3,
    color: { background: bd.bgColor, border: bd.borderColor, highlight: { background: bd.bgColorH, border: bd.borderColorH } },
    font: { multi: true, color: bd.fontColor, size: 15, face: 'Roboto' }
  }
  for(var i=0; i < bd.cursos.length; i++) {
    var node = Object.assign({}, tnode_Curso);
    node.id = bd.idArea+'@'+bd.cursos[i].id;
    log(node.id)
    node.label = '<b>Curso</b>:\n'+bd.cursos[i].nome;
    v_nodes.push(node);
    v_edges.push({ from: node.id, to: bd.idArea, id: node.id+i, color:{color:'white'} });
  }
  var tnode_UC = {
    type: "Sub-Área", shape: "dot", size: 10, level: 3, open: true, mass: 3,
    color: { background: 'rgba(225, 220, 241, 1)', border: '#719f72', highlight: { border: '#78729d', background: '#aca7d2' } },
    font: { multi: true, color: 'white', size: 14, face: 'Lato' }
  }
  for(var i=0; i < bd.UCs.length; i++) {
    var node = Object.assign({}, tnode_UC);
    node.id = bd.idArea+'@'+bd.UCs[i].id;
    node.label = '<b>UC</b>\n'+bd.UCs[i].nome;
    log("criando Aresta: ");
    log(node);
    v_nodes.push(node);
    for(var k=0; k < bd.UCs[i].cursos.length; k++) {
      log(bd.idArea+'@'+bd.UCs[i].cursos[k]+'@')
      v_edges.push({ from: node.id, to: bd.UCs[i].cursos[k], id: bd.idArea+'@'+bd.UCs[i].cursos[k]+'@'+bd.UCs[i].id+'_'+k, color:{color:'white'} });
    }
  }
}


graphNet.init(function() {
  log("voltei");

  graphNet.ondoubleclick = function(params) {
    log("onDoubleClickGraph")
    log(params)
    if (params.nodes.length == 1) {
      var nodeId = params.nodes[0];
      var node = graphNet.getNode(nodeId);
      log("node")
      log(node)
      log(node.open)
      if(node.open) {
        if(node.type == "Raiz") {
          var options = {
            offset: {x:0,y:0},
            scale: 2,
            duration: 500,
            easingFunction: "easeInOutQuad"
          };
          console.log("FIT")
          graphNet.network.fit({animation:options});
          return;
        }
        graphNet.removeParents(nodeId);
        //zoomNode(getNodeChild(nodeId));
        graphNet.focusNode(graphNet.getNodeChildID(nodeId));
      } else {
        graphNet.addParents(nodeId);
        graphNet.zoomNode(nodeId);
      }
    }
  };

});
