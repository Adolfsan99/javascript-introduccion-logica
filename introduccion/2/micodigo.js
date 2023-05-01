
var errores = 0;

alert("Enhorabuena!, has abierto el archivo adecuado 😅, ahora vamos a ver de forma algo rapida los tipo de datos");

// Pedir al usuario que ingrese un carácter y mostrarlo en una alerta
alert("⚠️CHAR: Un carácter es una letra, número, signo o símbolo de puntuación. Por ejemplo, a, 5, !, #");
var char = prompt("Ingrese un carácter:");
if (char.length === 1) {
alert("✅El carácter ingresado es: " + char);
console.log("CHAR: "+char);
} else {
alert("❌El valor ingresado no corresponde a un carácter.");
console.log("CHAR: ❌");
}

// Pedir al usuario que ingrese una frase y mostrarla en una alerta
alert("⚠️STRING: Una cadena es una serie de caracteres, como una palabra o una frase, puede incluir numeros");
var frase = prompt("Ingrese una frase:");
if (frase.length > 3) {
alert("✅La frase ingresada es: " + frase);
console.log("STRING: "+frase);
} else {
alert("❌El valor ingresado no corresponde a una cadena.");
console.log("STRING: ❌");
errores++ /*INCREMENTOS EN VARIABLES!*/;
}

// Pedir al usuario que ingrese un número y mostrarlo en una alerta
alert("⚠️NUMBER: Un número es una cantidad.");
var numero = prompt("Ingrese un número:");
if (!isNaN(numero)) {
alert("✅El número ingresado es: " + numero);
console.log("NUMBER: "+numero);
} else {
alert("❌El valor ingresado no corresponde a un número.");
console.log("NUMBER: ❌");
errores++;
}

// Redondear un número ingresado por el usuario a un número entero y mostrarlo en una alerta
alert("⚠️INT: Un número entero es un número sin decimales, como 1, 2, 3, 4, etc.");
var numeroEntero = Math.round(Number(prompt("Ingrese un número:")));
if (Number.isInteger(numeroEntero)) {
  console.log("INT: "+numeroEntero);
alert("✅El número entero es: " + numeroEntero);
} else {
alert("❌El valor ingresado no corresponde a un número entero.");
console.log("INT: ❌");
errores++;
}

// Redondear un número ingresado por el usuario a dos decimales y mostrarlo en una alerta
alert("⚠️FLOAT: Un número decimal o flotante es un número que puede incluir o no decimales, ejemplo: 1.5, 2.7, 3.14159, etc. ");
var numeroDecimal = Number(prompt("Ingrese un número decimal:")).toFixed(2);
if (!isNaN(numeroDecimal)) {
alert("✅El número decimal es: " + numeroDecimal);
console.log("FLOAT: "+numeroDecimal);
} else {
alert("❌El valor ingresado no corresponde a un número decimal.");
console.log("FLOAT: ❌");
errores++;
}

// Declarar una variable constante y tratar de cambiar su valor (lo cual arrojará un error)
alert("⚠️DOUBLE: En JavaScript, los números son todos de tipo Number y estos suelen ser numeros complejos");
const PI = 3.14159;
console.log("FLOAT: " + PI);
alert("Como por ejemplo el valor de PI, que es: " + PI);

// Declarar una variable con un nombre no permitido y mostrar un error
alert("⚠️DECLARACIÓN DE VARIABLES: Hay reglas sobre cómo nombrar variables en JavaScript. Por ejemplo, no se pueden comenzar con un número o incluir espacios o caracteres especiales.");
alert("miVariable es una variable valida");
alert("1#mi Variable es una variable no valida y generara error");
alert("Existen distintos tipos de nombrar una variable, a continuacion te las enseño.");
alert("yearOldByAndre = camelCase\nyear_old_by_andre = snake_case\nYearOldByAndre = PascalCase\nYEAROLDBYANDRE = CONST");

// Pedir al usuario que ingrese un texto
var texto = prompt("Ahora debes escribir el nombre de una variable valida para lavar los platos o cualquier otra tarea!");

// Verificar si el texto cumple con las reglas de escritura de variables usando EXPRESIONES REGULARES
if (/^[a-z]+([A-Z][a-z]+)*$/g.test(texto)) {
  alert("✅El nombre de variable ingresado cumple con la convención de camelCase.");
  console.log("DECLARACIÓN DE VARIABLE: "+texto);
} else if (/^[a-z]+(_[a-z]+)*$/g.test(texto)) {
  alert("✅El nombre de variable ingresado cumple con la convención de snake_case.");
  console.log("DECLARACIÓN DE VARIABLE: "+texto);
} else if (/^[A-Z][a-z]+([A-Z][a-z]+)*$/g.test(texto)) {
  alert("✅El nombre de variable ingresado cumple con la convención de PascalCase.");
  console.log("DECLARACIÓN DE VARIABLE: "+texto);
} else if (/^[A-Z][a-z]+([A-Z][a-z]+)*$/g.test(texto)) {
  alert("✅El nombre de variable ingresado cumple con la convención de UpperCamelCase.");
  console.log("DECLARACIÓN DE VARIABLE: "+texto);
} else if (/^[A-Z_]+[A-Z]*$/g.test(texto)) {
  alert("✅El nombre de variable ingresado cumple con la convención de CONST.");
  console.log("DECLARACIÓN DE VARIABLE: "+texto);
} else {
  alert("❌El nombre de variable ingresado no cumple con ninguna de las convenciones de escritura de variables!");
  console.log("DECLARACIÓN DE VARIABLE: ❌");
  errores++;
}

// Crear un objeto con propiedades y métodos y mostrar algunas de sus propiedades en una alerta
alert("⚠️OBJETOS: Un objeto es como una caja que puede contener varias cosas, como propiedades y métodos.");
var miObjeto = {
  nombre: "Juan",
  edad: 30,
  decirHola: function() {
    alert("✅Caso 1: Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
  }
};
alert("El nombre del objeto es: " + miObjeto.nombre);
alert("La edad del objeto es: " + miObjeto.edad);
miObjeto.decirHola();
alert("✅Caso 2: Hola, mi nombre es " + this.miObjeto.nombre + " y tengo " + this.miObjeto.edad + " años.");
console.log("OBJETO: "+miObjeto);
console.log(miObjeto.nombre);
console.log(miObjeto.edad);

alert("❌Caso 3: Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
alert("Saber el porque los valores son Undefined, y porque existen 3 casos, te lo dejo como tarea!");

// Crear un array con varios elementos y mostrar algunos de ellos en una alerta
alert("⚠️LISTAS O ARRAYS: Un array es como una lista de cosas, en este caso, una lista de frutas.");
var miArray = ["🍎", "🍌", "🍊", "🍐"];
alert("El 1er elemento del array es: " + miArray[0]);
alert("El 3er elemento del array es: " + miArray[2]);
alert("El 2do elemento del array es: " + miArray[1]);
alert("El 4to elemento del array es: " + miArray[3]);
console.log("ARRAY: ["+miArray+"]");
alert("Y tenemos como resultado nuestra lista de frutas\n \n["+ miArray +"]");
alert("Mediante las listas se facilita el hecho de poder acceder a datos, editarlos y entre muchas cosas más!");

// Declarar una variable y sobrescribir su valor
alert("⚠️SOBRE-ESCRITURA DE DATOS: Para este ejercicio es IMPORTANTE que abras la CONSOLA y observes que sucede...");
var miVariable = prompt("Vamos a darle un valor a nuestra variable, por ejemplo, una llamada Hola");
if (miVariable === "Hola") {
alert("✅El valor inicial de la variable es: " + miVariable);
console.log(miVariable);
} else {
alert("❌El valor ingresado no corresponde a un string: Hola.");
console.log("SOBRE-ESCRITURA: ❌");
errores++;
}
alert("El valor inicial de la variable ahora es: " + miVariable);
miVariable = "Adiós";
console.log(miVariable);
console.log("");
alert("El valor sobrescrito de la variable es: " + miVariable);
alert("Esto pasa porque las instrucciones se ejecutan hacia abajo, si cambiamos el valor de la variable, siempre que esta este hacia abajo podremos sobreescribirla");

alert("Por el momento esto es todo! veras los datos en consola al final!");

if (errores === 0) {alert("Por cierto has superado esta encuesta satisfactoriamente con " + errores + " errores!");}
else {alert("Por cierto has perdido esta encuesta con " + errores + " errores!");
alert("Suerte para la proxima! 😋");
}