const camposFormulario = document.querySelectorAll(".input");
const campoObrigatorio = document.querySelectorAll("span");
const botaoEnviar = document.querySelector(".btn");

camposFormulario.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value != "") {
            input.classList.add("campo-preenchido")
        } else {
            input.classList.remove("campo-preenchido")
        }
    });
});

botaoEnviar.addEventListener('click', (e) => {
    e.preventDefault()
    camposFormulario.forEach(input => {
        if (input.value == "") {
            input.classList.add("erro-validacao");
            input.nextElementSibling.classList.add("erro-validacao");
        } else {
            input.classList.remove("erro-validacao");
            input.nextElementSibling.classList.remove("erro-validacao");
        }
    });
});

