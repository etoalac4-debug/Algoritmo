//1.Contar el número total de palabras
let texto = "Hola mundo desde Quito"; 
let palabras = 0;
for (let i = 0; i < texto.length; i++) {
  if ( (texto[i] === ' ' || texto[i] === '\n') && i > 0 && texto[i-1] !== ' ' && texto[i-1] !== '\n' ) {
    palabras++;
  }
}
if (texto.length > 0 && texto[texto.length - 1] !== ' ' && texto[texto.length - 1] !== '\n') {
  palabras++;
}

console.log("Número de palabras:", palabras);


// 2. Contar signos de puntuación
let texto = "Hola, ¿cómo estás?."; // Cambiar texto
let signos = 0;
for (let j = 0; j < signos.length; j++) {
    if (texto[i] === signos[j]) {
      signos++;
      break; 
    }
  }

console.log("Signos de puntuación: " + signos);

// 3.Contar las vocales
let texto = "Educacion"; 
let vocales = 0;

for (let i = 0; i < texto.length; i++) {
  let c = texto[i].toLowerCase();
  if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
    vocales++;
  }
}

console.log("Cantidad de vocales:", vocales);

// 4.Contar los consonantes
let texto = "Hola";
let consonantes = 0;

for (let i = 0; i < texto.length; i++) {
  let c = texto[i].toLowerCase();
  if ((c >= 'a' && c <= 'z') && !(c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u')) {
    consonantes++;
  }
}

console.log("Cantidad de consonantes:", consonantes);


//5.Contar los dígitos
let texto = "Mi clave es 1234"; 
let digitos = 0;

for (let i = 0; i < texto.length; i++) {
  if (texto[i] >= '0' && texto[i] <= '9') {
    digitos++;
  }
}

console.log("Cantidad de dígitos:", digitos);

//6.Contar palabras que empiezan en mayúscula
let texto = "Hola mundo Bonito"; 
let palabrasMayus = 0;
let inicioPalabra = true;

for (let i = 0; i < texto.length; i++) {
  if (inicioPalabra && texto[i] >= 'A' && texto[i] <= 'Z') {
    palabrasMayus++;
  }
  inicioPalabra = (texto[i] === ' ' || texto[i] === '\n');
}

console.log("Palabras con mayúscula inicial:", palabrasMayus);

//7.Contar palabras que empiezan en minúscula
let texto = prompt("Ingrese el texto:");

let contador = 0;
let dentroPalabra = false;
let i = 0;

while (i < texto.length) {
    let c = texto[i];

    if (c != ' ' && c != '\n') {
        if (dentroPalabra == false) {
            contador = contador + 1;
            dentroPalabra = true;
        }
    } else {
        dentroPalabra = false;
    }

    i = i + 1;
}

alert("Número de palabras: " + contador);

console.log("Número de párrafos:", parrafos);

//8.Contar párrafos
let texto = prompt("Ingrese el texto:");

let contador;

if (texto.length == 0) {
    contador = 0;
} else {
    contador = 1;
}

let i = 0;

while (i < texto.length) {
    if (texto[i] == '\n') {
        contador = contador + 1;
    }
    i = i + 1;
}

alert("Número de párrafos: " + contador);

//9.Invertir el texto completo
let texto = prompt("Ingrese el texto:");

let invertido = "";
let i = texto.length - 1;

while (i >= 0) {
    invertido = invertido + texto[i];
    i = i - 1;
}

alert("Texto invertido: " + invertido)
//10.Contar caracteres
let texto = prompt("Ingrese el texto:");

let total = texto.length;

alert("Total de caracteres: " + total);
//11.. Buscar una palabra en el texto
let texto = prompt("Ingrese el texto:");
let palabra = prompt("Ingrese la palabra a buscar:");

let existe = false;

if (palabra.length > 0) {
    let i = 0;

    while (i <= texto.length - palabra.length && existe == false) {
        let j = 0;
        let coincide = true;

        while (j < palabra.length) {
            if (texto[i + j] != palabra[j]) {
                coincide = false;
                break;
            }
            j = j + 1;
        }

        if (coincide == true) {
            existe = true;
        }

        i = i + 1;
    }
}

if (existe) {
    alert("La palabra '" + palabra + "' sí se encuentra en el texto.");
} else {
    alert("La palabra '" + palabra + "' NO se encuentra en el texto.");
}
//12.Contar un carácter en el texto
let texto = prompt("Ingrese el texto:");
let caracter = prompt("Ingrese el carácter a contar:");

let contador = 0;
let i = 0;

while (i < texto.length) {
    if (texto[i] == caracter) {
        contador = contador + 1;
    }
    i = i + 1;
}

alert("El carácter '" + caracter + "' aparece " + contador + " veces.");
//13contar caracteres en posiciones pares
let texto = prompt("Ingrese el texto:");

let contador = 0;
let i = 0;

while (i < texto.length) {
    if (i % 2 == 0) { // índice par
        contador = contador + 1;
    }
    i = i + 1;
}

alert("Caracteres en posiciones pares: " + contador);
//14.Contar caracteres en posiciones impares
let texto = prompt("Ingrese el texto:");

let contador = 0;
let i = 0;

while (i < texto.length) {
    if (i % 2 == 1) { // índice impar
        contador = contador + 1;
    }
    i = i + 1;
}

alert("Caracteres en posiciones impares: " + contador);
}
//15.Añadir un texto al inicio o al final
{
let texto = prompt("Ingrese el texto:");
let fragmento = prompt("Ingrese el nuevo fragmento:");

let alInicio = fragmento + " " + texto;
let alFinal = texto + " " + fragmento;

alert(
    "Al inicio: " + alInicio + "\n" +
    "Al final: " + alFinal
);
}