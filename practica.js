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
  