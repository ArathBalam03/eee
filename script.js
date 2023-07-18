// Función para encontrar el número más grande en un arreglo
function findLargestNumber() {
    const numbers = [];
    let inputNumber;
    do {
      inputNumber = prompt("Ingrese un número (o escriba 'fin' para detenerse):");
      if (inputNumber !== "fin") {
        numbers.push(parseFloat(inputNumber));
      }
    } while (inputNumber !== "fin");
  
    if (numbers.length > 0) {
      const largestNumber = Math.max(...numbers);
      alert("El número más grande ingresado es: " + largestNumber);
    } else {
      alert("No se ingresaron números.");
    }
  }
  
  // Función para validar si una palabra es un palíndromo
  function checkPalindrome() {
    const word = document.getElementById("palindromeInput").value.toLowerCase().replace(/[^a-zA-Z]/g, "");
    const reversedWord = word.split("").reverse().join("");
  
    if (word === reversedWord) {
      alert("La palabra/frase es un palíndromo.");
    } else {
      alert("La palabra/frase no es un palíndromo.");
    }
  }
  
  // Función para calcular la suma de los dígitos de un número
  function calculateSum() {
    const number = document.getElementById("sumInput").value;
    const digits = number.toString().split("").map(Number);
    const sum = digits.reduce((acc, curr) => acc + curr, 0);
  
    alert("La suma de los dígitos es: " + sum);
  }
  
  // Función para generar un número aleatorio dentro de un rango dado
  function generateRandomNumber() {
    const minRange = parseFloat(document.getElementById("minRange").value);
    const maxRange = parseFloat(document.getElementById("maxRange").value);
    
    if (!isNaN(minRange) && !isNaN(maxRange)) {
      const randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
      alert("El número aleatorio generado es: " + randomNumber);
    } else {
      alert("Por favor, ingrese rangos válidos.");
    }
  }
  
  // Función para generar la secuencia de Fibonacci hasta un número dado
  function generateFibonacciSequence() {
    const limit = parseInt(document.getElementById("fibonacciInput").value);
  
    if (!isNaN(limit) && limit >= 0) {
      let fibonacciSequence = [0, 1];
      let a = 0;
      let b = 1;
  
      while (b <= limit) {
        const nextNumber = a + b;
        a = b;
        b = nextNumber;
        fibonacciSequence.push(b);
      }
  
      alert("La secuencia de Fibonacci hasta " + limit + " es: " + fibonacciSequence.join(", "));
    } else {
      alert("Por favor, ingrese un número válido.");
    }
  }
  