function holaMundo() {
  console.log('¡Hola, mundo!');
  let nombre = prompt('Escribe tu nombre');
  console.log('¡Hola, ' + nombre + '!');
}

holaMundo();


function numeroUsuario() {
  let valorUsuario = parseInt(prompt('Por favor dame un numero para duplicarlo'));
  let multiplica = valorUsuario * 2;
  console.log('El doble del valor de su numero es: ' + multiplica );
}

numeroUsuario();

function tresNumeros() {
  let valor1 = prompt('Dame el primer valor');
  let valor2 = prompt('Dame el segundo valor');
  let valor3 = prompt('Dame el tercer valor');
  let mayorDeTres = (valor1 > valor2) ? valor1 : valor2;
  let numeroMayor = (mayorDeTres > valor3) ? mayorDeTres : valor3;
  alert("El número mayor es " + numeroMayor);
  let promedio = valor1 + valor2 + valor3 / 3;
  console.log('El promedio de su nota es ' + promedio);
}

tresNumeros();

function cuadrado(numero) {
  return numero * numero;
}

let resultado = cuadrado(2);
console.log(resultado);

cuadrado();

// function encontrarMayor(a, b) {
//   return a > b ? a : b;
// }

// let numeroMayor = encontrarMayor(15, 9);
// console.log(numeroMayor);

// function calcularPromedio(a, b, c) {
//   return (a + b + c) / 3;
// }

// let promedio = calcularPromedio(4, 7, 10);
// console.log(promedio);

