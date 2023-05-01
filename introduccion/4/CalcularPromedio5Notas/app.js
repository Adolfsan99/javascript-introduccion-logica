let nota1 = Number(prompt("Ingrese la nota 1"));
let nota2 = Number(prompt("Ingrese la nota 2"));
let nota3 = Number(prompt("Ingrese la nota 3"));
let nota4 = Number(prompt("Ingrese la nota 4"));
let nota5 = Number(prompt("Ingrese la nota 5"));
let prom = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

let isConfi = confirm("Ingresaste un numero");

if (isConfi) {
    alert(`El promedio es: ${prom} `);
} else {
    alert("No hacer nada.");
}

/*EQUIPO

ADOLFO SANCHEZ, JENNY CABREJO, JENNIFER,

*/