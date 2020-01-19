function log(texto) {
  console.log(texto);
}

var graphNet = {
  nodeTypes: [
    {
      type: "Raiz", shape: "box", size: 15, color:'#eb7719', open: true, level: 0,
      color: { background: '#29825f', border: '#055023', highlight: { border: '#055023', background: '#106141' } },
      font: { color: 'white', size: 16, face: 'lato' }
    },
    {
      type: "Grande Área", shape: "box", size: 15, level: 1, open: false,
      color: { background: '#1dba23', border: '#18850b', highlight: { border: '#7bee15', background: '#85e786' } },
      font: { color: 'white', size: 14, face: 'lato' }
    },
    {
      type: "Área", shape: "dot", size: 12, level: 2, open: false,
      color: { background: '#8ebf8f', border: '#719f72', highlight: { border: '#739d74', background: '#415e42' } },
      font: { color: 'black', size: 13, face: 'lato' }
    },
    {
      type: "Sub-Área", shape: "dot", size: 10, level: 3, open: false,
      color: { background: '#57b859', border: '#719f72', highlight: { border: '#739d74', background: '#415e42' } },
      font: { color: 'black', size: 11, face: 'lato' }
    },
    {
      type: "Componente", shape: "dot", size: 7,  level: 4, open: false,
      color: { background: '#14ec18', border: '#719f72', highlight: { border: '#739d74', background: '#14ec18' } },
      font: { color: 'black', size: 10, face: 'lato' }
    },
    {
      type: "Tópico", shape: "dot", size: 3, level: 5, open: false,
      color: { background: '#8aac00', border: '#719f72', highlight: { border: '#739d74', background: '#8aac00' } },
      font: { color: 'black', size: 9, face: 'lato' }
    },
    {
      type: "Micro tópico", shape: "dot", size: 2, level: 6, open: false,
      color: { background: '#475801', border: '#29732a', highlight: { border: '#739d74', background: '#6c8605' } },
      font: { color: 'black', size: 8, face: 'lato' }
    },
  ],
  getNodeType: function(type) {
    for(var idx in graphNet.nodeTypes) {
      if(graphNet.nodeTypes[idx].type == type) return graphNet.nodeTypes[idx];
    }
    return {};
  },
  getNodeLevel: function(level) {
    for(var idx in graphNet.nodeTypes) {
      if(graphNet.nodeTypes[idx].level == level) return graphNet.nodeTypes[idx];
    }
    return {};
  },
  nodes: [],
  edges: [],
  nodesData: [],
  edgesData: [],
  network: null,
  onclick: function() {},
  ondoubleclick: function() {},
  oncontext: function() {},

  focusNode: function(id) {
    var options = {
      scale: 1,
      offset: { x: 0, y: 0},
      animation: {
        duration: 1000,
        easingFunction: "easeInOutQuad"
      }
    };
    graphNet.network.focus(id,options);
  },

  zoomNode: function(id) {
    var ret = graphNet.network.getPositions([id]);
    console.log(ret)
    var options = {
      position: { x: ret[id].x, y: ret[id].y }, scale: 0.8, offset: { x: 0, y: 0},
      animation: { duration: 500, easingFunction: "easeInOutQuad" }
    };
    graphNet.network.moveTo(options);
  },

  snapshotToArray: function(snap) {
    var vet = [];
    for(var idx in snap) {
      snap[idx].id = idx;
      vet.push(snap[idx]);
    }
    return vet;
  },

  searchNodes: function(texto) {
    var vetNodes = [];
    var qtde = 0;
    for(var idx in graphNet.nodesData) {
      if(graphNet.nodesData[idx].label.toLowerCase().includes(texto)) {
        vetNodes.push(graphNet.nodesData[idx]);
        qtde++;
        if(qtde >= 10) return vetNodes;
      }
    }
    return vetNodes;
  },

  getRootNode: function() {
    for(var idx in graphNet.nodesData) {
      if(graphNet.nodesData[idx].type == "Raiz") return graphNet.nodesData[idx];
    }
    return null;
  },

  getNode: function(id) {
    for(var idx in graphNet.nodesData) {
      if(graphNet.nodesData[idx].id == id) return graphNet.nodesData[idx];
    }
    return null;
  },

  getNodeParents: function(id) {
    var vet = [];
    for(var idx in graphNet.edgesData) {
      if(graphNet.edgesData[idx].to == id) {
        //log("pegando nó com ID: "+graphNet.edgesData[idx].from)
        vet.push(graphNet.getNode(graphNet.edgesData[idx].from));
        //log("peguei: ")
        //log(graphNet.getNode(graphNet.edgesData[idx].from))
      }
    }
    return vet;
  },

  getNodeParentsRecursive: function(id) {
    var vet = graphNet.getNodeParents(id);
    for(var i in vet) {
      vet = vet.concat(graphNet.getNodeParentsRecursive(vet[i].id));
    }
    return vet;
  },


  getPathNodesToRoot: function(id, vet) {
    log("getPathNodesToRoot: "+id)
    var node = graphNet.getNode(id);
    if(node == null || node.type == "Raiz") {
      return vet;
    } else {
      vet.unshift(node);
      var nodeID = graphNet.getNodeChildID(id);
      return graphNet.getPathNodesToRoot(nodeID,vet);
    }
  },

  getEdgesFromToNode: function(id) {
    var vet = [];
    for(var idx in graphNet.edgesData) {
      if(graphNet.edgesData[idx].to == id) {
        vet.push(graphNet.edgesData[idx]);
      }
      if(graphNet.edgesData[idx].from == id) {
        vet.push(graphNet.edgesData[idx]);
      }
    }
    return vet;
  },

  getEdgeToParents: function(id) {
    var vet = [];
    for(var idx in graphNet.edgesData) {
      if(graphNet.edgesData[idx].to == id) {
        vet.push(graphNet.edgesData[idx]);
      }
    }
    return vet;
  },

  getNodeChildID: function(id) {
    var vet = [];
    for(var idx in graphNet.edgesData) {
      if(graphNet.edgesData[idx].from == id) {
        return(graphNet.edgesData[idx].to);
      }
    }
    return null;
  },

  getEdgeChildID: function(id) {
    var vet = [];
    for(var idx in graphNet.edgesData) {
      if(graphNet.edgesData[idx].from == id) {
        return(graphNet.edgesData[idx].id);
      }
    }
    return null;
  },

  removeParents: function(id) {
    var pnodes = [];
    var pedges = [];
    var level = graphNet.getNode(id).level;
    log("level: "+level)
    for(var idx in graphNet.edgesData) {
      if(graphNet.edgesData[idx].to == id) {
        var node = graphNet.getNode(graphNet.edgesData[idx].from)
        if(node.level > level) {
          graphNet.nodes.remove(node);
          graphNet.edges.remove(graphNet.edgesData[idx]);
          graphNet.removeParents(graphNet.edgesData[idx].from);
        }
      }
    }
    graphNet.toggleOpenCloseNode(id);
  },

  toggleOpenCloseNode: function(id) {
    for(var idx in graphNet.nodesData) {
      if(graphNet.nodesData[idx].id == id) {
        graphNet.nodesData[idx].open = !graphNet.nodesData[idx].open;
        break;
      }
    }
  },

  setOpenNode: function(id, value) {
    for(var idx in graphNet.nodesData) {
      if(graphNet.nodesData[idx].id == id) {
        graphNet.nodesData[idx].open = value;
        break;
      }
    }
  },

  addChildSameLevel: function(node) {
    for(var idx in graphNet.edgesData) {
      if(graphNet.edgesData[idx].from == node.id) {
        var nodeTo = graphNet.getNode(graphNet.edgesData[idx].to);
        if(nodeTo.level <= node.level) {
          if(graphNet.edges.get(graphNet.edgesData[idx].id) == null) {
            graphNet.edges.add(graphNet.edgesData[idx]);
          }
        }
      }
    }
  },

  nodeCanBeRemoved: function(id) {
    var level = graphNet.getNode(id).level;
    var resp = true;
    for(var idx in graphNet.edgesData) {
      if(graphNet.edgesData[idx].to == id) {
        var node = graphNet.getNode(graphNet.edgesData[idx].from);
        log(node)
        if(level != node.level) {
          resp = false;
        }
      }
    }
    return resp;
  },

  addParents: function(id) {
    log("add parents");
    for(var idx in graphNet.edgesData) {
      if(graphNet.edgesData[idx].to == id) {
        if(graphNet.nodes.get(graphNet.edgesData[idx].from) == null) {
          var node = graphNet.getNode(graphNet.edgesData[idx].from);
          node.open = false;
          graphNet.nodes.add(node);
          log(node);
          graphNet.addChildSameLevel(node);
        }
        if(graphNet.edges.get(graphNet.edgesData[idx].id) == null) {
          graphNet.edges.add(graphNet.edgesData[idx]);
        }
      }
    }
    log("graphNet.edges");
    log(graphNet.edges);
    graphNet.toggleOpenCloseNode(id);
  },

  removeNodeData: function(id) {
    for(var idx in graphNet.nodesData) {
      if(graphNet.nodesData[idx].id == id) {
        graphNet.nodesData.splice(idx, 1);
        break;
      }
    }
  },

  removeEdgeData: function(id) {
    for(var idx in graphNet.edgesData) {
      if(graphNet.edgesData[idx].id == id) {
        graphNet.edgesData.splice(idx, 1);
        break;
      }
    }
  },

  initOnly: function(path,callback) {
    rdb.ref(path).once("value", function(snapshot) {
      log("init graphNet")
      var ret = snapshot.val();
      log(ret)
      graphNet.nodesData = graphNet.snapshotToArray(ret.nodes);
      graphNet.edgesData = graphNet.snapshotToArray(ret.edges);
      log(graphNet.nodesData)
      log(graphNet.edgesData)
      callback();
    });
  },

  init: function(callback) {
    log("init graphNet")

    graphNet.nodesData = v_nodes;
    graphNet.edgesData = v_edges;
    log(graphNet.nodesData)
    log(graphNet.edgesData)
    graphNet.buildNetwork();
    callback();
  },

  prepareFolhas: function() {
    for(var idx in graphNet.nodesData) {
      if(graphNet.nodesData[idx].level == 6) {
        var nodeID = graphNet.nodesData[idx].id;
        graphNet.nodesData[idx].pathToRoot = graphNet.getPathNodesToRoot(nodeID,[]);
      }
    }
  },

  getMicrotopicosAncestrais: function(id) {
    var ret = [];
    for(var idx in graphNet.nodesData) {
      if(graphNet.nodesData[idx].level == 6) {
        var nodes = graphNet.getPathNodesToRoot(graphNet.nodesData[idx].id,[]);
        for(var idx2 in nodes) {
          if(nodes[idx2].id == id) {
            ret.push(graphNet.nodesData[idx]);
          }
        }
      }
    }
    return ret;
  },

  buildNetwork: function() {
    var container = document.getElementById('grafoConhecimento');
    // provide the data in the vis format
    var nodes = [];
    var raizID = "";
    for(var idx in graphNet.nodesData) {
      if(graphNet.nodesData[idx].type == "Raiz") {
        raizID = graphNet.nodesData[idx].id;
        nodes.push(graphNet.nodesData[idx]);
      }
    }
    var edges = graphNet.getEdgeToParents(raizID);
    nodes = nodes.concat(graphNet.getNodeParents(raizID));
    log("nodes")
    log(nodes)
    log("edges")
    log(edges)
    graphNet.nodes = new vis.DataSet(nodes);
    graphNet.edges = new vis.DataSet(edges);
    log(graphNet)
    var data = { nodes: graphNet.nodes, edges: graphNet.edges };
    graphNet.buildNetworkComponent(container,data);
  },

  buildNetworkFromID: function(id) {
    var container = document.getElementById('grafoConhecimento');
    log("container")
    log(container)
    // provide the data in the vis format
    var nodes = [];
    var raizID = "";
    for(var idx in graphNet.nodesData) {
      if(graphNet.nodesData[idx].id == id) {
        raizID = graphNet.nodesData[idx].id;
        nodes.push(graphNet.nodesData[idx]);
        break;
      }
    }
    var edges = graphNet.getEdgeToParents(raizID);
    nodes = nodes.concat(graphNet.getNodeParents(raizID));
    log("nodes")
    log(nodes)
    log("edges")
    log(edges)
    graphNet.nodes = new vis.DataSet(nodes);
    graphNet.edges = new vis.DataSet(edges);
    log(graphNet)
    var data = { nodes: graphNet.nodes, edges: graphNet.edges };
    graphNet.buildNetworkComponent(container,data);
  },

  buildNetworkComponent: function(container,data) {
    var options = {
      layout: {
        //randomSeed: 24,
        hierarchical: {
          enabled: false,
          direction: 'LR',        // UD, DU, LR, RL
          sortMethod: 'directed'   // hubsize, directed
        }
      },
      edges: {
        arrows: {
          to : {
            enabled: true,
            scaleFactor: 0.5,
          }
        },
        width: 0.2,
        length: 100
      },
      nodes:{
        shape: 'dot',
        size: 4,
        widthConstraint: 120,
        //margin: { top: -10, bottom: 20, left: 5, right: 5 },
      },
      physics: {
        enabled: true,
        solver: "forceAtlas2Based",
        stabilization: {
          enabled: true,
          fit: true
        }
      }
    };
    // initialize your network!
    graphNet.network = new vis.Network(container, data, options);
    graphNet.network.on("click", function(params) {
      if(params.nodes.length == 0) {
        graphNet.oncontext(params);
      } else {
        graphNet.onclick(params);
      }
    });
    graphNet.network.on("doubleClick", function(params) { graphNet.ondoubleclick(params); });
  }

}
