
  function animarContagem(el, valorFinal, prefix = '', sufix = '', duracao = 2000) {
    let startTime = null;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progresso = Math.min(progress / duracao, 1);
      const valorAtual = Math.floor(progresso * valorFinal);
      el.textContent = prefix + valorAtual.toLocaleString() + sufix;

      if (progresso < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('.contar');

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const valor = parseInt(el.getAttribute('data-valor'));
          const prefix = el.getAttribute('data-prefix') || '';
          const sufix = el.getAttribute('data-sufix') || '';
          animarContagem(el, valor, prefix, sufix);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.6 });

    elementos.forEach(el => observer.observe(el));
  });
