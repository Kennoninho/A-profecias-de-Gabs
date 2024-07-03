const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual das abordagens você acredita ser mais eficaz para reduzir o desflorestamento?",
        alternativas: [
            {
                texto: "Implementação de políticas rigorosas e fiscalização para impedir o corte ilegal de árvores.",
                afirmacao: "De acordo com os meus cálculos: Você gosta de política"
            },
            {
                texto: "Incentivo econômico para comunidades locais desenvolverem práticas sustentáveis de uso da terra.",
                afirmacao: "De acordo com os meus cálculos: Você é pobre"
            }
        ]
    },
    {
        enunciado: "Como você vê a questão do desflorestamento em áreas protegidas?",
        alternativas: [
            {
                texto: "Permitir atividades econômicas controladas para sustentar as comunidades locais.",
                afirmacao: " mas você é quase o MrBeast, "
            },
            {
                texto: "Reforçar as restrições para proteger a biodiversidade e os serviços ecossistêmicos das áreas protegidas.",
                afirmacao: " mas você tenta se fazer de mãe natureza, "
            }
        ]
    },
    {
        enunciado: "Quando se trata de mitigar o impacto do desflorestamento, qual estratégia é mais ética?",
        alternativas: [
            {
                texto: "Compensar o desmatamento com projetos de reflorestamento em outras regiões.",
                afirmacao: "você é o MrBeast, "
            },
            {
                texto: "Investir em tecnologias que permitam aumentar a produtividade agrícola sem a necessidade de expansão sobre áreas de floresta.",
                afirmacao: "você é o Elon Musk, "
            }
        ]
    },
    {
        enunciado: "Diante da demanda global por produtos agrícolas, qual deve ser a prioridade?",
        alternativas: [
            {
                texto: "Expandir as áreas cultiváveis, mesmo que isso signifique desmatar mais florestas.",
                afirmacao: "só que você se esqueceu que na verdade você é o Luis Inácio Lula da Silva "
            },
            {
                texto: "Promover práticas agrícolas sustentáveis e intensificar a produtividade em terras já desmatadas.",
                afirmacao: "só que você se esqueceu que na verdade você é realmente o MrBeast "
            }
        ]
    },
    {
        enunciado: "Como você equilibra os interesses econômicos com a conservação ambiental no contexto do desflorestamento?",
        alternativas: [
            {
                texto: "Priorizar o crescimento econômico para garantir o desenvolvimento das comunidades.",
                afirmacao: "com um bom coração"
            },
            {
                texto: "Implementar políticas que promovam o desenvolvimento sustentável e a conservação das florestas como pilares igualmente importantes para o bem-estar humano a longo prazo",
                afirmacao: "com AIDS."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "Receba.";
}

mostraPergunta();
