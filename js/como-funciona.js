document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('ativo'));
      btn.classList.add('ativo');

      const target = btn.getAttribute('data-tab');
      document.querySelectorAll('.tab-passo').forEach(p => p.classList.remove('ativo'));
      document.getElementById(target).classList.add('ativo');
    });
  });
