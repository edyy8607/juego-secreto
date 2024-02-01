let listaGenerica = [];
let lenguajesDeProgramacion = ['javascript','C','C++','Kotlin','Python'];
let numeros = [15, 8, 25, 5, 12];


lenguajesDeProgramacion.push('Java','Ruby','Golang');

// me recorre y me muestra uno a uno los lenguajes de programacion
function mostrarLenguagesSeparadamente() {
  for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
    console.log(lenguajesDeProgramacion[i]);
  }
}


function elementosDeLista() {
  console.log(lenguajesDeProgramacion);
  
}

function listaInvertida() {
  let  invertida = lenguajesDeProgramacion.reverse();
  console.log(invertida);
}

//no se termino el ejercicio
function promedioLista() {
  let cantidadDeElementos = lenguajesDeProgramacion.length;
  let sumaDeNumeros = 0;
  for (let i=0 ; i < cantidadDeElementos ; i++) {
    sumaDeNumeros += parseInt(lenguajesDeProgramacion[i]);
  }
  let promedio = sumaDeNumeros / cantidadDeElementos;
  console.log('Cantidad de elementos de lista', cantidadDeElementos);
  console.log('Promedio de los valores de lista', promedio);
}

function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log('Mayor:', mayor);
  console.log('Menor:', menor);
}

encontrarMayorMenor(numeros);

function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

let suma = calcularSuma(numeros);
console.log('Suma:', suma);

//No entendido
function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}


mostrarLenguagesSeparadamente();
elementosDeLista();
listaInvertida();
promedioLista();