document.getElementById('generar').addEventListener('click', function () {
  const numerosSet = new Set();

  while (numerosSet.size < 6) {
    const numero = Math.floor(Math.random() * 45) + 1;
    numerosSet.add(numero);
  }

  const numerosArray = [...numerosSet].sort((a, b) => a - b);

  // Mostrar solo en #result
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  numerosArray.forEach(num => {
    const span = document.createElement('span');
    span.textContent = num.toString().padStart(2, '0');
    span.classList.add('numero-generado');
    resultDiv.appendChild(span);
  });

  // Guardar los números para el botón Copiar
  document.getElementById('copiar').setAttribute('data-numeros', numerosArray.join(' '));
});

document.getElementById('copiar').addEventListener('click', function () {
  const numeros = this.getAttribute('data-numeros');
  navigator.clipboard.writeText(numeros).then(() => {
    alert('Números copiados: ' + numeros);
  });
});
