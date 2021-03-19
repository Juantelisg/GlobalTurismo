document.getElementById("pagar").onclick= pagar;
document.getElementById("consultarMonto").onclick= consultar;
document.getElementById("pay-PuntaCana").onclick= payPuntaCana;
document.getElementById("pay-Margarita").onclick= payMargarita;

function pais(destino, costo) {
    this.destino = destino;
    this.costo = costo;
};

var alemania = new pais("Berlin",  900);
var brasil = new pais("rio de janeiro",  900);
var puntaC = new pais("punta cana",  900);
var colombia = new pais("bogota",  900);
var margarita = new pais("margarita",  900);
var losRoques = new pais("los roques",  900);

function consultar() {
    
    var alemania = {destino: "Berlin", costo: 900};
    var brasil = {destino: "Rio de janeiro", costo: 500};
    var puntaC = {destino: "Punta cana", costo: 600};
    var colombia = {destino: "Bogota", costo: 400};
    var margarita = {destino: "Margarita", costo: 600};
    var losRoques = {destino: "Los roques", costo: 1000};

    var destino = document.getElementById("destino").value;
    var cantidadP = document.getElementById("pasajeros").value;

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


function pagar() {

    var nombre = document.getElementById("fname").value;
    var apellido = document.getElementById("lname").value;
    var destino = document.getElementById("destino").value;
    var contenido = document.createTextNode(`Titular: ${nombre}, ${apellido} | Destino: ${destino} | El pago ha sido procesado. ¡Disfruta tu viaje!`);
    document.getElementById("alert alert-success").appendChild(contenido);
    
    
}



function totalMargarita() {
    
    var precioBase = 600;
    var pasajeros = document.getElementById("pasajeros").value
    var total = precioBase * pasajeros

    document.getElementById("totalito").innerHTML = total

    

}