const camposFormulario = document.querySelectorAll(".input");
const campoObrigatorio = document.querySelectorAll("span");
const botaoEnviar = document.querySelector(".btn");

camposFormulario.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value != "") {
            input.classList.add("campo-preenchido")
        }else {
            input.classList.remove("campo-preenchido")
        }
    });
});

botaoEnviar.addEventListener('click', () => {
    camposFormulario.forEach(input => {
        if (input.value == "") {
        input.classList.add("erro-validacao")
    }
    });
});



