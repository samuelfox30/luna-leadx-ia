
  document.querySelectorAll('.faq-pergunta').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      item.classList.toggle('ativo');
    });
  });
