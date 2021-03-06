
var bd_CA = {
  nomeArea: "Comunicação & Artes",
  idArea: "CA",
  bgColor: 'rgba(100, 100, 0, 0.7)', borderColor: '#d1c8ec', fontColor: '#f0f8fc',
  bgColorH: 'rgba(130, 130, 30, 0.62)', borderColorH: '#d1c8ec',
  cursos: [
    { id: "PP", nome: "Publicidade e Propaganda" },
    { id: "JO", nome: "Jornalismo" },
    { id: "RP", nome: "Relações Públicas" },
    { id: "RT", nome: "Rádio e TV" },
    { id: "PPU", nome: "Produção Publicitária" },
    { id: "PM", nome: "Produção Multimidia" },
    { id: "PA", nome: "Produção Audiovisual" },
    { id: "FOT", nome: "Fotografia" },
    { id: "CI", nome: "Comunicação Institucional" },
    { id: "CA", nome: "Cinema e Audiovisual" },
  ],
  UCs: [

    { id: 1, nome: "Linguagens e relações estéticas", cursos: [ "CA@PP", "CA@JO", "CA@RP", "CA@RT", "CA@PPU", "CA@PM", "CA@PA", "CA@FOT", "CA@CI", "CA@CA" ] },
    { id: 2, nome: "Narrativas e produção transmídia", cursos: [ "CA@PP", "CA@JO", "CA@RP", "CA@RT", "CA@PPU", "CA@PM", "CA@PA", "CA@FOT", "CA@CI", "CA@CA" ] },
    { id: 3, nome: "Composto de marketing e branding", cursos: [ "CA@PP" ] },
    { id: 4, nome: "Estratégias de Comunicação e Marketing", cursos: [ "CA@PP", "CA@RP", "CA@PPU", "CA@CI" ] },
    { id: 5, nome: "Imagem e identidade visual", cursos: [ "CA@PP", "CA@PPU" ] },
    { id: 6, nome: "Novos negócios de comunicação", cursos: [ "CA@PP", "CA@JO", "CA@RP", "CA@RT", "CA@CA" ] },
    //{ id: 7, nome: "Análise e interpretação de dados", cursos: [ "CA@PP", "CA@JO", "CA@RP", "CA@PM" ] },
    { id: 8, nome: "Estúdio de criação", cursos: [ "CA@PP", "CA@PPU", "CA@FOT" ] },
    { id: 9, nome: "Comportamento, consumo e tendências", cursos: [ "CA@PP" ] },
    { id: 10, nome: "Planejamento e organização de eventos", cursos: [ "CA@PP", "CA@RP", "CA@CI" ] },
    { id: 11, nome: "Estúdio de criação digital", cursos: [ "CA@PP", "CA@PPU", "CA@PM" ] },
    { id: 12, nome: "Audiovisual publicitário", cursos: [ "CA@PP", "CA@PPU" ] },
    { id: 13, nome: "Planejamento de campanha", cursos: [ "CA@PP" ] },
    { id: 14, nome: "Planejamento de mídia", cursos: [ "CA@PP" ] },
    { id: 15, nome: "Agência Experimental", cursos: [ "CA@PP" ] },

    //{ id: 16, nome: "Economia Criativa e desenvolvimento sustentável", cursos: [ "CA@PP" ] },
    //{ id: 17, nome: "Comunicação e diversidade", cursos: [ "CA@PP" ] },
    //{ id: 18, nome: "Conhecimento e ação profissional", cursos: [ "CA@PP" ] },

    { id: 16, nome: "Estruturas da informação jornalística", cursos: [ "CA@JO" ] },
    { id: 17, nome: "Produção de conteúdo em multiplataformas", cursos: [ "CA@JO" ] },
    { id: 18, nome: "Informação e projeto gráfico", cursos: [ "CA@JO" ] },
    { id: 19, nome: "Comunicação Integrada", cursos: [ "CA@JO", "CA@RP", "CA@CI" ] },
    { id: 20, nome: "Laboratório de jornalismo impresso", cursos: [ "CA@JO" ] },
    { id: 21, nome: "Audiovisual com conteúdo informativo", cursos: [ "CA@JO" ] },
    { id: 22, nome: "Narrativas Documentais", cursos: [ "CA@JO", "CA@RT", "CA@CA" ] },
    { id: 23, nome: "Comunicação pública e comunitária", cursos: [ "CA@JO" ] },
    { id: 24, nome: "Laboratório de produtos jornalísticos", cursos: [ "CA@JO" ] },

    { id: 25, nome: "Produção de conteúdo e gestão da informação", cursos: [ "CA@RP", "CA@CI" ] },
    { id: 26, nome: "Estudos organizacionais", cursos: [ "CA@RP" ] },
    { id: 27, nome: "Gestão de crise e imagem", cursos: [ "CA@RP", "CA@CI" ] },
    { id: 28, nome: "Planejamento Estratégico de Relações Públicas", cursos: [ "CA@RP" ] },

    { id: 29, nome: "Registro e processos fotográficos", cursos: [ "CA@RT", "CA@PA", "CA@FOT", "CA@CA" ] },
    { id: 30, nome: "Direção de arte", cursos: [ "CA@RT", "CA@PA", "CA@CA" ] },
    { id: 31, nome: "Gestão em Rádio e TV", cursos: [ "CA@RT" ] },
    { id: 32, nome: "Processos de produção audiovisual", cursos: [ "CA@RT", "CA@PA" ] },
    { id: 33, nome: "Montagem e efeitos visuais", cursos: [ "CA@RT", "CA@PA", "CA@CA" ] },
    { id: 34, nome: "Desenho de som e produção sonora", cursos: [ "CA@RT", "CA@PA", "CA@CA", "TI@TJD" ] },
    { id: 35, nome: "Desenvolvimento de projetos em mídias sonoras", cursos: [ "CA@RT" ] },
    { id: 36, nome: "Narrativas ficcionais", cursos: [ "CA@RT", "CA@CA" ] },
    { id: 37, nome: "Edição em Rádio e TV", cursos: [ "CA@RT" ] },
    { id: 38, nome: "Projeto em som e imagem", cursos: [ "CA@RT" ] },

    { id: 39, nome: "Fotografia documental", cursos: [ "CA@FOT" ] },
    { id: 40, nome: "Imagens do cotidiano", cursos: [ "CA@FOT" ] },
    { id: 41, nome: "Novas tecnologias da imagem", cursos: [ "CA@FOT" ] },

    { id: 42, nome: "Direção cinematográfica", cursos: [ "CA@CA" ] },
    { id: 43, nome: "Estudos do cinema", cursos: [ "CA@CA" ] },
    { id: 44, nome: "Realização cinematográfica", cursos: [ "CA@CA" ] },

  ]
}
