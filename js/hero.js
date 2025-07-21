const frases = [
  "Atendimento 24/7",
  "Qualificação Inteligente",
  "Agendamento Automático",
  "Follow-ups Dinâmicos",
  "Respostas Humanizadas",
  "Insights valiosos"
];

let indexFrase = 0;
let indexLetra = 0;
let apagando = false;
const typedText = document.querySelector(".typed-text");

function digitar() {
  if (!typedText) return; // Garante que o elemento existe

  const fraseAtual = frases[indexFrase];

  if (!apagando) {
    typedText.textContent = fraseAtual.slice(0, ++indexLetra);
    if (indexLetra === fraseAtual.length) {
      apagando = true;
      setTimeout(digitar, 1600);
      return;
    }
  } else {
    typedText.textContent = fraseAtual.slice(0, --indexLetra);
    if (indexLetra === 0) {
      apagando = false;
      indexFrase = (indexFrase + 1) % frases.length;
    }
  }

  setTimeout(digitar, apagando ? 50 : 90);
}

document.addEventListener("DOMContentLoaded", digitar);