document.getElementById("calcular").onclick= comprar;
document.getElementById("calcularCompra").onclick= calcular;
document.getElementById("evento").onclick= evento;

function calcular() {
    
    var alemania = {destino: "berlin", costo: 900};
    var brasil = {destino: "rio de janeiro", costo: 500};
    var puntaC = {destino: "punta cana", costo: 600};
    var colombia = {destino: "bogota", costo: 400};
    var margarita = {destino: "margarita", costo: 600};
    var losRoques = {destino: "los roques", costo: 1000};
    
    var destino = document.getElementById("destino").value;
    var cantidadP = document.getElementById("cantidadPersonas").value;
    
   

    if (destino === alemania.destino) {
        alert(`El precio total del viaje es $ ${alemania.costo * cantidadP} USD`);
    }
    else if (destino === brasil.destino) {
        alert(`El precio total del viaje es $ ${brasil.costo * cantidadP} USD`); 
    }
    else if (destino === puntaC.destino) {
        alert(`El precio total del viaje es $ ${puntaC.costo * cantidadP} USD`); 
    }
    else if (destino === colombia.destino) {
        alert(`El precio total del viaje es $ ${colombia.costo * cantidadP} USD`); 
    }
    else if (destino === margarita.destino) {
        alert(`El precio total del viaje es $ ${margarita.costo * cantidadP} USD`); 
    }
    else if (destino === losRoques.destino) {
        alert(`El precio total del viaje es $ ${losRoques.costo * cantidadP} USD`); 
    }
    else {
        alert("PUEDE QUE AUN NO TENGAMOS VIAJES DISPONIBLES A ESE DESTINO!")
    };

    
}


function paquete(destino, costo) {
    this.destino = destino;
    this.costo = costo;
}

function evento(event) {

    if (event.keyCode == 13) {
        alert("Has presionado el ENTER")
    }
    else{
        alert('Has presionado una letra dentro de este campo');
    }
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






