document.addEventListener('DOMContentLoaded', function () {
  const generateBtn = document.getElementById('generate-btn');
  const resultContainer = document.getElementById('result');
  const copiarBtn = document.getElementById('copiar');

  generateBtn.addEventListener('click', function () {
    resultContainer.innerHTML = '';

    const numeros = new Set();

    while (numeros.size < 6) {
      const num = Math.floor(Math.random() * 46);
      numeros.add(num);
    }

    const numerosArray = Array.from(numeros).sort((a, b) => a - b);

    numerosArray.forEach(num => {
      const formattedNum = num.toString().padStart(2, '0');

      const square = document.createElement('div');
      square.classList.add('result-square');
      square.textContent = formattedNum;

      resultContainer.appendChild(square);
    });

    // Guardar y mostrar botón
    copiarBtn.setAttribute('data-numeros', numerosArray.map(n => n.toString().padStart(2, '0')).join(' '));
    copiarBtn.style.display = 'inline-block';
  });

  copiarBtn.addEventListener('click', function () {
    const numeros = copiarBtn.getAttribute('data-numeros');

    navigator.clipboard.writeText(numeros)
      .then(() => {
        alert("¡Números copiados al portapapeles!");
      })
      .catch(() => {
        alert("Error al copiar los números.");
      });
  });
});
