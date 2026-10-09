# Calculadora de Prazos

Página de conferência de prazos processuais, com geração da minuta do tópico de tempestividade nos modelos do escritório.

## Arquivos

| Arquivo | Função |
|---|---|
| `index.html` | A página da calculadora |
| `atos.js` | Repositório de feriados e suspensões dos tribunais |
| `assets/` | Logos do escritório |

## Conteúdo do repositório

- **TJPE 2026:** Ato Conjunto nº 43/2025, art. 1º (incisos e parágrafo único), art. 2º (Recife) e feriados municipais (art. 4º).
- **TJPE 2027:** Ato nº 1502/2026, art. 1º (incisos e parágrafo único), art. 2º (Recife), art. 4º (01/11/2027) e feriados municipais (art. 5º).
- **Feriados municipais:** lista do portal do TJPE "Feriados Oficiais nas Comarcas de Pernambuco", atualizada em 14/01/2026. Entram no cálculo somente os feriados com data específica. Os de data móvel ou com texto inconsistente não entram no cálculo (prevalece a regra estadual) e aparecem como alerta ao selecionar a comarca.
- **Demais tribunais (calendários gerais de 2026):** TJAC, TJAL, TJAM, TJAP, TJBA, TJCE, TJDFT, TJES, TJGO, TJMA, TJMG, TJMS, TJMT, TJPA, TJPB, TJPI, TJPR, TJRJ, TJRO, TJRR, TJSP, TJTO, TRF1 a TRF6, STJ e STF (STJ e STF com 2027 parcial). O ato, a fonte e as observações de cada tribunal estão em comentários no `atos.js`.
- **Feriados municipais de outros tribunais:** cadastrados no TJAP, TJMG, TJMS, TJMT e TJRR, conforme o ato ou a lista oficial de cada tribunal (selecione a comarca). Nos demais, só os da capital previstos no próprio ato do tribunal.
- **Alertas por tribunal:** lista `window.ALERTAS_TRIBUNAIS` no final do `atos.js` (por exemplo, férias forenses no STJ e no STF e conferência da Seção Judiciária na 1ª instância dos TRFs).
- **Alerta de lei local:** sempre que um feriado municipal entra na contagem, a página pede a conferência na lei municipal e mostra a lei cadastrada no campo `lei`, ou informa que ela não foi indicada pelo TJPE.

## Como incluir ou alterar um ato

1. Abra o arquivo `atos.js`.
2. Copie uma linha existente, cole logo abaixo e altere os dados.
3. Mantenha as aspas e a vírgula no final da linha.
4. Salve o arquivo e envie a alteração ao GitHub. O site é atualizado para todos em alguns minutos.

Exemplo de suspensão em todo o tribunal:

```js
{ tribunal: "TJPE", data: "2026-12-15", motivo: "Suspensão de expediente", ato: "Portaria nº 00/2026 do TJPE", dispositivo: "art. 1º", abrangencia: "tribunal" },
```

Exemplo de feriado municipal de comarca do interior:

```js
{ tribunal: "TJPE", data: "2026-03-12", motivo: "Aniversário do município", ato: "Lei Municipal nº 0000/0000 de Olinda", dispositivo: "art. 1º", abrangencia: "local", sede: false, comarcas: ["Olinda"] },
```

Exemplo de expediente parcial ou ponto facultativo com expediente (conta como dia útil e gera alerta):

```js
{ tribunal: "TJCE", data: "2026-02-18", motivo: "Quarta-feira de Cinzas: ponto facultativo até as 14h", ato: "Portaria nº 2924/2025 do TJCE", dispositivo: "art. 1º e Anexo Único", abrangencia: "tribunal", tipo: "parcial" },
```

Na minuta, o trecho sai como: "nos termos do [dispositivo] do [ato]" ou, quando o nome do ato começa por Lei, Portaria ou Resolução, "nos termos do [dispositivo] da [ato]". Com o campo `dispositivo` vazio (""), sai apenas "nos termos do [ato]". Com mais de um artigo ("arts. 1º e 2º"), sai "nos termos dos arts. ...". Quando o dispositivo termina em inciso, alínea ou parágrafo, entra vírgula antes de "do/da" (por exemplo, "art. 36, I, da Lei").

## Regras de cálculo

- **DJEN:** a publicação é o 1º dia útil seguinte à disponibilização. A contagem começa no 1º dia útil seguinte à publicação.
- **Domicílio Judicial Eletrônico:** o dia do começo é o 5º dia útil seguinte à ciência. A contagem começa no dia útil seguinte.
- **Juntada do mandado:** a contagem começa no 1º dia útil seguinte à juntada.
- **Audiência de conciliação ou de mediação (Contestação, art. 335, I, do CPC):** a contagem começa no 1º dia útil seguinte à audiência.
- **Impugnação ao cumprimento de sentença:** duas contagens em sequência. Primeiro, 15 dias úteis para pagamento voluntário (art. 523 do CPC), a partir do 1º dia útil seguinte à publicação. Depois, 15 dias úteis para a impugnação (art. 525 do CPC), a partir do 1º dia útil seguinte ao fim do prazo de pagamento.
- **Recesso:** de 20/12 a 20/01 os prazos ficam suspensos (art. 220 do CPC).
- **Ponto facultativo sem expediente:** conta como dia não útil.
- **Meio expediente ou ponto facultativo com expediente:** conta como dia útil (margem de segurança). A página exibe alerta de que o prazo pode se encerrar no dia útil seguinte e pede a conferência do usuário.
- **Ato sem artigo indicado:** a minuta cita apenas o ato.
- **Indisponibilidade do sistema:** segue o art. 11 da Resolução CNJ nº 185/2013.

## Textos das minutas

Todas as peças usam textos aprovados pelo escritório. Para alterar um texto, envie o novo modelo e peça a alteração.

## Aviso

Ferramenta de conferência. O resultado não dispensa a verificação do prazo pelo profissional responsável.
