
var bd_CBS = {
  nomeArea: "Ciências Biológicas & da Saúde",
  idArea: "CBS",
  bgColor: 'rgba(204, 0, 0, 0.7)', borderColor: '#d1c8ec', fontColor: '#f0f8fc',
  bgColorH: 'rgba(234, 30, 30, 0.7)', borderColorH: '#d1c8ec',
  cursos: [
    { id: "BIO", nome: "Biomedicina" },
    { id: "CBI", nome: "Ciências Biológicas Licenciatura" },
    { id: "CBIB", nome: "Ciências Biológicas Bacharelado" },
    { id: "EDF", nome: "Educação Física Licenciatura" },
    { id: "EDFB", nome: "Educação Física Bacharelado" },
    { id: "ENF", nome: "Enfermagem" },
    { id: "EST", nome: "Estética e Cosmética" },
    { id: "FAR", nome: "Farmácia" },
    { id: "FIS", nome: "Fisioterapia" },
    { id: "NUT", nome: "Nutrição" },
    { id: "ODO", nome: "Odontologia" },
    { id: "PSI", nome: "Psiciologia" },
  ],
  UCs: [

    { id: 1, nome: "Saúde Única", cursos: [ "CBS@BIO", "CBS@CBI", "CBS@CBIB", "CBS@EDFB", "CBS@EDF", "CBS@EST", "CBS@FAR", "CBS@FIS", "CBS@NUT", "CBS@ODO", "CBS@PSI" ] },
    { id: 2, nome: "Mecanismos de Agressão e Defesa", cursos: [ "CBS@BIO", "CBS@CBIB", "CBS@EST", "CBS@ENF", "CBS@FAR", "CBS@FIS", "CBS@NUT", "CBS@ODO" ] },
    { id: 3, nome: "Biossistemas do Corpo Humano", cursos: [ "CBS@BIO", "CBS@CBIB", "CBS@EDFB", "CBS@EST", "CBS@FAR", "CBS@FIS", "CBS@NUT", "CBS@ODO" ] },
    { id: 4, nome: "Processos Biológicos", cursos: [ "CBS@BIO", "CBS@CBI", "CBS@CBIB", "CBS@EDFB", "CBS@EST", "CBS@FAR", "CBS@FIS", "CBS@NUT", "CBS@ODO" ] },
    { id: 5, nome: "Química aplicada a produtos naturais", cursos: [ "CBS@FAR" ] },
    { id: 6, nome: "Terapeutica medicamentosa", cursos: [ "CBS@FAR" ] },
    { id: 7, nome: "Analise laboratorial de microrganismos", cursos: [ "CBS@FAR", "CBS@BIO" ] },
    { id: 8, nome: "Tecnologia e segurança alimentar", cursos: [ "CBS@FAR", ] },
    { id: 9, nome: "Análises hematológicas, hemoderivados e Banco de Sangue", cursos: [ "CBS@FAR", "CBS@BIO" ] },
    { id: 10, nome: "Análises químicas e toxicológicas", cursos: [ "CBS@FAR", "CBS@BIO" ] },
    { id: 11, nome: "Estrutura e dinâmica dos Farmácos", cursos: [ "CBS@FAR" ] },
    { id: 12, nome: "Análises Metabolicas Laboratoriais", cursos: [ "CBS@FAR", "CBS@BIO" ] },
    { id: 13, nome: "Farmacoterapia", cursos: [ "CBS@FAR" ] },
    { id: 14, nome: "Serviços farmacêuticos", cursos: [ "CBS@FAR" ] },
    { id: 15, nome: "Cuidado Farmacêutico e a comunidade", cursos: [ "CBS@FAR" ] },
    { id: 16, nome: "Gestão e Inovação em Ciências Farmacêuticas", cursos: [ "CBS@FAR" ] },
    { id: 17, nome: "Tecnologia e Inovações em Medicamentos", cursos: [ "CBS@FAR" ] },
    { id: 18, nome: "Desenvolvimento de Medicamentos e Cosméticos", cursos: [ "CBS@FAR" ] },
    { id: 19, nome: "Controle de Qualidade", cursos: [ "CBS@FAR" ] },
    { id: 20, nome: "Análises de alimentos", cursos: [ "CBS@BIO", "CBS@NUT" ] },
    { id: 21, nome: "Análises Citólogicas", cursos: [ "CBS@BIO" ] },
    { id: 22, nome: "Processos Biotecnológicos e Forenses", cursos: [ "CBS@BIO", "CBS@CBIB"] },
    { id: 23, nome: "Biomedicina Estética", cursos: [ "CBS@BIO" ] },
    { id: 24, nome: "Gestão das tecnologias de Saúde", cursos: [ "CBS@BIO" ] },
    { id: 25, nome: "Imageneologia", cursos: [ "CBS@BIO" ] },
    { id: 26, nome: "Psicologia e Sociedade", cursos: [ "CBS@PSI" ] },
    { id: 27, nome: "Processos Interpessoais e Personalidade", cursos: [ "CBS@PSI" ] },
    { id: 28, nome: "Psicologia e Educação Inclusiva", cursos: [ "CBS@PSI" ] },
    { id: 29, nome: "Processos Psicológicos, Biologia e Cognição", cursos: [ "CBS@PSI" ] },
    { id: 30, nome: "Estudos Socioculturais e Relações Humanas no Trabalho", cursos: [ "CBS@PSI" ] },
    { id: 31, nome: "Desenvolvimento Humano", cursos: [ "CBS@PSI" ] },
    { id: 32, nome: "Trabalho, Carreira e Gestão", cursos: [ "CBS@PSI" ] },
    { id: 33, nome: "Psicologia e Saúde", cursos: [ "CBS@PSI" ] },
    { id: 34, nome: "Perspectivas Fenomenológicas, Existenciais e Humanistas", cursos: [ "CBS@PSI" ] },
    { id: 35, nome: "Psicodiagnóstico e  Processos Psicoterápicos", cursos: [ "CBS@PSI" ] },
    { id: 36, nome: "Identidade Profissional, Pesquisa e Evidências em Psicologia", cursos: [ "CBS@PSI" ] },
    { id: 37, nome: "Escultura Dental e Cariologia", cursos: [ "CBS@ODO" ] },
    { id: 38, nome: "Saúde Coletiva em Odontologia", cursos: [ "CBS@ODO" ] },
    { id: 39, nome: "Conhecimentos Morfofuncionais da Cabeça e Pescoço", cursos: [ "CBS@ODO" ] },
    { id: 40, nome: "Propedêutica Imagenológica e Anestésica", cursos: [ "CBS@ODO" ] },
    { id: 41, nome: "Protese Total e Parcial Removível ", cursos: [ "CBS@ODO" ] },
    { id: 42, nome: "Estomatologia", cursos: [ "CBS@ODO" ] },
    { id: 43, nome: "Dentística Laboratorial", cursos: [ "CBS@ODO" ] },
    { id: 44, nome: "Periodontia Laboratorial", cursos: [ "CBS@ODO" ] },
    { id: 45, nome: "Prótese Fixa ", cursos: [ "CBS@ODO" ] },
    { id: 46, nome: "Prática Clínica Odontológica em Dentística", cursos: [ "CBS@ODO" ] },
    { id: 47, nome: "Prática Clínica Odontológica em Prótese e Endodontia", cursos: [ "CBS@ODO" ] },
    { id: 48, nome: "Planejamento e gestão de unidades de alimentação e nutrição", cursos: [ "CBS@NUT" ] },
    { id: 49, nome: "Técnicas dietéticas e gastronomia", cursos: [ "CBS@NUT" ] },
    { id: 50, nome: "Nutrição nas Fases da Vida ", cursos: [ "CBS@NUT" ] },
    { id: 51, nome: "Nutrição na Saúde e Doença", cursos: [ "CBS@NUT" ] },
    { id: 52, nome: "Nutrição Social e Direito Humano à Alimentação Adequada", cursos: [ "CBS@NUT" ] },
    { id: 53, nome: "Nutrição Clínica", cursos: [ "CBS@NUT" ] },
    { id: 54, nome: "Nutrição esportiva e estética", cursos: [ "CBS@NUT" ] },
    { id: 55, nome: "Movimento Humano", cursos: [ "CBS@FIS", "CBS@EDFB" ] },
    { id: 56, nome: "Conhecimentos e Habilidades Fisioterapêuticas do Membro Inferior", cursos: [ "CBS@FIS" ] },
    { id: 57, nome: "Fisioterapia de Tronco, Pescoço e Cabeça", cursos: [ "CBS@FIS" ] },
    { id: 58, nome: "Recursos terapeuticos manuais", cursos: [ "CBS@FIS" ] },
    { id: 59, nome: "Acupuntura fisioterapeutica", cursos: [ "CBS@FIS" ] },
    { id: 60, nome: "Conhecimento e Habilidades Fisioterapêuticas do Membro Superior ", cursos: [ "CBS@FIS" ] },
    { id: 61, nome: "Gestão e Inovação em Fisioterapia", cursos: [ "CBS@FIS" ] },
    { id: 62, nome: "Fisioterapia em Saúde Coletiva e do trabalhador", cursos: [ "CBS@FIS" ] },
    { id: 63, nome: "Recursos Físicos em Fisioterapia", cursos: [ "CBS@FIS" ] },
    { id: 64, nome: "Fisioterapia nas Disfunções Musculoesqueléticas", cursos: [ "CBS@FIS" ] },
    { id: 65, nome: "Fisioterapia em Saúde Materno-Infantil", cursos: [ "CBS@FIS" ] },
    { id: 66, nome: "Fisioterapia e os Recursos Protéticos e Ortóticos ", cursos: [ "CBS@FIS" ] },
    { id: 67, nome: "Educação Física na Infância e na Adolescência ", cursos: [ "CBS@EDF", "CBS@EDFB" ] },
    { id: 68, nome: "Educação Física e Sociedade", cursos: [ "CBS@EDF", "CBS@EDFB" ] },
    { id: 69, nome: "Práticas Corporais Contemporâneas", cursos: [ "CBS@EDF", "CBS@EDFB" ] },
    { id: 70, nome: "Práticas Pedagógicas em Educação Física na Educação Infantil e Ensino Fundamental", cursos: [ "CBS@EDF", "CBS@EDFB" ] },
    { id: 71, nome: "Práticas Pedagógicas em Educação Física no Ensino Médio e na Educação de Jovens e Adultos", cursos: [ "CBS@EDF", "CBS@EDFB" ] },
    { id: 72, nome: "Esportes Coletivos e Individuais", cursos: [ "CBS@EDF" ] },
    { id: 73, nome: "Práticas de Academia", cursos: [ "CBS@EDF" ] },
    { id: 74, nome: "Esportes Coletivos e Paralímpicos", cursos: [ "CBS@EDF" ] },
    { id: 75, nome: "Educação Física na Idade Adulta e no Envelhecimento", cursos: [ "CBS@EDF" ] },
    { id: 76, nome: "Ecologia, Conservação e Recuperação do Meio Ambiente", cursos: [ "CBS@CBIB" ] },
    { id: 77, nome: "Ecologia e Biodiversidade dos Invertebrados", cursos: [ "CBS@CBIB", "CBS@CBI" ] },
    { id: 78, nome: "Biodiversidade Vegetal", cursos: [ "CBS@CBIB", "CBS@CBI" ] },
    { id: 79, nome: "Ecologia e Biodiversidade dos Vertebrados", cursos: [ "CBS@CBIB", "CBS@CBI" ] },
    { id: 80, nome: "Análises Laboratoriais", cursos: [ "CBS@CBIB" ] },
    { id: 81, nome: "Licenciamento e Gestão Ambiental", cursos: [ "CBS@CBIB" ] },
    { id: 82, nome: "Processos Evolutivos e Ecologia Comportamental", cursos: [ "CBS@CBIB", "CBS@CBI" ] },
    { id: 83, nome: "Botânica Aplicada ", cursos: [ "CBS@CBIB" ] },
    { id: 84, nome: "Biodiversidade Morfofuncional dos Vertebrados", cursos: [ "CBS@CBIB", "CBS@CBI" ] },
    { id: 85, nome: "Geologia", cursos: [ "CBS@CBIB" ] },
    { id: 86, nome: "Processo de Cuidar em Enfermagem", cursos: [ "CBS@ENF" ] },
    { id: 87, nome: "Saúde Coletiva em Enfermagem", cursos: [ "CBS@ENF" ] },
    { id: 88, nome: "Gestão de Serviços de Saúde e de Enfermagem", cursos: [ "CBS@ENF" ] },
    { id: 89, nome: "Atenção Integral em Saúde Mental", cursos: [ "CBS@ENF" ] },
    { id: 90, nome: "Sistematização da Assistência de Enfermagem", cursos: [ "CBS@ENF" ] },
    { id: 91, nome: "Atenção Integral à Saúde da Mulher e Neonato", cursos: [ "CBS@ENF" ] },
    { id: 92, nome: "Atenção Integral à Saúde da Criança e Adolescente", cursos: [ "CBS@ENF" ] },
    { id: 93, nome: "Atenção Integral às Urgências e Emergências", cursos: [ "CBS@ENF" ] },
    { id: 94, nome: "Atenção Integral à Saúde do Adulto e Idoso Clínico", cursos: [ "CBS@ENF" ] },
    { id: 95, nome: "Atenção Integral à Saúde do Paciente Cirurgico", cursos: [ "CBS@ENF" ] },
    { id: 96, nome: "Estetica facial e Eletroestética", cursos: [ "CBS@EST" ] },
    { id: 97, nome: "Estética Corporal e Eletroestética", cursos: [ "CBS@EST" ] },
    { id: 98, nome: "Tricologia e Estética Capilar", cursos: [ "CBS@EST" ] },
    { id: 99, nome: "Disfunções Estéticas e Procedimentos Pré e pós Operatório", cursos: [ "CBS@EST" ] },
    { id: 100, nome: "Técnicas de Massagem e Terapias Alternativas", cursos: [ "CBS@EST" ] },
    { id: 101, nome: "Cosmetologia Estética", cursos: [ "CBS@EST" ] },
    { id: 102, nome: "Visagismo e Maquiagem", cursos: [ "CBS@EST" ] },
    { id: 103, nome: "Integração clínico-patológica", cursos: [ "CBS@ENF", "CBS@FAR", "CBS@FIS", "CBS@NUT", "CBS@ODO", "CBS@BIO"  ] },

  ]
}