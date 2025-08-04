window.addEventListener("load", function () {
    const form = document.getElementById("contact-form");
    if (!form) return; 

    const nameInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("mensagem");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (nameInput.value.trim() === "") {
            Swal.fire({
                title: "Atenção!",
                text: "Por favor, preencha o campo 'Nome'",
                icon: "warning"
            });
            nameInput.focus();
            return;
        }

        if (emailInput.value.trim() === "") {
            Swal.fire({
                title: "Atenção!",
                text: "Por favor, preencha o campo 'E-mail'",
                icon: "warning"
            });
            emailInput.focus();
            return;
        }

        if (messageInput.value.trim() === "") {
           Swal.fire({
               title: "Atenção!",
               text: "Por favor, preencha o campo 'Mensagem'",
               icon: "warning"
           });
            messageInput.focus();
            return;
        }

        Swal.fire({
            title: "Booaaa!",
            text: "Mensagem Enviada!!",
            imageUrl: "https://media.tenor.com/dkk2b8SGz-gAAAAM/botaabucetanareta-gato-thumbsup.gif",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
        });
    });
});
