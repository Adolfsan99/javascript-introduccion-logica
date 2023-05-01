// /*

//EJEMPLO 2: PROMPT Y CONFIRM

//parsear, casting, transformar un dato en otro

alert("Hola Usuario");

//La cedula sera igual a lo que se digite en prompt
//Prompt es una funcion que permite digitar valores STRING
//se puede establecer cedula como const, pero por flexibilidad uso el let
let cedula = Number(prompt("Identificate (CC)"));

/* CICLO WHILE (No se como funciona por el momento)
while (typeof cedula == "string") {
    alert("Solo puedes escribir un numero de 10 digitos");
}
*/

//Confirm es una funcion que devuelve un BOOLEANO
if (confirm("¿Seguro que no esta suplantando identidad?") && cedula)
//Las condiciones pueden ser simples o faciles matematicamente hablando
//y segun lo que se requiera

{ 
    alert("Tu cedula es: " + cedula + " puedes pasar"); //CONCATENAR (UNIR)

}else{

    alert("No te has identificado, dato entrado: " + cedula ); 

    //ALT 96 = ``` para poder usar ${}
    //alert(`No te has identificado, dato entrado: ${cedula}`); // ALT 96 = ``` para poder usar ${}
    //Este metodo solo funciona en JavaScript
}

// */

/*

//EJEMPLO 1: CONDICIONES IF Y ALERT

CONDICIONES Y ALERTAS

let numero = 2<3 //Estp se puede cambiar
alert("¿2 es menor que 3?"); //Estp se puede cambiar

if(numero)
//Las condiciones pueden ser simples o faciles matematicamente hablando
//y segun lo que se requiera
{
alert("Es verdadero");
}else{
alert("Es falso");
}
*/