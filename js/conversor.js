const inputValor = document.querySelector(".valor_input");

// Função para formatar o valor como moeda
function formatarValor(valor) {
    const valorEmReais = parseFloat(valor.replace(',', '.')); // Convertendo a string para número
    return valorEmReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Evento de mudança no input
inputValor.addEventListener("input", () => {
    let valor = inputValor.value;

    // Se o campo estiver vazio, retorna vazio
    if (valor === "") {
        inputValor.value = "";
        return;
    }

    // Força o input a ser um número, removendo tudo o que não for número
    valor = valor.replace(/\D/g, ""); // Remove tudo o que não for número
    
    // Verifica se o valor é um número válido
    if (valor === "" || isNaN(valor)) {
        inputValor.value = ""; // Se não for número, limpa o campo
        return;
    }

    // Converte o valor de centavos para reais e formata para 2 casas decimais
    valor = (parseInt(valor) / 100).toFixed(2);
    inputValor.value = formatarValor(valor); // Aplica a formatação de moeda
});
