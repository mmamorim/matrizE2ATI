
var bd_CAMA = {
  nomeArea: "Ciências Agrárias & Meio Ambiente",
  idArea: "CAMA",
  bgColor: 'rgba(186, 0, 173, 0.69)', borderColor: '#d1c8ec', fontColor: '#f0f8fc',
  bgColorH: 'rgba(216, 30, 203, 0.62)', borderColorH: '#d1c8ec',
  cursos: [

    { id: "MVET", nome: "Medicina Veterinária" },
    { id: "AGRO", nome: "Agronomia" },
    { id: "GEO", nome: "Geologia" },
    { id: "ZOO", nome: "Zootecnia" },

  ],
  UCs: [

    { id: 1, nome: "Sistemas Vitais dos Animais", cursos: [ "CAMA@MVET" ] },
    { id: 2, nome: "Zootecnia de Precisão de Ruminantes", cursos: [ "CAMA@MVET", "CAMA@AGRO"] },
    { id: 3, nome: "Sistema Nervoso e Aparelho Locomotor dos Animais", cursos: [ "CAMA@MVET", "CAMA@ZOO"] },
    { id: 4, nome: "Saúde Única", cursos: [ "CAMA@MVET" ] },
    { id: 5, nome: "Agravos e Imunidade em Saúde Animal", cursos: [ "CAMA@MVET", "CAMA@ZOO" ] },
    { id: 6, nome: "Reprodução Animal e Biotecnologias", cursos: [ "CAMA@MVET" ] },
    { id: 7, nome: "Zootecnia de Precisão de Aves, Suínos e Organismos Aquáticos", cursos: [ "CAMA@MVET", "CAMA@ZOO" ] },
    { id: 8, nome: "Meio Ambiente e Medicina de Animais Silvestres", cursos: [ "CAMA@MVET" ] },
    { id: 9, nome: "Clínica Médica de Cães e Gatos", cursos: [ "CAMA@MVET" ] },
    { id: 10, nome: "Medicina Veterinária Investigativa", cursos: [ "CAMA@MVET" ] },
    { id: 11, nome: "Medicina de Ruminantes", cursos: [ "CAMA@MVET" ] },
    { id: 12, nome: "Clínica Cirúrgica de Cães e Gatos", cursos: [ "CAMA@MVET" ] },
    { id: 13, nome: "Saúde de Animais de Produção", cursos: [ "CAMA@MVET" ] },
    { id: 14, nome: "Inspeção e Tecnologia de Produtos de Origem Animal", cursos: [ "CAMA@MVET", "CAMA@ZOO" ] },
    { id: 15, nome: "Medicina e Produção Equina", cursos: [ "CAMA@MVET" ] },

    { id: 16, nome: "Morfologia e Fisiologia de Plantas Cultivadas", cursos: [ "CAMA@AGRO" ] },
    { id: 17, nome: "Agrometeorologia e Climatologia", cursos: [ "CAMA@AGRO", "CAMA@ZOO" ] },
    { id: 18, nome: "Pedologia e Manejo de solo", cursos: [ "CAMA@AGRO" ] },
    { id: 19, nome: "Fertilidade e Nutrição de Plantas", cursos: [ "CAMA@AGRO", "CAMA@ZOO" ] },
    { id: 20, nome: "Economia e Extensão Rural", cursos: [ "CAMA@AGRO", "CAMA@ZOO" ] },
    { id: 21, nome: "Zootecnia de Precisão de Aves, Suínos e Aquicultura", cursos: [ "CAMA@AGRO" ] },
    { id: 22, nome: "Entomologia Agrícola", cursos: [ "CAMA@AGRO" ] },
    { id: 23, nome: "Melhoramento de Plantas e Biotecnologia", cursos: [ "CAMA@AGRO" ] },
    { id: 24, nome: "Topografia, Georreferenciamento e Construções Rurais", cursos: [ "CAMA@AGRO", "CAMA@ZOO" ] },
    { id: 25, nome: "Tecnologia de Sementes e Culturas Anuais", cursos: [ "CAMA@AGRO" ] },
    { id: 26, nome: "Mecanização e Sistemas de Agricultura de Precisão", cursos: [ "CAMA@AGRO", "CAMA@ZOO" ] },
    { id: 27, nome: "Irrigação e Drenagem", cursos: [ "CAMA@AGRO" ] },
    { id: 28, nome: "Culturas Perenes e Fruticultura", cursos: [ "CAMA@AGRO" ] },
    { id: 29, nome: "Fitopatologia", cursos: [ "CAMA@AGRO" ] },
    { id: 30, nome: "Olericultura e Plantas Aromáticas", cursos: [ "CAMA@AGRO" ] },
    { id: 31, nome: "Silvicultura, Arborização Urbana e Plantas Ornamentais", cursos: [ "CAMA@AGRO" ] },

    { id: 32, nome: "Geodinâmica Superficial", cursos: [ "CAMA@GEO" ] },
    { id: 33, nome: "Topografia e Georreferenciamento", cursos: [ "CAMA@GEO" ] },
    { id: 34, nome: "Mineralogia e cristalografia", cursos: [ "CAMA@GEO" ] },
    { id: 35, nome: "Estudo de fósseis", cursos: [ "CAMA@GEO" ] },
    { id: 36, nome: "Petrografia e Petrologia", cursos: [ "CAMA@GEO" ] },
    { id: 37, nome: "Geotecnologias", cursos: [ "CAMA@GEO" ] },
    { id: 38, nome: "Eventos tectônicos", cursos: [ "CAMA@GEO" ] },
    { id: 39, nome: "Hidrogeologias e Recursos Hídricos", cursos: [ "CAMA@GEO" ] },
    { id: 40, nome: "Geologia Urbana", cursos: [ "CAMA@GEO" ] },
    { id: 41, nome: "Levantamentos Geoquímicos e Geofísicos", cursos: [ "CAMA@GEO" ] },
    { id: 42, nome: "Geologia Exploratória: Mineração, Petróleo & Gás", cursos: [ "CAMA@GEO" ] },
    { id: 43, nome: "Geologia Econômica", cursos: [ "CAMA@GEO" ] },

    { id: 44, nome: "Genética e Reprodução Animal", cursos: [ "CAMA@ZOO" ] },
    { id: 45, nome: "Forragicultura e Pastagens", cursos: [ "CAMA@ZOO" ] },
    { id: 46, nome: "Criação Animal e Perícia Técnica", cursos: [ "CAMA@ZOO" ] },
    { id: 47, nome: "Nutrição Animal", cursos: [ "CAMA@ZOO" ] },

  ]
}