// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arreglo = [];  
  for(var propiedad in objeto){
    arreglo.push([propiedad, objeto[propiedad]]);
  }
  return arreglo;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {}
  
  for(let i=0; i<string.length; i++){
    var incrementador = 0;
    for(let j=0; j<string.length; j++){
      if(string[i] === string[j]){
        incrementador++;  
      }
    }
    objeto[string[i]] = incrementador;                                                   
  }
  return objeto;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letra mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
var mayuscula = ""
var miniscula = ""

  for(let i=0; i<s.length; i++){
    if(s[i] === s[i].toUpperCase()){
      mayuscula = mayuscula + s[i];
    }
    else{
      miniscula = miniscula + s[i];
    }
  }
  return mayuscula + miniscula;
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un palabra.
  //Ej: Recibe ---> "hTe Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  const arreglo = str.split(" ")
  const array = []
  resultadoFinal = ""
  
  for(let i=0; i<arreglo.length; i++){
    var palabra = arreglo[i];
    var mirror = ""
    for(let j=palabra.length-1; j>=0; j--){
      mirror = mirror + palabra[j]
    } 
    array.push(mirror)
  }
  resultadoFinal = array.join(" ")
  return resultadoFinal
}


function capicua(arreglo1){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número es número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var capicua = arreglo1.toString();
  var mirror = "";

  for(let i=capicua.length-1; i>=0; i--){
    mirror = mirror + capicua[i];
  }
  if(capicua === mirror){
    return "Es capicua";
  }
  return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letra "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letra.
  //Escribe tu código aquí
  nuevaCadena = ""
  for(i=0; i<cadena.length; i++){
    if(cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c"){
      nuevaCadena = nuevaCadena + cadena[i];
    }
  }
  return nuevaCadena
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if(arr[i].length > arr[j].length){
        var auxMayor = arr[i]
        arr[i] = arr[j]
        arr[j] = auxMayor
      }
    }
  }
  return arr
}  

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var array = []
 
  for(i=0; i<arreglo1.length; i++){
    
    for(j=0; j<arreglo2.length; j++){
      if(arreglo1[i] === arreglo2[j]){
        array.push(arreglo1[i]);
        break;

      }
    }
  }
  return array
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

