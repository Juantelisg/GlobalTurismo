document.getElementById("tipoTarjeta").onclick= tipoTarjeta;

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


function tipoTarjetaPuntaCana() {
    var tarjeta = document.getElementById("tipoTarjeta-PuntaC").value
    document.getElementById("formapago-PuntaC").innerHTML = "Forma de pago: " + tarjeta
}

function tipoTarjetaMargarita() {
    var tarjeta = document.getElementById("tipoTarjeta-Margarita").value
    document.getElementById("formapago-Margarita").innerHTML = "Forma de pago: " + tarjeta
}

function tipoTarjetaParis() {
    var tarjeta = document.getElementById("tipoTarjeta-Paris").value
    document.getElementById("formapago-Paris").innerHTML = "Forma de pago: " + tarjeta
}

function tipoTarjetaNewYork() {
    var tarjeta = document.getElementById("tipoTarjeta-NewYork").value
    document.getElementById("formapago-NewYork").innerHTML = "Forma de pago: " + tarjeta
}

function tipoTarjetaSanFrancisco() {
    var tarjeta = document.getElementById("tipoTarjeta-SanFrancisco").value
    document.getElementById("formapago-SanFrancisco").innerHTML = "Forma de pago: " + tarjeta
}

function tipoTarjetaBerlin() {
    var tarjeta = document.getElementById("tipoTarjeta-Berlin").value
    document.getElementById("formapago-Berlin").innerHTML = "Forma de pago: " + tarjeta
}


function totalPuntaCana() {
    var precioBase = 600;
    var pasajeros = document.getElementById("pasajerosPuntaC").value
    var total = precioBase * pasajeros
    
    document.getElementById("total-PuntaC").innerHTML = "Total: " + "$" + total

}

function totalMargarita() {
    
    var precioBase = 600;
    var pasajeros = document.getElementById("pasajerosMargarita").value
    var total = precioBase * pasajeros



    document.getElementById("total-Marg").innerHTML = "Total: " + "$" + total

}

function totalParis() {
    
    var precioBase = 900;
    var pasajeros = document.getElementById("pasajerosParis").value
    var total = precioBase * pasajeros



    document.getElementById("total-Paris").innerHTML = "Total: " + "$" + total

}

function totalNewYork() {
    var precioBase = 1000;
    var pasajeros = document.getElementById("pasajerosNewYork").value
    var total = precioBase * pasajeros
    
    document.getElementById("total-NewYork").innerHTML = "Total: " + "$" + total

}

function totalSanFrancisco() {
    var precioBase = 800;
    var pasajeros = document.getElementById("pasajerosSanFrancisco").value
    var total = precioBase * pasajeros
    
    document.getElementById("total-SanFrancisco").innerHTML = "Total: " + "$" + total

}

function totalBerlin() {
    var precioBase = 900;
    var pasajeros = document.getElementById("pasajerosBerlin").value
    var total = precioBase * pasajeros
    
    document.getElementById("total-Berlin").innerHTML = "Total: " + "$" + total

}