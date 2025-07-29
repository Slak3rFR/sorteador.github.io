<<<<<<< HEAD
document.getElementById('generate-btn').addEventListener('click', function() {
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    
    var numbers = [];
    
    // Genera y almacena los números, asegurándose de que no se repitan
    while (numbers.length < 6) {
      var randomNumber = Math.floor(Math.random() * 46); // Genera un número entre 0 y 45
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    
    // Ordena los números de menor a mayor
    numbers.sort(function(a, b) {
      return a - b;
    });
    
    // Muestra los números ordenados
    for (var i = 0; i < numbers.length; i++) {
      var formattedNumber = ("0" + numbers[i]).slice(-2); // Asegura que el número tenga dos dígitos
      resultDiv.innerHTML += '<div class="result-square">' + formattedNumber + '</div>';
    }

    function generarNumeros() {
  const numeros = new Set();

  while (numeros.size < 6) {
    let numero = Math.floor(Math.random() * 46); // 0 a 45
    numeros.add(numero.toString().padStart(2, '0')); // Rellena con 0 si es <10
  }

  const numerosArray = Array.from(numeros).sort();
  const contenedor = document.getElementById('numeros');
  contenedor.innerHTML = '';

  numerosArray.forEach(num => {
    const span = document.createElement('span');
    span.textContent = num;
    span.style.border = '2px solid yellow';
    span.style.color = 'yellow';
    span.style.display = 'inline-block';
    span.style.padding = '10px';
    span.style.margin = '5px';
    span.style.backgroundColor = 'black';
    contenedor.appendChild(span);
  });

  // Guarda los números en un atributo para copiarlos después
  contenedor.setAttribute('data-numeros', numerosArray.join(' '));
}

  });
  
=======
document.getElementById('generate-btn').addEventListener('click', function() {
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    
    var numbers = [];
    
    // Genera y almacena los números, asegurándose de que no se repitan
    while (numbers.length < 6) {
      var randomNumber = Math.floor(Math.random() * 46); // Genera un número entre 0 y 45
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    
    // Ordena los números de menor a mayor
    numbers.sort(function(a, b) {
      return a - b;
    });
    
    // Muestra los números ordenados
    for (var i = 0; i < numbers.length; i++) {
      var formattedNumber = ("0" + numbers[i]).slice(-2); // Asegura que el número tenga dos dígitos
      resultDiv.innerHTML += '<div class="result-square">' + formattedNumber + '</div>';
    }
  });
  
>>>>>>> 84012a91c1c505a5bbad23143cd41a2b4094131f
