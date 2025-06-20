// Mensagem de boas-vindas ao carregar a página
window.onload = function () {
  alert("Bem-vindo ao EcoEduca! 🌱 Vamos aprender juntos a cuidar do planeta.");
};

// Efeito de destaque nos cartões ao passar o mouse
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
  });

  card.addEventListener("click", () => {
    const title = card.querySelector("h3").textContent;
    alert(`Você clicou em: ${title}`);
  });
});

// Envio do formulário de contato (simulado)
document.getElementById("form-contato").addEventListener("submit", function(event) {
  event.preventDefault(); // impede o envio real

  // Mostra mensagem de confirmação
  document.getElementById("mensagem-envio").style.display = "block";

  // Limpa o formulário
  this.reset();
});<script>
    // Script para o fórum anônimo
    const formForum = document.getElementById('form-forum');
    const postagensDiv = document.getElementById('postagens');

    formForum.addEventListener('submit', function (e) {
      e.preventDefault();

      const texto = document.getElementById('texto').value.trim();
      const link = document.getElementById('link').value.trim();

      if (!texto) {
        alert('Por favor, escreva um texto para a postagem.');
        return;
      }

      // Criar o elemento postagem
      const postagem = document.createElement('div');
      postagem.classList.add('postagem');

      const textoP = document.createElement('p');
      textoP.textContent = texto;
      postagem.appendChild(textoP);

      if (link) {
        const linkA = document.createElement('a');
        linkA.href = link;
        linkA.target = '_blank';
        linkA.rel = 'noopener noreferrer';
        linkA.textContent = link;
        postagem.appendChild(linkA);
      }

      // Inserir a postagem no topo
      postagensDiv.insertBefore(postagem, postagensDiv.firstChild);

      // Limpar formulário
      formForum.reset();
    });
  </script>
  <script src="script.js"></script>
</body>
</html>