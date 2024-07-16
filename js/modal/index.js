// script.js
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const opepBtn = document.getElementById('open-btn');
  const closeBtn = document.getElementById('close-btn');

  // Função para abrir o modal
  function openModal() {
      modal.style.display = 'flex';
  }

  // Função para fechar o modal
  function closeModal() {
      modal.style.display = 'none';
  }

  // Event listener para o botão de abrir
  opepBtn.addEventListener('click', openModal);

  // Event listener para o botão de fechar
  closeBtn.addEventListener('click', closeModal);

  // Exemplo de como abrir o modal após 3 segundos
  //setTimeout(openModal, 3000);
});
