const limparBt = document.querySelector(".limparBt");
const formulario = document.querySelector("[data-form]");

limparBt.addEventListener("click", () => {
    formulario.reset(); // Reseta todos os campos do formulário
});