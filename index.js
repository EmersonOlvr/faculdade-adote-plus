const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

// formulário de adoção
document.getElementById('adocao-form')?.addEventListener('submit', function (event) {
    event.preventDefault();

    let imageUrl = document.getElementById("message-image").value;
    let name = document.getElementById("message-name").value;
    let description = document.getElementById("message-description").value;

    let animaisParaAdocaoStr = localStorage.getItem("animaisParaAdocao");
    let animaisParaAdocaoArr = animaisParaAdocaoStr ? JSON.parse(animaisParaAdocaoStr) : [];

    animaisParaAdocaoArr.push({ urlImagem: imageUrl, nome: name, descricao: description });
    localStorage.setItem("animaisParaAdocao", JSON.stringify(animaisParaAdocaoArr));

    // limpa os campos do formulário
    this.reset();

    // fechar o modal
    let modal = bootstrap.Modal.getInstance(document.getElementById('addAnimalModal'));
    modal.hide();

    setTimeout(() => {
        alert(`O animal "${name}" foi cadastrado!`);

        // recarrega a página
        window.location.reload();
    }, 250);
});

// formulário de agendamento
document.getElementById('agendamento-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const visitDate = document.getElementById('dataVisita').value;
    const phone = document.getElementById('telefone').value;

    let agendamentosStr = localStorage.getItem("agendamentos");
    let agendamentosArr = agendamentosStr ? JSON.parse(agendamentosStr) : [];

    agendamentosArr.push({ name, email, visitDate, phone, date: new Date() });
    localStorage.setItem("agendamentos", JSON.stringify(agendamentosArr));

    // limpa os campos do formulário
    this.reset();

    setTimeout(() => {
        alert('Agendamento realizado com sucesso!');

        // recarrega a página
        window.location.reload();
    }, 250);
});

document.getElementById('contato-form')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // limpa os campos do formulário
    this.reset();

    alert('Recebemos o seu contato, obrigado! Retornaremos o quanto antes.');
});