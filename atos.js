// REPOSITÓRIO DE ATOS DA CALCULADORA DE PRAZOS
// Cada linha é um feriado ou suspensão de expediente. Para incluir um ato,
// copie uma linha, cole abaixo dela e altere os dados. Mantenha as aspas e a vírgula final.
//
// Campos:
//   tribunal     sigla do tribunal, por exemplo "TJPE"
//   data         no formato ano-mês-dia, por exemplo "2026-08-10"
//   motivo       descrição do feriado ou da suspensão
//   ato          nome do ato, como deve aparecer na minuta
//   dispositivo  artigo e inciso, como deve aparecer na minuta
//   abrangencia  "tribunal" (todo o tribunal) ou "local" (sede ou comarcas específicas)
//   sede         só para "local": true se vale para a sede e a 2ª instância
//   comarcas     só para "local": lista de comarcas, por exemplo ["Recife", "Olinda"]
//   municipal    true para feriado municipal (a página exibe alerta para conferir a lei local)
//   tipo         "parcial" para meio expediente ou ponto facultativo com expediente: conta como dia útil e gera alerta
//   lei          lei municipal do feriado, quando conhecida, por exemplo "Lei Municipal nº 1.435/2022 de Altinho"
//
// Na minuta, o trecho sai como: "nos termos do [dispositivo] do [ato]". Sem dispositivo: "nos termos do [ato]".

window.ATOS = [
  // TJPE 2026: Ato Conjunto nº 43, de 13 de outubro de 2025 (art. 1º, incisos)
  { tribunal: "TJPE", data: "2026-01-01", motivo: "Confraternização Universal", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, I", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-02-16", motivo: "Carnaval", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, II", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-02-17", motivo: "Carnaval", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, III", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-02-18", motivo: "Cinzas", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, IV", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-03-06", motivo: "Data Magna de Pernambuco", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, V", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-04-02", motivo: "Semana Santa (Paixão de Cristo)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, VI", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-04-03", motivo: "Semana Santa (Paixão de Cristo)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, VII", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-04-05", motivo: "Páscoa", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, VIII", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-04-21", motivo: "Tiradentes", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, IX", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, X", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-06-22", motivo: "Corpus Christi (transferido do dia 04 de junho)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, XI", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-06-24", motivo: "São João", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, XII", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-08-10", motivo: "Dia dos Cursos Jurídicos", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, XIII", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, XIV", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-10-12", motivo: "Nossa Senhora Aparecida, Padroeira do Brasil", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, XV", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-10-30", motivo: "Dia do Servidor Público", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, XVI", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-11-02", motivo: "Dia de Finados", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, XVII", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-11-15", motivo: "Proclamação da República", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, XVIII", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, XIX", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-12-08", motivo: "Nossa Senhora da Conceição e Dia da Justiça", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, XX", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-12-25", motivo: "Natal", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, XXI", abrangencia: "tribunal" },
  // TJPE 2026: art. 1º, parágrafo único (art. 94 do COJE e Resolução TJPE nº 520/2024)
  { tribunal: "TJPE", data: "2026-01-02", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-01-03", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-01-04", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-01-05", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-01-06", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-06-23", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-06-25", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-06-26", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-06-27", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-06-28", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-06-29", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-06-30", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-12-20", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-12-21", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-12-22", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-12-23", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-12-24", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-12-26", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-12-27", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-12-28", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-12-29", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-12-30", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2026-12-31", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  // TJPE 2026: art. 2º, sede e Comarca do Recife
  { tribunal: "TJPE", data: "2026-07-16", motivo: "Dia de Nossa Senhora do Carmo (feriado municipal)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 2º", abrangencia: "local", sede: true, comarcas: ["Recife"], municipal: true, lei: "" },

  // TJPE 2027: Ato nº 1502, de 24 de setembro de 2026 (art. 1º, incisos)
  { tribunal: "TJPE", data: "2027-01-01", motivo: "Confraternização Universal", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, I", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-02-08", motivo: "Carnaval", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, II", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-02-09", motivo: "Carnaval", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, III", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-02-10", motivo: "Cinzas", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, IV", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-03-06", motivo: "Data Magna de Pernambuco", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, V", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-03-25", motivo: "Quinta-feira Santa", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, VI", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-03-26", motivo: "Paixão de Cristo", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, VII", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-03-28", motivo: "Páscoa", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, VIII", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-04-21", motivo: "Tiradentes", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, IX", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-05-01", motivo: "Dia do Trabalho", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, X", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-05-28", motivo: "Corpus Christi (transferido de 27 de maio)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, XI", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-06-24", motivo: "São João", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, XII", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-08-09", motivo: "Dia dos Cursos Jurídicos (antecipado de 11 de agosto)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, XIII", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-09-07", motivo: "Independência do Brasil", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, XIV", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-10-12", motivo: "Nossa Senhora Aparecida, Padroeira do Brasil", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, XV", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-10-29", motivo: "Dia do Servidor Público (transferido de 28 de outubro)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, XVI", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-11-02", motivo: "Dia de Finados", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, XVII", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-11-15", motivo: "Proclamação da República", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, XVIII", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, XIX", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-12-08", motivo: "Nossa Senhora da Conceição e Dia da Justiça", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, XX", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-12-25", motivo: "Natal", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, XXI", abrangencia: "tribunal" },
  // TJPE 2027: art. 1º, parágrafo único (art. 94 do COJE e Resolução TJPE nº 520/2024)
  { tribunal: "TJPE", data: "2027-01-02", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-01-03", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-01-04", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-01-05", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-01-06", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-06-23", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-06-25", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-06-26", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-06-27", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-06-28", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-06-29", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-06-30", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-12-20", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-12-21", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-12-22", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-12-23", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-12-24", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-12-26", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-12-27", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-12-28", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-12-29", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-12-30", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJPE", data: "2027-12-31", motivo: "Feriado no Poder Judiciário Estadual (art. 94 do COJE e Resolução TJPE nº 520/2024)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  // TJPE 2027: art. 2º, sede e Comarca do Recife
  { tribunal: "TJPE", data: "2027-07-16", motivo: "Dia de Nossa Senhora do Carmo (feriado municipal)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 2º", abrangencia: "local", sede: true, comarcas: ["Recife"], municipal: true, lei: "" },
  // TJPE 2027: art. 4º, sem expediente forense
  { tribunal: "TJPE", data: "2027-11-01", motivo: "Sem expediente forense", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 4º", abrangencia: "tribunal" },

  // FERIADOS MUNICIPAIS 2026 (art. 4º do Ato Conjunto nº 43/2025 do TJPE). Fonte: portal do TJPE, "Feriados Oficiais nas Comarcas de Pernambuco", atualizado em 14/01/2026.
  // Somente datas específicas. Datas que coincidem com feriados estaduais não foram repetidas.
  // Abreu e Lima
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Abreu e Lima"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-05-14", motivo: "Aniversário de Abreu e Lima", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Abreu e Lima"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-10-31", motivo: "Dia da Consciência Evangélica", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Abreu e Lima"], municipal: true, lei: "" },
  // Afogados da Ingazeira
  { tribunal: "TJPE", data: "2026-07-01", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Afogados da Ingazeira"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-07-22", motivo: "Dia da Padroeira Nossa Senhora Madalena", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Afogados da Ingazeira"], municipal: true, lei: "" },
  // Afrânio
  { tribunal: "TJPE", data: "2026-05-31", motivo: "Dia do Aniversário da Cidade", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Afrânio"], municipal: true, lei: "" },
  // Agrestina
  { tribunal: "TJPE", data: "2026-02-02", motivo: "Dia da Padroeira Nossa Senhora do Desterro", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Agrestina"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-06-13", motivo: "Dia do Padroeiro Santo Antônio", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Agrestina"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Agrestina"], municipal: true, lei: "" },
  // Aliança
  { tribunal: "TJPE", data: "2026-01-20", motivo: "Dia do Padroeiro da Cidade (São Sebastião)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Aliança"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Aliança"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-15", motivo: "Dia da Padroeira Nossa Senhora das Dores", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Aliança"], municipal: true, lei: "" },
  // Altinho
  { tribunal: "TJPE", data: "2026-01-07", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Altinho"], municipal: true, lei: "Lei Municipal nº 1.435/2022 de Altinho" },
  { tribunal: "TJPE", data: "2026-12-18", motivo: "Dia da Padroeira Nossa Senhora do Ó", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Altinho"], municipal: true, lei: "" },
  // Amaraji
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Amaraji"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-07-23", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Amaraji"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-10-31", motivo: "Ação de Graça à Consciência Evangélica", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Amaraji"], municipal: true, lei: "" },
  // Angelim
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Angelim"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-06-06", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Angelim"], municipal: true, lei: "" },
  // Araripina
  { tribunal: "TJPE", data: "2026-09-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Araripina"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-10-31", motivo: "Dia do Evangélico", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Araripina"], municipal: true, lei: "" },
  // Arcoverde
  { tribunal: "TJPE", data: "2026-09-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Arcoverde"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-23", motivo: "Dia da Padroeira Nossa Senhora do Livramento", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Arcoverde"], municipal: true, lei: "" },
  // Barreiros
  { tribunal: "TJPE", data: "2026-02-02", motivo: "Dia da Padroeira Nossa Senhora da Saúde", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Barreiros"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-07-19", motivo: "Data da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Barreiros"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-29", motivo: "Dia do Padroeiro São Miguel Padroeiro da Cidade", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Barreiros"], municipal: true, lei: "" },
  // Belo Jardim
  { tribunal: "TJPE", data: "2026-01-20", motivo: "Dia do Padroeiro São Sebastião", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Belo Jardim"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Belo Jardim"], municipal: true, lei: "" },
  // Belém de Maria
  { tribunal: "TJPE", data: "2026-02-02", motivo: "Dia da Festa do Comércio", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Belém de Maria"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-05-03", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Belém de Maria"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-15", motivo: "Dia da Padroeira Nossa Senhora das Dores", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Belém de Maria"], municipal: true, lei: "" },
  // Belém de São Francisco
  { tribunal: "TJPE", data: "2026-05-07", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Belém de São Francisco"], municipal: true, lei: "" },
  // Betânia
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Betânia"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-06-13", motivo: "Dia do Padroeiro Santo Antônio", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Betânia"], municipal: true, lei: "" },
  // Bezerros
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Bezerros"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-05-18", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Bezerros"], municipal: true, lei: "" },
  // Bodocó
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Bodocó"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-06-12", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Bodocó"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-10-04", motivo: "- Dia de São Francisco", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Bodocó"], municipal: true, lei: "" },
  // Bom Conselho
  { tribunal: "TJPE", data: "2026-01-20", motivo: "Dia de São Sebastião", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Bom Conselho"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-04-26", motivo: "Dia da Padroeira Nossa Senhora do Bom Conselho", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Bom Conselho"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-08-03", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Bom Conselho"], municipal: true, lei: "" },
  // Bom Jardim
  { tribunal: "TJPE", data: "2026-02-02", motivo: "Comemoração Dos festejos de São Sebastião", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Bom Jardim"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-02-03", motivo: "Dia da Ressaca", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Bom Jardim"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-07-19", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Bom Jardim"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-07-26", motivo: "Dia da Padroeira Nossa Senhora de Santana", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Bom Jardim"], municipal: true, lei: "" },
  // Bonito
  { tribunal: "TJPE", data: "2026-01-20", motivo: "Dia de São Sebastião", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Bonito"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-05-20", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Bonito"], municipal: true, lei: "" },
  // Brejo da Madre de Deus
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Brejo da Madre de Deus"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-05-26", motivo: "Dia da Fundação do Município", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Brejo da Madre de Deus"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-06-20", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Brejo da Madre de Deus"], municipal: true, lei: "" },
  // Brejão
  { tribunal: "TJPE", data: "2026-03-01", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Brejão"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-07-20", motivo: "Dia de Padre Cícero", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Brejão"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-14", motivo: "Dia de Santa Cruz", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Brejão"], municipal: true, lei: "" },
  // Buenos Aires
  { tribunal: "TJPE", data: "2026-02-02", motivo: "Dia da Padroeira Nossa Senhora do Bom Parto", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Buenos Aires"], municipal: true, lei: "" },
  // Buíque
  { tribunal: "TJPE", data: "2026-05-12", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Buíque"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-05-18", motivo: "Dia do Padroeiro São Félix de Cantalice", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Buíque"], municipal: true, lei: "" },
  // Cabo de Santo Agostinho
  { tribunal: "TJPE", data: "2026-06-13", motivo: "Dia do Padroeiro Santo Antônio", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Cabo de Santo Agostinho"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-07-09", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Cabo de Santo Agostinho"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-10-31", motivo: "Dia da Reforma Protestante e Ação de Graças", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Cabo de Santo Agostinho"], municipal: true, lei: "" },
  // Cabrobó
  { tribunal: "TJPE", data: "2026-09-11", motivo: "Data da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Cabrobó"], municipal: true, lei: "" },
  // Cachoeirinha
  { tribunal: "TJPE", data: "2026-06-13", motivo: "Dia do Padroeiro Santo Antônio", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Cachoeirinha"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-12-17", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Cachoeirinha"], municipal: true, lei: "" },
  // Caetés
  { tribunal: "TJPE", data: "2026-08-07", motivo: "Dia do Padroeiro São Caetano", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Caetés"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-13", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Caetés"], municipal: true, lei: "" },
  // Calçado
  { tribunal: "TJPE", data: "2026-02-11", motivo: "Dia da Padroeira Nossa Senhora de Lourdes", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Calçado"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-06-10", motivo: "Dia do Padroeiro Consagrado Coração de Jesus", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Calçado"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-28", motivo: "Festival da Lavoura", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Calçado"], municipal: true, lei: "" },
  // Camaragibe
  { tribunal: "TJPE", data: "2026-05-13", motivo: "Dia da Emancipação Política do Município", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Camaragibe"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-06-10", motivo: "Dia do Padroeiro de Camaragibe – Sagrado Coração de Jesus", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Camaragibe"], municipal: true, lei: "" },
  // Camocim de São Félix
  { tribunal: "TJPE", data: "2026-05-18", motivo: "Dia de São Felix", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Camocim de São Félix"], municipal: true, lei: "" },
  // Canhotinho
  { tribunal: "TJPE", data: "2026-02-02", motivo: "Dia do Padroeiro São Sebastião", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Canhotinho"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-10-02", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Canhotinho"], municipal: true, lei: "" },
  // Capoeiras
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Capoeiras"], municipal: true, lei: "" },
  // Carnaíba
  { tribunal: "TJPE", data: "2026-06-13", motivo: "Dia do Padroeiro da Paróquia Santo Antônio", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Carnaíba"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-08-04", motivo: "Dia do Padroeiro São João Maria Vianey", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Carnaíba"], municipal: true, lei: "" },
  // Carpina
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Carpina"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Carpina"], municipal: true, lei: "" },
  // Caruaru
  { tribunal: "TJPE", data: "2026-05-18", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Caruaru"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-15", motivo: "Dia de Nossa Senhora das Dores", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Caruaru"], municipal: true, lei: "" },
  // Catende
  { tribunal: "TJPE", data: "2026-07-26", motivo: "Padroeira do Município Santana", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Catende"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Catende"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-19", motivo: "Dia do Comerciário", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Catende"], municipal: true, lei: "" },
  // Chã Grande
  { tribunal: "TJPE", data: "2026-03-15", motivo: "Data da Instalação Oficial do Município", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Chã Grande"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia de São José - Padroeiro do Município", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Chã Grande"], municipal: true, lei: "" },
  // Condado
  { tribunal: "TJPE", data: "2026-09-15", motivo: "Dia da Padroeira Nossa Senhora das Dores", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Condado"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-11-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Condado"], municipal: true, lei: "" },
  // Correntes
  { tribunal: "TJPE", data: "2026-08-27", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Correntes"], municipal: true, lei: "" },
  // Cortês
  { tribunal: "TJPE", data: "2026-10-04", motivo: "Dia do Padroeiro São Francisco de Assis", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Cortês"], municipal: true, lei: "" },
  // Cumaru
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia de São José", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Cumaru"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-10-01", motivo: "Dia da Padroeira Santa Terezinha", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Cumaru"], municipal: true, lei: "" },
  // Custódia
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Custódia"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-01", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Custódia"], municipal: true, lei: "" },
  // Escada
  { tribunal: "TJPE", data: "2026-05-24", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Escada"], municipal: true, lei: "" },
  // Exu
  { tribunal: "TJPE", data: "2026-01-14", motivo: "Dia do Padroeiro da Cidade - Bom Jesus dos Aflitos", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Exu"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-08-02", motivo: "Aniversário de Morte de Luiz Gonzaga", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Exu"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-08", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Exu"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-10-31", motivo: "Dia do Evangélico", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Exu"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-11-01", motivo: "Dia de Todos os Santos", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Exu"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-12-13", motivo: "Aniversário de Nascimento de Luiz Gonzaga", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Exu"], municipal: true, lei: "" },
  // Feira Nova
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Feira Nova"], municipal: true, lei: "" },
  // Fernando de Noronha
  { tribunal: "TJPE", data: "2026-08-29", motivo: "Dia da Padroeira Nossa Senhora dos Remédios", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Fernando de Noronha"], municipal: true, lei: "" },
  // Flores
  { tribunal: "TJPE", data: "2026-09-11", motivo: "Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Flores"], municipal: true, lei: "" },
  // Floresta
  { tribunal: "TJPE", data: "2026-03-31", motivo: "Dia da Emancipação do Município de Floresta", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Floresta"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-06-20", motivo: "Dia do Aniversário da Cidade", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Floresta"], municipal: true, lei: "" },
  // Gameleira
  { tribunal: "TJPE", data: "2026-04-10", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Gameleira"], municipal: true, lei: "" },
  // Garanhuns
  { tribunal: "TJPE", data: "2026-02-04", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Garanhuns"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-06-13", motivo: "Dia do Padroeiro Santo Antônio", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Garanhuns"], municipal: true, lei: "" },
  // Glória do Goitá
  { tribunal: "TJPE", data: "2026-07-09", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Glória do Goitá"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-08-15", motivo: "Dia da Padroeira Nossa Senhora da Glória", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Glória do Goitá"], municipal: true, lei: "" },
  // Goiana
  { tribunal: "TJPE", data: "2026-10-27", motivo: "Dia dos Padroeiros Santos Cosme e Damião", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Goiana"], municipal: true, lei: "" },
  // Gravatá
  { tribunal: "TJPE", data: "2026-01-15", motivo: "Dia da Festa de Reis", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Gravatá"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-03-15", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Gravatá"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-07-26", motivo: "Dia de Nossa Senhora Sant’ Ana", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Gravatá"], municipal: true, lei: "" },
  // Iati
  { tribunal: "TJPE", data: "2026-01-25", motivo: "Dia do Padroeiro São Paulo", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Iati"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-08-14", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Iati"], municipal: true, lei: "" },
  // Ibimirim
  { tribunal: "TJPE", data: "2026-06-13", motivo: "Dia do Padroeiro Santo Antônio", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Ibimirim"], municipal: true, lei: "" },
  // Ibirajuba
  { tribunal: "TJPE", data: "2026-05-15", motivo: "Dia do Padroeiro Santo Izídio", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Ibirajuba"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-10-04", motivo: "Dia do Padroeiro São Francisco de Assis", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Ibirajuba"], municipal: true, lei: "" },
  // Igarassu
  { tribunal: "TJPE", data: "2026-09-27", motivo: "Dia dos Padroeiros Santo Cosme e Damião", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Igarassu"], municipal: true, lei: "" },
  // Ilha de Itamaracá
  { tribunal: "TJPE", data: "2026-02-02", motivo: "Dia da Padroeira Nossa Senhora do Pilar", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Ilha de Itamaracá"], municipal: true, lei: "" },
  // Inajá
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia do Padroeiro do Distrito de Caraibeiro São José", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Inajá"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-06-13", motivo: "Dia do Padroeiro Santo Antônio", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Inajá"], municipal: true, lei: "" },
  // Ipojuca
  { tribunal: "TJPE", data: "2026-03-30", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Ipojuca"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-29", motivo: "Dia do Padroeiro São Miguel", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Ipojuca"], municipal: true, lei: "" },
  // Ipubi
  { tribunal: "TJPE", data: "2026-03-02", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Ipubi"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-08-15", motivo: "Dia da Padroeira Nossa Senhora do Perpétuo Socorro", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Ipubi"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-10-31", motivo: "Dia do Evangelho", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Ipubi"], municipal: true, lei: "" },
  // Itambé
  { tribunal: "TJPE", data: "2026-02-02", motivo: "Dia da Padroeira Nossa Senhora do Desterro, Padroeira do Município e Patronesse da Paróquia", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Itambé"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-08-03", motivo: "Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Itambé"], municipal: true, lei: "" },
  // Itapissuma
  { tribunal: "TJPE", data: "2026-01-10", motivo: "Padroeiro São Gonçalo do Amarante", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Itapissuma"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-05-15", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Itapissuma"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-10-31", motivo: "Dia da Consciência Evangélica", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Itapissuma"], municipal: true, lei: "" },
  // Itaquitinga
  { tribunal: "TJPE", data: "2026-01-20", motivo: "Festa do Padroeiro São Sebastião", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Itaquitinga"], municipal: true, lei: "" },
  // Itaíba
  { tribunal: "TJPE", data: "2026-04-28", motivo: "Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Itaíba"], municipal: true, lei: "" },
  // Jaboatão dos Guararapes
  { tribunal: "TJPE", data: "2026-01-15", motivo: "Dia de Santo Amaro", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Jaboatão dos Guararapes"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-05-04", motivo: "Data da Fundação do Município", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Jaboatão dos Guararapes"], municipal: true, lei: "" },
  // Jataúba
  { tribunal: "TJPE", data: "2026-01-20", motivo: "Dia do Padroeiro São Sebastião", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Jataúba"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-03-02", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Jataúba"], municipal: true, lei: "" },
  // Joaquim Nabuco
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Joaquim Nabuco"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-06-04", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Joaquim Nabuco"], municipal: true, lei: "" },
  // João Alfredo
  { tribunal: "TJPE", data: "2026-10-10", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["João Alfredo"], municipal: true, lei: "" },
  // Jupi
  { tribunal: "TJPE", data: "2026-03-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Jupi"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-10-07", motivo: "Dia da Padroeira Nossa Senhora do Rosário", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Jupi"], municipal: true, lei: "" },
  // Jurema
  { tribunal: "TJPE", data: "2026-09-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Jurema"], municipal: true, lei: "" },
  // Lagoa Grande
  { tribunal: "TJPE", data: "2026-05-24", motivo: "Dia da Padroeira Nossa Senhora Auxiliadora", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Lagoa Grande"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-06-16", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Lagoa Grande"], municipal: true, lei: "" },
  // Lagoa de Itaenga
  { tribunal: "TJPE", data: "2026-01-20", motivo: "Dia do Padroeiro São Sebastião", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Lagoa de Itaenga"], municipal: true, lei: "" },
  // Lagoa do Ouro
  { tribunal: "TJPE", data: "2026-03-25", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Lagoa do Ouro"], municipal: true, lei: "" },
  // Lagoa dos Gatos
  { tribunal: "TJPE", data: "2026-01-20", motivo: "Dia do Padroeiro São Sebastião", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Lagoa dos Gatos"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Lagoa dos Gatos"], municipal: true, lei: "" },
  // Lajedo
  { tribunal: "TJPE", data: "2026-05-19", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Lajedo"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-06-13", motivo: "Dia do Padroeiro Santo Antônio", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Lajedo"], municipal: true, lei: "" },
  // Limoeiro
  { tribunal: "TJPE", data: "2026-01-26", motivo: "Dia do Padroeiro São Sebastião", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Limoeiro"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-04-06", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Limoeiro"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-07-27", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Limoeiro"], municipal: true, lei: "" },
  // Maraial
  { tribunal: "TJPE", data: "2026-02-02", motivo: "Dia da Fundação Paroquial em Maraial", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Maraial"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Maraial"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-15", motivo: "Dia da Padroeira Nossa Senhora das Dores", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Maraial"], municipal: true, lei: "" },
  // Mirandiba
  { tribunal: "TJPE", data: "2026-01-28", motivo: "Dia de Emancipação do Município", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Mirandiba"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-03-11", motivo: "Dia da Emancipação política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Mirandiba"], municipal: true, lei: "" },
  // Moreilândia
  { tribunal: "TJPE", data: "2026-05-19", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Moreilândia"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-17", motivo: "Dia da Padroeira Santa Terezinha", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Moreilândia"], municipal: true, lei: "" },
  // Moreno
  { tribunal: "TJPE", data: "2026-01-20", motivo: "Dia do Padroeiro São Sebastião", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Moreno"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Moreno"], municipal: true, lei: "" },
  // Nazaré da Mata
  { tribunal: "TJPE", data: "2026-05-17", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Nazaré da Mata"], municipal: true, lei: "" },
  // Olinda
  { tribunal: "TJPE", data: "2026-03-12", motivo: "Dia da fundação da cidade", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Olinda"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-08-06", motivo: "Dia do Padroeiro São Salvador do Mundo", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Olinda"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-11-10", motivo: "1º Grito de República no Brasil", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Olinda"], municipal: true, lei: "" },
  // Orobó
  { tribunal: "TJPE", data: "2026-09-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Orobó"], municipal: true, lei: "" },
  // Orocó
  { tribunal: "TJPE", data: "2026-01-20", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Orocó"], municipal: true, lei: "" },
  // Ouricuri
  { tribunal: "TJPE", data: "2026-01-20", motivo: "Dia do Padroeiro São Sebastião", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Ouricuri"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-02-03", motivo: "Dia do Padroeiro São Braz", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Ouricuri"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-05-14", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Ouricuri"], municipal: true, lei: "" },
  // Palmares
  { tribunal: "TJPE", data: "2026-06-09", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Palmares"], municipal: true, lei: "" },
  // Panelas
  { tribunal: "TJPE", data: "2026-05-02", motivo: "Festival de Jericos", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Panelas"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-05-18", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Panelas"], municipal: true, lei: "" },
  // Parnamirim
  { tribunal: "TJPE", data: "2026-05-13", motivo: "Dia de Nossa Senhora de Fátima (Padroeira do Santuário da COHAB)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Parnamirim"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-07-01", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Parnamirim"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-07-26", motivo: "Dia da Padroeira do Município Sant’Ana", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Parnamirim"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-10-08", motivo: "Aniversário de Morte dos Cabral", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Parnamirim"], municipal: true, lei: "" },
  // Passira
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Passira"], municipal: true, lei: "" },
  // Paudalho
  { tribunal: "TJPE", data: "2026-01-26", motivo: "data posterior ao dia da Festa de São Sebastião", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Paudalho"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-05-25", motivo: "data posterior ao dia da festa de Pentecostes - onde se", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Paudalho"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-07-27", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Paudalho"], municipal: true, lei: "" },
  // Paulista
  { tribunal: "TJPE", data: "2026-09-04", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Paulista"], municipal: true, lei: "" },
  // Pedra
  { tribunal: "TJPE", data: "2026-05-13", motivo: "Dia da Instalação da Câmara Municipal", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Pedra"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-06-04", motivo: "Dia de Homenagem Póstuma ao \"Seu É\"", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Pedra"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-08-17", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Pedra"], municipal: true, lei: "" },
  // Pesqueira
  { tribunal: "TJPE", data: "2026-02-05", motivo: "Dia da Padroeira Santa Águeda", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Pesqueira"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-04-20", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Pesqueira"], municipal: true, lei: "" },
  // Petrolina
  { tribunal: "TJPE", data: "2026-08-15", motivo: "Dia da Padroeira Nossa Senhora Rainha dos Anjos", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Petrolina"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-21", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Petrolina"], municipal: true, lei: "" },
  // Petrolândia
  { tribunal: "TJPE", data: "2026-07-01", motivo: "Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Petrolândia"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-10-04", motivo: "Dia do Padroeiro São Francisco de Assis", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Petrolândia"], municipal: true, lei: "" },
  // Pombos
  { tribunal: "TJPE", data: "2026-01-18", motivo: "Dia da Padroeira Nossa Senhora dos Impossíveis", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Pombos"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-08-15", motivo: "Dia Consagrado à Assunção de Nossa Senhora", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Pombos"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-12-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Pombos"], municipal: true, lei: "" },
  // Poção
  { tribunal: "TJPE", data: "2026-09-15", motivo: "Dia da Padroeira Nossa Senhora das Dores", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Poção"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-11-13", motivo: "Homenagem ao Frei Henrique Broker", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Poção"], municipal: true, lei: "" },
  // Primavera
  { tribunal: "TJPE", data: "2026-06-13", motivo: "- Dia do Padroeiro Santo Antônio", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Primavera"], municipal: true, lei: "" },
  // Quipapá
  { tribunal: "TJPE", data: "2026-05-19", motivo: "Dia da Emancipação Política.", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Quipapá"], municipal: true, lei: "" },
  // Riacho das Almas
  { tribunal: "TJPE", data: "2026-01-20", motivo: "Dia do padroeiro da cidade, São Sebastião", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Riacho das Almas"], municipal: true, lei: "" },
  // Ribeirão
  { tribunal: "TJPE", data: "2026-07-26", motivo: "Dia da Padroeira Santa Ana", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Ribeirão"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Ribeirão"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-10-31", motivo: "Dia de Ação de Graças e Reforma Protestante", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Ribeirão"], municipal: true, lei: "" },
  // Rio Formoso
  { tribunal: "TJPE", data: "2026-02-07", motivo: "Dia da Batalha do Reduto", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Rio Formoso"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Rio Formoso"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-06-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Rio Formoso"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-11-24", motivo: "Dia Municipal da Consciência Evangélica", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Rio Formoso"], municipal: true, lei: "" },
  // Sairé
  { tribunal: "TJPE", data: "2026-05-06", motivo: "Dia da Pedra Fundamental da Igreja de São Miguel", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Sairé"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-29", motivo: "Dia do Padroeiro São Miguel de Arcanjo", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Sairé"], municipal: true, lei: "" },
  // Salgueiro
  { tribunal: "TJPE", data: "2026-04-30", motivo: "Data da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Salgueiro"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-06-13", motivo: "Dia do Padroeiro Santo Antônio", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Salgueiro"], municipal: true, lei: "" },
  // Saloá
  { tribunal: "TJPE", data: "2026-09-27", motivo: "Dia do Padroeiro São Vicente", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Saloá"], municipal: true, lei: "" },
  // Sanharó
  { tribunal: "TJPE", data: "2026-01-20", motivo: "Dedicado ao co-Padroeiro São Sebastião", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Sanharó"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-10-20", motivo: "Dedicado ao Padroeiro Sagrado Coração de Jesus", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Sanharó"], municipal: true, lei: "" },
  // Santa Cruz do Capibaribe
  { tribunal: "TJPE", data: "2026-09-29", motivo: "Dia do Padroeiro São Miguel", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Santa Cruz do Capibaribe"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-10-05", motivo: "Dia da morte do Padre Zuzinha", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Santa Cruz do Capibaribe"], municipal: true, lei: "" },
  // Santa Maria da Boa Vista
  { tribunal: "TJPE", data: "2026-06-07", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Santa Maria da Boa Vista"], municipal: true, lei: "" },
  // Santa Maria do Cambucá
  { tribunal: "TJPE", data: "2026-10-07", motivo: "Festa da Padroeira Nossa Senhora do Rosário", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Santa Maria do Cambucá"], municipal: true, lei: "" },
  // Serra Talhada
  { tribunal: "TJPE", data: "2026-05-06", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Serra Talhada"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-08", motivo: "Dia da Padroeira Nossa Senhora da Penha", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Serra Talhada"], municipal: true, lei: "" },
  // Serrita
  { tribunal: "TJPE", data: "2026-09-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Serrita"], municipal: true, lei: "" },
  // Sertânia
  { tribunal: "TJPE", data: "2026-05-24", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Sertânia"], municipal: true, lei: "" },
  // Sirinhaém
  { tribunal: "TJPE", data: "2026-01-15", motivo: "Dia do Padroeiro Santo Amaro", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Sirinhaém"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-06-12", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Sirinhaém"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-08-16", motivo: "Dia do Padroeiro São Roque", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Sirinhaém"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-10-31", motivo: "Dia da Consciência Evangélica", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Sirinhaém"], municipal: true, lei: "" },
  // Surubim
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Surubim"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Surubim"], municipal: true, lei: "" },
  // São Bento do Una
  { tribunal: "TJPE", data: "2026-01-07", motivo: "Dia do Padroeiro Bom Jesus dos Pobres Aflitos", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["São Bento do Una"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-04-30", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["São Bento do Una"], municipal: true, lei: "" },
  // São Caetano
  { tribunal: "TJPE", data: "2026-08-07", motivo: "Dia do Padroeiro", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["São Caetano"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["São Caetano"], municipal: true, lei: "" },
  // São Joaquim do Monte
  { tribunal: "TJPE", data: "2026-07-26", motivo: "Dia do Padroeiro São Joaquim", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["São Joaquim do Monte"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["São Joaquim do Monte"], municipal: true, lei: "" },
  // São José da Coroa Grande
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["São José da Coroa Grande"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-04-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["São José da Coroa Grande"], municipal: true, lei: "" },
  // São José do Belmonte
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["São José do Belmonte"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-15", motivo: "Dia da Padroeira da Vila Delmiro, Nossa Senhora das Dores", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["São José do Belmonte"], municipal: true, lei: "" },
  // São José do Egito
  { tribunal: "TJPE", data: "2026-03-09", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["São José do Egito"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["São José do Egito"], municipal: true, lei: "" },
  // São João
  { tribunal: "TJPE", data: "2026-11-25", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["São João"], municipal: true, lei: "" },
  // São Lourenço da Mata
  { tribunal: "TJPE", data: "2026-01-10", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["São Lourenço da Mata"], municipal: true, lei: "" },
  // São Vicente Férrer
  { tribunal: "TJPE", data: "2026-02-02", motivo: "Dia de Nossa Senhora do Rosário", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["São Vicente Férrer"], municipal: true, lei: "" },
  // Tabira
  { tribunal: "TJPE", data: "2026-05-27", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Tabira"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-08-15", motivo: "Dia da Padroeira Nossa Senhora dos Remédios", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Tabira"], municipal: true, lei: "" },
  // Tacaimbó
  { tribunal: "TJPE", data: "2026-06-13", motivo: "Dia do Padroeiro Santo Antônio", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Tacaimbó"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-10-31", motivo: "Dia da Reforma Protestante", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Tacaimbó"], municipal: true, lei: "" },
  // Tacaratu
  { tribunal: "TJPE", data: "2026-02-02", motivo: "Dia da Padroeira Nossa Senhora da Saúde", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Tacaratu"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-05-03", motivo: "Dia da Santa Cruz", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Tacaratu"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-05-13", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Tacaratu"], municipal: true, lei: "" },
  // Tamandaré
  { tribunal: "TJPE", data: "2026-07-19", motivo: "Dia da Solidariedade", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Tamandaré"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-07-31", motivo: "Dia de Santo Ignácio de Loyola", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Tamandaré"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-28", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Tamandaré"], municipal: true, lei: "" },
  // Taquaritinga do Norte
  { tribunal: "TJPE", data: "2026-01-15", motivo: "Dia do Padroeiro Santo Amaro", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Taquaritinga do Norte"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Taquaritinga do Norte"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-05-10", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Taquaritinga do Norte"], municipal: true, lei: "" },
  // Terra Nova
  { tribunal: "TJPE", data: "2026-01-20", motivo: "Dia do Padroeiro São Sebastião", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Terra Nova"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-03-01", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Terra Nova"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-15", motivo: "Dia da Padroeira Nossa Senhora do Perpétuo Socorro", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Terra Nova"], municipal: true, lei: "" },
  // Timbaúba
  { tribunal: "TJPE", data: "2026-04-08", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Timbaúba"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-15", motivo: "Dia da Padroeira Nossa Senhora das Dores", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Timbaúba"], municipal: true, lei: "" },
  // Toritama
  { tribunal: "TJPE", data: "2026-02-02", motivo: "Dia de Nossa Senhora do Perpétuo Socorro", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Toritama"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-03-17", motivo: "Dia da Retratação Política de José Manoel da Silva", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Toritama"], municipal: true, lei: "" },
  // Tracunhaém
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia do Artesão", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Tracunhaém"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-06-13", motivo: "Festa do Padroeiro Santo Antônio", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Tracunhaém"], municipal: true, lei: "" },
  // Trindade
  { tribunal: "TJPE", data: "2026-09-29", motivo: "Dia da Padroeira Santíssima Trindade", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Trindade"], municipal: true, lei: "" },
  // Triunfo
  { tribunal: "TJPE", data: "2026-06-13", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Triunfo"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-15", motivo: "Dia da Padroeira Nossa Senhora das Dores", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Triunfo"], municipal: true, lei: "" },
  // Tuparetama
  { tribunal: "TJPE", data: "2026-04-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Tuparetama"], municipal: true, lei: "" },
  // Venturosa
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Venturosa"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-03-30", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Venturosa"], municipal: true, lei: "" },
  // Verdejante
  { tribunal: "TJPE", data: "2026-03-25", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Verdejante"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-08-04", motivo: "Dia da Morte de Joaquim Tavares de Sá (Filho Ilustre da terra)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Verdejante"], municipal: true, lei: "" },
  // Vertentes
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Festa do Padroeiro São José", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Vertentes"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-08-15", motivo: "Ascensão de Nossa Senhora", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Vertentes"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Vertentes"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-11-01", motivo: "Dia de Todos os Santos", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Vertentes"], municipal: true, lei: "" },
  // Vicência
  { tribunal: "TJPE", data: "2026-07-26", motivo: "Dia da Padroeira Santa Ana", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Vicência"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-09-11", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Vicência"], municipal: true, lei: "" },
  // Vitória de Santo Antão
  { tribunal: "TJPE", data: "2026-01-17", motivo: "Dia de Santo Antão (terça-feira)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Vitória de Santo Antão"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-05-06", motivo: "Dia da Emancipação Política (sábado)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Vitória de Santo Antão"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-08-03", motivo: "Batalha das Tabocas (quinta-feira)", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Vitória de Santo Antão"], municipal: true, lei: "" },
  // Água Preta
  { tribunal: "TJPE", data: "2026-03-19", motivo: "Dia do Padroeiro São José da Agonia", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Água Preta"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-08-03", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Água Preta"], municipal: true, lei: "" },
  // Águas Belas
  { tribunal: "TJPE", data: "2026-01-20", motivo: "Dia de Mártir São Sebastião", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Águas Belas"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-04-19", motivo: "Dia do Índio", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Águas Belas"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-05-24", motivo: "Dia da Elevação à Categoria de Cidade", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Águas Belas"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2026-06-13", motivo: "Dia da Emancipação Política", ato: "Ato Conjunto nº 43/2025 do TJPE", dispositivo: "art. 4º", abrangencia: "local", sede: false, comarcas: ["Águas Belas"], municipal: true, lei: "" },

  // FERIADOS MUNICIPAIS 2027 (art. 5º do Ato nº 1502/2026 do TJPE). Fonte: portal do TJPE, "Feriados Oficiais nas Comarcas de Pernambuco", atualizado em 14/01/2026.
  // Somente datas específicas. Datas que coincidem com feriados estaduais não foram repetidas.
  // Abreu e Lima
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Abreu e Lima"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-05-14", motivo: "Aniversário de Abreu e Lima", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Abreu e Lima"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-10-31", motivo: "Dia da Consciência Evangélica", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Abreu e Lima"], municipal: true, lei: "" },
  // Afogados da Ingazeira
  { tribunal: "TJPE", data: "2027-07-01", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Afogados da Ingazeira"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-07-22", motivo: "Dia da Padroeira Nossa Senhora Madalena", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Afogados da Ingazeira"], municipal: true, lei: "" },
  // Afrânio
  { tribunal: "TJPE", data: "2027-05-31", motivo: "Dia do Aniversário da Cidade", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Afrânio"], municipal: true, lei: "" },
  // Agrestina
  { tribunal: "TJPE", data: "2027-02-02", motivo: "Dia da Padroeira Nossa Senhora do Desterro", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Agrestina"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-06-13", motivo: "Dia do Padroeiro Santo Antônio", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Agrestina"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Agrestina"], municipal: true, lei: "" },
  // Aliança
  { tribunal: "TJPE", data: "2027-01-20", motivo: "Dia do Padroeiro da Cidade (São Sebastião)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Aliança"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Aliança"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-15", motivo: "Dia da Padroeira Nossa Senhora das Dores", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Aliança"], municipal: true, lei: "" },
  // Altinho
  { tribunal: "TJPE", data: "2027-01-07", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Altinho"], municipal: true, lei: "Lei Municipal nº 1.435/2022 de Altinho" },
  { tribunal: "TJPE", data: "2027-12-18", motivo: "Dia da Padroeira Nossa Senhora do Ó", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Altinho"], municipal: true, lei: "" },
  // Amaraji
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Amaraji"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-07-23", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Amaraji"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-10-31", motivo: "Ação de Graça à Consciência Evangélica", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Amaraji"], municipal: true, lei: "" },
  // Angelim
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Angelim"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-06-06", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Angelim"], municipal: true, lei: "" },
  // Araripina
  { tribunal: "TJPE", data: "2027-09-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Araripina"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-10-31", motivo: "Dia do Evangélico", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Araripina"], municipal: true, lei: "" },
  // Arcoverde
  { tribunal: "TJPE", data: "2027-09-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Arcoverde"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-23", motivo: "Dia da Padroeira Nossa Senhora do Livramento", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Arcoverde"], municipal: true, lei: "" },
  // Barreiros
  { tribunal: "TJPE", data: "2027-02-02", motivo: "Dia da Padroeira Nossa Senhora da Saúde", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Barreiros"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-07-19", motivo: "Data da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Barreiros"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-29", motivo: "Dia do Padroeiro São Miguel Padroeiro da Cidade", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Barreiros"], municipal: true, lei: "" },
  // Belo Jardim
  { tribunal: "TJPE", data: "2027-01-20", motivo: "Dia do Padroeiro São Sebastião", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Belo Jardim"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Belo Jardim"], municipal: true, lei: "" },
  // Belém de Maria
  { tribunal: "TJPE", data: "2027-02-02", motivo: "Dia da Festa do Comércio", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Belém de Maria"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-05-03", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Belém de Maria"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-15", motivo: "Dia da Padroeira Nossa Senhora das Dores", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Belém de Maria"], municipal: true, lei: "" },
  // Belém de São Francisco
  { tribunal: "TJPE", data: "2027-05-07", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Belém de São Francisco"], municipal: true, lei: "" },
  // Betânia
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Betânia"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-06-13", motivo: "Dia do Padroeiro Santo Antônio", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Betânia"], municipal: true, lei: "" },
  // Bezerros
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Bezerros"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-05-18", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Bezerros"], municipal: true, lei: "" },
  // Bodocó
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Bodocó"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-06-12", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Bodocó"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-10-04", motivo: "- Dia de São Francisco", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Bodocó"], municipal: true, lei: "" },
  // Bom Conselho
  { tribunal: "TJPE", data: "2027-01-20", motivo: "Dia de São Sebastião", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Bom Conselho"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-04-26", motivo: "Dia da Padroeira Nossa Senhora do Bom Conselho", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Bom Conselho"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-08-03", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Bom Conselho"], municipal: true, lei: "" },
  // Bom Jardim
  { tribunal: "TJPE", data: "2027-02-02", motivo: "Comemoração Dos festejos de São Sebastião", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Bom Jardim"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-02-03", motivo: "Dia da Ressaca", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Bom Jardim"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-07-19", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Bom Jardim"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-07-26", motivo: "Dia da Padroeira Nossa Senhora de Santana", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Bom Jardim"], municipal: true, lei: "" },
  // Bonito
  { tribunal: "TJPE", data: "2027-01-20", motivo: "Dia de São Sebastião", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Bonito"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-05-20", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Bonito"], municipal: true, lei: "" },
  // Brejo da Madre de Deus
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Brejo da Madre de Deus"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-05-26", motivo: "Dia da Fundação do Município", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Brejo da Madre de Deus"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-06-20", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Brejo da Madre de Deus"], municipal: true, lei: "" },
  // Brejão
  { tribunal: "TJPE", data: "2027-03-01", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Brejão"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-07-20", motivo: "Dia de Padre Cícero", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Brejão"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-14", motivo: "Dia de Santa Cruz", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Brejão"], municipal: true, lei: "" },
  // Buenos Aires
  { tribunal: "TJPE", data: "2027-02-02", motivo: "Dia da Padroeira Nossa Senhora do Bom Parto", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Buenos Aires"], municipal: true, lei: "" },
  // Buíque
  { tribunal: "TJPE", data: "2027-05-12", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Buíque"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-05-18", motivo: "Dia do Padroeiro São Félix de Cantalice", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Buíque"], municipal: true, lei: "" },
  // Cabo de Santo Agostinho
  { tribunal: "TJPE", data: "2027-06-13", motivo: "Dia do Padroeiro Santo Antônio", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Cabo de Santo Agostinho"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-07-09", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Cabo de Santo Agostinho"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-10-31", motivo: "Dia da Reforma Protestante e Ação de Graças", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Cabo de Santo Agostinho"], municipal: true, lei: "" },
  // Cabrobó
  { tribunal: "TJPE", data: "2027-09-11", motivo: "Data da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Cabrobó"], municipal: true, lei: "" },
  // Cachoeirinha
  { tribunal: "TJPE", data: "2027-06-13", motivo: "Dia do Padroeiro Santo Antônio", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Cachoeirinha"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-12-17", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Cachoeirinha"], municipal: true, lei: "" },
  // Caetés
  { tribunal: "TJPE", data: "2027-08-07", motivo: "Dia do Padroeiro São Caetano", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Caetés"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-13", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Caetés"], municipal: true, lei: "" },
  // Calçado
  { tribunal: "TJPE", data: "2027-02-11", motivo: "Dia da Padroeira Nossa Senhora de Lourdes", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Calçado"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-06-10", motivo: "Dia do Padroeiro Consagrado Coração de Jesus", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Calçado"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-28", motivo: "Festival da Lavoura", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Calçado"], municipal: true, lei: "" },
  // Camaragibe
  { tribunal: "TJPE", data: "2027-05-13", motivo: "Dia da Emancipação Política do Município", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Camaragibe"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-06-10", motivo: "Dia do Padroeiro de Camaragibe – Sagrado Coração de Jesus", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Camaragibe"], municipal: true, lei: "" },
  // Camocim de São Félix
  { tribunal: "TJPE", data: "2027-05-18", motivo: "Dia de São Felix", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Camocim de São Félix"], municipal: true, lei: "" },
  // Canhotinho
  { tribunal: "TJPE", data: "2027-02-02", motivo: "Dia do Padroeiro São Sebastião", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Canhotinho"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-10-02", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Canhotinho"], municipal: true, lei: "" },
  // Capoeiras
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Capoeiras"], municipal: true, lei: "" },
  // Carnaíba
  { tribunal: "TJPE", data: "2027-06-13", motivo: "Dia do Padroeiro da Paróquia Santo Antônio", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Carnaíba"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-08-04", motivo: "Dia do Padroeiro São João Maria Vianey", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Carnaíba"], municipal: true, lei: "" },
  // Carpina
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Carpina"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Carpina"], municipal: true, lei: "" },
  // Caruaru
  { tribunal: "TJPE", data: "2027-05-18", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Caruaru"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-15", motivo: "Dia de Nossa Senhora das Dores", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Caruaru"], municipal: true, lei: "" },
  // Catende
  { tribunal: "TJPE", data: "2027-07-26", motivo: "Padroeira do Município Santana", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Catende"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Catende"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-19", motivo: "Dia do Comerciário", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Catende"], municipal: true, lei: "" },
  // Chã Grande
  { tribunal: "TJPE", data: "2027-03-15", motivo: "Data da Instalação Oficial do Município", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Chã Grande"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia de São José - Padroeiro do Município", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Chã Grande"], municipal: true, lei: "" },
  // Condado
  { tribunal: "TJPE", data: "2027-09-15", motivo: "Dia da Padroeira Nossa Senhora das Dores", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Condado"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-11-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Condado"], municipal: true, lei: "" },
  // Correntes
  { tribunal: "TJPE", data: "2027-08-27", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Correntes"], municipal: true, lei: "" },
  // Cortês
  { tribunal: "TJPE", data: "2027-10-04", motivo: "Dia do Padroeiro São Francisco de Assis", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Cortês"], municipal: true, lei: "" },
  // Cumaru
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia de São José", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Cumaru"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-10-01", motivo: "Dia da Padroeira Santa Terezinha", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Cumaru"], municipal: true, lei: "" },
  // Custódia
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Custódia"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-01", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Custódia"], municipal: true, lei: "" },
  // Escada
  { tribunal: "TJPE", data: "2027-05-24", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Escada"], municipal: true, lei: "" },
  // Exu
  { tribunal: "TJPE", data: "2027-01-14", motivo: "Dia do Padroeiro da Cidade - Bom Jesus dos Aflitos", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Exu"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-08-02", motivo: "Aniversário de Morte de Luiz Gonzaga", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Exu"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-08", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Exu"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-10-31", motivo: "Dia do Evangélico", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Exu"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-12-13", motivo: "Aniversário de Nascimento de Luiz Gonzaga", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Exu"], municipal: true, lei: "" },
  // Feira Nova
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Feira Nova"], municipal: true, lei: "" },
  // Fernando de Noronha
  { tribunal: "TJPE", data: "2027-08-29", motivo: "Dia da Padroeira Nossa Senhora dos Remédios", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Fernando de Noronha"], municipal: true, lei: "" },
  // Flores
  { tribunal: "TJPE", data: "2027-09-11", motivo: "Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Flores"], municipal: true, lei: "" },
  // Floresta
  { tribunal: "TJPE", data: "2027-03-31", motivo: "Dia da Emancipação do Município de Floresta", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Floresta"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-06-20", motivo: "Dia do Aniversário da Cidade", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Floresta"], municipal: true, lei: "" },
  // Gameleira
  { tribunal: "TJPE", data: "2027-04-10", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Gameleira"], municipal: true, lei: "" },
  // Garanhuns
  { tribunal: "TJPE", data: "2027-02-04", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Garanhuns"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-06-13", motivo: "Dia do Padroeiro Santo Antônio", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Garanhuns"], municipal: true, lei: "" },
  // Glória do Goitá
  { tribunal: "TJPE", data: "2027-07-09", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Glória do Goitá"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-08-15", motivo: "Dia da Padroeira Nossa Senhora da Glória", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Glória do Goitá"], municipal: true, lei: "" },
  // Goiana
  { tribunal: "TJPE", data: "2027-10-27", motivo: "Dia dos Padroeiros Santos Cosme e Damião", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Goiana"], municipal: true, lei: "" },
  // Gravatá
  { tribunal: "TJPE", data: "2027-01-15", motivo: "Dia da Festa de Reis", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Gravatá"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-03-15", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Gravatá"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-07-26", motivo: "Dia de Nossa Senhora Sant’ Ana", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Gravatá"], municipal: true, lei: "" },
  // Iati
  { tribunal: "TJPE", data: "2027-01-25", motivo: "Dia do Padroeiro São Paulo", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Iati"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-08-14", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Iati"], municipal: true, lei: "" },
  // Ibimirim
  { tribunal: "TJPE", data: "2027-06-13", motivo: "Dia do Padroeiro Santo Antônio", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Ibimirim"], municipal: true, lei: "" },
  // Ibirajuba
  { tribunal: "TJPE", data: "2027-05-15", motivo: "Dia do Padroeiro Santo Izídio", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Ibirajuba"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-10-04", motivo: "Dia do Padroeiro São Francisco de Assis", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Ibirajuba"], municipal: true, lei: "" },
  // Igarassu
  { tribunal: "TJPE", data: "2027-09-27", motivo: "Dia dos Padroeiros Santo Cosme e Damião", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Igarassu"], municipal: true, lei: "" },
  // Ilha de Itamaracá
  { tribunal: "TJPE", data: "2027-02-02", motivo: "Dia da Padroeira Nossa Senhora do Pilar", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Ilha de Itamaracá"], municipal: true, lei: "" },
  // Inajá
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia do Padroeiro do Distrito de Caraibeiro São José", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Inajá"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-06-13", motivo: "Dia do Padroeiro Santo Antônio", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Inajá"], municipal: true, lei: "" },
  // Ipojuca
  { tribunal: "TJPE", data: "2027-03-30", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Ipojuca"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-29", motivo: "Dia do Padroeiro São Miguel", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Ipojuca"], municipal: true, lei: "" },
  // Ipubi
  { tribunal: "TJPE", data: "2027-03-02", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Ipubi"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-08-15", motivo: "Dia da Padroeira Nossa Senhora do Perpétuo Socorro", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Ipubi"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-10-31", motivo: "Dia do Evangelho", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Ipubi"], municipal: true, lei: "" },
  // Itambé
  { tribunal: "TJPE", data: "2027-02-02", motivo: "Dia da Padroeira Nossa Senhora do Desterro, Padroeira do Município e Patronesse da Paróquia", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Itambé"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-08-03", motivo: "Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Itambé"], municipal: true, lei: "" },
  // Itapissuma
  { tribunal: "TJPE", data: "2027-01-10", motivo: "Padroeiro São Gonçalo do Amarante", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Itapissuma"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-05-15", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Itapissuma"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-10-31", motivo: "Dia da Consciência Evangélica", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Itapissuma"], municipal: true, lei: "" },
  // Itaquitinga
  { tribunal: "TJPE", data: "2027-01-20", motivo: "Festa do Padroeiro São Sebastião", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Itaquitinga"], municipal: true, lei: "" },
  // Itaíba
  { tribunal: "TJPE", data: "2027-04-28", motivo: "Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Itaíba"], municipal: true, lei: "" },
  // Jaboatão dos Guararapes
  { tribunal: "TJPE", data: "2027-01-15", motivo: "Dia de Santo Amaro", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Jaboatão dos Guararapes"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-05-04", motivo: "Data da Fundação do Município", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Jaboatão dos Guararapes"], municipal: true, lei: "" },
  // Jataúba
  { tribunal: "TJPE", data: "2027-01-20", motivo: "Dia do Padroeiro São Sebastião", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Jataúba"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-03-02", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Jataúba"], municipal: true, lei: "" },
  // Joaquim Nabuco
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Joaquim Nabuco"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-06-04", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Joaquim Nabuco"], municipal: true, lei: "" },
  // João Alfredo
  { tribunal: "TJPE", data: "2027-10-10", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["João Alfredo"], municipal: true, lei: "" },
  // Jupi
  { tribunal: "TJPE", data: "2027-03-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Jupi"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-10-07", motivo: "Dia da Padroeira Nossa Senhora do Rosário", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Jupi"], municipal: true, lei: "" },
  // Jurema
  { tribunal: "TJPE", data: "2027-09-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Jurema"], municipal: true, lei: "" },
  // Lagoa Grande
  { tribunal: "TJPE", data: "2027-05-24", motivo: "Dia da Padroeira Nossa Senhora Auxiliadora", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Lagoa Grande"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-06-16", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Lagoa Grande"], municipal: true, lei: "" },
  // Lagoa de Itaenga
  { tribunal: "TJPE", data: "2027-01-20", motivo: "Dia do Padroeiro São Sebastião", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Lagoa de Itaenga"], municipal: true, lei: "" },
  // Lagoa dos Gatos
  { tribunal: "TJPE", data: "2027-01-20", motivo: "Dia do Padroeiro São Sebastião", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Lagoa dos Gatos"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Lagoa dos Gatos"], municipal: true, lei: "" },
  // Lajedo
  { tribunal: "TJPE", data: "2027-05-19", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Lajedo"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-06-13", motivo: "Dia do Padroeiro Santo Antônio", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Lajedo"], municipal: true, lei: "" },
  // Limoeiro
  { tribunal: "TJPE", data: "2027-01-26", motivo: "Dia do Padroeiro São Sebastião", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Limoeiro"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-04-06", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Limoeiro"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-07-27", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Limoeiro"], municipal: true, lei: "" },
  // Maraial
  { tribunal: "TJPE", data: "2027-02-02", motivo: "Dia da Fundação Paroquial em Maraial", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Maraial"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Maraial"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-15", motivo: "Dia da Padroeira Nossa Senhora das Dores", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Maraial"], municipal: true, lei: "" },
  // Mirandiba
  { tribunal: "TJPE", data: "2027-01-28", motivo: "Dia de Emancipação do Município", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Mirandiba"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-03-11", motivo: "Dia da Emancipação política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Mirandiba"], municipal: true, lei: "" },
  // Moreilândia
  { tribunal: "TJPE", data: "2027-05-19", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Moreilândia"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-17", motivo: "Dia da Padroeira Santa Terezinha", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Moreilândia"], municipal: true, lei: "" },
  // Moreno
  { tribunal: "TJPE", data: "2027-01-20", motivo: "Dia do Padroeiro São Sebastião", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Moreno"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Moreno"], municipal: true, lei: "" },
  // Nazaré da Mata
  { tribunal: "TJPE", data: "2027-05-17", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Nazaré da Mata"], municipal: true, lei: "" },
  // Olinda
  { tribunal: "TJPE", data: "2027-03-12", motivo: "Dia da fundação da cidade", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Olinda"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-08-06", motivo: "Dia do Padroeiro São Salvador do Mundo", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Olinda"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-11-10", motivo: "1º Grito de República no Brasil", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Olinda"], municipal: true, lei: "" },
  // Orobó
  { tribunal: "TJPE", data: "2027-09-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Orobó"], municipal: true, lei: "" },
  // Orocó
  { tribunal: "TJPE", data: "2027-01-20", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Orocó"], municipal: true, lei: "" },
  // Ouricuri
  { tribunal: "TJPE", data: "2027-01-20", motivo: "Dia do Padroeiro São Sebastião", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Ouricuri"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-02-03", motivo: "Dia do Padroeiro São Braz", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Ouricuri"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-05-14", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Ouricuri"], municipal: true, lei: "" },
  // Palmares
  { tribunal: "TJPE", data: "2027-06-09", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Palmares"], municipal: true, lei: "" },
  // Panelas
  { tribunal: "TJPE", data: "2027-05-02", motivo: "Festival de Jericos", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Panelas"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-05-18", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Panelas"], municipal: true, lei: "" },
  // Parnamirim
  { tribunal: "TJPE", data: "2027-05-13", motivo: "Dia de Nossa Senhora de Fátima (Padroeira do Santuário da COHAB)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Parnamirim"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-07-01", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Parnamirim"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-07-26", motivo: "Dia da Padroeira do Município Sant’Ana", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Parnamirim"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-10-08", motivo: "Aniversário de Morte dos Cabral", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Parnamirim"], municipal: true, lei: "" },
  // Passira
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Passira"], municipal: true, lei: "" },
  // Paudalho
  { tribunal: "TJPE", data: "2027-07-27", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Paudalho"], municipal: true, lei: "" },
  // Paulista
  { tribunal: "TJPE", data: "2027-09-04", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Paulista"], municipal: true, lei: "" },
  // Pedra
  { tribunal: "TJPE", data: "2027-05-13", motivo: "Dia da Instalação da Câmara Municipal", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Pedra"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-06-04", motivo: "Dia de Homenagem Póstuma ao \"Seu É\"", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Pedra"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-08-17", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Pedra"], municipal: true, lei: "" },
  // Pesqueira
  { tribunal: "TJPE", data: "2027-02-05", motivo: "Dia da Padroeira Santa Águeda", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Pesqueira"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-04-20", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Pesqueira"], municipal: true, lei: "" },
  // Petrolina
  { tribunal: "TJPE", data: "2027-08-15", motivo: "Dia da Padroeira Nossa Senhora Rainha dos Anjos", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Petrolina"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-21", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Petrolina"], municipal: true, lei: "" },
  // Petrolândia
  { tribunal: "TJPE", data: "2027-07-01", motivo: "Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Petrolândia"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-10-04", motivo: "Dia do Padroeiro São Francisco de Assis", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Petrolândia"], municipal: true, lei: "" },
  // Pombos
  { tribunal: "TJPE", data: "2027-01-18", motivo: "Dia da Padroeira Nossa Senhora dos Impossíveis", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Pombos"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-08-15", motivo: "Dia Consagrado à Assunção de Nossa Senhora", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Pombos"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-12-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Pombos"], municipal: true, lei: "" },
  // Poção
  { tribunal: "TJPE", data: "2027-09-15", motivo: "Dia da Padroeira Nossa Senhora das Dores", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Poção"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-11-13", motivo: "Homenagem ao Frei Henrique Broker", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Poção"], municipal: true, lei: "" },
  // Primavera
  { tribunal: "TJPE", data: "2027-06-13", motivo: "- Dia do Padroeiro Santo Antônio", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Primavera"], municipal: true, lei: "" },
  // Quipapá
  { tribunal: "TJPE", data: "2027-05-19", motivo: "Dia da Emancipação Política.", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Quipapá"], municipal: true, lei: "" },
  // Riacho das Almas
  { tribunal: "TJPE", data: "2027-01-20", motivo: "Dia do padroeiro da cidade, São Sebastião", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Riacho das Almas"], municipal: true, lei: "" },
  // Ribeirão
  { tribunal: "TJPE", data: "2027-07-26", motivo: "Dia da Padroeira Santa Ana", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Ribeirão"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Ribeirão"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-10-31", motivo: "Dia de Ação de Graças e Reforma Protestante", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Ribeirão"], municipal: true, lei: "" },
  // Rio Formoso
  { tribunal: "TJPE", data: "2027-02-07", motivo: "Dia da Batalha do Reduto", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Rio Formoso"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Rio Formoso"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-06-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Rio Formoso"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-11-24", motivo: "Dia Municipal da Consciência Evangélica", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Rio Formoso"], municipal: true, lei: "" },
  // Sairé
  { tribunal: "TJPE", data: "2027-05-06", motivo: "Dia da Pedra Fundamental da Igreja de São Miguel", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Sairé"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-29", motivo: "Dia do Padroeiro São Miguel de Arcanjo", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Sairé"], municipal: true, lei: "" },
  // Salgueiro
  { tribunal: "TJPE", data: "2027-04-30", motivo: "Data da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Salgueiro"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-06-13", motivo: "Dia do Padroeiro Santo Antônio", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Salgueiro"], municipal: true, lei: "" },
  // Saloá
  { tribunal: "TJPE", data: "2027-09-27", motivo: "Dia do Padroeiro São Vicente", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Saloá"], municipal: true, lei: "" },
  // Sanharó
  { tribunal: "TJPE", data: "2027-01-20", motivo: "Dedicado ao co-Padroeiro São Sebastião", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Sanharó"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-10-20", motivo: "Dedicado ao Padroeiro Sagrado Coração de Jesus", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Sanharó"], municipal: true, lei: "" },
  // Santa Cruz do Capibaribe
  { tribunal: "TJPE", data: "2027-09-29", motivo: "Dia do Padroeiro São Miguel", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Santa Cruz do Capibaribe"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-10-05", motivo: "Dia da morte do Padre Zuzinha", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Santa Cruz do Capibaribe"], municipal: true, lei: "" },
  // Santa Maria da Boa Vista
  { tribunal: "TJPE", data: "2027-06-07", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Santa Maria da Boa Vista"], municipal: true, lei: "" },
  // Santa Maria do Cambucá
  { tribunal: "TJPE", data: "2027-10-07", motivo: "Festa da Padroeira Nossa Senhora do Rosário", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Santa Maria do Cambucá"], municipal: true, lei: "" },
  // Serra Talhada
  { tribunal: "TJPE", data: "2027-05-06", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Serra Talhada"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-08", motivo: "Dia da Padroeira Nossa Senhora da Penha", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Serra Talhada"], municipal: true, lei: "" },
  // Serrita
  { tribunal: "TJPE", data: "2027-09-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Serrita"], municipal: true, lei: "" },
  // Sertânia
  { tribunal: "TJPE", data: "2027-05-24", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Sertânia"], municipal: true, lei: "" },
  // Sirinhaém
  { tribunal: "TJPE", data: "2027-01-15", motivo: "Dia do Padroeiro Santo Amaro", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Sirinhaém"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-06-12", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Sirinhaém"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-08-16", motivo: "Dia do Padroeiro São Roque", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Sirinhaém"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-10-31", motivo: "Dia da Consciência Evangélica", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Sirinhaém"], municipal: true, lei: "" },
  // Surubim
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Surubim"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Surubim"], municipal: true, lei: "" },
  // São Bento do Una
  { tribunal: "TJPE", data: "2027-01-07", motivo: "Dia do Padroeiro Bom Jesus dos Pobres Aflitos", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["São Bento do Una"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-04-30", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["São Bento do Una"], municipal: true, lei: "" },
  // São Caetano
  { tribunal: "TJPE", data: "2027-08-07", motivo: "Dia do Padroeiro", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["São Caetano"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["São Caetano"], municipal: true, lei: "" },
  // São Joaquim do Monte
  { tribunal: "TJPE", data: "2027-07-26", motivo: "Dia do Padroeiro São Joaquim", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["São Joaquim do Monte"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["São Joaquim do Monte"], municipal: true, lei: "" },
  // São José da Coroa Grande
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["São José da Coroa Grande"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-04-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["São José da Coroa Grande"], municipal: true, lei: "" },
  // São José do Belmonte
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["São José do Belmonte"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-15", motivo: "Dia da Padroeira da Vila Delmiro, Nossa Senhora das Dores", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["São José do Belmonte"], municipal: true, lei: "" },
  // São José do Egito
  { tribunal: "TJPE", data: "2027-03-09", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["São José do Egito"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["São José do Egito"], municipal: true, lei: "" },
  // São João
  { tribunal: "TJPE", data: "2027-11-25", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["São João"], municipal: true, lei: "" },
  // São Lourenço da Mata
  { tribunal: "TJPE", data: "2027-01-10", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["São Lourenço da Mata"], municipal: true, lei: "" },
  // São Vicente Férrer
  { tribunal: "TJPE", data: "2027-02-02", motivo: "Dia de Nossa Senhora do Rosário", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["São Vicente Férrer"], municipal: true, lei: "" },
  // Tabira
  { tribunal: "TJPE", data: "2027-05-27", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Tabira"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-08-15", motivo: "Dia da Padroeira Nossa Senhora dos Remédios", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Tabira"], municipal: true, lei: "" },
  // Tacaimbó
  { tribunal: "TJPE", data: "2027-06-13", motivo: "Dia do Padroeiro Santo Antônio", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Tacaimbó"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-10-31", motivo: "Dia da Reforma Protestante", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Tacaimbó"], municipal: true, lei: "" },
  // Tacaratu
  { tribunal: "TJPE", data: "2027-02-02", motivo: "Dia da Padroeira Nossa Senhora da Saúde", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Tacaratu"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-05-03", motivo: "Dia da Santa Cruz", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Tacaratu"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-05-13", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Tacaratu"], municipal: true, lei: "" },
  // Tamandaré
  { tribunal: "TJPE", data: "2027-07-19", motivo: "Dia da Solidariedade", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Tamandaré"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-07-31", motivo: "Dia de Santo Ignácio de Loyola", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Tamandaré"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-28", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Tamandaré"], municipal: true, lei: "" },
  // Taquaritinga do Norte
  { tribunal: "TJPE", data: "2027-01-15", motivo: "Dia do Padroeiro Santo Amaro", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Taquaritinga do Norte"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Taquaritinga do Norte"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-05-10", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Taquaritinga do Norte"], municipal: true, lei: "" },
  // Terra Nova
  { tribunal: "TJPE", data: "2027-01-20", motivo: "Dia do Padroeiro São Sebastião", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Terra Nova"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-03-01", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Terra Nova"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-15", motivo: "Dia da Padroeira Nossa Senhora do Perpétuo Socorro", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Terra Nova"], municipal: true, lei: "" },
  // Timbaúba
  { tribunal: "TJPE", data: "2027-04-08", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Timbaúba"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-15", motivo: "Dia da Padroeira Nossa Senhora das Dores", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Timbaúba"], municipal: true, lei: "" },
  // Toritama
  { tribunal: "TJPE", data: "2027-02-02", motivo: "Dia de Nossa Senhora do Perpétuo Socorro", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Toritama"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-03-17", motivo: "Dia da Retratação Política de José Manoel da Silva", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Toritama"], municipal: true, lei: "" },
  // Tracunhaém
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia do Artesão", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Tracunhaém"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-06-13", motivo: "Festa do Padroeiro Santo Antônio", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Tracunhaém"], municipal: true, lei: "" },
  // Trindade
  { tribunal: "TJPE", data: "2027-09-29", motivo: "Dia da Padroeira Santíssima Trindade", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Trindade"], municipal: true, lei: "" },
  // Triunfo
  { tribunal: "TJPE", data: "2027-06-13", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Triunfo"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-15", motivo: "Dia da Padroeira Nossa Senhora das Dores", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Triunfo"], municipal: true, lei: "" },
  // Tuparetama
  { tribunal: "TJPE", data: "2027-04-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Tuparetama"], municipal: true, lei: "" },
  // Venturosa
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia do Padroeiro São José", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Venturosa"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-03-30", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Venturosa"], municipal: true, lei: "" },
  // Verdejante
  { tribunal: "TJPE", data: "2027-08-04", motivo: "Dia da Morte de Joaquim Tavares de Sá (Filho Ilustre da terra)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Verdejante"], municipal: true, lei: "" },
  // Vertentes
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Festa do Padroeiro São José", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Vertentes"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-08-15", motivo: "Ascensão de Nossa Senhora", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Vertentes"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Vertentes"], municipal: true, lei: "" },
  // Vicência
  { tribunal: "TJPE", data: "2027-07-26", motivo: "Dia da Padroeira Santa Ana", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Vicência"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-09-11", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Vicência"], municipal: true, lei: "" },
  // Vitória de Santo Antão
  { tribunal: "TJPE", data: "2027-01-17", motivo: "Dia de Santo Antão (terça-feira)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Vitória de Santo Antão"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-05-06", motivo: "Dia da Emancipação Política (sábado)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Vitória de Santo Antão"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-08-03", motivo: "Batalha das Tabocas (quinta-feira)", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Vitória de Santo Antão"], municipal: true, lei: "" },
  // Água Preta
  { tribunal: "TJPE", data: "2027-03-19", motivo: "Dia do Padroeiro São José da Agonia", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Água Preta"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-08-03", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Água Preta"], municipal: true, lei: "" },
  // Águas Belas
  { tribunal: "TJPE", data: "2027-01-20", motivo: "Dia de Mártir São Sebastião", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Águas Belas"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-04-19", motivo: "Dia do Índio", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Águas Belas"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-05-24", motivo: "Dia da Elevação à Categoria de Cidade", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Águas Belas"], municipal: true, lei: "" },
  { tribunal: "TJPE", data: "2027-06-13", motivo: "Dia da Emancipação Política", ato: "Ato nº 1502/2026 do TJPE", dispositivo: "art. 5º", abrangencia: "local", sede: false, comarcas: ["Águas Belas"], municipal: true, lei: "" },
  // ===== DEMAIS TRIBUNAIS (início) =====
  // STF: Portaria nº 189/2025 da Diretoria-Geral do STF
  //   Fonte: https://atosnormativos.stf.jus.br/visualizador/4rgBq5kBmFdZiXoIf1Wi
  //   Nota: Pontos facultativos do § 1º tratados como dia útil com alerta: o § 2º condiciona o ponto facultativo dos servidores e o ato não suspende o expediente forense.
  { tribunal: "STF", data: "2026-01-01", motivo: "Confraternização Universal", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, I", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2026-02-16", motivo: "Carnaval", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, II", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2026-02-17", motivo: "Carnaval", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, II", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2026-02-18", motivo: "Ponto facultativo até as 14h (Quarta-Feira de Cinzas)", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, § 1º, I", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "STF", data: "2026-04-01", motivo: "Semana Santa", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, III", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2026-04-02", motivo: "Semana Santa", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, III", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2026-04-03", motivo: "Semana Santa", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, III", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2026-04-20", motivo: "Ponto facultativo", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, § 1º, II", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "STF", data: "2026-04-21", motivo: "Tiradentes", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, IV", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, V", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2026-06-04", motivo: "Ponto facultativo (Corpus Christi)", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, § 1º, III", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "STF", data: "2026-06-05", motivo: "Ponto facultativo", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, § 1º, IV", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "STF", data: "2026-08-10", motivo: "Ponto facultativo", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, § 1º, V", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "STF", data: "2026-08-11", motivo: "Criação dos cursos jurídicos", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, VI", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, VII", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, VIII", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2026-10-30", motivo: "Ponto facultativo (Dia do Servidor Público, transferido)", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, § 1º, VI", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "STF", data: "2026-11-02", motivo: "Finados", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, IX", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, X", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2026-12-07", motivo: "Ponto facultativo", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, § 1º, VII", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "STF", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, XI", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2026-12-25", motivo: "Natal", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, XII", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2027-01-01", motivo: "Confraternização Universal", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, XIII", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2027-02-08", motivo: "Carnaval", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, XIV", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2027-02-09", motivo: "Carnaval", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, XIV", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2027-02-10", motivo: "Ponto facultativo até as 14h (Quarta-Feira de Cinzas)", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, § 1º, VIII", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "STF", data: "2027-03-24", motivo: "Semana Santa", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, XV", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2027-03-25", motivo: "Semana Santa", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, XV", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2027-03-26", motivo: "Semana Santa", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, XV", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2027-04-21", motivo: "Tiradentes", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, XVI", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2027-05-27", motivo: "Ponto facultativo (Corpus Christi)", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, § 1º, IX", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "STF", data: "2027-05-28", motivo: "Ponto facultativo", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, § 1º, X", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "STF", data: "2027-08-11", motivo: "Criação dos cursos jurídicos", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, XVII", abrangencia: "tribunal" },
  { tribunal: "STF", data: "2027-09-06", motivo: "Ponto facultativo", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, § 1º, XI", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "STF", data: "2027-09-07", motivo: "Independência do Brasil", ato: "Portaria nº 189/2025 da Diretoria-Geral do STF", dispositivo: "art. 1º, XVIII", abrangencia: "tribunal" },
  // STJ: Calendário oficial do STJ de 2026
  //   Fonte: https://www.stj.jus.br/sites/portalp/SiteAssets/midias/Calendario_STJ_2026.pdf
  //   Nota: Datas de 2026 conferidas com o calendário oficial do STJ em 08/10/2026.
  //   Nota: Suspensão de 20/12/2025 a 01/02/2026: Portaria STJ/GP nº 887/2025, art. 1º (a parte até 20/01 já é coberta pelo art. 220 do CPC).
  //   Nota: Suspensão de 02 a 31/07/2026: Portaria STJ/GP nº 455/2026, art. 1º (DJe do STJ, edição nº 4335, publicada em 30/06/2026). Conferido em 08/10/2026.
  //   Nota: 01/11/2026 é domingo.
  { tribunal: "STJ", data: "2026-01-21", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 887/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-01-22", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 887/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-01-23", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 887/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-01-24", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 887/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-01-25", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 887/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-01-26", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 887/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-01-27", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 887/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-01-28", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 887/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-01-29", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 887/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-01-30", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 887/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-01-31", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 887/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-02-16", motivo: "Carnaval", ato: "Calendário oficial do STJ de 2026", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-02-17", motivo: "Carnaval", ato: "Calendário oficial do STJ de 2026", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-04-01", motivo: "Semana Santa", ato: "Calendário oficial do STJ de 2026", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-04-02", motivo: "Semana Santa", ato: "Calendário oficial do STJ de 2026", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-04-03", motivo: "Semana Santa", ato: "Calendário oficial do STJ de 2026", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-04-21", motivo: "Tiradentes", ato: "Calendário oficial do STJ de 2026", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Calendário oficial do STJ de 2026", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-06-04", motivo: "Corpus Christi", ato: "Calendário oficial do STJ de 2026", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-02", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-03", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-04", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-05", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-06", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-07", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-08", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-09", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-10", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-11", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-12", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-13", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-14", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-15", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-16", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-17", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-18", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-19", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-20", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-21", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-22", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-23", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-24", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-25", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-26", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-27", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-28", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-29", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-30", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-07-31", motivo: "Suspensão de prazos processuais (férias forenses)", ato: "Portaria STJ/GP nº 455/2026", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-08-11", motivo: "Criação dos primeiros cursos jurídicos do Brasil", ato: "Calendário oficial do STJ de 2026", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Calendário oficial do STJ de 2026", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Calendário oficial do STJ de 2026", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-11-02", motivo: "Finados", ato: "Calendário oficial do STJ de 2026", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Calendário oficial do STJ de 2026", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Calendário oficial do STJ de 2026", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2027-02-08", motivo: "Carnaval", ato: "Calendário oficial do STJ de 2027", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2027-02-09", motivo: "Carnaval", ato: "Calendário oficial do STJ de 2027", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2027-03-24", motivo: "Semana Santa", ato: "Calendário oficial do STJ de 2027", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2027-03-25", motivo: "Semana Santa", ato: "Calendário oficial do STJ de 2027", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2027-03-26", motivo: "Semana Santa", ato: "Calendário oficial do STJ de 2027", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2027-04-21", motivo: "Tiradentes", ato: "Calendário oficial do STJ de 2027", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2027-05-27", motivo: "Corpus Christi", ato: "Calendário oficial do STJ de 2027", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2027-08-11", motivo: "Criação dos primeiros cursos jurídicos do Brasil", ato: "Calendário oficial do STJ de 2027", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2027-09-07", motivo: "Independência do Brasil", ato: "Calendário oficial do STJ de 2027", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2027-10-12", motivo: "Nossa Senhora Aparecida", ato: "Calendário oficial do STJ de 2027", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2027-11-01", motivo: "Feriado regimental (art. 81, § 2º, IV, do RISTJ)", ato: "Calendário oficial do STJ de 2027", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2027-11-02", motivo: "Finados", ato: "Calendário oficial do STJ de 2027", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2027-11-15", motivo: "Proclamação da República", ato: "Calendário oficial do STJ de 2027", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "STJ", data: "2027-12-08", motivo: "Dia da Justiça", ato: "Calendário oficial do STJ de 2027", dispositivo: "", abrangencia: "tribunal" },
  // TJAC: Portaria nº 6569/2025 da Presidência do TJAC
  //   Fonte: https://webdev.tjac.jus.br/wp-content/uploads/2025/12/Portaria_PRESI_TJAC_6569_2025.pdf
  //   Nota: Feriados municipais (art. 2º) não cadastrados nesta etapa.
  //   Nota: Pontos facultativos estaduais incluídos como dias sem expediente, conforme o calendário de "feriados, pontos facultativos e suspensão de expediente" do art. 1º.
  { tribunal: "TJAC", data: "2026-01-22", motivo: "Dia do Católico (transferido de 20/01)", ato: "Portaria nº 6569/2025 da Presidência do TJAC", dispositivo: "art. 1º e calendário anexo", abrangencia: "tribunal" },
  { tribunal: "TJAC", data: "2026-01-23", motivo: "Dia do Evangélico", ato: "Portaria nº 6569/2025 da Presidência do TJAC", dispositivo: "art. 1º e calendário anexo", abrangencia: "tribunal" },
  { tribunal: "TJAC", data: "2026-02-16", motivo: "Carnaval", ato: "Portaria nº 6569/2025 da Presidência do TJAC", dispositivo: "art. 1º e calendário anexo", abrangencia: "tribunal" },
  { tribunal: "TJAC", data: "2026-02-17", motivo: "Carnaval", ato: "Portaria nº 6569/2025 da Presidência do TJAC", dispositivo: "art. 1º e calendário anexo", abrangencia: "tribunal" },
  { tribunal: "TJAC", data: "2026-02-18", motivo: "Quarta-feira de Cinzas", ato: "Portaria nº 6569/2025 da Presidência do TJAC", dispositivo: "art. 1º e calendário anexo", abrangencia: "tribunal" },
  { tribunal: "TJAC", data: "2026-04-02", motivo: "Quinta-feira Santa", ato: "Portaria nº 6569/2025 da Presidência do TJAC", dispositivo: "art. 1º e calendário anexo", abrangencia: "tribunal" },
  { tribunal: "TJAC", data: "2026-04-03", motivo: "Sexta-feira da Paixão", ato: "Portaria nº 6569/2025 da Presidência do TJAC", dispositivo: "art. 1º e calendário anexo", abrangencia: "tribunal" },
  { tribunal: "TJAC", data: "2026-04-21", motivo: "Tiradentes", ato: "Portaria nº 6569/2025 da Presidência do TJAC", dispositivo: "art. 1º e calendário anexo", abrangencia: "tribunal" },
  { tribunal: "TJAC", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Portaria nº 6569/2025 da Presidência do TJAC", dispositivo: "art. 1º e calendário anexo", abrangencia: "tribunal" },
  { tribunal: "TJAC", data: "2026-06-04", motivo: "Corpus Christi (ponto facultativo estadual)", ato: "Portaria nº 6569/2025 da Presidência do TJAC", dispositivo: "art. 1º e calendário anexo", abrangencia: "tribunal" },
  { tribunal: "TJAC", data: "2026-06-15", motivo: "Aniversário do Estado do Acre", ato: "Portaria nº 6569/2025 da Presidência do TJAC", dispositivo: "art. 1º e calendário anexo", abrangencia: "tribunal" },
  { tribunal: "TJAC", data: "2026-08-06", motivo: "Início da Revolução Acreana (ponto facultativo estadual)", ato: "Portaria nº 6569/2025 da Presidência do TJAC", dispositivo: "art. 1º e calendário anexo", abrangencia: "tribunal" },
  { tribunal: "TJAC", data: "2026-08-11", motivo: "Dia do Advogado", ato: "Portaria nº 6569/2025 da Presidência do TJAC", dispositivo: "art. 1º e calendário anexo", abrangencia: "tribunal" },
  { tribunal: "TJAC", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Portaria nº 6569/2025 da Presidência do TJAC", dispositivo: "art. 1º e calendário anexo", abrangencia: "tribunal" },
  { tribunal: "TJAC", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Portaria nº 6569/2025 da Presidência do TJAC", dispositivo: "art. 1º e calendário anexo", abrangencia: "tribunal" },
  { tribunal: "TJAC", data: "2026-10-30", motivo: "Dia do Servidor Público (transferido de 28/10)", ato: "Portaria nº 6569/2025 da Presidência do TJAC", dispositivo: "art. 1º e calendário anexo", abrangencia: "tribunal" },
  { tribunal: "TJAC", data: "2026-11-02", motivo: "Finados", ato: "Portaria nº 6569/2025 da Presidência do TJAC", dispositivo: "art. 1º e calendário anexo", abrangencia: "tribunal" },
  { tribunal: "TJAC", data: "2026-11-19", motivo: "Tratado de Petrópolis (transferido de 17/11)", ato: "Portaria nº 6569/2025 da Presidência do TJAC", dispositivo: "art. 1º e calendário anexo", abrangencia: "tribunal" },
  { tribunal: "TJAC", data: "2026-11-20", motivo: "Dia da Consciência Negra", ato: "Portaria nº 6569/2025 da Presidência do TJAC", dispositivo: "art. 1º e calendário anexo", abrangencia: "tribunal" },
  { tribunal: "TJAC", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Portaria nº 6569/2025 da Presidência do TJAC", dispositivo: "art. 1º e calendário anexo", abrangencia: "tribunal" },
  // TJAL: Lei Estadual nº 6.564/2005 (COJ), arts. 36 e 37; Atos Normativos nº 03/2026 e 09/2026 do TJAL; Decreto Estadual nº 106.093/2025
  //   Fonte: https://www.tjal.jus.br/legislacao-e-normas (base de atos normativos do TJAL). Conferido em 08/10/2026.
  //   Nota: Pontos facultativos do Executivo não suspendem as atividades do TJAL sem ato da Presidência (COJ, art. 38, parágrafo único).
  //   Nota: 04/06 (Corpus Christi): o Ato Normativo nº 03/2026, art. 2º, refere o feriado, mas nenhum ato declara a suspensão nesse dia; cadastrado como parcial.
  //   Nota: 28/08 (Ato Normativo nº 03/2026, art. 4º) vale só nos municípios com feriado de Nossa Senhora dos Prazeres; não cadastrado (ver alerta).
  //   Nota: Recesso junino de 22 a 30/06 (Ato Normativo nº 09/2026); retorno das atividades em 01/07.
  { tribunal: "TJAL", data: "2026-02-16", motivo: "Carnaval", ato: "Lei Estadual nº 6.564/2005 de AL (COJ)", dispositivo: "art. 36, III", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-02-17", motivo: "Carnaval", ato: "Lei Estadual nº 6.564/2005 de AL (COJ)", dispositivo: "art. 36, III", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-02-18", motivo: "Quarta-feira de Cinzas", ato: "Lei Estadual nº 6.564/2005 de AL (COJ)", dispositivo: "art. 36, III", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-04-01", motivo: "Semana Santa", ato: "Lei Estadual nº 6.564/2005 de AL (COJ)", dispositivo: "art. 36, I", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-04-02", motivo: "Semana Santa", ato: "Lei Estadual nº 6.564/2005 de AL (COJ)", dispositivo: "art. 36, I", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-04-03", motivo: "Semana Santa", ato: "Lei Estadual nº 6.564/2005 de AL (COJ)", dispositivo: "art. 36, I", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-04-20", motivo: "Suspensão das atividades e dos prazos processuais", ato: "Ato Normativo nº 03/2026 do TJAL", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-04-21", motivo: "Tiradentes", ato: "Decreto Estadual nº 106.093/2025 de AL", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Decreto Estadual nº 106.093/2025 de AL", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-06-04", motivo: "Corpus Christi (ponto facultativo estadual; o TJAL refere o feriado ao suspender 05/06)", ato: "Ato Normativo nº 03/2026 do TJAL", dispositivo: "art. 2º", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "TJAL", data: "2026-06-05", motivo: "Suspensão das atividades e dos prazos processuais", ato: "Ato Normativo nº 03/2026 do TJAL", dispositivo: "art. 2º", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-06-22", motivo: "Recesso junino (suspensão dos prazos processuais)", ato: "Ato Normativo nº 09/2026 do TJAL", dispositivo: "arts. 1º e 2º", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-06-23", motivo: "Recesso junino (suspensão dos prazos processuais)", ato: "Ato Normativo nº 09/2026 do TJAL", dispositivo: "arts. 1º e 2º", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-06-24", motivo: "Recesso junino (suspensão dos prazos processuais)", ato: "Ato Normativo nº 09/2026 do TJAL", dispositivo: "arts. 1º e 2º", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-06-25", motivo: "Recesso junino (suspensão dos prazos processuais)", ato: "Ato Normativo nº 09/2026 do TJAL", dispositivo: "arts. 1º e 2º", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-06-26", motivo: "Recesso junino (suspensão dos prazos processuais)", ato: "Ato Normativo nº 09/2026 do TJAL", dispositivo: "arts. 1º e 2º", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-06-29", motivo: "Recesso junino (suspensão dos prazos processuais)", ato: "Ato Normativo nº 09/2026 do TJAL", dispositivo: "arts. 1º e 2º", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-06-30", motivo: "Recesso junino (suspensão dos prazos processuais)", ato: "Ato Normativo nº 09/2026 do TJAL", dispositivo: "arts. 1º e 2º", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-08-10", motivo: "Suspensão das atividades e dos prazos processuais (Dia do Jurista)", ato: "Ato Normativo nº 03/2026 do TJAL", dispositivo: "art. 3º", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-08-11", motivo: "Dia do Jurista", ato: "Lei Estadual nº 6.564/2005 de AL (COJ)", dispositivo: "art. 36, II", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Decreto Estadual nº 106.093/2025 de AL", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-09-16", motivo: "Emancipação Política de Alagoas", ato: "Decreto Estadual nº 106.093/2025 de AL", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Decreto Estadual nº 106.093/2025 de AL", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-11-02", motivo: "Finados", ato: "Decreto Estadual nº 106.093/2025 de AL", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Decreto Estadual nº 106.093/2025 de AL", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-11-30", motivo: "Dia Estadual do Evangélico", ato: "Decreto Estadual nº 106.093/2025 de AL", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-12-07", motivo: "Suspensão das atividades e dos prazos processuais", ato: "Ato Normativo nº 03/2026 do TJAL", dispositivo: "art. 5º", abrangencia: "tribunal" },
  { tribunal: "TJAL", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Lei Estadual nº 6.564/2005 de AL (COJ)", dispositivo: "art. 36, II", abrangencia: "tribunal" },
  // TJAM: Portaria nº 4704/2025 da Presidência do TJAM (Calendário Judicial 2026)
  //   Fonte: DJe do TJAM, Caderno Extra, edição nº 4151, de 11/11/2025, págs. 8 e 9. Conferido em 09/10/2026.
  //   Nota: Pontos facultativos do inciso II tratados como dia sem expediente (o TJAM funciona em regime de plantão nesses dias).
  //   Nota: Feriados municipais suspendem o expediente só na comarca respectiva (inciso IV); não cadastrados nesta etapa.
  //   Nota: 04/07, 05/09 e 24/10 (Manaus) caem em sábado; 15/11 cai em domingo.
  { tribunal: "TJAM", data: "2026-02-16", motivo: "Carnaval (ponto facultativo)", ato: "Portaria nº 4704/2025 do TJAM", dispositivo: "inciso II", abrangencia: "tribunal" },
  { tribunal: "TJAM", data: "2026-02-17", motivo: "Carnaval", ato: "Portaria nº 4704/2025 do TJAM", dispositivo: "Anexo", abrangencia: "tribunal" },
  { tribunal: "TJAM", data: "2026-02-18", motivo: "Quarta-feira de Cinzas (ponto facultativo)", ato: "Portaria nº 4704/2025 do TJAM", dispositivo: "inciso II", abrangencia: "tribunal" },
  { tribunal: "TJAM", data: "2026-04-02", motivo: "Quinta-feira Santa", ato: "Lei Complementar Estadual nº 17/1997 do AM", dispositivo: "art. 267, I", abrangencia: "tribunal" },
  { tribunal: "TJAM", data: "2026-04-03", motivo: "Paixão de Cristo", ato: "Portaria nº 4704/2025 do TJAM", dispositivo: "Anexo", abrangencia: "tribunal" },
  { tribunal: "TJAM", data: "2026-04-20", motivo: "Ponto facultativo (véspera de Tiradentes)", ato: "Portaria nº 4704/2025 do TJAM", dispositivo: "inciso II", abrangencia: "tribunal" },
  { tribunal: "TJAM", data: "2026-04-21", motivo: "Tiradentes", ato: "Portaria nº 4704/2025 do TJAM", dispositivo: "Anexo", abrangencia: "tribunal" },
  { tribunal: "TJAM", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Portaria nº 4704/2025 do TJAM", dispositivo: "Anexo", abrangencia: "tribunal" },
  { tribunal: "TJAM", data: "2026-05-19", motivo: "Dia do Defensor Público (ponto facultativo)", ato: "Portaria nº 4704/2025 do TJAM", dispositivo: "inciso II", abrangencia: "tribunal" },
  { tribunal: "TJAM", data: "2026-06-04", motivo: "Corpus Christi", ato: "Portaria nº 4704/2025 do TJAM", dispositivo: "Anexo", abrangencia: "tribunal" },
  { tribunal: "TJAM", data: "2026-06-05", motivo: "Ponto facultativo (dia seguinte a Corpus Christi)", ato: "Portaria nº 4704/2025 do TJAM", dispositivo: "inciso II", abrangencia: "tribunal" },
  { tribunal: "TJAM", data: "2026-08-11", motivo: "Dia do Advogado (ponto facultativo)", ato: "Portaria nº 4704/2025 do TJAM", dispositivo: "inciso II", abrangencia: "tribunal" },
  { tribunal: "TJAM", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Portaria nº 4704/2025 do TJAM", dispositivo: "Anexo", abrangencia: "tribunal" },
  { tribunal: "TJAM", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Portaria nº 4704/2025 do TJAM", dispositivo: "Anexo", abrangencia: "tribunal" },
  { tribunal: "TJAM", data: "2026-10-28", motivo: "Dia do Servidor Público (ponto facultativo)", ato: "Portaria nº 4704/2025 do TJAM", dispositivo: "inciso II", abrangencia: "tribunal" },
  { tribunal: "TJAM", data: "2026-11-02", motivo: "Finados", ato: "Portaria nº 4704/2025 do TJAM", dispositivo: "Anexo", abrangencia: "tribunal" },
  { tribunal: "TJAM", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Portaria nº 4704/2025 do TJAM", dispositivo: "Anexo", abrangencia: "tribunal" },
  { tribunal: "TJAM", data: "2026-12-07", motivo: "Ponto facultativo (véspera de Nossa Senhora da Conceição e do Dia da Justiça)", ato: "Portaria nº 4704/2025 do TJAM", dispositivo: "inciso II", abrangencia: "tribunal" },
  { tribunal: "TJAM", data: "2026-12-08", motivo: "Nossa Senhora da Conceição e Dia Consagrado à Justiça", ato: "Lei Complementar Estadual nº 17/1997 do AM", dispositivo: "art. 267, II", abrangencia: "tribunal" },
  { tribunal: "TJAM", data: "2026-12-14", motivo: "Dia Nacional do Ministério Público (ponto facultativo)", ato: "Portaria nº 4704/2025 do TJAM", dispositivo: "inciso II", abrangencia: "tribunal" },
  // TJAP: Portaria nº 75661/2025-GP (feriados de 2026) e Portaria nº 77918/2026-GP (expedientes suspensos) da Presidência do TJAP
  //   Fonte: https://sig.tjap.jus.br/ato_normativo_grid_ato_normativo_vertical/ato_normativo_grid_ato_normativo_vertical.php?var_ato=54403 (Portaria nº 75661/2025-GP, DJe nº 99, de 05/06/2025) e DJe nº 11, de 16/01/2026 (Portaria nº 77918/2026-GP). Conferido em 09/10/2026.
  //   Nota: Pelo art. 3º da Portaria nº 75661/2025-GP, ficam suspensos o expediente e os prazos nas datas da tabela, inclusive nos municípios indicados.
  //   Nota: Pontos facultativos de 04/06 e 30/11 tratados como dia sem expediente (o TJAP funciona em regime de plantão).
  //   Nota: Dia do Servidor transferido de 28/10 para 30/10, com expediente e prazos normais em 28/10 (Portaria nº 77918/2026-GP, art. 4º).
  //   Nota: Jogos da Seleção na Copa de 2026: expediente até 12h30, sem prejuízo dos prazos (Portaria nº 77918/2026-GP, art. 5º); não cadastrados.
  //   Nota: Feriados municipais em fim de semana ou no recesso não cadastrados.
  { tribunal: "TJAP", data: "2026-01-23", motivo: "Aniversário da Cidade de Mazagão", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "local", sede: false, comarcas: ["Mazagão"] },
  { tribunal: "TJAP", data: "2026-02-04", motivo: "Aniversário da Cidade de Macapá", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "local", sede: true, comarcas: ["Macapá"] },
  { tribunal: "TJAP", data: "2026-02-16", motivo: "Carnaval (regimental)", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-02-17", motivo: "Carnaval", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-02-18", motivo: "Carnaval (regimental)", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-03-19", motivo: "Padroeiro do Estado do Amapá (São José)", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-03-20", motivo: "Expediente suspenso", ato: "Portaria nº 77918/2026-GP do TJAP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-04-01", motivo: "Semana Santa (regimental)", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-04-02", motivo: "Semana Santa (regimental)", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-04-03", motivo: "Paixão de Cristo", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-04-20", motivo: "Expediente suspenso", ato: "Portaria nº 77918/2026-GP do TJAP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-04-21", motivo: "Tiradentes", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-05-01", motivo: "Dia do Trabalhador", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-05-15", motivo: "Dia de Cabralzinho", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-06-04", motivo: "Corpus Christi (ponto facultativo)", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-06-05", motivo: "Expediente suspenso", ato: "Portaria nº 77918/2026-GP do TJAP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-06-29", motivo: "Dia de São Pedro", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "local", sede: false, comarcas: ["Vitória do Jari", "Calçoene", "Pedra Branca do Amapari"] },
  { tribunal: "TJAP", data: "2026-07-28", motivo: "Dia do Agricultor", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "local", sede: false, comarcas: ["Oiapoque"] },
  { tribunal: "TJAP", data: "2026-08-10", motivo: "Expediente suspenso", ato: "Portaria nº 77918/2026-GP do TJAP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-08-11", motivo: "Dia do Advogado", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-08-31", motivo: "Dia de São Raimundo Nonato", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "local", sede: false, comarcas: ["Mazagão"] },
  { tribunal: "TJAP", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-09-08", motivo: "Aniversário de Vitória do Jari", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "local", sede: false, comarcas: ["Vitória do Jari"] },
  { tribunal: "TJAP", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-10-15", motivo: "Dia do Professor", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "local", sede: false, comarcas: ["Oiapoque"] },
  { tribunal: "TJAP", data: "2026-10-22", motivo: "Aniversário do Município de Amapá", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "local", sede: false, comarcas: ["Amapá"] },
  { tribunal: "TJAP", data: "2026-10-30", motivo: "Dia do Servidor Público (transferido de 28/10)", ato: "Portaria nº 77918/2026-GP do TJAP", dispositivo: "art. 4º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-11-02", motivo: "Finados", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-11-20", motivo: "Dia da Consciência Negra", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-11-30", motivo: "Dia do Evangélico (ponto facultativo)", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-12-01", motivo: "Laudo Suíço", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "local", sede: false, comarcas: ["Oiapoque"] },
  { tribunal: "TJAP", data: "2026-12-07", motivo: "Expediente suspenso", ato: "Portaria nº 77918/2026-GP do TJAP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-12-08", motivo: "Dia da Justiça (regimental)", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "tribunal" },
  { tribunal: "TJAP", data: "2026-12-17", motivo: "Aniversário do município", ato: "Portaria nº 75661/2025-GP do TJAP", dispositivo: "arts. 1º e 3º", abrangencia: "local", sede: false, comarcas: ["Ferreira Gomes", "Santana", "Laranjal do Jari", "Tartarugalzinho"] },
  // TJBA: Decreto Judiciário nº 1050/2025 do TJBA
  //   Fonte: https://www.tjba.jus.br/portal/wp-content/uploads/2025/12/Decreto-1050-25_-expediente-forense-2026.pdf
  //   Nota: Recesso de 20/12/2025 a 06/01/2026 (art. 2º) e suspensão de prazos até 20/01/2026 (art. 4º) já cobertos pela regra do art. 220 do CPC.
  { tribunal: "TJBA", data: "2026-01-01", motivo: "Confraternização Universal", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, I", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-01-02", motivo: "Confraternização Universal", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, I", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-02-12", motivo: "Carnaval e Quarta-feira de Cinzas", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, II", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-02-13", motivo: "Carnaval e Quarta-feira de Cinzas", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, II", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-02-16", motivo: "Carnaval e Quarta-feira de Cinzas", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, II", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-02-17", motivo: "Carnaval e Quarta-feira de Cinzas", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, II", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-02-18", motivo: "Carnaval e Quarta-feira de Cinzas", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, II", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-04-02", motivo: "Endoenças e Sexta-feira Santa", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, III", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-04-03", motivo: "Endoenças e Sexta-feira Santa", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, III", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-04-20", motivo: "Tiradentes", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, IV", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-04-21", motivo: "Tiradentes", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, IV", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-05-01", motivo: "Dia do Trabalhador", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, V", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-06-04", motivo: "Corpus Christi", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, VI", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-06-05", motivo: "Corpus Christi", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, VI", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-06-22", motivo: "São João", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, VII", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-06-23", motivo: "São João", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, VII", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-06-24", motivo: "São João", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, VII", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-07-02", motivo: "Independência da Bahia", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, VIII", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-07-03", motivo: "Independência da Bahia", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, VIII", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-08-10", motivo: "Dia da Criação dos Cursos Jurídicos no Brasil, Dia do Magistrado e Dia do Advogado", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, IX", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-08-11", motivo: "Dia da Criação dos Cursos Jurídicos no Brasil, Dia do Magistrado e Dia do Advogado", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, IX", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, X", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-10-12", motivo: "Nossa Senhora da Conceição Aparecida", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, XI", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-10-30", motivo: "Dia do Servidor Público (transferido do dia 28 para o dia 30)", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, XII", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-11-02", motivo: "Dia de Finados", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, XIII", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-11-20", motivo: "Dia da Consciência Negra", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, XIV", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-12-07", motivo: "Dia da Justiça", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, XV", abrangencia: "tribunal" },
  { tribunal: "TJBA", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Decreto Judiciário nº 1050/2025 do TJBA", dispositivo: "art. 5º, XV", abrangencia: "tribunal" },
  // TJCE: Portaria nº 2924/2025 do TJCE
  //   Fonte: https://portal.tjce.jus.br/uploads/2026/04/PORT-FERIADOS-E-PONTO-FACULTATIVO-2026-1776690769.pdf
  //   Nota: Pelo art. 1º, não há expediente forense nas datas do Anexo Único, inclusive pontos facultativos.
  //   Nota: 05/06/2026 incluído pela Portaria nº 1169/2026 (ponto facultativo com atendimento em plantão).
  //   Nota: Recesso natalino coberto pela regra do art. 220 do CPC.
  { tribunal: "TJCE", data: "2026-02-16", motivo: "Carnaval (ponto facultativo)", ato: "Portaria nº 2924/2025 do TJCE", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJCE", data: "2026-02-17", motivo: "Carnaval (ponto facultativo)", ato: "Portaria nº 2924/2025 do TJCE", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJCE", data: "2026-02-18", motivo: "Quarta-feira de Cinzas: ponto facultativo até as 14h", ato: "Portaria nº 2924/2025 do TJCE", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "TJCE", data: "2026-03-19", motivo: "Dia de São José (ponto facultativo)", ato: "Portaria nº 2924/2025 do TJCE", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJCE", data: "2026-03-25", motivo: "Data Magna do Ceará (feriado estadual)", ato: "Portaria nº 2924/2025 do TJCE", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJCE", data: "2026-04-02", motivo: "Quinta-feira da Semana Santa (ponto facultativo)", ato: "Portaria nº 2924/2025 do TJCE", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJCE", data: "2026-04-03", motivo: "Sexta-feira da Semana Santa (ponto facultativo)", ato: "Portaria nº 2924/2025 do TJCE", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJCE", data: "2026-04-21", motivo: "Tiradentes", ato: "Portaria nº 2924/2025 do TJCE", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJCE", data: "2026-05-01", motivo: "Dia Mundial do Trabalho", ato: "Portaria nº 2924/2025 do TJCE", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJCE", data: "2026-06-04", motivo: "Corpus Christi (ponto facultativo)", ato: "Portaria nº 2924/2025 do TJCE", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJCE", data: "2026-06-05", motivo: "Dia seguinte ao feriado de Corpus Christi (ponto facultativo)", ato: "Portaria nº 1169/2026 do TJCE", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJCE", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Portaria nº 2924/2025 do TJCE", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJCE", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Portaria nº 2924/2025 do TJCE", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJCE", data: "2026-10-28", motivo: "Dia do Servidor Público Estadual", ato: "Portaria nº 2924/2025 do TJCE", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJCE", data: "2026-11-02", motivo: "Dia de Finados", ato: "Portaria nº 2924/2025 do TJCE", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJCE", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Portaria nº 2924/2025 do TJCE", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJCE", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Portaria nº 2924/2025 do TJCE", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  // TJDFT: Portaria Conjunta nº 105/2025 (calendário de feriados de 2026) e Portaria Conjunta nº 48/2026 (expediente nos jogos da Copa)
  //   Fonte: Diário Administrativo do TJDFT (PC nº 105/2025 publicada em 29/12/2025; PC nº 48/2026 publicada em 15/06/2026) e https://www.tjdft.jus.br/feriados-e-expedientes-suspensos. Conferido em 09/10/2026.
  //   Nota: Pelo art. 4º da PC nº 105/2025, há suspensão do expediente nos feriados do art. 2º que caem em dia útil, inclusive nos pontos facultativos.
  //   Nota: 29/06: horário reduzido por jogo da Seleção (PC nº 48/2026); a lista do portal o chama de ponto facultativo, mas a portaria trata de expediente diferenciado. Cadastrado como parcial.
  //   Nota: A PC nº 48/2026 vale para todos os dias de jogo da Seleção, sem listar as datas; só 29/06 consta da lista oficial do TJDFT.
  { tribunal: "TJDFT", data: "2026-02-16", motivo: "Carnaval", ato: "Portaria Conjunta nº 105/2025 do TJDFT", dispositivo: "art. 2º, II", abrangencia: "tribunal" },
  { tribunal: "TJDFT", data: "2026-02-17", motivo: "Carnaval", ato: "Portaria Conjunta nº 105/2025 do TJDFT", dispositivo: "art. 2º, II", abrangencia: "tribunal" },
  { tribunal: "TJDFT", data: "2026-02-18", motivo: "Quarta-feira de Cinzas", ato: "Portaria Conjunta nº 105/2025 do TJDFT", dispositivo: "art. 2º, II", abrangencia: "tribunal" },
  { tribunal: "TJDFT", data: "2026-04-01", motivo: "Semana Santa", ato: "Portaria Conjunta nº 105/2025 do TJDFT", dispositivo: "art. 2º, III", abrangencia: "tribunal" },
  { tribunal: "TJDFT", data: "2026-04-02", motivo: "Semana Santa", ato: "Portaria Conjunta nº 105/2025 do TJDFT", dispositivo: "art. 2º, III", abrangencia: "tribunal" },
  { tribunal: "TJDFT", data: "2026-04-03", motivo: "Semana Santa", ato: "Portaria Conjunta nº 105/2025 do TJDFT", dispositivo: "art. 2º, III", abrangencia: "tribunal" },
  { tribunal: "TJDFT", data: "2026-04-20", motivo: "Ponto facultativo", ato: "Portaria Conjunta nº 105/2025 do TJDFT", dispositivo: "art. 2º, IV", abrangencia: "tribunal" },
  { tribunal: "TJDFT", data: "2026-04-21", motivo: "Tiradentes", ato: "Portaria Conjunta nº 105/2025 do TJDFT", dispositivo: "art. 2º, V", abrangencia: "tribunal" },
  { tribunal: "TJDFT", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Portaria Conjunta nº 105/2025 do TJDFT", dispositivo: "art. 2º, VI", abrangencia: "tribunal" },
  { tribunal: "TJDFT", data: "2026-06-04", motivo: "Corpus Christi (ponto facultativo)", ato: "Portaria Conjunta nº 105/2025 do TJDFT", dispositivo: "art. 2º, VII", abrangencia: "tribunal" },
  { tribunal: "TJDFT", data: "2026-06-05", motivo: "Ponto facultativo", ato: "Portaria Conjunta nº 105/2025 do TJDFT", dispositivo: "art. 2º, VIII", abrangencia: "tribunal" },
  { tribunal: "TJDFT", data: "2026-06-29", motivo: "Expediente reduzido (jogo da Seleção Brasileira na Copa do Mundo)", ato: "Portaria Conjunta nº 48/2026 do TJDFT", dispositivo: "arts. 1º e 2º", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "TJDFT", data: "2026-08-10", motivo: "Ponto facultativo", ato: "Portaria Conjunta nº 105/2025 do TJDFT", dispositivo: "art. 2º, IX", abrangencia: "tribunal" },
  { tribunal: "TJDFT", data: "2026-08-11", motivo: "Feriado forense (11 de agosto)", ato: "Portaria Conjunta nº 105/2025 do TJDFT", dispositivo: "art. 2º, X", abrangencia: "tribunal" },
  { tribunal: "TJDFT", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Portaria Conjunta nº 105/2025 do TJDFT", dispositivo: "art. 2º, XI", abrangencia: "tribunal" },
  { tribunal: "TJDFT", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Portaria Conjunta nº 105/2025 do TJDFT", dispositivo: "art. 2º, XII", abrangencia: "tribunal" },
  { tribunal: "TJDFT", data: "2026-10-30", motivo: "Dia do Servidor Público (transferido de 28/10)", ato: "Portaria Conjunta nº 105/2025 do TJDFT", dispositivo: "art. 2º, XIII", abrangencia: "tribunal" },
  { tribunal: "TJDFT", data: "2026-11-02", motivo: "Finados", ato: "Portaria Conjunta nº 105/2025 do TJDFT", dispositivo: "art. 2º, XIV", abrangencia: "tribunal" },
  { tribunal: "TJDFT", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Portaria Conjunta nº 105/2025 do TJDFT", dispositivo: "art. 2º, XVI", abrangencia: "tribunal" },
  { tribunal: "TJDFT", data: "2026-12-07", motivo: "Ponto facultativo", ato: "Portaria Conjunta nº 105/2025 do TJDFT", dispositivo: "art. 2º, XVII", abrangencia: "tribunal" },
  { tribunal: "TJDFT", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Portaria Conjunta nº 105/2025 do TJDFT", dispositivo: "art. 2º, XVIII", abrangencia: "tribunal" },
  // TJES: Ato Normativo nº 176/2026 do TJES
  //   Fonte: https://www.tjes.jus.br/ato-normativo-no-176-2026-disp-30-09-2026/
  //   Nota: O Ato Normativo nº 176/2026 revogou o nº 319/2025 e transferiu o Dia do Servidor de 28/10 para 30/10/2026.
  //   Nota: Pontos facultativos tratados como dia sem expediente (são compensados, art. 4º).
  { tribunal: "TJES", data: "2026-02-16", motivo: "Carnaval", ato: "Ato Normativo nº 176/2026 do TJES", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJES", data: "2026-02-17", motivo: "Carnaval", ato: "Ato Normativo nº 176/2026 do TJES", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJES", data: "2026-02-18", motivo: "Quarta-Feira de Cinzas", ato: "Ato Normativo nº 176/2026 do TJES", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJES", data: "2026-04-02", motivo: "Quinta-Feira da Semana Santa", ato: "Ato Normativo nº 176/2026 do TJES", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJES", data: "2026-04-03", motivo: "Sexta-Feira da Semana Santa", ato: "Ato Normativo nº 176/2026 do TJES", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJES", data: "2026-04-13", motivo: "Nossa Senhora da Penha", ato: "Ato Normativo nº 176/2026 do TJES", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJES", data: "2026-04-20", motivo: "Ponto facultativo", ato: "Ato Normativo nº 176/2026 do TJES", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJES", data: "2026-04-21", motivo: "Tiradentes", ato: "Ato Normativo nº 176/2026 do TJES", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJES", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Ato Normativo nº 176/2026 do TJES", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJES", data: "2026-06-04", motivo: "Corpus Christi (ponto facultativo onde não houver lei municipal)", ato: "Ato Normativo nº 176/2026 do TJES", dispositivo: "art. 2º", abrangencia: "tribunal" },
  { tribunal: "TJES", data: "2026-06-05", motivo: "Ponto facultativo", ato: "Ato Normativo nº 176/2026 do TJES", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJES", data: "2026-08-10", motivo: "Ponto facultativo", ato: "Ato Normativo nº 176/2026 do TJES", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJES", data: "2026-08-11", motivo: "Dia do Advogado", ato: "Ato Normativo nº 176/2026 do TJES", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJES", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Ato Normativo nº 176/2026 do TJES", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJES", data: "2026-09-08", motivo: "Nossa Senhora da Vitória (feriado municipal)", ato: "Ato Normativo nº 176/2026 do TJES", dispositivo: "art. 3º", abrangencia: "local", sede: true, comarcas: ["Vitória"] },
  { tribunal: "TJES", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Ato Normativo nº 176/2026 do TJES", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJES", data: "2026-10-30", motivo: "Dia do Servidor Público (transferido de 28/10)", ato: "Ato Normativo nº 176/2026 do TJES", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJES", data: "2026-11-02", motivo: "Finados", ato: "Ato Normativo nº 176/2026 do TJES", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJES", data: "2026-11-20", motivo: "Dia Nacional de Zumbi dos Palmares e da Consciência Negra", ato: "Ato Normativo nº 176/2026 do TJES", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJES", data: "2026-12-07", motivo: "Ponto facultativo", ato: "Ato Normativo nº 176/2026 do TJES", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJES", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Ato Normativo nº 176/2026 do TJES", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  // TJGO: Lei Estadual nº 21.268/2022 (Código de Organização Judiciária de Goiás), art. 91; calendário Feriados 2026 do TJGO
  //   Fonte: https://docs.tjgo.jus.br/institucional/feriados/DOC_feriados_2026_13012026.pdf e texto da Lei nº 21.268/2022 no portal de legislação de Goiás. Conferido em 09/10/2026.
  //   Nota: 18/02 (quarta-feira de Cinzas): sem expediente até o meio-dia (art. 91, III); cadastrado como parcial.
  //   Nota: 20/04: ponto facultativo declarado pelo Decreto Judiciário nº 1.738/2026 (texto não lido; portal do TJGO bloqueia acesso automatizado).
  //   Nota: 26/07, 24/10, 15/11 e 24/05 (Nossa Senhora Auxiliadora, feriado municipal de Goiânia, Iporá, Leopoldo de Bulhões e Senador Canedo) caem em fim de semana.
  //   Nota: Feriados municipais das sedes das comarcas (art. 91, I) não cadastrados nesta etapa.
  { tribunal: "TJGO", data: "2026-02-16", motivo: "Carnaval", ato: "Lei Estadual nº 21.268/2022 de GO (COJEG)", dispositivo: "art. 91, III", abrangencia: "tribunal" },
  { tribunal: "TJGO", data: "2026-02-17", motivo: "Carnaval", ato: "Lei Estadual nº 21.268/2022 de GO (COJEG)", dispositivo: "art. 91, III", abrangencia: "tribunal" },
  { tribunal: "TJGO", data: "2026-02-18", motivo: "Quarta-feira de Cinzas: sem expediente até o meio-dia", ato: "Lei Estadual nº 21.268/2022 de GO (COJEG)", dispositivo: "art. 91, III", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "TJGO", data: "2026-04-01", motivo: "Semana Santa", ato: "Lei Estadual nº 21.268/2022 de GO (COJEG)", dispositivo: "art. 91, IV", abrangencia: "tribunal" },
  { tribunal: "TJGO", data: "2026-04-02", motivo: "Semana Santa", ato: "Lei Estadual nº 21.268/2022 de GO (COJEG)", dispositivo: "art. 91, IV", abrangencia: "tribunal" },
  { tribunal: "TJGO", data: "2026-04-03", motivo: "Semana Santa", ato: "Lei Estadual nº 21.268/2022 de GO (COJEG)", dispositivo: "art. 91, IV", abrangencia: "tribunal" },
  { tribunal: "TJGO", data: "2026-04-20", motivo: "Ponto facultativo (Decreto Judiciário nº 1.738/2026)", ato: "Lei Estadual nº 21.268/2022 de GO (COJEG)", dispositivo: "art. 91, II", abrangencia: "tribunal" },
  { tribunal: "TJGO", data: "2026-04-21", motivo: "Tiradentes", ato: "Lei Estadual nº 21.268/2022 de GO (COJEG)", dispositivo: "art. 91, I", abrangencia: "tribunal" },
  { tribunal: "TJGO", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Lei Estadual nº 21.268/2022 de GO (COJEG)", dispositivo: "art. 91, I", abrangencia: "tribunal" },
  { tribunal: "TJGO", data: "2026-06-04", motivo: "Corpus Christi (feriado nacional no calendário do TJGO)", ato: "Lei Estadual nº 21.268/2022 de GO (COJEG)", dispositivo: "art. 91, I", abrangencia: "tribunal" },
  { tribunal: "TJGO", data: "2026-06-05", motivo: "Ponto facultativo", ato: "Lei Estadual nº 21.268/2022 de GO (COJEG)", dispositivo: "art. 91, II", abrangencia: "tribunal" },
  { tribunal: "TJGO", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Lei Estadual nº 21.268/2022 de GO (COJEG)", dispositivo: "art. 91, I", abrangencia: "tribunal" },
  { tribunal: "TJGO", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Lei Estadual nº 21.268/2022 de GO (COJEG)", dispositivo: "art. 91, I", abrangencia: "tribunal" },
  { tribunal: "TJGO", data: "2026-10-28", motivo: "Dia do Servidor Público", ato: "Lei Estadual nº 21.268/2022 de GO (COJEG)", dispositivo: "art. 91, VII", abrangencia: "tribunal" },
  { tribunal: "TJGO", data: "2026-11-02", motivo: "Finados", ato: "Lei Estadual nº 21.268/2022 de GO (COJEG)", dispositivo: "art. 91, I", abrangencia: "tribunal" },
  { tribunal: "TJGO", data: "2026-11-20", motivo: "Dia da Consciência Negra", ato: "Lei Estadual nº 21.268/2022 de GO (COJEG)", dispositivo: "art. 91, I", abrangencia: "tribunal" },
  { tribunal: "TJGO", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Lei Estadual nº 21.268/2022 de GO (COJEG)", dispositivo: "art. 91, VIII", abrangencia: "tribunal" },
  // TJMA: Resolução-GP nº 131/2025 do TJMA
  //   Fonte: https://novogerenciador.tjma.jus.br/storage/arquivos/resolucoes_2025/resolucao_gp_n_131_de_4_de_novembro_de_2025_05_11_2025_17_12_45.pdf
  //   Nota: Pontos facultativos do art. 3º tratados como dia útil com alerta (o ato não diz que não há expediente). O texto consolidado pela Resolução-GP nº 26/2026, que alterou o art. 3º, não pôde ser aberto (link fora do ar).
  { tribunal: "TJMA", data: "2026-01-01", motivo: "Dia da Confraternização Universal", ato: "Resolução-GP nº 131/2025 do TJMA", dispositivo: "art. 1º, I", abrangencia: "tribunal" },
  { tribunal: "TJMA", data: "2026-02-16", motivo: "Carnaval", ato: "Resolução-GP nº 131/2025 do TJMA", dispositivo: "art. 1º, II", abrangencia: "tribunal" },
  { tribunal: "TJMA", data: "2026-02-17", motivo: "Carnaval", ato: "Resolução-GP nº 131/2025 do TJMA", dispositivo: "art. 1º, III", abrangencia: "tribunal" },
  { tribunal: "TJMA", data: "2026-02-18", motivo: "Ponto facultativo (Cinzas)", ato: "Resolução-GP nº 131/2025 do TJMA", dispositivo: "art. 3º, I", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "TJMA", data: "2026-04-01", motivo: "Ponto facultativo (Semana Santa)", ato: "Resolução-GP nº 131/2025 do TJMA", dispositivo: "art. 3º, II", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "TJMA", data: "2026-04-02", motivo: "Semana Santa", ato: "Resolução-GP nº 131/2025 do TJMA", dispositivo: "art. 1º, IV", abrangencia: "tribunal" },
  { tribunal: "TJMA", data: "2026-04-03", motivo: "Semana Santa, Paixão de Cristo", ato: "Resolução-GP nº 131/2025 do TJMA", dispositivo: "art. 1º, V", abrangencia: "tribunal" },
  { tribunal: "TJMA", data: "2026-04-21", motivo: "Tiradentes", ato: "Resolução-GP nº 131/2025 do TJMA", dispositivo: "art. 1º, VI", abrangencia: "tribunal" },
  { tribunal: "TJMA", data: "2026-05-01", motivo: "Dia do Trabalhador", ato: "Resolução-GP nº 131/2025 do TJMA", dispositivo: "art. 1º, VII", abrangencia: "tribunal" },
  { tribunal: "TJMA", data: "2026-06-04", motivo: "Corpus Christi", ato: "Resolução-GP nº 131/2025 do TJMA", dispositivo: "art. 1º, VIII", abrangencia: "tribunal" },
  { tribunal: "TJMA", data: "2026-06-05", motivo: "Ponto facultativo", ato: "Resolução-GP nº 131/2025 do TJMA", dispositivo: "art. 3º, III", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "TJMA", data: "2026-06-29", motivo: "Dia de São Pedro (feriado municipal)", ato: "Resolução-GP nº 131/2025 do TJMA", dispositivo: "art. 1º, parágrafo único", abrangencia: "local", sede: true, comarcas: ["São Luís"] },
  { tribunal: "TJMA", data: "2026-07-28", motivo: "Adesão do Maranhão à Independência do Brasil", ato: "Resolução-GP nº 131/2025 do TJMA", dispositivo: "art. 1º, IX", abrangencia: "tribunal" },
  { tribunal: "TJMA", data: "2026-08-11", motivo: "Dia do Advogado", ato: "Resolução-GP nº 131/2025 do TJMA", dispositivo: "art. 1º, X", abrangencia: "tribunal" },
  { tribunal: "TJMA", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Resolução-GP nº 131/2025 do TJMA", dispositivo: "art. 1º, XI", abrangencia: "tribunal" },
  { tribunal: "TJMA", data: "2026-09-08", motivo: "Fundação da Cidade de São Luís (feriado municipal)", ato: "Resolução-GP nº 131/2025 do TJMA", dispositivo: "art. 1º, parágrafo único", abrangencia: "local", sede: true, comarcas: ["São Luís"] },
  { tribunal: "TJMA", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Resolução-GP nº 131/2025 do TJMA", dispositivo: "art. 1º, XII", abrangencia: "tribunal" },
  { tribunal: "TJMA", data: "2026-10-28", motivo: "Dia do Servidor Público", ato: "Resolução-GP nº 131/2025 do TJMA", dispositivo: "art. 1º, XIII", abrangencia: "tribunal" },
  { tribunal: "TJMA", data: "2026-11-02", motivo: "Finados", ato: "Resolução-GP nº 131/2025 do TJMA", dispositivo: "art. 1º, XIV", abrangencia: "tribunal" },
  { tribunal: "TJMA", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Resolução-GP nº 131/2025 do TJMA", dispositivo: "art. 1º, XV", abrangencia: "tribunal" },
  { tribunal: "TJMA", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Resolução-GP nº 131/2025 do TJMA", dispositivo: "art. 1º, XVI", abrangencia: "tribunal" },
  { tribunal: "TJMA", data: "2026-12-25", motivo: "Natal", ato: "Resolução-GP nº 131/2025 do TJMA", dispositivo: "art. 1º, XVII", abrangencia: "tribunal" },
  // TJMG: Portaria Conjunta nº 1.798/PR/2026 (calendário de feriados nas comarcas de Minas Gerais em 2026), alterada pelas Portarias Conjuntas nº 1.814, 1.828 e 1.860/2026
  //   Fonte: https://www8.tjmg.jus.br/institucional/at/pdf/pc17982026.pdf (texto consolidado; Anexo Único na redação da PC nº 1.860/2026, publicada em 28/09/2026). Conferido em 09/10/2026.
  //   Nota: Art. 1º: feriados em todo o Estado; art. 2º: Comarca de Belo Horizonte; art. 3º e Anexo Único: feriados municipais das comarcas do interior (uma linha por data, com a lista de comarcas).
  //   Nota: 05/06 vale em Belo Horizonte (art. 2º, parágrafo único) e nas comarcas em que Corpus Christi é feriado municipal (art. 3º, § 1º; citado como "art. 3º e Anexo Único" para a minuta agrupar com 04/06).
  //   Nota: Feriados municipais em fim de semana, no recesso ou coincidentes com 03/04 e 08/12 (já previstos no art. 1º) não foram repetidos. Vazante: "2 e 3 de maio" cai em fim de semana.
  { tribunal: "TJMG", data: "2026-02-16", motivo: "Carnaval", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 1º, III", abrangencia: "tribunal" },
  { tribunal: "TJMG", data: "2026-02-17", motivo: "Carnaval", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 1º, III", abrangencia: "tribunal" },
  { tribunal: "TJMG", data: "2026-02-18", motivo: "Quarta-feira de Cinzas", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 1º, III", abrangencia: "tribunal" },
  { tribunal: "TJMG", data: "2026-04-01", motivo: "Semana Santa", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 1º, IV", abrangencia: "tribunal" },
  { tribunal: "TJMG", data: "2026-04-02", motivo: "Semana Santa", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 1º, IV", abrangencia: "tribunal" },
  { tribunal: "TJMG", data: "2026-04-03", motivo: "Semana Santa", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 1º, IV", abrangencia: "tribunal" },
  { tribunal: "TJMG", data: "2026-04-20", motivo: "Suspensão do expediente forense", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJMG", data: "2026-04-21", motivo: "Tiradentes e Data Magna de Minas Gerais", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 1º, V", abrangencia: "tribunal" },
  { tribunal: "TJMG", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 1º, VI", abrangencia: "tribunal" },
  { tribunal: "TJMG", data: "2026-06-04", motivo: "Corpus Christi (feriado municipal de Belo Horizonte)", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 2º, I", abrangencia: "local", sede: true, comarcas: ["Belo Horizonte"] },
  { tribunal: "TJMG", data: "2026-06-05", motivo: "Suspensão do expediente forense na Comarca de Belo Horizonte", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 2º, parágrafo único", abrangencia: "local", sede: true, comarcas: ["Belo Horizonte"] },
  { tribunal: "TJMG", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 1º, VII", abrangencia: "tribunal" },
  { tribunal: "TJMG", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 1º, VIII", abrangencia: "tribunal" },
  { tribunal: "TJMG", data: "2026-10-30", motivo: "Dia do Funcionário Público", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 1º, IX", abrangencia: "tribunal" },
  { tribunal: "TJMG", data: "2026-11-02", motivo: "Finados", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 1º, X", abrangencia: "tribunal" },
  { tribunal: "TJMG", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 1º, XII", abrangencia: "tribunal" },
  { tribunal: "TJMG", data: "2026-12-07", motivo: "Suspensão do expediente forense", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJMG", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 1º, XIII", abrangencia: "tribunal" },
  { tribunal: "TJMG", data: "2026-01-27", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Pedro Leopoldo"] },
  { tribunal: "TJMG", data: "2026-01-30", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Governador Valadares"] },
  { tribunal: "TJMG", data: "2026-02-02", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Candeias", "Luz"] },
  { tribunal: "TJMG", data: "2026-02-03", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Guapé"] },
  { tribunal: "TJMG", data: "2026-02-05", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Alvinópolis"] },
  { tribunal: "TJMG", data: "2026-02-10", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Tiros"] },
  { tribunal: "TJMG", data: "2026-02-11", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Conquista", "Vespasiano"] },
  { tribunal: "TJMG", data: "2026-02-19", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Santa Rita de Caldas"] },
  { tribunal: "TJMG", data: "2026-02-24", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Capelinha", "Sabinópolis"] },
  { tribunal: "TJMG", data: "2026-03-02", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["São Gonçalo do Sapucaí", "São Romão", "Uberaba"] },
  { tribunal: "TJMG", data: "2026-03-09", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Espinosa", "Virginópolis"] },
  { tribunal: "TJMG", data: "2026-03-16", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Manhumirim", "Ouro Fino", "Santa Maria do Suaçuí"] },
  { tribunal: "TJMG", data: "2026-03-19", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Alfenas", "Alto Rio Doce", "Além Paraíba", "Bicas", "Botelhos", "Conselheiro Pena", "Itajubá", "Itamonte", "Itumirim", "Muzambinho", "Nova Era", "Paraisópolis", "São Francisco"] },
  { tribunal: "TJMG", data: "2026-03-25", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Guarani"] },
  { tribunal: "TJMG", data: "2026-03-27", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Caldas", "Contagem"] },
  { tribunal: "TJMG", data: "2026-04-01", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["São Lourenço"] },
  { tribunal: "TJMG", data: "2026-04-02", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Poço Fundo"] },
  { tribunal: "TJMG", data: "2026-04-06", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Ibiraci"] },
  { tribunal: "TJMG", data: "2026-04-07", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Patrocínio"] },
  { tribunal: "TJMG", data: "2026-04-09", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Rio Pomba"] },
  { tribunal: "TJMG", data: "2026-04-13", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Itambacuri"] },
  { tribunal: "TJMG", data: "2026-04-22", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Montalvânia"] },
  { tribunal: "TJMG", data: "2026-04-27", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Carandaí", "Jaíba", "Juatuba", "Leopoldina"] },
  { tribunal: "TJMG", data: "2026-04-29", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Ipatinga", "João Monlevade", "Timóteo"] },
  { tribunal: "TJMG", data: "2026-05-07", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Pedralva"] },
  { tribunal: "TJMG", data: "2026-05-12", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Cambuquira"] },
  { tribunal: "TJMG", data: "2026-05-13", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Bueno Brandão", "Canápolis", "Cristina", "Manhumirim", "Ouro Fino", "Poços de Caldas", "Resplendor"] },
  { tribunal: "TJMG", data: "2026-05-14", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Arinos", "Grão Mogol", "Passos"] },
  { tribunal: "TJMG", data: "2026-05-18", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Taiobeiras"] },
  { tribunal: "TJMG", data: "2026-05-21", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Tombos"] },
  { tribunal: "TJMG", data: "2026-05-22", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Cataguases", "Cássia", "Esmeraldas", "Extrema", "Iturama", "Malacacheta", "Medina", "Miradouro", "Nova Resende", "Presidente Olegário", "Santa Rita de Caldas", "Santa Rita do Sapucaí", "Viçosa"] },
  { tribunal: "TJMG", data: "2026-05-25", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Guarani", "Três Marias"] },
  { tribunal: "TJMG", data: "2026-05-26", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["São Gonçalo do Sapucaí"] },
  { tribunal: "TJMG", data: "2026-06-01", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Bom Despacho", "Cachoeira de Minas", "Coração de Jesus", "Divinópolis", "Guaxupé", "Mercês", "Paraopeba", "Pedra Azul", "Perdões", "Pirapora", "Rio Casca", "São João Evangelista", "Tupaciguara"] },
  { tribunal: "TJMG", data: "2026-06-02", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Resende Costa"] },
  { tribunal: "TJMG", data: "2026-06-04", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Abaeté", "Abre Campo", "Aimorés", "Aiuruoca", "Alfenas", "Almenara", "Alpinópolis", "Alto Rio Doce", "Alvinópolis", "Além Paraíba", "Andradas", "Andrelândia", "Araguari", "Araxá", "Araçuaí", "Arcos", "Areado", "Arinos", "Açucena", "Baependi", "Bambuí", "Barbacena", "Barroso", "Barão de Cocais", "Belo Vale", "Betim", "Boa Esperança", "Bocaiúva", "Bom Despacho", "Bom Sucesso", "Bonfim", "Bonfinópolis de Minas", "Borda da Mata", "Botelhos", "Brasília de Minas", "Brazópolis", "Bueno Brandão", "Buenópolis", "Buritis", "Cabo Verde", "Cachoeira de Minas", "Caeté", "Caldas", "Camanducaia", "Cambuquira", "Cambuí", "Campanha", "Campestre", "Campina Verde", "Campo Belo", "Campos Altos", "Campos Gerais", "Candeias", "Capelinha", "Capinópolis", "Carandaí", "Carangola", "Caratinga", "Carlos Chagas", "Carmo da Mata", "Carmo de Minas", "Carmo do Cajuru", "Carmo do Paranaíba", "Carmo do Rio Claro", "Carmópolis de Minas", "Cataguases", "Caxambu", "Cláudio", "Conceição das Alagoas", "Conceição do Rio Verde", "Congonhas", "Conquista", "Conselheiro Lafaiete", "Conselheiro Pena", "Contagem", "Coração de Jesus", "Corinto", "Coromandel", "Coronel Fabriciano", "Cristina", "Cruzília", "Curvelo", "Cássia", "Diamantina", "Divino", "Divinópolis", "Dores do Indaiá", "Elói Mendes", "Entre Rios de Minas", "Ervália", "Esmeraldas", "Espera Feliz", "Estrela do Sul", "Eugenópolis", "Extrema", "Ferros", "Formiga", "Francisco Sá", "Frutal", "Galiléia", "Governador Valadares", "Grão Mogol", "Guanhães", "Guapé", "Guarani", "Guaranésia", "Guaxupé", "Ibiraci", "Ibirité", "Ibiá", "Igarapé", "Iguatama", "Inhapim", "Ipanema", "Ipatinga", "Itabira", "Itabirito", "Itaguara", "Itajubá", "Itamarandiba", "Itambacuri", "Itamogi", "Itamonte", "Itanhandu", "Itanhomi", "Itapagipe", "Itapecerica", "Itaúna", "Ituiutaba", "Itumirim", "Iturama", "Jaboticatubas", "Jacinto", "Jacutinga", "Jacuí", "Janaúba", "Januária", "Jaíba", "Jequeri", "Jequitinhonha", "João Monlevade", "João Pinheiro", "Juatuba", "Juiz de Fora", "Lagoa da Prata", "Lagoa Santa", "Lajinha", "Lambari", "Lavras", "Leopoldina", "Lima Duarte", "Luz", "Machado", "Malacacheta", "Manga", "Manhuaçu", "Manhumirim", "Mantena", "Mar de Espanha", "Mariana", "Martinho Campos", "Mateus Leme", "Matias Barbosa", "Matozinhos", "Medina", "Mercês", "Mesquita", "Miradouro", "Miraí", "Montalvânia", "Monte Alegre de Minas", "Monte Azul", "Monte Belo", "Monte Carmelo", "Monte Santo de Minas", "Monte Sião", "Montes Claros", "Morada Nova de Minas", "Muriaé", "Mutum", "Muzambinho", "Nanuque", "Natércia", "Nepomuceno", "Nova Era", "Nova Lima", "Nova Ponte", "Nova Resende", "Nova Serrana", "Novo Cruzeiro", "Oliveira", "Ouro Branco", "Ouro Fino", "Ouro Preto", "Palma", "Paracatu", "Paraguaçu", "Paraisópolis", "Paraopeba", "Pará de Minas", "Passa Quatro", "Passa Tempo", "Passos", "Patos de Minas", "Patrocínio", "Pedra Azul", "Pedralva", "Pedro Leopoldo", "Perdizes", "Perdões", "Peçanha", "Piranga", "Pirapetinga", "Pirapora", "Pitangui", "Piumhi", "Pompéu", "Ponte Nova", "Porteirinha", "Pouso Alegre", "Poço Fundo", "Poços de Caldas", "Prados", "Prata", "Pratápolis", "Presidente Olegário", "Raul Soares", "Resende Costa", "Ribeirão das Neves", "Rio Casca", "Rio Novo", "Rio Paranaíba", "Rio Pardo de Minas", "Rio Piracicaba", "Rio Pomba", "Rio Preto", "Rio Vermelho", "Sabará", "Sabinópolis", "Sacramento", "Salinas", "Santa Bárbara", "Santa Luzia", "Santa Maria do Suaçuí", "Santa Rita de Caldas", "Santa Rita do Sapucaí", "Santa Vitória", "Santo Antônio do Monte", "Santos Dumont", "Senador Firmino", "Serro", "Sete Lagoas", "Silvianópolis", "São Domingos do Prata", "São Francisco", "São Gonçalo do Sapucaí", "São Gotardo", "São João da Ponte", "São João del-Rei", "São João do Paraíso", "São João Evangelista", "São João Nepomuceno", "São Lourenço", "São Romão", "São Sebastião do Paraíso", "Tarumirim", "Teixeiras", "Teófilo Otoni", "Timóteo", "Tiros", "Tombos", "Três Corações", "Três Marias", "Três Pontas", "Tupaciguara", "Turmalina", "Uberaba", "Uberlândia", "Ubá", "Unaí", "Varginha", "Vazante", "Vespasiano", "Virginópolis", "Visconde do Rio Branco", "Viçosa", "Várzea da Palma", "Águas Formosas"] },
  { tribunal: "TJMG", data: "2026-06-05", motivo: "Suspensão do expediente forense (Corpus Christi feriado municipal)", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Abaeté", "Abre Campo", "Aimorés", "Aiuruoca", "Alfenas", "Almenara", "Alpinópolis", "Alto Rio Doce", "Alvinópolis", "Além Paraíba", "Andradas", "Andrelândia", "Araguari", "Araxá", "Araçuaí", "Arcos", "Areado", "Arinos", "Açucena", "Baependi", "Bambuí", "Barbacena", "Barroso", "Barão de Cocais", "Belo Vale", "Betim", "Boa Esperança", "Bocaiúva", "Bom Despacho", "Bom Sucesso", "Bonfim", "Bonfinópolis de Minas", "Borda da Mata", "Botelhos", "Brasília de Minas", "Brazópolis", "Bueno Brandão", "Buenópolis", "Buritis", "Cabo Verde", "Cachoeira de Minas", "Caeté", "Caldas", "Camanducaia", "Cambuquira", "Cambuí", "Campanha", "Campestre", "Campina Verde", "Campo Belo", "Campos Altos", "Campos Gerais", "Candeias", "Capelinha", "Capinópolis", "Carandaí", "Carangola", "Caratinga", "Carlos Chagas", "Carmo da Mata", "Carmo de Minas", "Carmo do Cajuru", "Carmo do Paranaíba", "Carmo do Rio Claro", "Carmópolis de Minas", "Cataguases", "Caxambu", "Cláudio", "Conceição das Alagoas", "Conceição do Rio Verde", "Congonhas", "Conquista", "Conselheiro Lafaiete", "Conselheiro Pena", "Contagem", "Coração de Jesus", "Corinto", "Coromandel", "Coronel Fabriciano", "Cristina", "Cruzília", "Curvelo", "Cássia", "Diamantina", "Divino", "Divinópolis", "Dores do Indaiá", "Elói Mendes", "Entre Rios de Minas", "Ervália", "Esmeraldas", "Espera Feliz", "Estrela do Sul", "Eugenópolis", "Extrema", "Ferros", "Formiga", "Francisco Sá", "Frutal", "Galiléia", "Governador Valadares", "Grão Mogol", "Guanhães", "Guapé", "Guarani", "Guaranésia", "Guaxupé", "Ibiraci", "Ibirité", "Ibiá", "Igarapé", "Iguatama", "Inhapim", "Ipanema", "Ipatinga", "Itabira", "Itabirito", "Itaguara", "Itajubá", "Itamarandiba", "Itambacuri", "Itamogi", "Itamonte", "Itanhandu", "Itanhomi", "Itapagipe", "Itapecerica", "Itaúna", "Ituiutaba", "Itumirim", "Iturama", "Jaboticatubas", "Jacinto", "Jacutinga", "Jacuí", "Janaúba", "Januária", "Jaíba", "Jequeri", "Jequitinhonha", "João Monlevade", "João Pinheiro", "Juatuba", "Juiz de Fora", "Lagoa da Prata", "Lagoa Santa", "Lajinha", "Lambari", "Lavras", "Leopoldina", "Lima Duarte", "Luz", "Machado", "Malacacheta", "Manga", "Manhuaçu", "Manhumirim", "Mantena", "Mar de Espanha", "Mariana", "Martinho Campos", "Mateus Leme", "Matias Barbosa", "Matozinhos", "Medina", "Mercês", "Mesquita", "Miradouro", "Miraí", "Montalvânia", "Monte Alegre de Minas", "Monte Azul", "Monte Belo", "Monte Carmelo", "Monte Santo de Minas", "Monte Sião", "Montes Claros", "Morada Nova de Minas", "Muriaé", "Mutum", "Muzambinho", "Nanuque", "Natércia", "Nepomuceno", "Nova Era", "Nova Lima", "Nova Ponte", "Nova Resende", "Nova Serrana", "Novo Cruzeiro", "Oliveira", "Ouro Branco", "Ouro Fino", "Ouro Preto", "Palma", "Paracatu", "Paraguaçu", "Paraisópolis", "Paraopeba", "Pará de Minas", "Passa Quatro", "Passa Tempo", "Passos", "Patos de Minas", "Patrocínio", "Pedra Azul", "Pedralva", "Pedro Leopoldo", "Perdizes", "Perdões", "Peçanha", "Piranga", "Pirapetinga", "Pirapora", "Pitangui", "Piumhi", "Pompéu", "Ponte Nova", "Porteirinha", "Pouso Alegre", "Poço Fundo", "Poços de Caldas", "Prados", "Prata", "Pratápolis", "Presidente Olegário", "Raul Soares", "Resende Costa", "Ribeirão das Neves", "Rio Casca", "Rio Novo", "Rio Paranaíba", "Rio Pardo de Minas", "Rio Piracicaba", "Rio Pomba", "Rio Preto", "Rio Vermelho", "Sabará", "Sabinópolis", "Sacramento", "Salinas", "Santa Bárbara", "Santa Luzia", "Santa Maria do Suaçuí", "Santa Rita de Caldas", "Santa Rita do Sapucaí", "Santa Vitória", "Santo Antônio do Monte", "Santos Dumont", "Senador Firmino", "Serro", "Sete Lagoas", "Silvianópolis", "São Domingos do Prata", "São Francisco", "São Gonçalo do Sapucaí", "São Gotardo", "São João da Ponte", "São João del-Rei", "São João do Paraíso", "São João Evangelista", "São João Nepomuceno", "São Lourenço", "São Romão", "São Sebastião do Paraíso", "Tarumirim", "Teixeiras", "Teófilo Otoni", "Timóteo", "Tiros", "Tombos", "Três Corações", "Três Marias", "Três Pontas", "Tupaciguara", "Turmalina", "Uberaba", "Uberlândia", "Ubá", "Unaí", "Varginha", "Vazante", "Vespasiano", "Virginópolis", "Visconde do Rio Branco", "Viçosa", "Várzea da Palma", "Águas Formosas"] },
  { tribunal: "TJMG", data: "2026-06-09", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Pitangui"] },
  { tribunal: "TJMG", data: "2026-06-12", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Conselheiro Lafaiete", "Itanhomi", "Janaúba"] },
  { tribunal: "TJMG", data: "2026-06-15", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Capinópolis"] },
  { tribunal: "TJMG", data: "2026-06-17", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Ervália", "Mutum", "Rio Pomba"] },
  { tribunal: "TJMG", data: "2026-06-18", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Estrela do Sul"] },
  { tribunal: "TJMG", data: "2026-06-22", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Lajinha"] },
  { tribunal: "TJMG", data: "2026-06-23", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Minas Novas"] },
  { tribunal: "TJMG", data: "2026-06-24", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Almenara", "Barão de Cocais", "Cachoeira de Minas", "Caratinga", "Conceição do Mato Dentro", "Espinosa", "Galiléia", "Itamarandiba", "Itamogi", "Jacinto", "Janaúba", "Januária", "Jaíba", "Jequitinhonha", "Manga", "Medina", "Minas Novas", "Montalvânia", "Monte Azul", "Pedra Azul", "Porteirinha", "Rio Pardo de Minas", "Salinas", "São João da Ponte", "São João do Paraíso", "São Roque de Minas", "Taiobeiras", "Visconde do Rio Branco", "Águas Formosas"] },
  { tribunal: "TJMG", data: "2026-06-29", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Capinópolis", "Monte Santo de Minas", "Muriaé", "Silvianópolis", "São João do Paraíso", "Teófilo Otoni"] },
  { tribunal: "TJMG", data: "2026-07-03", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Divino", "Montes Claros", "Três Pontas", "Ubá"] },
  { tribunal: "TJMG", data: "2026-07-06", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Serro"] },
  { tribunal: "TJMG", data: "2026-07-08", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Ouro Preto"] },
  { tribunal: "TJMG", data: "2026-07-10", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Bambuí"] },
  { tribunal: "TJMG", data: "2026-07-13", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Abaeté", "Bocaiúva"] },
  { tribunal: "TJMG", data: "2026-07-14", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Bocaiúva", "Canápolis", "Rio Preto"] },
  { tribunal: "TJMG", data: "2026-07-15", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Águas Formosas"] },
  { tribunal: "TJMG", data: "2026-07-16", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Aimorés", "Arcos", "Betim", "Borda da Mata", "Cambuí", "Campestre", "Campos Gerais", "Carmo da Mata", "Carmo de Minas", "Carmo do Cajuru", "Carmo do Paranaíba", "Carmo do Rio Claro", "Carmópolis de Minas", "Frutal", "Mariana", "Monte Carmelo", "Paraguaçu", "Paraopeba", "Prata"] },
  { tribunal: "TJMG", data: "2026-07-17", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Sabará"] },
  { tribunal: "TJMG", data: "2026-07-20", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Andrelândia", "Camanducaia", "Corinto", "Natércia", "Piumhi", "Rio Pardo de Minas"] },
  { tribunal: "TJMG", data: "2026-07-27", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Abre Campo", "Santos Dumont"] },
  { tribunal: "TJMG", data: "2026-08-04", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["São Domingos do Prata"] },
  { tribunal: "TJMG", data: "2026-08-05", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Ribeirão das Neves"] },
  { tribunal: "TJMG", data: "2026-08-06", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Araguari", "Bonfinópolis de Minas", "Bueno Brandão", "Campo Belo", "Carmo do Rio Claro", "Conquista", "Passos", "Pouso Alegre"] },
  { tribunal: "TJMG", data: "2026-08-07", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Brazópolis"] },
  { tribunal: "TJMG", data: "2026-08-10", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Manhuaçu", "São Lourenço"] },
  { tribunal: "TJMG", data: "2026-08-14", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Barbacena", "Medina"] },
  { tribunal: "TJMG", data: "2026-08-17", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Bom Despacho", "Dores do Indaiá"] },
  { tribunal: "TJMG", data: "2026-08-21", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Lajinha"] },
  { tribunal: "TJMG", data: "2026-08-24", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Sacramento"] },
  { tribunal: "TJMG", data: "2026-08-25", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Machado", "Rio Pomba"] },
  { tribunal: "TJMG", data: "2026-08-28", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Araguari"] },
  { tribunal: "TJMG", data: "2026-08-31", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Uberlândia"] },
  { tribunal: "TJMG", data: "2026-09-01", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Passa Quatro", "Resende Costa"] },
  { tribunal: "TJMG", data: "2026-09-07", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Ipanema", "Rio Paranaíba"] },
  { tribunal: "TJMG", data: "2026-09-08", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Baependi", "Bom Sucesso", "Buritis", "Francisco Sá", "Patrocínio"] },
  { tribunal: "TJMG", data: "2026-09-10", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Areado", "João Pinheiro", "Nova Resende"] },
  { tribunal: "TJMG", data: "2026-09-14", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Carmo do Cajuru", "Cruzília", "Jequeri", "Machado", "Malacacheta", "Manhumirim", "Matozinhos", "Perdões", "Pratápolis", "Tarumirim", "Teixeiras"] },
  { tribunal: "TJMG", data: "2026-09-15", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Açucena", "Barbacena", "Boa Esperança", "Dores do Indaiá", "Guaxupé", "Ibiraci", "Itaguara", "Januária", "Lima Duarte", "Matozinhos", "Pará de Minas", "Turmalina"] },
  { tribunal: "TJMG", data: "2026-09-16", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Brazópolis", "Campos Gerais", "Carmo de Minas", "Caxambu", "Esmeraldas", "Guaranésia", "Itaúna", "Ituiutaba", "Jacutinga", "Lambari", "Monte Alegre de Minas"] },
  { tribunal: "TJMG", data: "2026-09-17", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Morada Nova de Minas"] },
  { tribunal: "TJMG", data: "2026-09-18", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Extrema"] },
  { tribunal: "TJMG", data: "2026-09-21", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Aimorés", "Araçuaí", "Rio Preto", "Santa Maria do Suaçuí"] },
  { tribunal: "TJMG", data: "2026-09-23", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Campanha", "Campos Altos", "Ferros", "Peçanha", "Três Corações", "Três Pontas"] },
  { tribunal: "TJMG", data: "2026-09-24", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Brumadinho", "Mar de Espanha", "Mercês", "Três Marias"] },
  { tribunal: "TJMG", data: "2026-09-28", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Além Paraíba", "Campo Belo", "Visconde do Rio Branco"] },
  { tribunal: "TJMG", data: "2026-09-29", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Guanhães", "Jequitinhonha", "Nova Ponte", "Rio Piracicaba", "Santos Dumont"] },
  { tribunal: "TJMG", data: "2026-09-30", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["São Gotardo", "Viçosa"] },
  { tribunal: "TJMG", data: "2026-10-01", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Campos Altos"] },
  { tribunal: "TJMG", data: "2026-10-02", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Campanha", "Minas Novas"] },
  { tribunal: "TJMG", data: "2026-10-05", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Piranga"] },
  { tribunal: "TJMG", data: "2026-10-06", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Monte Carmelo"] },
  { tribunal: "TJMG", data: "2026-10-07", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Alvinópolis", "Bonfim", "Januária", "Ubá", "Varginha"] },
  { tribunal: "TJMG", data: "2026-10-08", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Dores do Indaiá"] },
  { tribunal: "TJMG", data: "2026-10-09", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Itabira"] },
  { tribunal: "TJMG", data: "2026-10-13", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Lavras"] },
  { tribunal: "TJMG", data: "2026-10-15", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Alfenas", "Boa Esperança"] },
  { tribunal: "TJMG", data: "2026-10-19", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Ibiá", "Pouso Alegre"] },
  { tribunal: "TJMG", data: "2026-10-20", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Paracatu"] },
  { tribunal: "TJMG", data: "2026-10-21", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Lajinha"] },
  { tribunal: "TJMG", data: "2026-10-28", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Divino"] },
  { tribunal: "TJMG", data: "2026-10-30", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Cabo Verde", "Ponte Nova"] },
  { tribunal: "TJMG", data: "2026-11-04", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Lagoa da Prata"] },
  { tribunal: "TJMG", data: "2026-11-05", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Abaeté", "Carmo do Rio Claro", "Manhuaçu", "São Francisco"] },
  { tribunal: "TJMG", data: "2026-11-06", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Poços de Caldas"] },
  { tribunal: "TJMG", data: "2026-11-16", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Santo Antônio do Monte"] },
  { tribunal: "TJMG", data: "2026-11-20", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Itapecerica", "Leopoldina"] },
  { tribunal: "TJMG", data: "2026-11-25", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Natércia"] },
  { tribunal: "TJMG", data: "2026-11-27", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Bambuí", "Campina Verde", "Capinópolis", "Ibirité", "Monte Sião"] },
  { tribunal: "TJMG", data: "2026-11-30", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Buritis", "Montalvânia", "Muzambinho"] },
  { tribunal: "TJMG", data: "2026-12-04", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Guaranésia", "Santa Bárbara"] },
  { tribunal: "TJMG", data: "2026-12-10", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Morada Nova de Minas"] },
  { tribunal: "TJMG", data: "2026-12-17", motivo: "Feriado municipal da sede da comarca", ato: "Portaria Conjunta nº 1.798/PR/2026 do TJMG", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Alpinópolis", "Belo Vale", "Bueno Brandão", "Buenópolis", "Campina Verde", "Candeias", "Carlos Chagas", "Carmo da Mata", "Conceição das Alagoas", "Divino", "Itamonte", "Jaboticatubas", "Lagoa Santa", "Martinho Campos", "Miradouro", "Monte Belo", "Nova Ponte", "Perdizes", "Pirapetinga", "Porteirinha", "Senador Firmino", "São Roque de Minas", "Teixeiras", "Águas Formosas"] },
  // TJMS: Portaria nº 983/2025 da Presidência do TJMS (feriados e pontos facultativos de 2026)
  //   Fonte: DJMS nº 5775, de 12/12/2025, p. 3 (https://www.tjms.jus.br/legislacao/storage/public/pdf-legislacoes/portaria_n._983-25-scsm.pdf) e https://www.tjms.jus.br/institucional/feriados (feriados municipais). Conferido em 09/10/2026.
  //   Nota: Pontos facultativos do art. 1º, parágrafo único, são dias sem expediente (art. 1º, caput).
  //   Nota: 01/04 (quarta-feira da Semana Santa) não consta do calendário do TJMS.
  //   Nota: Feriados municipais (art. 3º) conforme a página de feriados forenses do TJMS; uma linha por data, com a lista de comarcas. Leis municipais não conferidas uma a uma.
  { tribunal: "TJMS", data: "2026-02-16", motivo: "Carnaval", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 1º, II", abrangencia: "tribunal" },
  { tribunal: "TJMS", data: "2026-02-17", motivo: "Carnaval", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 1º, III", abrangencia: "tribunal" },
  { tribunal: "TJMS", data: "2026-02-18", motivo: "Quarta-feira de Cinzas", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 1º, IV", abrangencia: "tribunal" },
  { tribunal: "TJMS", data: "2026-04-02", motivo: "Semana Santa", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 1º, V", abrangencia: "tribunal" },
  { tribunal: "TJMS", data: "2026-04-03", motivo: "Semana Santa", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 1º, VI", abrangencia: "tribunal" },
  { tribunal: "TJMS", data: "2026-04-20", motivo: "Ponto facultativo", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJMS", data: "2026-04-21", motivo: "Tiradentes", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 1º, VII", abrangencia: "tribunal" },
  { tribunal: "TJMS", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 1º, VIII", abrangencia: "tribunal" },
  { tribunal: "TJMS", data: "2026-06-04", motivo: "Corpus Christi", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 1º, IX", abrangencia: "tribunal" },
  { tribunal: "TJMS", data: "2026-06-05", motivo: "Ponto facultativo", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJMS", data: "2026-08-10", motivo: "Ponto facultativo", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJMS", data: "2026-08-11", motivo: "Instituição dos Cursos Jurídicos", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 1º, X", abrangencia: "tribunal" },
  { tribunal: "TJMS", data: "2026-08-26", motivo: "Aniversário de Campo Grande", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 2º", abrangencia: "local", sede: true, comarcas: ["Campo Grande"] },
  { tribunal: "TJMS", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 1º, XI", abrangencia: "tribunal" },
  { tribunal: "TJMS", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 1º, XII", abrangencia: "tribunal" },
  { tribunal: "TJMS", data: "2026-10-30", motivo: "Dia do Servidor Público", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 1º, XIII", abrangencia: "tribunal" },
  { tribunal: "TJMS", data: "2026-11-02", motivo: "Finados", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 1º, XIV", abrangencia: "tribunal" },
  { tribunal: "TJMS", data: "2026-11-20", motivo: "Dia Nacional de Zumbi dos Palmares e da Consciência Negra", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 1º, XV", abrangencia: "tribunal" },
  { tribunal: "TJMS", data: "2026-12-07", motivo: "Ponto facultativo", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 1º, parágrafo único", abrangencia: "tribunal" },
  { tribunal: "TJMS", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 1º, XVI", abrangencia: "tribunal" },
  { tribunal: "TJMS", data: "2026-02-02", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Corumbá"] },
  { tribunal: "TJMS", data: "2026-02-11", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Anastácio"] },
  { tribunal: "TJMS", data: "2026-03-19", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Cassilândia", "Coxim", "Itaporã", "Ponta Porã", "Ribas do Rio Pardo"] },
  { tribunal: "TJMS", data: "2026-04-08", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Nioaque"] },
  { tribunal: "TJMS", data: "2026-04-30", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Nova Andradina"] },
  { tribunal: "TJMS", data: "2026-05-08", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Anastácio", "Iguatemi", "Terenos"] },
  { tribunal: "TJMS", data: "2026-05-12", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Costa Rica", "São Gabriel do Oeste"] },
  { tribunal: "TJMS", data: "2026-05-13", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Angélica", "Deodápolis", "Eldorado", "Fátima do Sul", "Itaquiraí", "Mundo Novo", "Naviraí", "Rio Negro", "Sete Quedas"] },
  { tribunal: "TJMS", data: "2026-05-14", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Jardim"] },
  { tribunal: "TJMS", data: "2026-05-22", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Nioaque"] },
  { tribunal: "TJMS", data: "2026-06-03", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Sonora"] },
  { tribunal: "TJMS", data: "2026-06-11", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Maracaju"] },
  { tribunal: "TJMS", data: "2026-06-12", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Porto Murtinho", "Água Clara"] },
  { tribunal: "TJMS", data: "2026-06-15", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Três Lagoas"] },
  { tribunal: "TJMS", data: "2026-06-24", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Anaurilândia", "Bataguassu", "Camapuã", "Corumbá", "Porto Murtinho"] },
  { tribunal: "TJMS", data: "2026-06-29", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Angélica", "Bonito", "Chapadão do Sul"] },
  { tribunal: "TJMS", data: "2026-07-09", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Fátima do Sul"] },
  { tribunal: "TJMS", data: "2026-07-16", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Miranda"] },
  { tribunal: "TJMS", data: "2026-07-20", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Bela Vista"] },
  { tribunal: "TJMS", data: "2026-08-03", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Cassilândia"] },
  { tribunal: "TJMS", data: "2026-08-06", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Caarapó", "Inocência"] },
  { tribunal: "TJMS", data: "2026-09-21", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Corumbá"] },
  { tribunal: "TJMS", data: "2026-09-28", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Amambai", "Aparecida do Taboado"] },
  { tribunal: "TJMS", data: "2026-09-29", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Deodápolis", "Figueirão", "São Gabriel do Oeste"] },
  { tribunal: "TJMS", data: "2026-09-30", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Camapuã"] },
  { tribunal: "TJMS", data: "2026-10-02", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Bonito"] },
  { tribunal: "TJMS", data: "2026-10-07", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Dois Irmãos do Buriti"] },
  { tribunal: "TJMS", data: "2026-10-08", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Anaurilândia"] },
  { tribunal: "TJMS", data: "2026-10-23", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Chapadão do Sul"] },
  { tribunal: "TJMS", data: "2026-10-27", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Nova Alvorada do Sul"] },
  { tribunal: "TJMS", data: "2026-11-11", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Anaurilândia", "Ivinhema", "Naviraí", "Pedro Gomes"] },
  { tribunal: "TJMS", data: "2026-11-12", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Batayporã"] },
  { tribunal: "TJMS", data: "2026-11-13", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Dois Irmãos do Buriti"] },
  { tribunal: "TJMS", data: "2026-11-27", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Mundo Novo"] },
  { tribunal: "TJMS", data: "2026-12-10", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Itaporã"] },
  { tribunal: "TJMS", data: "2026-12-11", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Bataguassu", "Sidrolândia"] },
  { tribunal: "TJMS", data: "2026-12-15", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Coronel Sapucaia"] },
  { tribunal: "TJMS", data: "2026-12-16", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 983/2025 do TJMS", dispositivo: "art. 3º", abrangencia: "local", sede: false, comarcas: ["Rio Verde de Mato Grosso"] },
  // TJMT: Portaria nº 1915/2025-PRES (calendário forense de 2026, Anexos I e II) e atos posteriores da Presidência do TJMT
  //   Fonte: https://www.tjmt.jus.br/paginas/transparencia-e-prestacao-contas?url=%2FInstitucional%2FC%2F82478 (página Calendário Judiciário 2026, atualizada até 01/10/2026). Conferido em 09/10/2026.
  //   Nota: Pelo art. 2º da Portaria nº 1915/2025, ficam suspensos o expediente e os prazos nos feriados e pontos facultativos; nos feriados municipais, só na comarca (§ 1º).
  //   Nota: Suspensão de setembro: Portarias de 21 e 22/09/2026 (21 a 25/09) e nº 1370/2026 (prazos até 30/09; retomada em 01/10). Não se aplica à execução penal (SEEU).
  //   Nota: Não cadastrados: Portaria nº 245/2026 (Secretaria a partir das 17h30 de 13/02) e Portaria nº 1384/2026 (prazos administrativos).
  //   Nota: Anexo II com dia da semana divergente da data em Alto Garças (10/12), Aripuanã (04/10, 31/10, 31/12), Colniza (31/10, 26/11), Nova Xavantina (14/04), Novo São Joaquim (25/09) e Peixoto de Azevedo (30/11); os que caem em dia útil fora de outra suspensão estão como parcial.
  { tribunal: "TJMT", data: "2026-02-16", motivo: "Carnaval (ponto facultativo)", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º e Anexo I", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-02-17", motivo: "Carnaval (ponto facultativo)", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º e Anexo I", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-02-18", motivo: "Quarta-feira de Cinzas: expediente a partir das 13h", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º e Anexo I", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "TJMT", data: "2026-04-02", motivo: "Paixão de Cristo (ponto facultativo)", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º e Anexo I", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-04-03", motivo: "Paixão de Cristo", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º e Anexo I", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-04-06", motivo: "Suspensão do expediente e dos prazos a partir das 13h, só no Tribunal (falta de água)", ato: "Portaria nº 509/2026-PRES do TJMT", dispositivo: "arts. 1º e 2º", abrangencia: "local", sede: true, comarcas: [], tipo: "parcial" },
  { tribunal: "TJMT", data: "2026-04-20", motivo: "Tiradentes (ponto facultativo)", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º e Anexo I", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-04-21", motivo: "Tiradentes", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º e Anexo I", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º e Anexo I", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-06-04", motivo: "Corpus Christi (ponto facultativo)", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º e Anexo I", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-06-05", motivo: "Corpus Christi (ponto facultativo)", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º e Anexo I", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-06-19", motivo: "Expediente das 8h às 15h (jogo da Seleção Brasileira)", ato: "Portaria nº 752/2026-PRES do TJMT", dispositivo: "arts. 1º e 4º", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "TJMT", data: "2026-06-24", motivo: "Expediente das 8h às 15h (jogo da Seleção Brasileira)", ato: "Portaria nº 752/2026-PRES do TJMT", dispositivo: "arts. 1º e 4º", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "TJMT", data: "2026-06-29", motivo: "Suspensão do expediente (jogo da Seleção Brasileira)", ato: "Portaria nº 901/2026-PRES do TJMT", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-08-10", motivo: "Dia do Advogado (ponto facultativo)", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º e Anexo I", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-08-11", motivo: "Dia do Advogado (ponto facultativo)", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º e Anexo I", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º e Anexo I", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-09-21", motivo: "Suspensão do expediente e dos prazos (indisponibilidade dos sistemas)", ato: "Portaria TJMT/PRES de 21/09/2026", dispositivo: "arts. 1º e 2º", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-09-22", motivo: "Suspensão do expediente e dos prazos (indisponibilidade dos sistemas)", ato: "Portaria TJMT/PRES de 21/09/2026 (prorrogação)", dispositivo: "arts. 1º e 2º", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-09-23", motivo: "Suspensão dos prazos (restabelecimento dos sistemas)", ato: "Portaria TJMT/PRES de 22/09/2026", dispositivo: "art. 4º", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-09-24", motivo: "Suspensão dos prazos (restabelecimento dos sistemas)", ato: "Portaria TJMT/PRES de 22/09/2026", dispositivo: "art. 4º", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-09-25", motivo: "Suspensão dos prazos (restabelecimento dos sistemas)", ato: "Portaria TJMT/PRES de 22/09/2026", dispositivo: "art. 4º", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-09-28", motivo: "Suspensão dos prazos (retomada dos sistemas)", ato: "Portaria nº 1370/2026-PRES do TJMT", dispositivo: "art. 2º", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-09-29", motivo: "Suspensão dos prazos (retomada dos sistemas)", ato: "Portaria nº 1370/2026-PRES do TJMT", dispositivo: "art. 2º", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-09-30", motivo: "Suspensão dos prazos (retomada dos sistemas)", ato: "Portaria nº 1370/2026-PRES do TJMT", dispositivo: "art. 2º", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º e Anexo I", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-10-30", motivo: "Dia do Servidor Público (transferido de 28/10)", ato: "Portaria nº 1254/2026-PRES do TJMT", dispositivo: "arts. 1º e 2º", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-11-02", motivo: "Finados", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º e Anexo I", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-11-20", motivo: "Dia da Consciência Negra", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º e Anexo I", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-12-07", motivo: "Dia da Justiça", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º e Anexo I", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º e Anexo I", abrangencia: "tribunal" },
  { tribunal: "TJMT", data: "2026-01-21", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Poconé"] },
  { tribunal: "TJMT", data: "2026-02-02", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Araputanga", "Porto dos Gaúchos"] },
  { tribunal: "TJMT", data: "2026-02-05", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Arenápolis", "Nortelândia"] },
  { tribunal: "TJMT", data: "2026-02-27", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Mirassol d'Oeste"] },
  { tribunal: "TJMT", data: "2026-03-19", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Alto Taquari", "Juara", "São José do Rio Claro", "Vila Bela da Santíssima Trindade"] },
  { tribunal: "TJMT", data: "2026-03-20", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Vila Bela da Santíssima Trindade"] },
  { tribunal: "TJMT", data: "2026-04-08", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Cuiabá"] },
  { tribunal: "TJMT", data: "2026-04-14", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Dom Aquino"] },
  { tribunal: "TJMT", data: "2026-04-22", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Sapezal"] },
  { tribunal: "TJMT", data: "2026-04-29", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Jauru"] },
  { tribunal: "TJMT", data: "2026-05-05", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Juína", "Santo Antônio de Leverger"] },
  { tribunal: "TJMT", data: "2026-05-12", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["São José dos Quatro Marcos"] },
  { tribunal: "TJMT", data: "2026-05-13", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Alto Taquari", "Araputanga", "Campinápolis", "Comodoro", "Itaúba", "Lucas do Rio Verde", "Marcelândia", "Nova Canaã do Norte", "Novo São Joaquim", "Pedra Preta", "Peixoto de Azevedo", "Porto Alegre do Norte", "Porto Esperidião", "Primavera do Leste", "Sapezal", "Sorriso", "São Félix do Araguaia", "Tangará da Serra", "Terra Nova do Norte", "Vera", "Vila Rica"] },
  { tribunal: "TJMT", data: "2026-05-14", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Mirassol d'Oeste"] },
  { tribunal: "TJMT", data: "2026-05-15", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Várzea Grande"] },
  { tribunal: "TJMT", data: "2026-05-19", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Alta Floresta"] },
  { tribunal: "TJMT", data: "2026-05-22", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Rio Branco"] },
  { tribunal: "TJMT", data: "2026-05-29", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Cotriguaçu"] },
  { tribunal: "TJMT", data: "2026-06-01", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Brasnorte"] },
  { tribunal: "TJMT", data: "2026-06-02", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Guarantã do Norte"] },
  { tribunal: "TJMT", data: "2026-06-12", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Juína", "Nova Canaã do Norte", "São Félix do Araguaia"] },
  { tribunal: "TJMT", data: "2026-06-15", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["São José dos Quatro Marcos"] },
  { tribunal: "TJMT", data: "2026-06-24", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Colíder", "Guiratinga", "Poxoréu", "Ribeirão Cascalheira"] },
  { tribunal: "TJMT", data: "2026-06-25", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Rosário Oeste"] },
  { tribunal: "TJMT", data: "2026-07-03", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Apiacás"] },
  { tribunal: "TJMT", data: "2026-07-09", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Água Boa"] },
  { tribunal: "TJMT", data: "2026-07-16", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Itiquira"] },
  { tribunal: "TJMT", data: "2026-07-20", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Peixoto de Azevedo", "Vila Bela da Santíssima Trindade"] },
  { tribunal: "TJMT", data: "2026-07-21", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Peixoto de Azevedo", "Vila Bela da Santíssima Trindade"] },
  { tribunal: "TJMT", data: "2026-07-27", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Vera"] },
  { tribunal: "TJMT", data: "2026-07-31", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Chapada dos Guimarães"] },
  { tribunal: "TJMT", data: "2026-08-05", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Lucas do Rio Verde"] },
  { tribunal: "TJMT", data: "2026-08-06", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Arenápolis", "Campinápolis", "Juscimeira", "Pontes e Lacerda"] },
  { tribunal: "TJMT", data: "2026-08-14", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Ribeirão Cascalheira"] },
  { tribunal: "TJMT", data: "2026-08-19", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Nova Monte Verde"] },
  { tribunal: "TJMT", data: "2026-08-25", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Cáceres"] },
  { tribunal: "TJMT", data: "2026-08-31", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Rosário Oeste"] },
  { tribunal: "TJMT", data: "2026-09-14", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Barra do Bugres", "Sinop"] },
  { tribunal: "TJMT", data: "2026-09-15", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Barra do Garças"] },
  { tribunal: "TJMT", data: "2026-09-18", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Diamantino"] },
  { tribunal: "TJMT", data: "2026-10-06", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Cáceres"] },
  { tribunal: "TJMT", data: "2026-10-07", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Guarantã do Norte", "Poconé", "Rosário Oeste"] },
  { tribunal: "TJMT", data: "2026-10-21", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Jaciara"] },
  { tribunal: "TJMT", data: "2026-10-26", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Alto Araguaia", "Poxoréu"] },
  { tribunal: "TJMT", data: "2026-10-28", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Mirassol d'Oeste", "Vera"] },
  { tribunal: "TJMT", data: "2026-11-11", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Porto dos Gaúchos"] },
  { tribunal: "TJMT", data: "2026-11-17", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Feliz Natal"] },
  { tribunal: "TJMT", data: "2026-11-27", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Nova Xavantina"] },
  { tribunal: "TJMT", data: "2026-11-30", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Rio Branco"] },
  { tribunal: "TJMT", data: "2026-12-01", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Itiquira"] },
  { tribunal: "TJMT", data: "2026-12-03", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Paranatinga"] },
  { tribunal: "TJMT", data: "2026-12-10", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Juscimeira", "Rondonópolis"] },
  { tribunal: "TJMT", data: "2026-12-11", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Porto Alegre do Norte"] },
  { tribunal: "TJMT", data: "2026-12-14", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Juara", "São José dos Quatro Marcos"] },
  { tribunal: "TJMT", data: "2026-12-17", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Paranatinga"] },
  { tribunal: "TJMT", data: "2026-12-18", motivo: "Feriado municipal da sede da comarca", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Colíder"] },
  { tribunal: "TJMT", data: "2026-04-14", motivo: "Feriado municipal (dia da semana divergente no Anexo II; confira a lei municipal)", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Nova Xavantina"], tipo: "parcial" },
  { tribunal: "TJMT", data: "2026-11-26", motivo: "Feriado municipal (dia da semana divergente no Anexo II; confira a lei municipal)", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Colniza"], tipo: "parcial" },
  { tribunal: "TJMT", data: "2026-11-30", motivo: "Feriado municipal (dia da semana divergente no Anexo II; confira a lei municipal)", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Peixoto de Azevedo"], tipo: "parcial" },
  { tribunal: "TJMT", data: "2026-12-10", motivo: "Feriado municipal (dia da semana divergente no Anexo II; confira a lei municipal)", ato: "Portaria nº 1915/2025-PRES do TJMT", dispositivo: "art. 2º, § 1º, e Anexo II", abrangencia: "local", sede: false, comarcas: ["Alto Garças"], tipo: "parcial" },
  // TJPA: Portaria nº 4765/2025-GP do TJPA
  //   Fonte: https://www.tjpa.jus.br/CMSPortal/VisualizarArquivo?idArquivo=2234620
  //   Nota: Pelo art. 1º, não há expediente em todas as datas do Anexo, inclusive pontos facultativos.
  //   Nota: Documento digitalizado (imagem); datas conferidas visualmente.
  { tribunal: "TJPA", data: "2026-02-16", motivo: "Segunda-feira de Carnaval (ponto facultativo)", ato: "Portaria nº 4765/2025-GP do TJPA", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPA", data: "2026-02-17", motivo: "Carnaval", ato: "Portaria nº 4765/2025-GP do TJPA", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPA", data: "2026-02-18", motivo: "Quarta-feira de Cinzas (ponto facultativo)", ato: "Portaria nº 4765/2025-GP do TJPA", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPA", data: "2026-04-02", motivo: "Quinta-feira Santa (ponto facultativo)", ato: "Portaria nº 4765/2025-GP do TJPA", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPA", data: "2026-04-03", motivo: "Sexta-feira Santa", ato: "Portaria nº 4765/2025-GP do TJPA", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPA", data: "2026-04-20", motivo: "Ponto facultativo", ato: "Portaria nº 4765/2025-GP do TJPA", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPA", data: "2026-04-21", motivo: "Tiradentes", ato: "Portaria nº 4765/2025-GP do TJPA", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPA", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Portaria nº 4765/2025-GP do TJPA", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPA", data: "2026-06-04", motivo: "Corpus Christi", ato: "Portaria nº 4765/2025-GP do TJPA", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPA", data: "2026-06-05", motivo: "Ponto facultativo", ato: "Portaria nº 4765/2025-GP do TJPA", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPA", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Portaria nº 4765/2025-GP do TJPA", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPA", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Portaria nº 4765/2025-GP do TJPA", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPA", data: "2026-10-26", motivo: "Recírio (ponto facultativo)", ato: "Portaria nº 4765/2025-GP do TJPA", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPA", data: "2026-10-30", motivo: "Dia do Servidor Público (ponto facultativo transferido de 28/10)", ato: "Portaria nº 4765/2025-GP do TJPA", dispositivo: "art. 2º", abrangencia: "tribunal" },
  { tribunal: "TJPA", data: "2026-11-02", motivo: "Finados", ato: "Portaria nº 4765/2025-GP do TJPA", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPA", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Portaria nº 4765/2025-GP do TJPA", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPA", data: "2026-12-07", motivo: "Ponto facultativo", ato: "Portaria nº 4765/2025-GP do TJPA", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPA", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Portaria nº 4765/2025-GP do TJPA", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  // TJPB: Ato Conjunto nº 04, de 04 de setembro de 2025 (TJPB, MPPB e DPE), art. 1º e Anexo Único
  //   Fonte: PDF assinado do ato (SEI nº 0264035, Processo nº 012684-97.2025.8.15). Conferido em 08/10/2026.
  //   Nota: "Ponto facultativo" e "Facultativo" tratados como dia sem expediente.
  //   Nota: Dias com horário ampliado para compensação (24/04, 29/05, 12/06, 19/06, 07/08 e 04/12) são dias úteis e não foram cadastrados.
  //   Nota: 19/05 (ponto facultativo só da Defensoria Pública) não cadastrado.
  { tribunal: "TJPB", data: "2026-02-11", motivo: "Expediente das 7h às 13h apenas na Capital (Carnaval)", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: true, comarcas: ["João Pessoa"], tipo: "parcial" },
  { tribunal: "TJPB", data: "2026-02-16", motivo: "Carnaval (expediente facultativo)", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPB", data: "2026-02-17", motivo: "Carnaval (expediente facultativo)", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPB", data: "2026-02-18", motivo: "Cinzas (expediente facultativo)", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPB", data: "2026-04-01", motivo: "Expediente das 7h às 13h (Semana Santa)", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "TJPB", data: "2026-04-02", motivo: "Semana Santa (expediente facultativo)", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPB", data: "2026-04-03", motivo: "Paixão de Cristo", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPB", data: "2026-04-20", motivo: "Expediente facultativo (compensado)", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPB", data: "2026-04-21", motivo: "Tiradentes", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPB", data: "2026-05-01", motivo: "Dia do Trabalhador", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPB", data: "2026-06-04", motivo: "Corpus Christi (expediente facultativo)", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPB", data: "2026-06-05", motivo: "Expediente facultativo (compensado)", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPB", data: "2026-06-22", motivo: "Expediente facultativo (compensado)", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPB", data: "2026-06-23", motivo: "Expediente facultativo (compensado)", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPB", data: "2026-06-24", motivo: "São João (expediente facultativo)", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPB", data: "2026-08-05", motivo: "Data Magna da Paraíba (feriado estadual)", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPB", data: "2026-08-10", motivo: "Expediente facultativo (compensado)", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPB", data: "2026-08-11", motivo: "Fundação dos Cursos Jurídicos", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPB", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPB", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPB", data: "2026-10-28", motivo: "Dia do Servidor Público", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPB", data: "2026-11-02", motivo: "Finados", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPB", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPB", data: "2026-12-07", motivo: "Expediente facultativo (compensado)", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJPB", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Ato Conjunto TJPB/PGJB/DPGPB nº 04/2025", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  // TJPI: Provimento nº 59/2025 da Presidência do TJPI (feriados de 2026) e Portaria nº 169/2026 (pontos facultativos)
  //   Fonte: https://transparencia.tjpi.jus.br/legislacoes/5277/public (Provimento nº 59/2025) e DJ do TJPI nº 10216, publicado em 27/01/2026, págs. 7 e 8 (Portaria nº 169/2026). Conferido em 09/10/2026.
  //   Nota: Semana Santa da quinta-feira ao domingo (art. 1º, IV); 01/04 é dia útil.
  //   Nota: 14/12 (Dia do Ministério Público): suspensão só para o MP (art. 3º); não cadastrado (ver alerta).
  //   Nota: Feriados municipais (art. 1º, X) dependem de ato da Presidência para cada comarca (art. 4º, § 2º); não cadastrados.
  { tribunal: "TJPI", data: "2026-02-16", motivo: "Carnaval", ato: "Provimento nº 59/2025 do TJPI", dispositivo: "art. 1º, III", abrangencia: "tribunal" },
  { tribunal: "TJPI", data: "2026-02-17", motivo: "Carnaval", ato: "Provimento nº 59/2025 do TJPI", dispositivo: "art. 1º, III", abrangencia: "tribunal" },
  { tribunal: "TJPI", data: "2026-02-18", motivo: "Quarta-feira de Cinzas", ato: "Provimento nº 59/2025 do TJPI", dispositivo: "art. 1º, III", abrangencia: "tribunal" },
  { tribunal: "TJPI", data: "2026-04-02", motivo: "Semana Santa", ato: "Provimento nº 59/2025 do TJPI", dispositivo: "art. 1º, IV", abrangencia: "tribunal" },
  { tribunal: "TJPI", data: "2026-04-03", motivo: "Semana Santa", ato: "Provimento nº 59/2025 do TJPI", dispositivo: "art. 1º, IV", abrangencia: "tribunal" },
  { tribunal: "TJPI", data: "2026-04-20", motivo: "Ponto facultativo (véspera de Tiradentes)", ato: "Portaria nº 169/2026 do TJPI", dispositivo: "arts. 1º e 2º", abrangencia: "tribunal" },
  { tribunal: "TJPI", data: "2026-04-21", motivo: "Tiradentes", ato: "Provimento nº 59/2025 do TJPI", dispositivo: "art. 1º, I", abrangencia: "tribunal" },
  { tribunal: "TJPI", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Provimento nº 59/2025 do TJPI", dispositivo: "art. 1º, I", abrangencia: "tribunal" },
  { tribunal: "TJPI", data: "2026-06-04", motivo: "Corpus Christi", ato: "Provimento nº 59/2025 do TJPI", dispositivo: "art. 1º, V", abrangencia: "tribunal" },
  { tribunal: "TJPI", data: "2026-06-05", motivo: "Ponto facultativo (dia seguinte a Corpus Christi)", ato: "Portaria nº 169/2026 do TJPI", dispositivo: "arts. 1º e 2º", abrangencia: "tribunal" },
  { tribunal: "TJPI", data: "2026-08-10", motivo: "Ponto facultativo (véspera do Dia dos Cursos Jurídicos)", ato: "Portaria nº 169/2026 do TJPI", dispositivo: "arts. 1º e 2º", abrangencia: "tribunal" },
  { tribunal: "TJPI", data: "2026-08-11", motivo: "Criação dos Cursos Jurídicos, Dia do Advogado e Dia do Magistrado", ato: "Provimento nº 59/2025 do TJPI", dispositivo: "art. 1º, VI", abrangencia: "tribunal" },
  { tribunal: "TJPI", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Provimento nº 59/2025 do TJPI", dispositivo: "art. 1º, I", abrangencia: "tribunal" },
  { tribunal: "TJPI", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Provimento nº 59/2025 do TJPI", dispositivo: "art. 1º, I", abrangencia: "tribunal" },
  { tribunal: "TJPI", data: "2026-10-19", motivo: "Dia do Piauí", ato: "Provimento nº 59/2025 do TJPI", dispositivo: "art. 1º, VII", abrangencia: "tribunal" },
  { tribunal: "TJPI", data: "2026-10-28", motivo: "Dia do Servidor Público Estadual", ato: "Provimento nº 59/2025 do TJPI", dispositivo: "art. 1º, VIII", abrangencia: "tribunal" },
  { tribunal: "TJPI", data: "2026-11-02", motivo: "Finados", ato: "Provimento nº 59/2025 do TJPI", dispositivo: "art. 1º, I", abrangencia: "tribunal" },
  { tribunal: "TJPI", data: "2026-11-20", motivo: "Dia Nacional da Consciência Negra", ato: "Provimento nº 59/2025 do TJPI", dispositivo: "art. 1º, I", abrangencia: "tribunal" },
  { tribunal: "TJPI", data: "2026-12-07", motivo: "Ponto facultativo (véspera do Dia da Justiça)", ato: "Portaria nº 169/2026 do TJPI", dispositivo: "arts. 1º e 2º", abrangencia: "tribunal" },
  { tribunal: "TJPI", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Provimento nº 59/2025 do TJPI", dispositivo: "art. 1º, IX", abrangencia: "tribunal" },
  // TJPR: Decreto Judiciário nº 621/2025 do TJPR
  //   Fonte: https://posse.tjpr.jus.br/documents/d/comunicacao/sei_12428873_decreto
  //   Nota: Feriados municipais das comarcas (art. 4º) não cadastrados nesta etapa, exceto Curitiba (art. 1º).
  //   Nota: Dia da Justiça transferido para 18/12/2026; 08/12 tem expediente normal no TJPR.
  { tribunal: "TJPR", data: "2026-02-16", motivo: "Véspera de Carnaval (suspensão do expediente)", ato: "Decreto Judiciário nº 621/2025 do TJPR", dispositivo: "art. 2º", abrangencia: "tribunal" },
  { tribunal: "TJPR", data: "2026-02-17", motivo: "Carnaval", ato: "Decreto Judiciário nº 621/2025 do TJPR", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJPR", data: "2026-04-02", motivo: "Quinta-feira Santa (suspensão do expediente)", ato: "Decreto Judiciário nº 621/2025 do TJPR", dispositivo: "art. 2º", abrangencia: "tribunal" },
  { tribunal: "TJPR", data: "2026-04-03", motivo: "Paixão de Cristo", ato: "Decreto Judiciário nº 621/2025 do TJPR", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJPR", data: "2026-04-20", motivo: "Suspensão do expediente", ato: "Decreto Judiciário nº 621/2025 do TJPR", dispositivo: "art. 2º", abrangencia: "tribunal" },
  { tribunal: "TJPR", data: "2026-04-21", motivo: "Tiradentes", ato: "Decreto Judiciário nº 621/2025 do TJPR", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJPR", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Decreto Judiciário nº 621/2025 do TJPR", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJPR", data: "2026-06-04", motivo: "Corpus Christi", ato: "Decreto Judiciário nº 621/2025 do TJPR", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJPR", data: "2026-06-05", motivo: "Suspensão do expediente", ato: "Decreto Judiciário nº 621/2025 do TJPR", dispositivo: "art. 2º", abrangencia: "tribunal" },
  { tribunal: "TJPR", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Decreto Judiciário nº 621/2025 do TJPR", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJPR", data: "2026-09-08", motivo: "Padroeira de Curitiba", ato: "Decreto Judiciário nº 621/2025 do TJPR", dispositivo: "art. 1º", abrangencia: "local", sede: true, comarcas: ["Curitiba"] },
  { tribunal: "TJPR", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Decreto Judiciário nº 621/2025 do TJPR", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJPR", data: "2026-10-30", motivo: "Dia do Funcionário Público (transferido de 28/10)", ato: "Decreto Judiciário nº 621/2025 do TJPR", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJPR", data: "2026-11-02", motivo: "Finados", ato: "Decreto Judiciário nº 621/2025 do TJPR", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJPR", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Decreto Judiciário nº 621/2025 do TJPR", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJPR", data: "2026-12-18", motivo: "Dia da Justiça (transferido de 08/12)", ato: "Decreto Judiciário nº 621/2025 do TJPR", dispositivo: "art. 1º", abrangencia: "tribunal" },
  // TJRJ: Calendário de suspensão de prazos e de expediente forense de 2026 do TJRJ
  //   Fonte: informativos do Portal do Conhecimento do TJRJ (1ª e 2ª instâncias, atualizado em 05/10/2026; Comarca da Capital e 2ª instância, atualizado em 11/09/2026), conferidos com as ementas dos Boletins de Atos Oficiais do PJERJ (EMERJ) até 07/10/2026.
  //   Nota: a minuta cita o ato ou a lei de cada data.
  //   Nota: Datas de expediente reduzido com suspensão expressa dos prazos (24/06, 04/09 e 11/09) entram como suspensão.
  //   Nota: Não entram no cálculo: prorrogações por indisponibilidade em 05/02 (Ato Executivo nº 24/2026) e 27/03 (Ato Executivo nº 73/2026); suspensões restritas a processos do INSS (27/01 a 01/02) e da AGU (16 a 20/03); suspensão para advogados de Juiz de Fora (24, 26 e 27/02, Ato Executivo nº 66/2026).
  //   Nota: Suspensões e feriados restritos a comarcas do interior não cadastrados nesta etapa.
  { tribunal: "TJRJ", data: "2026-01-01", motivo: "Confraternização Universal", ato: "Lei nº 10.607/2002", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-01-20", motivo: "Dia de São Sebastião (feriado municipal do Rio de Janeiro)", ato: "Lei Orgânica do Município do Rio de Janeiro", dispositivo: "art. 26", abrangencia: "local", sede: true, comarcas: ["Rio de Janeiro (Capital)"] },
  { tribunal: "TJRJ", data: "2026-02-13", motivo: "Suspensão do expediente e dos prazos processuais", ato: "Ato Executivo nº 20/2026 do TJRJ", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-02-16", motivo: "Carnaval", ato: "Ato Executivo nº 20/2026 do TJRJ", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-02-17", motivo: "Carnaval", ato: "Ato Executivo nº 20/2026 do TJRJ", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-02-18", motivo: "Quarta-feira de Cinzas", ato: "Ato Executivo nº 20/2026 do TJRJ", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-02-27", motivo: "Suspensão dos prazos processuais (chuvas)", ato: "Ato Executivo nº 60/2026 do TJRJ", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-04-02", motivo: "Semana Santa", ato: "Lei Estadual nº 10.633/2024 do RJ", dispositivo: "art. 83, IV", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-04-03", motivo: "Semana Santa", ato: "Lei Estadual nº 10.633/2024 do RJ", dispositivo: "art. 83, IV", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-04-21", motivo: "Tiradentes", ato: "Lei nº 10.607/2002", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-04-23", motivo: "Dia de São Jorge", ato: "Lei Estadual nº 5.198/2008 do RJ", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-04-24", motivo: "Suspensão do expediente e dos prazos processuais", ato: "Ato Executivo nº 79/2026 do TJRJ", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-05-01", motivo: "Dia do Trabalhador", ato: "Lei nº 10.607/2002", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-06-04", motivo: "Corpus Christi", ato: "Lei Estadual nº 11.002/2025 do RJ", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-06-05", motivo: "Suspensão do expediente e dos prazos processuais", ato: "Ato Executivo nº 91/2026 do TJRJ", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-06-24", motivo: "Expediente das 11h às 15h, com suspensão dos prazos processuais (jogo da Seleção Brasileira)", ato: "Ato Executivo nº 96/2026 do TJRJ", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-06-29", motivo: "Suspensão do expediente e dos prazos processuais (jogo da Seleção Brasileira)", ato: "Ato Executivo nº 103/2026 do TJRJ", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-07-29", motivo: "Suspensão dos prazos processuais", ato: "Ato Executivo nº 116/2026 do TJRJ", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-08-07", motivo: "Suspensão do expediente presencial a partir das 13h e dos prazos processuais (condições climáticas)", ato: "Ato Executivo nº 129/2026 do TJRJ", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-08-11", motivo: "Suspensão dos prazos processuais", ato: "Ato Executivo nº 114/2026 do TJRJ", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-09-04", motivo: "Expediente das 11h às 15h na Comarca da Capital, com suspensão dos prazos processuais", ato: "Ato Executivo nº 159/2026 do TJRJ", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Rio de Janeiro (Capital)"] },
  { tribunal: "TJRJ", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Lei nº 10.607/2002", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-09-11", motivo: "Expediente das 11h às 15h na Comarca da Capital, com suspensão dos prazos processuais", ato: "Ato Executivo nº 162/2026 do TJRJ", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Rio de Janeiro (Capital)"] },
  { tribunal: "TJRJ", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Lei nº 6.802/1980", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-11-02", motivo: "Finados", ato: "Lei nº 10.607/2002", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Lei nº 14.759/2023", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRJ", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Lei Estadual nº 10.633/2024 do RJ", dispositivo: "art. 83, I", abrangencia: "tribunal" },
  // TJRO: Ato nº 2579/2025 do TJRO
  //   Fonte: https://atos.tjro.jus.br/detalhar/6114 (DJE n. 218, de 25/11/2025, p. 18-20; texto compilado de 03/08/2026)
  //   Nota: Anexo Único do Ato nº 2579/2025, alterado pelos Atos nº 2942/2025, 657/2026, 782/2026, 1255/2026 e 1720/2026. Conferido em 08/10/2026.
  //   Nota: Pelo art. 1º, não há expediente nas datas do Anexo Único, inclusive nos pontos facultativos.
  //   Nota: Feriados municipais das comarcas não cadastrados nesta etapa (os Atos nº 1255/2026 e 1720/2026 tratam só de feriados municipais).
  { tribunal: "TJRO", data: "2026-02-16", motivo: "Carnaval (ponto facultativo)", ato: "Ato nº 2579/2025 do TJRO", dispositivo: "Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRO", data: "2026-02-17", motivo: "Carnaval (ponto facultativo)", ato: "Ato nº 2579/2025 do TJRO", dispositivo: "Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRO", data: "2026-02-18", motivo: "Quarta-feira de Cinzas (ponto facultativo)", ato: "Ato nº 2579/2025 do TJRO", dispositivo: "Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRO", data: "2026-04-02", motivo: "Quinta-feira Santa (ponto facultativo)", ato: "Ato nº 2579/2025 do TJRO", dispositivo: "Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRO", data: "2026-04-03", motivo: "Sexta-feira Santa", ato: "Ato nº 2579/2025 do TJRO", dispositivo: "Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRO", data: "2026-04-20", motivo: "Ponto facultativo", ato: "Ato nº 2579/2025 do TJRO", dispositivo: "Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRO", data: "2026-04-21", motivo: "Tiradentes", ato: "Ato nº 2579/2025 do TJRO", dispositivo: "Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRO", data: "2026-05-01", motivo: "Dia do Trabalhador", ato: "Ato nº 2579/2025 do TJRO", dispositivo: "Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRO", data: "2026-06-04", motivo: "Corpus Christi", ato: "Ato nº 2579/2025 do TJRO", dispositivo: "Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRO", data: "2026-06-05", motivo: "Ponto facultativo (Corpus Christi)", ato: "Ato nº 2579/2025 do TJRO", dispositivo: "Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRO", data: "2026-07-20", motivo: "Dia do Trabalhador da Justiça Estadual (ponto facultativo)", ato: "Ato nº 2579/2025 do TJRO", dispositivo: "Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRO", data: "2026-08-10", motivo: "Dia do Magistrado, do Advogado e da Instalação dos Cursos Jurídicos (transferido de 11/08)", ato: "Ato nº 2579/2025 do TJRO", dispositivo: "Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRO", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Ato nº 2579/2025 do TJRO", dispositivo: "Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRO", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Ato nº 2579/2025 do TJRO", dispositivo: "Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRO", data: "2026-10-30", motivo: "Dia do Servidor Público (transferido de 28/10)", ato: "Ato nº 2579/2025 do TJRO", dispositivo: "Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRO", data: "2026-11-02", motivo: "Finados", ato: "Ato nº 2579/2025 do TJRO", dispositivo: "Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRO", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Ato nº 2579/2025 do TJRO", dispositivo: "Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRO", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Ato nº 2579/2025 do TJRO", dispositivo: "Anexo Único", abrangencia: "tribunal" },
  // TJRR: Portaria TJRR/PR nº 1558/2025 (feriados e pontos facultativos de 2026)
  //   Fonte: DJe do TJRR nº 8006, de 22/12/2025, págs. 3 a 5, e https://www.tjrr.jus.br/index.php/feriados-locais-2026. Conferido em 09/10/2026.
  //   Nota: Pelo art. 3º, ficam suspensos o expediente e os prazos nas datas do Anexo Único, inclusive nos pontos facultativos.
  //   Nota: Postos avançados de Caroebe (15/05 e 04/11) e Iracema (04/11) não são comarcas; não cadastrados (ver alerta).
  { tribunal: "TJRR", data: "2026-02-16", motivo: "Carnaval", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRR", data: "2026-02-17", motivo: "Carnaval", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRR", data: "2026-02-18", motivo: "Quarta-feira de Cinzas", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRR", data: "2026-03-19", motivo: "Feriado municipal", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Caracaraí", "Mucajaí"] },
  { tribunal: "TJRR", data: "2026-03-20", motivo: "Ponto facultativo (feriado municipal de 19/03)", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Caracaraí", "Mucajaí"] },
  { tribunal: "TJRR", data: "2026-04-01", motivo: "Semana Santa", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRR", data: "2026-04-02", motivo: "Semana Santa", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRR", data: "2026-04-03", motivo: "Semana Santa", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRR", data: "2026-04-20", motivo: "Ponto facultativo (véspera de Tiradentes)", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRR", data: "2026-04-21", motivo: "Tiradentes", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRR", data: "2026-05-01", motivo: "Dia do Trabalhador", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRR", data: "2026-05-13", motivo: "Dia de Nossa Senhora de Fátima", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Mucajaí"] },
  { tribunal: "TJRR", data: "2026-05-15", motivo: "Dia de Santo Isidoro", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Alto Alegre"] },
  { tribunal: "TJRR", data: "2026-05-27", motivo: "Aniversário do Município de Caracaraí", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Caracaraí"] },
  { tribunal: "TJRR", data: "2026-06-04", motivo: "Corpus Christi", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRR", data: "2026-06-05", motivo: "Ponto facultativo (dia seguinte a Corpus Christi)", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRR", data: "2026-06-29", motivo: "Dia de São Pedro (Boa Vista)", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: true, comarcas: ["Boa Vista"] },
  { tribunal: "TJRR", data: "2026-07-01", motivo: "Aniversário do município", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Alto Alegre", "Bonfim", "Mucajaí", "São Luiz do Anauá"] },
  { tribunal: "TJRR", data: "2026-07-09", motivo: "Aniversário do Município de Boa Vista", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: true, comarcas: ["Boa Vista"] },
  { tribunal: "TJRR", data: "2026-07-10", motivo: "Ponto facultativo (aniversário de Boa Vista)", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: true, comarcas: ["Boa Vista"] },
  { tribunal: "TJRR", data: "2026-08-10", motivo: "Ponto facultativo (véspera do Dia dos Magistrados)", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRR", data: "2026-08-11", motivo: "Dia dos Magistrados", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRR", data: "2026-08-24", motivo: "Ponto facultativo (Dia de São Luiz)", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["São Luiz do Anauá"] },
  { tribunal: "TJRR", data: "2026-08-25", motivo: "Dia de São Luiz", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["São Luiz do Anauá"] },
  { tribunal: "TJRR", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRR", data: "2026-09-24", motivo: "Dia de Nossa Senhora do Livramento", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Caracaraí"] },
  { tribunal: "TJRR", data: "2026-09-25", motivo: "Ponto facultativo (Nossa Senhora do Livramento)", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Caracaraí"] },
  { tribunal: "TJRR", data: "2026-10-05", motivo: "Aniversário do Estado de Roraima", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRR", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRR", data: "2026-10-16", motivo: "Dia do Cristoraima", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Pacaraima"] },
  { tribunal: "TJRR", data: "2026-10-28", motivo: "Dia do Servidor Público", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRR", data: "2026-11-02", motivo: "Finados", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRR", data: "2026-11-20", motivo: "Dia da Consciência Negra", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRR", data: "2026-12-07", motivo: "Ponto facultativo (véspera do Dia da Justiça)", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJRR", data: "2026-12-08", motivo: "Dia da Justiça e Nossa Senhora da Conceição", ato: "Portaria TJRR/PR nº 1558/2025", dispositivo: "art. 3º e Anexo Único", abrangencia: "tribunal" },
  // TJRS: Ato nº 05/2025-OE do Órgão Especial do TJRS (dias sem expediente em 2026)
  //   Fonte: https://www.tjrs.jus.br/novo/noticia/aprovado-calendario-de-feriados-da-justica-estadual-para-2026/ (notícia oficial de 04/11/2025 com a tabela do ato). Texto do ato não lido (anexo da notícia indisponível); a minuta cita o ato sem dispositivo. Conferido em 13/10/2026.
  //   Nota: Pontos facultativos do Executivo não obrigam o Judiciário; 18/02, 01/04, 02/04, 20/04, 05/06, 10/08, 28/10 e 07/12 são dias úteis no TJRS.
  //   Nota: 02/02 e 04/06 são feriados municipais de Porto Alegre (sede do TJ e comarca da capital).
  //   Nota: 24/06 e 29/06: dias de jogo do Brasil na Copa; prazos suspensos pela Ordem de Serviço nº 003/2026-P conforme reportagem, texto não lido. Cadastrados como parcial.
  //   Nota: Feriados municipais das comarcas do interior não cadastrados.
  { tribunal: "TJRS", data: "2026-02-02", motivo: "Nossa Senhora dos Navegantes (feriado municipal de Porto Alegre)", ato: "Ato nº 05/2025-OE do TJRS", dispositivo: "", abrangencia: "local", sede: true, comarcas: ["Porto Alegre"] },
  { tribunal: "TJRS", data: "2026-02-16", motivo: "Carnaval", ato: "Ato nº 05/2025-OE do TJRS", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRS", data: "2026-02-17", motivo: "Carnaval", ato: "Ato nº 05/2025-OE do TJRS", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRS", data: "2026-04-03", motivo: "Sexta-Feira Santa", ato: "Ato nº 05/2025-OE do TJRS", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRS", data: "2026-04-21", motivo: "Tiradentes", ato: "Ato nº 05/2025-OE do TJRS", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRS", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Ato nº 05/2025-OE do TJRS", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRS", data: "2026-06-04", motivo: "Corpus Christi (feriado municipal de Porto Alegre)", ato: "Ato nº 05/2025-OE do TJRS", dispositivo: "", abrangencia: "local", sede: true, comarcas: ["Porto Alegre"] },
  { tribunal: "TJRS", data: "2026-06-24", motivo: "Jogo do Brasil na Copa: expediente reduzido e prazos suspensos (confira a Ordem de Serviço)", ato: "Ordem de Serviço nº 003/2026-P do TJRS", dispositivo: "", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "TJRS", data: "2026-06-29", motivo: "Jogo do Brasil na Copa: confira a Ordem de Serviço quanto à suspensão dos prazos", ato: "Ordem de Serviço nº 003/2026-P do TJRS", dispositivo: "", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "TJRS", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Ato nº 05/2025-OE do TJRS", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRS", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Ato nº 05/2025-OE do TJRS", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRS", data: "2026-11-02", motivo: "Finados", ato: "Ato nº 05/2025-OE do TJRS", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRS", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Ato nº 05/2025-OE do TJRS", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJRS", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Ato nº 05/2025-OE do TJRS", dispositivo: "", abrangencia: "tribunal" },
  // TJSC: Resolução GP nº 1/2026 da Presidência do TJSC (calendário de feriados para efeitos forenses em 2026)
  //   Fonte: DJe do TJSC nº 4649, de 16/01/2026 (https://busca.tjsc.jus.br/dje-consulta/rest/diario/caderno?cdCaderno=4&edicao=4649). Conferido em 13/10/2026.
  //   Nota: 18/02, 01/04, 20/04, 05/06, 10/08 e 07/12 não constam do anexo e são dias úteis no TJSC.
  //   Nota: 23/03 (Dia do Município de Florianópolis) vale para o Tribunal, as Turmas Recursais e a comarca da Capital.
  //   Nota: Feriados municipais do Anexo Único em dia útil, uma linha por data, com a lista de comarcas. O calendário pode ter ajustes pontuais (art. 2º); ajustes posteriores a 16/01/2026 não conferidos.
  { tribunal: "TJSC", data: "2026-02-02", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Itapema", "Laguna", "Mondaí", "Navegantes"] },
  { tribunal: "TJSC", data: "2026-02-03", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Urubici"] },
  { tribunal: "TJSC", data: "2026-02-11", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Cunha Porã"] },
  { tribunal: "TJSC", data: "2026-02-12", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Taió"] },
  { tribunal: "TJSC", data: "2026-02-16", motivo: "Segunda-feira de Carnaval", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJSC", data: "2026-02-17", motivo: "Terça-feira de Carnaval", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJSC", data: "2026-02-19", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Tangará"] },
  { tribunal: "TJSC", data: "2026-02-20", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Xaxim"] },
  { tribunal: "TJSC", data: "2026-03-02", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Palmitos"] },
  { tribunal: "TJSC", data: "2026-03-06", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Xanxerê"] },
  { tribunal: "TJSC", data: "2026-03-09", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Joinville"] },
  { tribunal: "TJSC", data: "2026-03-11", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Ibirama"] },
  { tribunal: "TJSC", data: "2026-03-16", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Catanduvas"] },
  { tribunal: "TJSC", data: "2026-03-18", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Gaspar"] },
  { tribunal: "TJSC", data: "2026-03-19", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["São José", "São José do Cedro"] },
  { tribunal: "TJSC", data: "2026-03-20", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Anchieta", "Turvo"] },
  { tribunal: "TJSC", data: "2026-03-23", motivo: "Dia do Município de Florianópolis", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: true, comarcas: ["Florianópolis"] },
  { tribunal: "TJSC", data: "2026-03-23", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Caçador"] },
  { tribunal: "TJSC", data: "2026-03-30", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Campos Novos", "Capivari de Baixo"] },
  { tribunal: "TJSC", data: "2026-04-02", motivo: "Quinta-feira da Semana Santa", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJSC", data: "2026-04-03", motivo: "Sexta-feira Santa", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJSC", data: "2026-04-06", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Pomerode", "Timbó"] },
  { tribunal: "TJSC", data: "2026-04-07", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Ipumirim", "São Domingos"] },
  { tribunal: "TJSC", data: "2026-04-15", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Rio do Sul", "São Francisco do Sul"] },
  { tribunal: "TJSC", data: "2026-04-20", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Ascurra"] },
  { tribunal: "TJSC", data: "2026-04-21", motivo: "Tiradentes", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJSC", data: "2026-04-24", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Palhoça", "Rio Negrinho"] },
  { tribunal: "TJSC", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJSC", data: "2026-05-04", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Araranguá"] },
  { tribunal: "TJSC", data: "2026-05-07", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["São Joaquim"] },
  { tribunal: "TJSC", data: "2026-05-11", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Otacílio Costa"] },
  { tribunal: "TJSC", data: "2026-05-25", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Abelardo Luz", "Barra Velha", "Santo Amaro da Imperatriz"] },
  { tribunal: "TJSC", data: "2026-05-26", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Urussanga"] },
  { tribunal: "TJSC", data: "2026-05-27", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Tubarão"] },
  { tribunal: "TJSC", data: "2026-06-01", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Presidente Getúlio"] },
  { tribunal: "TJSC", data: "2026-06-04", motivo: "Corpus Christi", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJSC", data: "2026-06-10", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Guabiruba", "Urubici"] },
  { tribunal: "TJSC", data: "2026-06-11", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Curitibanos"] },
  { tribunal: "TJSC", data: "2026-06-15", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Imaruí", "Itajaí"] },
  { tribunal: "TJSC", data: "2026-06-23", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Rio do Oeste"] },
  { tribunal: "TJSC", data: "2026-06-24", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Campos Novos", "Capivari de Baixo", "Garuva", "Imaruí", "São João Batista"] },
  { tribunal: "TJSC", data: "2026-06-29", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Itá"] },
  { tribunal: "TJSC", data: "2026-06-30", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Armazém"] },
  { tribunal: "TJSC", data: "2026-07-10", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Santo Amaro da Imperatriz"] },
  { tribunal: "TJSC", data: "2026-07-20", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Balneário Camboriú", "Cunha Porã"] },
  { tribunal: "TJSC", data: "2026-07-22", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Trombudo Central"] },
  { tribunal: "TJSC", data: "2026-07-27", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Abelardo Luz", "Campo Erê", "Maravilha", "Ponte Serrada", "São José do Cedro"] },
  { tribunal: "TJSC", data: "2026-07-29", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Concórdia"] },
  { tribunal: "TJSC", data: "2026-08-04", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Brusque"] },
  { tribunal: "TJSC", data: "2026-08-06", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Porto Belo", "Xanxerê"] },
  { tribunal: "TJSC", data: "2026-08-07", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Içara"] },
  { tribunal: "TJSC", data: "2026-08-24", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Joaçaba"] },
  { tribunal: "TJSC", data: "2026-08-25", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Chapecó", "Herval d’ Oeste"] },
  { tribunal: "TJSC", data: "2026-08-26", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Navegantes"] },
  { tribunal: "TJSC", data: "2026-08-27", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Imaruí"] },
  { tribunal: "TJSC", data: "2026-08-28", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Guaramirim"] },
  { tribunal: "TJSC", data: "2026-09-02", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Blumenau"] },
  { tribunal: "TJSC", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJSC", data: "2026-09-08", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Mafra", "São Francisco do Sul"] },
  { tribunal: "TJSC", data: "2026-09-15", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Jaguaruna", "Tubarão"] },
  { tribunal: "TJSC", data: "2026-09-23", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["São Bento do Sul"] },
  { tribunal: "TJSC", data: "2026-09-29", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["São Miguel do Oeste"] },
  { tribunal: "TJSC", data: "2026-10-06", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Coronel Freitas", "Quilombo"] },
  { tribunal: "TJSC", data: "2026-10-12", motivo: "Dia de Nossa Senhora Aparecida - Padroeira do Brasil", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJSC", data: "2026-10-13", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Porto Belo"] },
  { tribunal: "TJSC", data: "2026-10-22", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Braço do Norte"] },
  { tribunal: "TJSC", data: "2026-10-28", motivo: "Dia do Funcionário Público", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJSC", data: "2026-11-02", motivo: "Finados", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJSC", data: "2026-11-04", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["São Carlos"] },
  { tribunal: "TJSC", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJSC", data: "2026-11-25", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Otacílio Costa"] },
  { tribunal: "TJSC", data: "2026-11-27", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Itaiópolis", "Meleiro"] },
  { tribunal: "TJSC", data: "2026-12-03", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Campo Belo do Sul"] },
  { tribunal: "TJSC", data: "2026-12-04", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Anita Garibaldi", "Criciúma", "Forquilhinha", "Lauro Müller"] },
  { tribunal: "TJSC", data: "2026-12-07", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Barra Velha"] },
  { tribunal: "TJSC", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal" },
  { tribunal: "TJSC", data: "2026-12-14", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Balneário Piçarras"] },
  { tribunal: "TJSC", data: "2026-12-16", motivo: "Feriado municipal da sede da comarca", ato: "Resolução GP nº 1/2026 do TJSC", dispositivo: "art. 1º e Anexo Único", abrangencia: "local", sede: false, comarcas: ["Descanso"] },
  // TJSE: Calendário 2026 do TJSE (feriados) e Portarias Normativas da Presidência (pontos facultativos)
  //   Fonte: https://www.tjse.jus.br/portal/arquivos/documentos/publicacoes/calendarios/calendario-tjse-2026.pdf e notícias oficiais da Agência TJSE (agencia.tjse.jus.br) sobre as Portarias Normativas nº 10, 16, 18, 24, 46, 52 e 72/2026. Conferido em 13/10/2026.
  //   Nota: Ato de aprovação do calendário não localizado; a minuta cita o calendário. Portarias Normativas lidas pelo resumo das notícias oficiais, sem o texto do DJe.
  //   Nota: 07/12 consta só como previsão de ponto facultativo; cadastrado como parcial até a portaria ser publicada.
  //   Nota: Não cadastradas as prorrogações por indisponibilidade de 09/02 (Canindé do São Francisco e Poço Redondo) e de 17 e 18/06 (art. 224 do CPC).
  //   Nota: Feriados municipais por município ou distrito, conforme o calendário; uma linha por data, com a lista de municípios.
  { tribunal: "TJSE", data: "2026-02-16", motivo: "Carnaval (ponto facultativo)", ato: "Portaria Normativa nº 10/2026 do TJSE", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJSE", data: "2026-02-17", motivo: "Carnaval", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJSE", data: "2026-02-18", motivo: "Quarta-feira de Cinzas (ponto facultativo)", ato: "Portaria Normativa nº 10/2026 do TJSE", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJSE", data: "2026-03-16", motivo: "Ponto facultativo em Aracaju e no Tribunal (aniversário da capital)", ato: "Portaria Normativa nº 16/2026 do TJSE", dispositivo: "", abrangencia: "local", sede: true, comarcas: ["Aracaju"] },
  { tribunal: "TJSE", data: "2026-03-17", motivo: "Aniversário de Aracaju (feriado municipal da capital)", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: true, comarcas: ["Aracaju"] },
  { tribunal: "TJSE", data: "2026-04-02", motivo: "Quinta-feira Santa (ponto facultativo)", ato: "Portaria Normativa nº 18/2026 do TJSE", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJSE", data: "2026-04-03", motivo: "Paixão de Cristo", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJSE", data: "2026-04-20", motivo: "Ponto facultativo (véspera de Tiradentes)", ato: "Portaria Normativa nº 24/2026 do TJSE", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJSE", data: "2026-04-21", motivo: "Tiradentes", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJSE", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJSE", data: "2026-06-04", motivo: "Corpus Christi", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJSE", data: "2026-06-05", motivo: "Ponto facultativo (dia seguinte a Corpus Christi)", ato: "Portaria Normativa nº 46/2026 do TJSE", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJSE", data: "2026-06-24", motivo: "São João (festejos juninos)", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJSE", data: "2026-06-29", motivo: "Dia de São Pedro (ponto facultativo)", ato: "Portaria Normativa nº 52/2026 do TJSE", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJSE", data: "2026-07-08", motivo: "Emancipação Política de Sergipe", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJSE", data: "2026-08-10", motivo: "Ponto facultativo (véspera do Dia do Magistrado)", ato: "Portaria Normativa nº 72/2026 do TJSE", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJSE", data: "2026-08-11", motivo: "Dia do Magistrado", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJSE", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJSE", data: "2026-10-12", motivo: "Dia da Padroeira do Brasil", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJSE", data: "2026-10-30", motivo: "Dia do Funcionário Público", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJSE", data: "2026-11-02", motivo: "Finados", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJSE", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJSE", data: "2026-12-07", motivo: "Ponto facultativo previsto no calendário (confira a portaria)", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "TJSE", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJSE", data: "2026-12-14", motivo: "Dia do Ministério Público", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TJSE", data: "2026-01-21", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Maruim"] },
  { tribunal: "TJSE", data: "2026-01-22", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Salgado"] },
  { tribunal: "TJSE", data: "2026-01-29", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Itabaiana"] },
  { tribunal: "TJSE", data: "2026-02-02", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Capela", "Itaporanga D’Ajuda", "Nossa Senhora do Socorro", "Umbaúba"] },
  { tribunal: "TJSE", data: "2026-02-06", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Umbaúba"] },
  { tribunal: "TJSE", data: "2026-02-11", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Pirambu"] },
  { tribunal: "TJSE", data: "2026-02-19", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Porto da Folha"] },
  { tribunal: "TJSE", data: "2026-03-12", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Divina Pastora"] },
  { tribunal: "TJSE", data: "2026-03-19", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Malhador", "Pedrinhas"] },
  { tribunal: "TJSE", data: "2026-04-06", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Santana do São Francisco"] },
  { tribunal: "TJSE", data: "2026-04-09", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Arauá"] },
  { tribunal: "TJSE", data: "2026-04-20", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Lagarto"] },
  { tribunal: "TJSE", data: "2026-04-24", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Cristinápolis"] },
  { tribunal: "TJSE", data: "2026-05-04", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Estância"] },
  { tribunal: "TJSE", data: "2026-05-05", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Maruim"] },
  { tribunal: "TJSE", data: "2026-06-11", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Japaratuba", "Nossa Senhora das Dores", "Riachuelo"] },
  { tribunal: "TJSE", data: "2026-06-12", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Laranjeiras", "Monte Alegre", "Simão Dias"] },
  { tribunal: "TJSE", data: "2026-06-29", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Neópolis"] },
  { tribunal: "TJSE", data: "2026-06-30", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Frei Paulo"] },
  { tribunal: "TJSE", data: "2026-07-07", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Nossa Senhora do Socorro"] },
  { tribunal: "TJSE", data: "2026-07-16", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Carmópolis"] },
  { tribunal: "TJSE", data: "2026-07-31", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Cristinápolis"] },
  { tribunal: "TJSE", data: "2026-08-07", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Laranjeiras"] },
  { tribunal: "TJSE", data: "2026-08-28", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Capela", "Itabaiana"] },
  { tribunal: "TJSE", data: "2026-09-08", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Lagarto", "São Cristóvão"] },
  { tribunal: "TJSE", data: "2026-09-15", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Nossa Senhora das Dores"] },
  { tribunal: "TJSE", data: "2026-10-05", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Arauá"] },
  { tribunal: "TJSE", data: "2026-10-07", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Neópolis"] },
  { tribunal: "TJSE", data: "2026-10-14", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Divina Pastora"] },
  { tribunal: "TJSE", data: "2026-10-16", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Carmópolis"] },
  { tribunal: "TJSE", data: "2026-10-19", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Itabaianinha"] },
  { tribunal: "TJSE", data: "2026-10-21", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["São Domingos"] },
  { tribunal: "TJSE", data: "2026-10-23", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Frei Paulo", "Nossa Senhora das Dores", "Tobias Barreto"] },
  { tribunal: "TJSE", data: "2026-10-29", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Campo do Brito"] },
  { tribunal: "TJSE", data: "2026-11-11", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Areia Branca"] },
  { tribunal: "TJSE", data: "2026-11-23", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Japoatã"] },
  { tribunal: "TJSE", data: "2026-11-25", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Barra dos Coqueiros", "Canindé do São Francisco", "Carira", "Malhador", "Monte Alegre", "Pacatuba", "Pedrinhas", "Poço Redondo", "Poço Verde"] },
  { tribunal: "TJSE", data: "2026-11-26", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Pirambu"] },
  { tribunal: "TJSE", data: "2026-12-15", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Santo Amaro das Brotas"] },
  { tribunal: "TJSE", data: "2026-12-18", motivo: "Feriado municipal", ato: "Calendário 2026 do TJSE", dispositivo: "", abrangencia: "local", sede: false, comarcas: ["Ribeirópolis"] },
  // TJSP: Provimento CSM nº 2.813/2025 do TJSP
  //   Fonte: DJE-SP de 25/11/2025, edição 4334, págs. 2 e 3 (código de autenticidade 110-P-20251124215652-2). Conferido em 08/10/2026.
  //   Nota: Vale para a 1ª e a 2ª instâncias. Feriados municipais das comarcas não cadastrados nesta etapa.
  //   Nota: 01 a 06/01 e 20 a 31/12 (art. 1º, § 1º) já estão no recesso do art. 220 do CPC.
  { tribunal: "TJSP", data: "2026-02-16", motivo: "Carnaval", ato: "Provimento CSM nº 2.813/2025 do TJSP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJSP", data: "2026-02-17", motivo: "Carnaval", ato: "Provimento CSM nº 2.813/2025 do TJSP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJSP", data: "2026-02-18", motivo: "Quarta-feira de Cinzas: atendimento a partir das 13h", ato: "Provimento CSM nº 2.813/2025 do TJSP", dispositivo: "art. 2º, § 2º", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "TJSP", data: "2026-04-02", motivo: "Endoenças", ato: "Provimento CSM nº 2.813/2025 do TJSP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJSP", data: "2026-04-03", motivo: "Sexta-feira da Paixão", ato: "Provimento CSM nº 2.813/2025 do TJSP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJSP", data: "2026-04-20", motivo: "Suspensão do expediente", ato: "Provimento CSM nº 2.813/2025 do TJSP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJSP", data: "2026-04-21", motivo: "Tiradentes", ato: "Provimento CSM nº 2.813/2025 do TJSP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJSP", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Provimento CSM nº 2.813/2025 do TJSP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJSP", data: "2026-06-04", motivo: "Corpus Christi", ato: "Provimento CSM nº 2.813/2025 do TJSP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJSP", data: "2026-06-05", motivo: "Suspensão do expediente", ato: "Provimento CSM nº 2.813/2025 do TJSP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJSP", data: "2026-07-09", motivo: "Data Magna do Estado de São Paulo", ato: "Provimento CSM nº 2.813/2025 do TJSP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJSP", data: "2026-07-10", motivo: "Suspensão do expediente", ato: "Provimento CSM nº 2.813/2025 do TJSP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJSP", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Provimento CSM nº 2.813/2025 do TJSP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJSP", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Provimento CSM nº 2.813/2025 do TJSP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJSP", data: "2026-10-28", motivo: "Dia do Servidor Público", ato: "Provimento CSM nº 2.813/2025 do TJSP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJSP", data: "2026-11-02", motivo: "Finados", ato: "Provimento CSM nº 2.813/2025 do TJSP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJSP", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Provimento CSM nº 2.813/2025 do TJSP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJSP", data: "2026-12-07", motivo: "Suspensão do expediente", ato: "Provimento CSM nº 2.813/2025 do TJSP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJSP", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Provimento CSM nº 2.813/2025 do TJSP", dispositivo: "art. 1º", abrangencia: "tribunal" },
  // TJTO: Portaria nº 3741/2025 da Presidência do TJTO
  //   Fonte: https://wwa.tjto.jus.br/diario/pesquisa/materia/904337
  //   Nota: 15/08/2026 (Senhor do Bonfim) cai em sábado.
  //   Nota: A AASP indica Portaria nº 3471/2025; o Diário da Justiça publica a Portaria nº 3741/2025, que foi a usada.
  { tribunal: "TJTO", data: "2026-02-16", motivo: "Carnaval", ato: "Portaria nº 3741/2025 da Presidência do TJTO", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJTO", data: "2026-02-17", motivo: "Carnaval", ato: "Portaria nº 3741/2025 da Presidência do TJTO", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJTO", data: "2026-03-19", motivo: "Padroeiro de Palmas (feriado municipal)", ato: "Portaria nº 3741/2025 da Presidência do TJTO", dispositivo: "art. 4º", abrangencia: "local", sede: true, comarcas: ["Palmas"] },
  { tribunal: "TJTO", data: "2026-04-01", motivo: "Semana Santa", ato: "Portaria nº 3741/2025 da Presidência do TJTO", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJTO", data: "2026-04-02", motivo: "Semana Santa", ato: "Portaria nº 3741/2025 da Presidência do TJTO", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJTO", data: "2026-04-03", motivo: "Semana Santa", ato: "Portaria nº 3741/2025 da Presidência do TJTO", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJTO", data: "2026-04-20", motivo: "Ponto facultativo", ato: "Portaria nº 3741/2025 da Presidência do TJTO", dispositivo: "arts. 1º e 3º", abrangencia: "tribunal" },
  { tribunal: "TJTO", data: "2026-04-21", motivo: "Tiradentes", ato: "Portaria nº 3741/2025 da Presidência do TJTO", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJTO", data: "2026-05-01", motivo: "Dia do Trabalhador", ato: "Portaria nº 3741/2025 da Presidência do TJTO", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJTO", data: "2026-05-20", motivo: "Aniversário de Palmas (feriado municipal)", ato: "Portaria nº 3741/2025 da Presidência do TJTO", dispositivo: "art. 4º", abrangencia: "local", sede: true, comarcas: ["Palmas"] },
  { tribunal: "TJTO", data: "2026-06-04", motivo: "Corpus Christi", ato: "Portaria nº 3741/2025 da Presidência do TJTO", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJTO", data: "2026-06-05", motivo: "Ponto facultativo", ato: "Portaria nº 3741/2025 da Presidência do TJTO", dispositivo: "arts. 1º e 3º", abrangencia: "tribunal" },
  { tribunal: "TJTO", data: "2026-08-10", motivo: "Ponto facultativo", ato: "Portaria nº 3741/2025 da Presidência do TJTO", dispositivo: "arts. 1º e 3º", abrangencia: "tribunal" },
  { tribunal: "TJTO", data: "2026-08-11", motivo: "Instituição dos Cursos Jurídicos no Brasil", ato: "Portaria nº 3741/2025 da Presidência do TJTO", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJTO", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Portaria nº 3741/2025 da Presidência do TJTO", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJTO", data: "2026-09-08", motivo: "Nossa Senhora da Natividade, Padroeira do Tocantins", ato: "Portaria nº 3741/2025 da Presidência do TJTO", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJTO", data: "2026-10-05", motivo: "Criação do Estado do Tocantins", ato: "Portaria nº 3741/2025 da Presidência do TJTO", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJTO", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Portaria nº 3741/2025 da Presidência do TJTO", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJTO", data: "2026-10-30", motivo: "Dia do Servidor Público (transferido de 28/10)", ato: "Portaria nº 3741/2025 da Presidência do TJTO", dispositivo: "arts. 1º e 2º", abrangencia: "tribunal" },
  { tribunal: "TJTO", data: "2026-11-02", motivo: "Finados", ato: "Portaria nº 3741/2025 da Presidência do TJTO", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJTO", data: "2026-11-20", motivo: "Dia da Consciência Negra", ato: "Portaria nº 3741/2025 da Presidência do TJTO", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TJTO", data: "2026-12-18", motivo: "Dia da Justiça (transferido de 08/12)", ato: "Portaria nº 3741/2025 da Presidência do TJTO", dispositivo: "arts. 1º e 2º", abrangencia: "tribunal" },
  // TRF1: Portaria Presi nº 5/2026 do TRF1
  //   Fonte: https://portal.trf1.jus.br/dspace/bitstream/123/409545/1/Portaria%20Presi%205%20-%20Divulga%20os%20dias%20de%20feriados%20nacionais%20e%20os%20dias%20de%20ponto%20facultativo%20na%20JF1.pdf
  //   Nota: Vale para toda a Justiça Federal da 1ª Região. Feriados estaduais e municipais das seções e subseções seguem portarias dos diretores de foro (art. 2º), não cadastradas nesta etapa.
  //   Nota: A portaria não tem inciso XV; a numeração foi mantida como no original.
  //   Nota: Pontos facultativos tratados como dia sem expediente (o ato os divulga para os fins dos arts. 219 e 224, § 1º, do CPC).
  { tribunal: "TRF1", data: "2026-02-16", motivo: "Carnaval", ato: "Portaria Presi nº 5/2026 do TRF1", dispositivo: "art. 1º, II", abrangencia: "tribunal" },
  { tribunal: "TRF1", data: "2026-02-17", motivo: "Carnaval", ato: "Portaria Presi nº 5/2026 do TRF1", dispositivo: "art. 1º, II", abrangencia: "tribunal" },
  { tribunal: "TRF1", data: "2026-02-18", motivo: "Quarta-feira de Cinzas: ponto facultativo até as 14h", ato: "Portaria Presi nº 5/2026 do TRF1", dispositivo: "art. 1º, III", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "TRF1", data: "2026-04-01", motivo: "Semana Santa", ato: "Portaria Presi nº 5/2026 do TRF1", dispositivo: "art. 1º, IV", abrangencia: "tribunal" },
  { tribunal: "TRF1", data: "2026-04-02", motivo: "Semana Santa", ato: "Portaria Presi nº 5/2026 do TRF1", dispositivo: "art. 1º, IV", abrangencia: "tribunal" },
  { tribunal: "TRF1", data: "2026-04-03", motivo: "Semana Santa", ato: "Portaria Presi nº 5/2026 do TRF1", dispositivo: "art. 1º, IV", abrangencia: "tribunal" },
  { tribunal: "TRF1", data: "2026-04-20", motivo: "Ponto facultativo", ato: "Portaria Presi nº 5/2026 do TRF1", dispositivo: "art. 1º, V", abrangencia: "tribunal" },
  { tribunal: "TRF1", data: "2026-04-21", motivo: "Tiradentes", ato: "Portaria Presi nº 5/2026 do TRF1", dispositivo: "art. 1º, VI", abrangencia: "tribunal" },
  { tribunal: "TRF1", data: "2026-05-01", motivo: "Dia Mundial do Trabalho", ato: "Portaria Presi nº 5/2026 do TRF1", dispositivo: "art. 1º, VII", abrangencia: "tribunal" },
  { tribunal: "TRF1", data: "2026-06-04", motivo: "Corpus Christi (ponto facultativo)", ato: "Portaria Presi nº 5/2026 do TRF1", dispositivo: "art. 1º, VIII", abrangencia: "tribunal" },
  { tribunal: "TRF1", data: "2026-06-05", motivo: "Ponto facultativo", ato: "Portaria Presi nº 5/2026 do TRF1", dispositivo: "art. 1º, IX", abrangencia: "tribunal" },
  { tribunal: "TRF1", data: "2026-08-10", motivo: "Ponto facultativo", ato: "Portaria Presi nº 5/2026 do TRF1", dispositivo: "art. 1º, X", abrangencia: "tribunal" },
  { tribunal: "TRF1", data: "2026-08-11", motivo: "Dia do Direito", ato: "Portaria Presi nº 5/2026 do TRF1", dispositivo: "art. 1º, XI", abrangencia: "tribunal" },
  { tribunal: "TRF1", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Portaria Presi nº 5/2026 do TRF1", dispositivo: "art. 1º, XII", abrangencia: "tribunal" },
  { tribunal: "TRF1", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Portaria Presi nº 5/2026 do TRF1", dispositivo: "art. 1º, XIII", abrangencia: "tribunal" },
  { tribunal: "TRF1", data: "2026-10-30", motivo: "Dia do Servidor Público (ponto facultativo transferido)", ato: "Portaria Presi nº 5/2026 do TRF1", dispositivo: "art. 1º, XIV", abrangencia: "tribunal" },
  { tribunal: "TRF1", data: "2026-11-02", motivo: "Finados", ato: "Portaria Presi nº 5/2026 do TRF1", dispositivo: "art. 1º, XVI", abrangencia: "tribunal" },
  { tribunal: "TRF1", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Portaria Presi nº 5/2026 do TRF1", dispositivo: "art. 1º, XVIII", abrangencia: "tribunal" },
  { tribunal: "TRF1", data: "2026-12-07", motivo: "Ponto facultativo", ato: "Portaria Presi nº 5/2026 do TRF1", dispositivo: "art. 1º, XIX", abrangencia: "tribunal" },
  { tribunal: "TRF1", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Portaria Presi nº 5/2026 do TRF1", dispositivo: "art. 1º, XX", abrangencia: "tribunal" },
  { tribunal: "TRF1", data: "2026-12-25", motivo: "Natal", ato: "Portaria Presi nº 5/2026 do TRF1", dispositivo: "art. 1º, XXII", abrangencia: "tribunal" },
  // TRF2: Portaria PRES/TRF2 nº 843/2025
  //   Fonte: https://www.trf2.jus.br/sites/default/publico/motivo-ato/2026-02/SEI_1420312_Portaria_PRES_843_3.pdf
  //   Nota: Vale para o Tribunal (2ª instância). As Seções Judiciárias do RJ e do ES têm portarias próprias (nº 844/2025 e nº 845/2025).
  { tribunal: "TRF2", data: "2026-01-20", motivo: "Dia de São Sebastião", ato: "Portaria PRES/TRF2 nº 843/2025", dispositivo: "art. 1º, II", abrangencia: "tribunal" },
  { tribunal: "TRF2", data: "2026-02-16", motivo: "Carnaval", ato: "Portaria PRES/TRF2 nº 843/2025", dispositivo: "art. 1º, III", abrangencia: "tribunal" },
  { tribunal: "TRF2", data: "2026-02-17", motivo: "Carnaval", ato: "Portaria PRES/TRF2 nº 843/2025", dispositivo: "art. 1º, III", abrangencia: "tribunal" },
  { tribunal: "TRF2", data: "2026-02-18", motivo: "Quarta-Feira de Cinzas (ponto facultativo)", ato: "Portaria PRES/TRF2 nº 843/2025", dispositivo: "art. 1º, IV", abrangencia: "tribunal" },
  { tribunal: "TRF2", data: "2026-04-01", motivo: "Semana Santa", ato: "Portaria PRES/TRF2 nº 843/2025", dispositivo: "art. 1º, V", abrangencia: "tribunal" },
  { tribunal: "TRF2", data: "2026-04-02", motivo: "Semana Santa", ato: "Portaria PRES/TRF2 nº 843/2025", dispositivo: "art. 1º, V", abrangencia: "tribunal" },
  { tribunal: "TRF2", data: "2026-04-03", motivo: "Semana Santa", ato: "Portaria PRES/TRF2 nº 843/2025", dispositivo: "art. 1º, V", abrangencia: "tribunal" },
  { tribunal: "TRF2", data: "2026-04-21", motivo: "Tiradentes", ato: "Portaria PRES/TRF2 nº 843/2025", dispositivo: "art. 1º, VI", abrangencia: "tribunal" },
  { tribunal: "TRF2", data: "2026-04-23", motivo: "Dia de São Jorge", ato: "Portaria PRES/TRF2 nº 843/2025", dispositivo: "art. 1º, VII", abrangencia: "tribunal" },
  { tribunal: "TRF2", data: "2026-05-01", motivo: "Dia Mundial do Trabalho", ato: "Portaria PRES/TRF2 nº 843/2025", dispositivo: "art. 1º, VIII", abrangencia: "tribunal" },
  { tribunal: "TRF2", data: "2026-06-04", motivo: "Corpus Christi (ponto facultativo)", ato: "Portaria PRES/TRF2 nº 843/2025", dispositivo: "art. 1º, IX", abrangencia: "tribunal" },
  { tribunal: "TRF2", data: "2026-08-11", motivo: "Dia do Advogado", ato: "Portaria PRES/TRF2 nº 843/2025", dispositivo: "art. 1º, X", abrangencia: "tribunal" },
  { tribunal: "TRF2", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Portaria PRES/TRF2 nº 843/2025", dispositivo: "art. 1º, XI", abrangencia: "tribunal" },
  { tribunal: "TRF2", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Portaria PRES/TRF2 nº 843/2025", dispositivo: "art. 1º, XII", abrangencia: "tribunal" },
  { tribunal: "TRF2", data: "2026-10-28", motivo: "Dia do Servidor Público (ponto facultativo)", ato: "Portaria PRES/TRF2 nº 843/2025", dispositivo: "art. 1º, XIII", abrangencia: "tribunal" },
  { tribunal: "TRF2", data: "2026-11-02", motivo: "Finados", ato: "Portaria PRES/TRF2 nº 843/2025", dispositivo: "art. 1º, XIV", abrangencia: "tribunal" },
  { tribunal: "TRF2", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Portaria PRES/TRF2 nº 843/2025", dispositivo: "art. 1º, XV", abrangencia: "tribunal" },
  { tribunal: "TRF2", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Portaria PRES/TRF2 nº 843/2025", dispositivo: "art. 1º, XVI", abrangencia: "tribunal" },
  { tribunal: "TRF2", data: "2026-12-25", motivo: "Natal", ato: "Portaria PRES/TRF2 nº 843/2025", dispositivo: "art. 1º, XVII", abrangencia: "tribunal" },
  // TRF3: Portaria CATRF3R nº 48/2025
  //   Fonte: https://www.trf3.jus.br/documentos/seju/Feriados/2025/Portaria_CATRF3R_12304053.pdf
  //   Nota: Vale para o Tribunal (2ª instância). As Seções Judiciárias de SP e MS seguem atos próprios.
  { tribunal: "TRF3", data: "2026-02-16", motivo: "Carnaval", ato: "Portaria CATRF3R nº 48/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF3", data: "2026-02-17", motivo: "Carnaval", ato: "Portaria CATRF3R nº 48/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF3", data: "2026-02-18", motivo: "Quarta-feira de Cinzas: expediente a partir das 14h", ato: "Portaria CATRF3R nº 48/2025", dispositivo: "art. 3º", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "TRF3", data: "2026-04-01", motivo: "Feriado legal (Semana Santa)", ato: "Portaria CATRF3R nº 48/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF3", data: "2026-04-02", motivo: "Feriado legal (Semana Santa)", ato: "Portaria CATRF3R nº 48/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF3", data: "2026-04-03", motivo: "Sexta-feira Santa", ato: "Portaria CATRF3R nº 48/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF3", data: "2026-04-20", motivo: "Sem expediente", ato: "Portaria CATRF3R nº 48/2025", dispositivo: "art. 2º", abrangencia: "tribunal" },
  { tribunal: "TRF3", data: "2026-04-21", motivo: "Tiradentes", ato: "Portaria CATRF3R nº 48/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF3", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Portaria CATRF3R nº 48/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF3", data: "2026-06-04", motivo: "Corpus Christi", ato: "Portaria CATRF3R nº 48/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF3", data: "2026-06-05", motivo: "Sem expediente", ato: "Portaria CATRF3R nº 48/2025", dispositivo: "art. 2º", abrangencia: "tribunal" },
  { tribunal: "TRF3", data: "2026-07-09", motivo: "Revolução Constitucionalista", ato: "Portaria CATRF3R nº 48/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF3", data: "2026-08-11", motivo: "Feriado legal (Dia do Advogado)", ato: "Portaria CATRF3R nº 48/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF3", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Portaria CATRF3R nº 48/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF3", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Portaria CATRF3R nº 48/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF3", data: "2026-10-30", motivo: "Dia do Servidor Público (transferido de 28/10)", ato: "Portaria CATRF3R nº 48/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF3", data: "2026-11-02", motivo: "Finados", ato: "Portaria CATRF3R nº 48/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF3", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Portaria CATRF3R nº 48/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF3", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Portaria CATRF3R nº 48/2025", dispositivo: "art. 1º", abrangencia: "tribunal" },
  // TRF4: Calendário de Feriados 2026 do TRF4 (atualizado em 30/03/2026)
  //   Fonte: https://www.trf4.jus.br/trf4/controlador.php?acao=calendario_feriados_listar
  //   Nota: A Portaria nº 1064/2022 da Presidência do TRF4 (DE da JF4 de 16/12/2022), art. 1º, adota o calendário consolidado do Portal como calendário oficial dos feriados locais. A minuta cita a norma indicada para cada data. Conferido em 08/10/2026.
  //   Nota: 30/10: Portaria nº 233/2026, art. 1º (adia o Dia do Servidor de 28/10 para 30/10 em toda a Justiça Federal da 4ª Região). Pelo parágrafo único, há expediente em 28/10, salvo nas sedes em que 30/10 seja feriado municipal.
  //   Nota: JFRS, JFSC e JFPR têm calendários próprios.
  { tribunal: "TRF4", data: "2026-02-02", motivo: "Dia de Nossa Senhora dos Navegantes e Iemanjá (feriado municipal de Porto Alegre)", ato: "Lei Municipal nº 13.591/2023 de Porto Alegre", dispositivo: "", abrangencia: "local", sede: true, comarcas: ["Porto Alegre"] },
  { tribunal: "TRF4", data: "2026-02-16", motivo: "Carnaval", ato: "Lei nº 5.010/1966", dispositivo: "art. 62, III", abrangencia: "tribunal" },
  { tribunal: "TRF4", data: "2026-02-17", motivo: "Carnaval", ato: "Lei nº 5.010/1966", dispositivo: "art. 62, III", abrangencia: "tribunal" },
  { tribunal: "TRF4", data: "2026-04-01", motivo: "Semana Santa", ato: "Lei nº 5.010/1966", dispositivo: "art. 62, II", abrangencia: "tribunal" },
  { tribunal: "TRF4", data: "2026-04-02", motivo: "Semana Santa", ato: "Lei nº 5.010/1966", dispositivo: "art. 62, II", abrangencia: "tribunal" },
  { tribunal: "TRF4", data: "2026-04-03", motivo: "Semana Santa", ato: "Lei nº 5.010/1966", dispositivo: "art. 62, II", abrangencia: "tribunal" },
  { tribunal: "TRF4", data: "2026-04-21", motivo: "Tiradentes", ato: "Lei nº 662/1949", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF4", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Lei nº 662/1949", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF4", data: "2026-06-04", motivo: "Corpus Christi (feriado municipal de Porto Alegre)", ato: "Lei Municipal nº 4.453/1978 de Porto Alegre", dispositivo: "", abrangencia: "local", sede: true, comarcas: ["Porto Alegre"] },
  { tribunal: "TRF4", data: "2026-08-11", motivo: "Dia do Advogado", ato: "Lei nº 5.010/1966", dispositivo: "art. 62, IV", abrangencia: "tribunal" },
  { tribunal: "TRF4", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Lei nº 662/1949", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF4", data: "2026-09-20", motivo: "Data Magna do Rio Grande do Sul", ato: "Decreto Estadual nº 36.180/1995 do RS", dispositivo: "", abrangencia: "tribunal" },
  { tribunal: "TRF4", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Lei nº 6.802/1980", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF4", data: "2026-10-30", motivo: "Dia do Servidor Público", ato: "Portaria nº 233/2026 do TRF4", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF4", data: "2026-11-02", motivo: "Finados", ato: "Lei nº 5.010/1966", dispositivo: "art. 62, IV", abrangencia: "tribunal" },
  { tribunal: "TRF4", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Lei nº 14.759/2023", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF4", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Lei nº 5.010/1966", dispositivo: "art. 62, IV", abrangencia: "tribunal" },
  // TRF5: Ato nº 626/2025 da Presidência do TRF5
  //   Fonte: https://www4.trf5.jus.br/comunicacao-social/anexo/114014
  //   Nota: Vale para o Tribunal (2ª instância). As Seções Judiciárias publicam atos próprios (art. 7º).
  //   Nota: Pontos facultativos do art. 2º sem expediente (art. 3º).
  //   Nota: Recessos de janeiro e dezembro cobertos pela regra do art. 220 do CPC.
  { tribunal: "TRF5", data: "2026-02-13", motivo: "Expediente remoto (teletrabalho); prazos prorrogados para 19/02/2026", ato: "Ato nº 626/2025 da Presidência do TRF5", dispositivo: "art. 4º", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "TRF5", data: "2026-02-16", motivo: "Carnaval", ato: "Ato nº 626/2025 da Presidência do TRF5", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF5", data: "2026-02-17", motivo: "Carnaval", ato: "Ato nº 626/2025 da Presidência do TRF5", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF5", data: "2026-02-18", motivo: "Quarta-feira de Cinzas (ponto facultativo)", ato: "Ato nº 626/2025 da Presidência do TRF5", dispositivo: "art. 2º", abrangencia: "tribunal" },
  { tribunal: "TRF5", data: "2026-03-06", motivo: "Data Magna do Estado de Pernambuco", ato: "Ato nº 626/2025 da Presidência do TRF5", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF5", data: "2026-04-01", motivo: "Semana Santa", ato: "Ato nº 626/2025 da Presidência do TRF5", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF5", data: "2026-04-02", motivo: "Semana Santa", ato: "Ato nº 626/2025 da Presidência do TRF5", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF5", data: "2026-04-03", motivo: "Semana Santa", ato: "Ato nº 626/2025 da Presidência do TRF5", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF5", data: "2026-04-21", motivo: "Tiradentes", ato: "Ato nº 626/2025 da Presidência do TRF5", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF5", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Ato nº 626/2025 da Presidência do TRF5", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF5", data: "2026-06-04", motivo: "Corpus Christi (ponto facultativo)", ato: "Ato nº 626/2025 da Presidência do TRF5", dispositivo: "art. 2º", abrangencia: "tribunal" },
  { tribunal: "TRF5", data: "2026-06-23", motivo: "Véspera de São João (ponto facultativo)", ato: "Ato nº 626/2025 da Presidência do TRF5", dispositivo: "art. 2º", abrangencia: "tribunal" },
  { tribunal: "TRF5", data: "2026-06-24", motivo: "São João", ato: "Ato nº 626/2025 da Presidência do TRF5", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF5", data: "2026-07-16", motivo: "Nossa Senhora do Carmo", ato: "Ato nº 626/2025 da Presidência do TRF5", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF5", data: "2026-08-11", motivo: "Criação dos Cursos Jurídicos", ato: "Ato nº 626/2025 da Presidência do TRF5", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF5", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Ato nº 626/2025 da Presidência do TRF5", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF5", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Ato nº 626/2025 da Presidência do TRF5", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF5", data: "2026-10-28", motivo: "Dia do Servidor Público (ponto facultativo)", ato: "Ato nº 626/2025 da Presidência do TRF5", dispositivo: "art. 2º", abrangencia: "tribunal" },
  { tribunal: "TRF5", data: "2026-11-02", motivo: "Finados", ato: "Ato nº 626/2025 da Presidência do TRF5", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF5", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Ato nº 626/2025 da Presidência do TRF5", dispositivo: "art. 1º", abrangencia: "tribunal" },
  { tribunal: "TRF5", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Ato nº 626/2025 da Presidência do TRF5", dispositivo: "art. 1º", abrangencia: "tribunal" },
  // TRF6: Portaria Presi nº 1/2026 do TRF6
  //   Fonte: https://portal.trf6.jus.br/wp-content/uploads/2026/01/SEI_1571312_Portaria_Presi_1.pdf
  //   Nota: Vale para o 1º e o 2º graus da Justiça Federal da 6ª Região (art. 1º). Feriados municipais das subseções (art. 2º) não cadastrados nesta etapa.
  //   Nota: Pontos facultativos tratados como dia sem expediente (o ato os divulga para os fins dos arts. 219 e 224, § 1º, do CPC).
  { tribunal: "TRF6", data: "2026-02-16", motivo: "Carnaval", ato: "Portaria Presi nº 1/2026 do TRF6", dispositivo: "art. 1º, II", abrangencia: "tribunal" },
  { tribunal: "TRF6", data: "2026-02-17", motivo: "Carnaval", ato: "Portaria Presi nº 1/2026 do TRF6", dispositivo: "art. 1º, II", abrangencia: "tribunal" },
  { tribunal: "TRF6", data: "2026-02-18", motivo: "Quarta-feira de Cinzas: ponto facultativo até as 14h", ato: "Portaria Presi nº 1/2026 do TRF6", dispositivo: "art. 1º, III", abrangencia: "tribunal", tipo: "parcial" },
  { tribunal: "TRF6", data: "2026-04-01", motivo: "Semana Santa", ato: "Portaria Presi nº 1/2026 do TRF6", dispositivo: "art. 1º, IV", abrangencia: "tribunal" },
  { tribunal: "TRF6", data: "2026-04-02", motivo: "Semana Santa", ato: "Portaria Presi nº 1/2026 do TRF6", dispositivo: "art. 1º, IV", abrangencia: "tribunal" },
  { tribunal: "TRF6", data: "2026-04-03", motivo: "Semana Santa", ato: "Portaria Presi nº 1/2026 do TRF6", dispositivo: "art. 1º, IV", abrangencia: "tribunal" },
  { tribunal: "TRF6", data: "2026-04-20", motivo: "Ponto facultativo", ato: "Portaria Presi nº 1/2026 do TRF6", dispositivo: "art. 1º, V", abrangencia: "tribunal" },
  { tribunal: "TRF6", data: "2026-04-21", motivo: "Tiradentes", ato: "Portaria Presi nº 1/2026 do TRF6", dispositivo: "art. 1º, VI", abrangencia: "tribunal" },
  { tribunal: "TRF6", data: "2026-05-01", motivo: "Dia do Trabalho", ato: "Portaria Presi nº 1/2026 do TRF6", dispositivo: "art. 1º, VII", abrangencia: "tribunal" },
  { tribunal: "TRF6", data: "2026-06-04", motivo: "Corpus Christi", ato: "Portaria Presi nº 1/2026 do TRF6", dispositivo: "art. 1º, VIII", abrangencia: "tribunal" },
  { tribunal: "TRF6", data: "2026-06-05", motivo: "Ponto facultativo", ato: "Portaria Presi nº 1/2026 do TRF6", dispositivo: "art. 1º, IX", abrangencia: "tribunal" },
  { tribunal: "TRF6", data: "2026-08-10", motivo: "Ponto facultativo", ato: "Portaria Presi nº 1/2026 do TRF6", dispositivo: "art. 1º, X", abrangencia: "tribunal" },
  { tribunal: "TRF6", data: "2026-08-11", motivo: "Feriado forense (Dia do Advogado)", ato: "Portaria Presi nº 1/2026 do TRF6", dispositivo: "art. 1º, XI", abrangencia: "tribunal" },
  { tribunal: "TRF6", data: "2026-09-07", motivo: "Independência do Brasil", ato: "Portaria Presi nº 1/2026 do TRF6", dispositivo: "art. 1º, XII", abrangencia: "tribunal" },
  { tribunal: "TRF6", data: "2026-10-12", motivo: "Nossa Senhora Aparecida", ato: "Portaria Presi nº 1/2026 do TRF6", dispositivo: "art. 1º, XIII", abrangencia: "tribunal" },
  { tribunal: "TRF6", data: "2026-10-30", motivo: "Ponto facultativo (Dia do Servidor Público, transferido)", ato: "Portaria Presi nº 1/2026 do TRF6", dispositivo: "art. 1º, XIV", abrangencia: "tribunal" },
  { tribunal: "TRF6", data: "2026-11-02", motivo: "Finados", ato: "Portaria Presi nº 1/2026 do TRF6", dispositivo: "art. 1º, XV", abrangencia: "tribunal" },
  { tribunal: "TRF6", data: "2026-11-20", motivo: "Dia Nacional de Zumbi e da Consciência Negra", ato: "Portaria Presi nº 1/2026 do TRF6", dispositivo: "art. 1º, XVI", abrangencia: "tribunal" },
  { tribunal: "TRF6", data: "2026-12-07", motivo: "Ponto facultativo", ato: "Portaria Presi nº 1/2026 do TRF6", dispositivo: "art. 1º, XVII", abrangencia: "tribunal" },
  { tribunal: "TRF6", data: "2026-12-08", motivo: "Dia da Justiça", ato: "Portaria Presi nº 1/2026 do TRF6", dispositivo: "art. 1º, XVIII", abrangencia: "tribunal" },
  { tribunal: "TRF6", data: "2026-12-25", motivo: "Natal", ato: "Portaria Presi nº 1/2026 do TRF6", dispositivo: "art. 1º, XIX", abrangencia: "tribunal" },
  // ===== DEMAIS TRIBUNAIS (fim) =====
];

// Comarcas agregadas, conforme a lista do TJPE (nome exibido na lista de comarcas)
window.COMARCAS_AGREGADAS = {
  "Amaraji": "Primavera",
  "Belém de Maria": "Lagoa dos Gatos",
  "Brejão": "Garanhuns",
  "Buenos Aires": "Tracunhaém",
  "Calçado": "Lajedo",
  "Chã Grande": "Gravatá",
  "Fernando de Noronha": "Recife",
  "Ibirajuba": "Altinho",
  "Lagoa do Ouro": "Correntes",
  "Moreilândia": "Exu",
  "Palmares": "Joaquim Nabuco",
  "Palmeirina": "São João",
  "São Vicente Férrer": "Macaparana",
};

// Feriados municipais sem data específica ou com texto inconsistente na lista do TJPE: não entram no cálculo (prevalece a regra estadual); a página exibe alerta
window.FERIADOS_INDEFINIDOS = [
  { tribunal: "TJPE", comarca: "Belo Jardim", texto: "Festa das Marocas: 1ª ou 2ª semana do mês de julho" },
  { tribunal: "TJPE", comarca: "Feira Nova", texto: "Comemoração da Festa da Farinha: data móvel" },
  { tribunal: "TJPE", comarca: "Passira", texto: "Festa do Milho: julho, data móvel" },
  { tribunal: "TJPE", comarca: "Passira", texto: "Festa Anual do Bordado: novembro, data móvel" },
  { tribunal: "TJPE", comarca: "Saíré", texto: "Festival da Laranja: segunda-feira de novembro, data móvel" },
  { tribunal: "TJPE", comarca: "Garanhuns", texto: "2ª quinta-feira de maio, Corpus Christie (texto inconsistente na lista do TJPE)" },
  { tribunal: "TJPE", comarca: "Cortês", texto: "24 e 29 de junho, sexta-feira Santa (texto inconsistente na lista do TJPE)" },
  { tribunal: "TJPE", comarca: "Itambé", texto: "Corpus Christi municipal: data móvel" },
  { tribunal: "TJPE", comarca: "Vertentes", texto: "Corpus Christi municipal: data móvel" },
  { tribunal: "TJPE", comarca: "Camocim de São Félix", texto: "1ª segunda-feira após o Dia do Padroeiro" },
  { tribunal: "TJPE", comarca: "Escada", texto: "Dia da Padroeira Nossa Senhora de Escada: segunda-feira seguinte ao 3º domingo de novembro" },
  { tribunal: "TJPE", comarca: "Gameleira", texto: "Dia da Padroeira Nossa Senhora da Penha: 2ª segunda-feira de janeiro" },
  { tribunal: "TJPE", comarca: "Joaquim Nabuco", texto: "Dia da Cultura Nabuquense: última sexta-feira de setembro" },
  { tribunal: "TJPE", comarca: "Macaparana", texto: "Dia da Padroeira Nossa Senhora do Amparo: 3ª segunda-feira de novembro" },
  { tribunal: "TJPE", comarca: "Palmares", texto: "Dia dos Comerciários: 3ª segunda-feira de julho" },
  { tribunal: "TJPE", comarca: "Primavera", texto: "Festa do Padroeiro: 2ª segunda-feira de novembro" },
  { tribunal: "TJPE", comarca: "São Vicente Férrer", texto: "Dia da ressaca da Festa da Banana: 1ª segunda-feira após o último fim de semana de novembro" },
  { tribunal: "TJPE", comarca: "Tuparetama", texto: "Dia do Padroeiro Sagrado Coração de Jesus: junho, data móvel" },
];

// Alertas por tribunal (exibidos sempre que o tribunal é selecionado; "instancia" restringe à 1ª ou à 2ª instância)
window.ALERTAS_TRIBUNAIS = [
  {"tribunal": "STF", "texto": "No STF, os prazos costumam ficar suspensos durante as férias forenses (janeiro e julho) por portaria da Presidência. Confira o ato do período."},
  {"tribunal": "STJ", "texto": "Os prazos processuais no STJ costumam ficar suspensos durante as férias forenses de janeiro e julho por portaria da Presidência. Estão cadastradas as suspensões de 21 a 31/01/2026 e de 02 a 31/07/2026. Para os períodos seguintes, confira a portaria correspondente."},
  {"tribunal": "TJRJ", "texto": "O calendário do TJRJ foi conferido até 07/10/2026. Confira no portal do TJRJ as suspensões posteriores, inclusive a do Dia do Servidor Público (28/10), que depende de decreto estadual de ponto facultativo, e as suspensões restritas à comarca do processo."},
  {"tribunal": "TRF1", "instancia": "1", "texto": "Na 1ª instância, confira também os feriados e as suspensões da Seção ou Subseção Judiciária do processo. O calendário cadastrado para o TRF1 é o indicado no ato do Tribunal."},
  {"tribunal": "TRF2", "instancia": "1", "texto": "Na 1ª instância, confira também os feriados e as suspensões da Seção ou Subseção Judiciária do processo. O calendário cadastrado para o TRF2 é o indicado no ato do Tribunal."},
  {"tribunal": "TRF3", "instancia": "1", "texto": "Na 1ª instância, confira também os feriados e as suspensões da Seção ou Subseção Judiciária do processo. O calendário cadastrado para o TRF3 é o indicado no ato do Tribunal."},
  {"tribunal": "TRF4", "instancia": "1", "texto": "Na 1ª instância, confira também os feriados e as suspensões da Seção ou Subseção Judiciária do processo. O calendário cadastrado para o TRF4 é o indicado no ato do Tribunal."},
  {"tribunal": "TRF5", "instancia": "1", "texto": "Na 1ª instância, confira também os feriados e as suspensões da Seção ou Subseção Judiciária do processo. O calendário cadastrado para o TRF5 é o indicado no ato do Tribunal."},
  {"tribunal": "TRF6", "instancia": "1", "texto": "Na 1ª instância, confira também os feriados e as suspensões da Seção ou Subseção Judiciária do processo. O calendário cadastrado para o TRF6 é o indicado no ato do Tribunal."},
  {"tribunal": "TJAL", "texto": "TJAL: em 28/08/2026, as atividades e os prazos ficam suspensos só nos municípios com feriado de Nossa Senhora dos Prazeres (Ato Normativo nº 03/2026, art. 4º). Os feriados municipais das comarcas não estão cadastrados. Confira a comarca do processo."},
  {"tribunal": "TJAM", "texto": "TJAM: o calendário cadastrado é o da Portaria nº 4704/2025. Confira no DJe eventuais alterações posteriores e os feriados municipais da comarca do processo."},
  {"tribunal": "TJGO", "texto": "TJGO: o calendário cadastrado é o divulgado pelo TJGO em 13/01/2026. A Presidência pode decretar outros pontos facultativos durante o ano. Confira os decretos judiciários posteriores e os feriados municipais da sede da comarca do processo."},
  {"tribunal": "TJPI", "texto": "TJPI: em 14/12/2026 (Dia do Ministério Público) não há audiências nem sessões com intervenção do MP, e os prazos do MP que começam ou terminam nessa data ficam prorrogados (Provimento nº 59/2025, art. 3º). Os feriados municipais das comarcas não estão cadastrados; confira os atos da Presidência para a comarca do processo."},
  {"tribunal": "TJRR", "texto": "TJRR: o calendário cadastrado é o da Portaria TJRR/PR nº 1558/2025. Confira no DJe eventuais alterações posteriores e, nos postos avançados de Caroebe e Iracema, os feriados locais (15/05 e 04/11)."},
  {"tribunal": "TJRS", "texto": "TJRS: o calendário cadastrado é o do Ato nº 05/2025-OE. Pontos facultativos do Executivo não se aplicam. Os feriados municipais das comarcas do interior não estão cadastrados; confira a lei municipal da comarca do processo. Nos dias de jogo do Brasil na Copa (Ordem de Serviço nº 003/2026-P), confira a suspensão de prazos."},
  {"tribunal": "TJSC", "texto": "TJSC: o calendário cadastrado é o da Resolução GP nº 1/2026, que pode ter ajustes pontuais nas datas dos feriados municipais (art. 2º). Confira no DJe eventuais alterações e suspensões de expediente posteriores a janeiro."},
  {"tribunal": "TJSE", "texto": "TJSE: os pontos facultativos são declarados por Portaria Normativa da Presidência ao longo do ano. 07/12/2026 consta só como previsão no calendário. Os feriados municipais seguem o calendário do TJSE por município ou distrito; confira a comarca do processo."},
];
