function converterParaCentavos(valorFormatado) {
    // Remove o símbolo de moeda e qualquer espaço extra
    let valor = valorFormatado.replace('R$', '').trim();

    // Substitui a vírgula por ponto para garantir que seja interpretado como número
    valor = valor.replace(',', '.');

    // Converte o valor para número e multiplica por 100 para obter centavos
    const valorEmCentavos = Math.round(parseFloat(valor) * 100);

    return valorEmCentavos;
}

import { conectar } from "./conectar.js";

const form = document.querySelector("[data-form]");

async function adicionarProduto(evento) {
    evento.preventDefault(); // Evita que o "submit" recarregue a pagina

    const nome = form.querySelector(".nome_input").value;
    const valor = form.querySelector(".valor_input").value;
    const valorConvertido = converterParaCentavos(valor);
    const imagem = form.querySelector(".imagem_input").value;

    try {
        await conectar.postProduto(nome, valorConvertido, imagem);
    } catch (e) {
        alert(e);
    }
}

form.addEventListener("submit", evento => adicionarProduto(evento));