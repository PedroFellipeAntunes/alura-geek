// Conexao com backend
async function listaProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();
    // console.log(conexaoConvertida);
    return conexaoConvertida;
}

// Salvar no backend
async function postProduto(nome, valor, imagem) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor: valor,
            imagem: imagem
        })
    });

    if (!conexao.ok) {
        throw new Error("Não foi possivel guardar o produto");
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

// Remover no backend com query string
async function removerProduto(id) {
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });

    if (!conexao.ok) {
        throw new Error("Não foi possível remover o produto");
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectar = {
    listaProdutos,
    postProduto,
    removerProduto
};