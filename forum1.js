const postagensDiv = document.getElementById('postagens');
const formForum = document.getElementById('form-forum');

function carregarPostagens() {
  postagensDiv.innerHTML = '';
  let postagens = JSON.parse(localStorage.getItem('postagensEcoEduca')) || [];

  // Ordena crescente (mais antigo em cima)
  postagens.sort((a, b) => a.timestamp - b.timestamp);

  if(postagens.length === 0) {
    postagensDiv.innerHTML = '<p style="color:#555;">Nenhuma postagem ainda. Seja o primeiro!</p>';
    return;
  }

  // Cria as postagens com delay para animação sequencial
  postagens.forEach((p, i) => {
    const div = document.createElement('div');
    div.classList.add('postagem');
    div.style.animationDelay = (i * 0.15) + 's';

    const textoP = document.createElement('p');
    textoP.textContent = p.texto;
    div.appendChild(textoP);

    if(p.link) {
      const linkA = document.createElement('a');
      linkA.href = p.link;
      linkA.target = '_blank';
      linkA.rel = 'noopener noreferrer';
      linkA.textContent = p.link;
      div.appendChild(linkA);
    }

    postagensDiv.appendChild(div);
  });

  // Scroll suave para o final
  postagensDiv.scrollTo({ top: postagensDiv.scrollHeight, behavior: 'smooth' });
}

carregarPostagens();

formForum.addEventListener('submit', e => {
  e.preventDefault();

  const texto = formForum.texto.value.trim();
  const link = formForum.link.value.trim();

  if (!texto) {
    alert('Por favor, escreva um texto para a postagem.');
    return;
  }

  let postagens = JSON.parse(localStorage.getItem('postagensEcoEduca')) || [];
  postagens.push({
    texto,
    link: link || null,
    timestamp: Date.now()
  });

  localStorage.setItem('postagensEcoEduca', JSON.stringify(postagens));

  carregarPostagens();
  formForum.reset();
  formForum.textarea.focus();
});