function converterParaMoeda(valor) {
    // Converter o valor para string de moeda brasileira (R$)
    // Dividir o valor por 100 para obter o valor em reais
    const valorEmReais = valor / 100;
    return valorEmReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

import { conectar } from "./conectar.js";

const listaProdutos = document.querySelector("[data-lista]");

function buildItem(nome, valor, imagem, id) {
    const item = document.createElement("li"); //Criar elemento de lista
    item.id = id;
    item.className = "item"; //Nome para o CSS

    const valorConvertido = converterParaMoeda(valor);

    // Construir o item html
    item.innerHTML = `<img src="${imagem}" alt="imagem produto">
                    <div class="descricao">
                        <h2>${nome}</h1>
                    <div class="bottom">
                        <p>${valorConvertido}</p>
                        <button class="removerBt">
                            <img src="./images/trash.png" alt="Remover" style="height: 20px; width: 20px;">
                        </button>
                    </div>
                    </div>`;

    return item;
}

async function listarProdutos() {
    try {
        const listaApi = await conectar.listaProdutos();
        listaApi.forEach(elemento => listaProdutos.appendChild(
            buildItem(elemento.nome, elemento.valor, elemento.imagem, elemento.id)));
    } catch (e) {
        listaProdutos.innerHTML = `<h2 class="mensagem_error">Não foi possivel carregar a lista de produtos.</h2>`;
        console.log(e);
    }
}

listarProdutos();