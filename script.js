// Exemplo 1
function exemplo1() {
  alert("Bom dia, Mundo!!!");
}

// Exemplo 2
function exemplo2() {
  var numero = parseInt(document.getElementById("numero").value);
  var cubo = numero * numero * numero;
  alert("O cubo de " + numero + " é " + cubo);
}

// Exemplo 3
function exemplo3() {
  var tempF = parseFloat(document.getElementById("tempF").value);
  var tempC = (tempF - 32) * (5 / 9);
  alert(tempF + "°F é igual a " + tempC.toFixed(2) + "°C");
}

// Exemplo 4
function exemplo4() {
  var base = parseFloat(document.getElementById("base").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var area = (base * altura) / 2;
  alert("A área do triângulo é: " + area);
}

// Exemplo 5
function exemplo5() {
  var raio = parseFloat(document.getElementById("raio").value);
  var area = Math.PI * raio * raio;
  var perimetro = 2 * Math.PI * raio;
  alert("A área do círculo é: " + area.toFixed(2) + "\nO perímetro do círculo é: " + perimetro.toFixed(2));
}

// Exemplo 6
function exemplo6() {
  var numero = document.getElementById("numeroInvertido").value;
  var numeroInvertido = numero.split("").reverse().join("");
  alert("Número invertido: " + numeroInvertido);
}

// Exemplo 7
function exemplo7() {
  var texto = document.getElementById("texto").value.toLowerCase();
  var vogais = ["a", "e", "i", "o", "u"];
  var count = 0;
  for (var i = 0; i < texto.length; i++) {
    if (vogais.includes(texto[i])) {
      count++;
    }
  }
  alert("Número de vogais: " + count);
}

// Exemplo 8
function exemplo8() {
  var capital = parseFloat(document.getElementById("capital").value);
  var juros = parseFloat(document.getElementById("juros").value);
  var tempo = parseInt(document.getElementById("tempo").value);
  var montante = capital * Math.pow((1 + juros / 100), tempo);
  alert("O retorno do investimento é: R$ " + montante.toFixed(2));
}

// Exemplo 9
function exemplo9() {
  var numero = parseInt(document.getElementById("numeroFatorial").value);
  var fatorial = 1;
  for (var i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  alert("O fatorial de " + numero + " é: " + fatorial);
}

// Exemplo 10
function exemplo10() {
  var string = document.getElementById("string").value;
  var caractere = document.getElementById("caractere").value;
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === caractere) {
      count++;
    }
  }
  alert("O caractere " + caractere + " aparece " + count + " vezes na palavra.");
}
