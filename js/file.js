document.getElementById("calcular").onclick= comprar;
document.getElementById("Consultar otros").onclick= consultar;




function comprar() {

    var alemania = {destino: "berlin", costo: 1000};
    var brasil = {destino: "rio de janeiro", costo: 1400};
    var puntaC = {destino: "punta cana", costo: 1200};
    var colombia = {destino: "bogota", costo: 1200};
    var margarita = {destino: "margarita", costo: 1000};
    var losRoques = {destino: "los roques", costo: 1200};
   
    var destino = prompt("Cual es tu destino:").toLowerCase();
    
    
    if (destino === alemania.destino) {
        var personas = prompt("Cuantas personas seran:");
        alert("El precio total del viaje es " + "$" + alemania.costo * personas + "USD");
        tipoPago()
    }
    else if (destino === brasil.destino) {
        var personas = prompt("Cuantas personas van:");
        alert("El precio total del viaje es " + "$" + brasil.costo * personas + "USD");
        tipoPago() 
    }
    else if (destino === puntaC.destino) {
        var personas = prompt("Cuantas personas van:");
        alert("El precio total del viaje es " + "$" + puntaC.costo * personas + "USD");
        tipoPago() 
    }
    else if (destino === colombia.destino) {
        var personas = prompt("Cuantas personas van:");
        alert("El precio total del viaje es " + "$" + colombia.costo * personas + "USD");
        tipoPago() 
    }
    else if (destino === margarita.destino) {
        var personas = prompt("Cuantas personas van:");
        alert("El precio total del viaje es " + "$" + margarita.costo * personas + "USD");
        tipoPago() 
    }
    else if (destino === losRoques.destino) {
        var personas = prompt("Cuantas personas van:");
        alert("El precio total del viaje es " + "$" + losRoques.costo * personas + "USD");
        tipoPago() 
    }
    else {
        alert("PUEDE QUE AUN NO TENGAMOS VIAJES DISPONIBLES A ESE DESTINO!")
    }

    
};

function paquete(destino, costo) {
    this.destino = destino;
    this.costo = costo;
}

function tipoPago() {
    var tarjeta = prompt("Tipo de tarjeta a usar?: 1) Debito | 2) Credito");

    if (tarjeta == 1) {
        var listo = alert("Todo listo?");
        var procesado = alert("PAGO PROCESADO");
    }
    else if(tarjeta == 2){
        var tipoTarjeta = prompt("Elige una opcion: 1)Visa | 2)MasterCard | 3)AmericanExpress ");
        var cuotas = prompt("Cantidad de cuotas sin interes? (Hasta 3 maximo)");
        var procesando = alert(`PROCESANDO PAGO TOTAL EN ${cuotas} cuotas`);
        var procesado = alert("PAGO PROCESADO");
    }
}




/* function consultar() {

    var paises = ["Argentina", "Brasil", "Colombia", "Mexico", "Republica Dominicana", "Francia", "Alemania", "Inglaterra", "Taiwan", "Tailandia", "Japon"];
    var latinoAmetica = paises.slice(0, 5);
    var europa = paises.slice(5, 8);
    var asia = paises.slice(8, 11);

    var viaje = new paquete("Mexico", 900);
    var viaje2 = new paquete("Argentina", 900);
    var viaje3 = new paquete("Venezuela", 800);


    var consulta = prompt("Que paquete deseas consultar? -> 1) Latino America | 2) Europa | 3) Asia");

    if (consulta == 1) {
        alert("Los destinos a Latino America disponibles son: " + latinoAmetica);
    }
    else if (consulta == 2) {
        alert("Los destinos a Europa disponibles son: " + europa);
    }
    else if (consulta == 3) {
        alert("Los destinos a Asia disponibles son: " + asia);
    }
    
    else{
        alert("No contamos con la disponibilidad de ese paquete");
    }
};


//destinos// */


