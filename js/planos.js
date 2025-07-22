// Alternância entre planos mensal e anual
document.querySelectorAll('.plano-opcao').forEach(btn => {
  btn.addEventListener('click', () => {
    // Ativa botão selecionado
    document.querySelectorAll('.plano-opcao').forEach(b => b.classList.remove('ativo'));
    btn.classList.add('ativo');

    const tipo = btn.getAttribute('data-tipo');

    // Mostra texto correspondente
    document.getElementById('mensal-info').style.display = tipo === 'mensal' ? 'block' : 'none';
    document.getElementById('anual-info').style.display = tipo === 'anual' ? 'block' : 'none';

    // Atualiza preços dos cards
    document.querySelectorAll('.plano-card').forEach(card => {
      const valorBase = parseFloat(card.getAttribute('data-valor'));

      if (tipo === "mensal") {
        // Remove valores do plano anual
        card.querySelector('.preco-original')?.remove();
        card.querySelector('.preco-anual')?.remove();
        card.querySelector('.selo-desconto')?.remove();
        card.querySelector('.preco-mensal').style.display = "block";
      } else {
        // Oculta valor mensal
        card.querySelector('.preco-mensal').style.display = "none";

        // Adiciona selo "15% OFF"
        if (!card.querySelector('.selo-desconto')) {
          const selo = document.createElement('div');
          selo.classList.add('selo-desconto');
          selo.textContent = "15% OFF";
          card.prepend(selo);
        }

        // Preço original
        if (!card.querySelector('.preco-original')) {
          const original = document.createElement('div');
          original.classList.add('preco-original');
          original.textContent = `R$${valorBase.toFixed(2)}/mês`;
          card.querySelector('p').before(original);
        }

        // Preço com desconto
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

// Observa quando a section entra na tela e inicia o contador
const sectionPlanos = document.querySelector('.section-planos-luna');
let ofertaAtivada = false;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !ofertaAtivada) {
      ofertaAtivada = true;
      setTimeout(() => {
        document.getElementById('popup-oferta').style.display = 'block';
      }, 15000); // 15 segundos depois de visível
    }
  });
}, { threshold: 0.5 }); // metade visível

observer.observe(sectionPlanos);

// Fecha pop-up manualmente
function fecharPopupOferta() {
  document.getElementById('popup-oferta').style.display = 'none';
}