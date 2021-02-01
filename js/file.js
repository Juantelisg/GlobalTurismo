document.getElementById("calcular").onclick= calcular;
document.getElementById("Consultar otros").onclick= consultar;




function calcular() {

    var margarita = {destino: "margarita", costo: 1000};
    var cancun = {destino: "cancun", costo: 1400};
    var puntaC = {destino: "punta cana", costo: 1200};
    
    var destino = prompt("Cual es tu destino:").toLowerCase();
    
    
    if (destino === margarita.destino) {
        var personas = prompt("Cuantas personas van:");
        alert("El precio total del viaje es " + "$" + margarita.costo * personas + "USD");
    }
    else if (destino === cancun.destino) {
        var personas = prompt("Cuantas personas van:");
        alert("El precio total del viaje es " + "$" + cancun.costo * personas + "USD");
    }
    else if (destino === puntaC.destino) {
        var personas = prompt("Cuantas personas van:");
        alert("El precio total del viaje es " + "$" + puntaC.costo * personas + "USD");
    }
    else {
        alert("PUEDE QUE AUN NO TENGAMOS VIAJES DISPONIBLES A ESE DESTINO!")
    }

    
};

function paquete(destino, costo) {
    this.destino = destino;
    this.costo = costo;
}


function consultar() {

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


//destinos//


