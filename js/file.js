
/* NOMBRE Y EDAD*/

var nombre= prompt("Ingresa tu nombre");
var edad = prompt("Ingresa tu edad");

/* SALUDO */
alert(`Saludos ${nombre}. ¡Veamos cual es tu peso en otro planeta!`);

/* PESO ACTUAL Y PLANETA */
var peso = prompt("Cual es tu peso actual?")
var planeta = parseInt(prompt("Elige un planeta: 1) Marte, 2) Jupiter "));


/* VARIABLES DE GRAVEDAD */

var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var peso_final;


/* CONDICIONALES IF/ELSE */

if (planeta == 1) 
{
    var peso_final = peso * g_marte / g_tierra;
    document.write(`Tu peso en Marte es: ${parseInt(peso_final)} Kg`);

    if (peso_final > 50) {
        alert(nombre + ' ¡Ten cuidado con ese peso actual en la tierra!')
    }
} 



else if(planeta == 2) 
{
    var peso_final = peso * g_jupiter / g_tierra;
    document.write('Tu peso en Jupiter es: ' + parseInt(peso_final) + " Kg");

    if (peso_final > 300) {
        alert(nombre + ' ¡Ten cuidado con ese peso actual en la tierra!')
    }
}

