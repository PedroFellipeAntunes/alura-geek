import { conectar } from "./conectar.js";

const listaProdutos = document.querySelector("[data-lista]");

async function removerProduto (evento) {
    if (evento.target.closest(".removerBt")) {
        const item = evento.target.closest(".item"); // Pega o li mais próximo do botão
        const id = item.id; // Pega o id do li

        try {
            // Chama a função de remover produto passando o id
            await conectar.removerProduto(id);
        } catch (e) {
            alert("Erro ao remover o produto!");
            console.log(e);
        }
    }
}

// Evento de clique no botão de remover
listaProdutos.addEventListener("click", evento => removerProduto(evento));