// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var nombres = "";

  const mayus = nombre.charAt(0);
  for(let i=1; i<nombre.length; i++){
    nombres = nombres + nombre[i];   
  }
  return mayus.toUpperCase() + nombres;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  const sumatoria = numeros.reduce(function(acc,elemento){
    return acc + elemento
    });
    console.log(sumatoria);
    cb(sumatoria);

  }


function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(elementos, index){
    cb(elementos)
    console.log(array)
  })   
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  const nuevoArreglo = array.map(function(elemento,index){
    return cb(elemento)
  })
  return nuevoArreglo
   
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolverun nuevo array con los elementos que cumplen la condición
  //Tu código:
  var filtro = []
  for(let i=0; i<array.length; i++){
    if(array[i][0] === "a"){
      filtro.push(array[i])
    }
  }
  return filtro
}

// No modificar nada debajo de esta línea
// --------------------------------
module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};