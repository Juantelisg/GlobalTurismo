document.getElementById("comprar").onclick= comprar;
document.getElementById("calcularCompra").onclick= calcular;
document.getElementById("evento").onclick= evento;

function pais(destino, costo) {
    this.destino = destino;
    this.costo = costo;
};

var alemania = new pais("berlin",  900);
var brasil = new pais("rio de janeiro",  900);
var puntaC = new pais("punta cana",  900);
var colombia = new pais("bogota",  900);
var margarita = new pais("margarita",  900);
var losRoques = new pais("los roques",  900);

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

function evento(event) {

    if (event.keyCode == 13) {
        alert("Has presionado el ENTER")
    }
    else{
        alert('Has presionado una letra dentro de este campo');
    }
}



function comprar() {


    var nombre = document.getElementById("fname").value;
    var apellido = document.getElementById("lname").value;
    var destino = document.getElementById("destino").value;
    var contenido = document.createTextNode(`Titular: ${nombre}, ${apellido} | Destino: ${destino} | El pago ha sido procesado. ¡Disfruta tu viaje!`);
    document.getElementById("alert alert-success").appendChild(contenido);
    
    
}







