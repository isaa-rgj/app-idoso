let tamanhoFonte = 100;

// Aumentar a fonte
document.getElementById('btn-aumentar').addEventListener('click', () => {
  if (tamanhoFonte < 150) {
    tamanhoFonte += 10;
    document.body.style.fontSize = `${tamanhoFonte}%`;
  }
});

// Diminuir a fonte
document.getElementById('btn-diminuir').addEventListener('click', () => {
  if (tamanhoFonte > 70) {
    tamanhoFonte -= 10;
    document.body.style.fontSize = `${tamanhoFonte}%`;
  }
});

// Leitura em voz alta
document.getElementById('btn-leitura').addEventListener('click', () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const texto = document.body.innerText;
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = 'pt-BR';
    window.speechSynthesis.speak(fala);
  } else {
    alert('Seu navegador não suporta leitura em voz alta.');
  }
});