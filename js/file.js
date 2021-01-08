
var nombre= prompt("Ingresa tu nombre");
var edad = prompt("Ingresa tu edad");


var saludo = alert(`Saludos ${nombre}. ¡Veamos cual es tu peso en otro planeta!`);


var peso = prompt("Cual es tu peso?")
var planeta = parseInt(prompt("Elige un planeta: 1)Marte, 2)Jupiter "));

var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;


if (planeta == 1) 
{
    var peso_final = peso * g_marte / g_tierra;
    document.write(`Tu peso en Marte es: ${parseInt(peso_final)} Kg`);
} 

else if(planeta == 2) 
{
    var peso_final = peso * g_jupiter / g_tierra;
    document.write('Tu peso en Jupiter es: ' + parseInt(peso_final) + " Kg");
}