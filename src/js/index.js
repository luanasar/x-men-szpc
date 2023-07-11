// O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena e mostrar a imagem, o nome e o texto grande do personagem que está selecionado.

// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
// passo 1 - pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles - QUERY SELECTOR ALL
// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse - EVENT LISTENER E CLASSLIST.ADD
// passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele QUERY SELECTOR E CLASSLIST.REMOVE

// OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocara imagem, o nome e a descrição do personagem grande
//     passo 1 - pegar o elemento do personagem grande para adicionar as informações nele
//     passo 2 - alterar a imagem do personagem grande
//     passo 3 - alterar o nome do personagem grande
//     passo 4 - alterar a descrição do personagem grande

// OBJETIVO 1
const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    // MOBILE
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    removerSelecaoDoPersonagem();

    personagem.classList.add("selecionado");

    // OBJETIVO 2
    alterarImagemPersonagemSelecionado(personagem);

    alterarNomePersonagemSelecionado(personagem);

    alterarDescricaoPersonagem(personagem);
  });
});
function alterarDescricaoPersonagem(personagem) {
  const descricaoPersonagem = document.getElementById("descricao-personagem");
  descricaoPersonagem.innerText = personagem.getAttribute("data-description");
}

function alterarNomePersonagemSelecionado(personagem) {
  const nomePersonagem = document.getElementById("nome-personagem");
  nomePersonagem.innerText = personagem.getAttribute("data-name");
}

function alterarImagemPersonagemSelecionado(personagem) {
  const imagemPersonagemGrande = document.querySelector(".personagem-grande");

  const idPersonagem = personagem.attributes.id.value;
  imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector(".selecionado");
  personagemSelecionado.classList.remove("selecionado");
}
