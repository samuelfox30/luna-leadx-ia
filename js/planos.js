document.querySelectorAll('.plano-opcao').forEach(btn => {
  btn.addEventListener('click', () => {
    // Ativa visual
    document.querySelectorAll('.plano-opcao').forEach(b => b.classList.remove('ativo'));
    btn.classList.add('ativo');

    const tipo = btn.getAttribute('data-tipo');
    document.querySelectorAll('.plano-card').forEach(card => {
      const valorBase = parseFloat(card.getAttribute('data-valor'));

      if (tipo === "mensal") {
        // Remove valores anual
        card.querySelector('.preco-original')?.remove();
        card.querySelector('.preco-anual')?.remove();
        card.querySelector('.selo-desconto')?.remove();

        card.querySelector('.preco-mensal').style.display = "block";
      } else {
        // Oculta valor mensal
        card.querySelector('.preco-mensal').style.display = "none";

        // Adiciona etiqueta 15% OFF
        if (!card.querySelector('.selo-desconto')) {
          const selo = document.createElement('div');
          selo.classList.add('selo-desconto');
          selo.textContent = "15% OFF";
          card.prepend(selo);
        }

        // Insere valores com desconto
        if (!card.querySelector('.preco-original')) {
          const original = document.createElement('div');
          original.classList.add('preco-original');
          original.textContent = `R$${valorBase.toFixed(2)}/mês`;
          card.querySelector('p').before(original);
        }

        if (!card.querySelector('.preco-anual')) {
          const desconto = valorBase * 0.85;
          const novo = document.createElement('div');
          novo.classList.add('preco-anual');
          novo.textContent = `R$${desconto.toFixed(2)}/mês`;
          card.querySelector('p').before(novo);
        }
      }
    });
  });
});
