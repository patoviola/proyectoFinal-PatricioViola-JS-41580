//remitente
class Remitente {
    constructor(nombre, telefono, direccion){
    this.nombre = nombre
    this.telefono = telefono
    this.direccion = direccion
    }
}

var nombreRemitente = prompt("Ingrese nombre de quien envia")
var telefonoRemitente = prompt("Ingrese telefono del remitente")
var direccionDeRetiro = prompt("Ingrese direccion de partida")

const remitente1 = new Remitente(nombreRemitente, telefonoRemitente, direccionDeRetiro) 
console.log(remitente1)

let datosRemitente =document.createElement("div")
datosRemitente.innerHTML = `<h4>Remitente:</h4>
<ul>
    <li>Nombre Remitente: ${nombreRemitente}</li>
    <li>Contacto: ${telefonoRemitente}</li>
    <li>Direccion de Retiro: ${direccionDeRetiro}</li>
</ul>`
document.body.appendChild(datosRemitente)

//destinatario
class Destinatario {
    constructor(nombre, telefono, direccion){
        this.nombre = nombre
        this.telefono = telefono
        this.direccion = direccion
    }
}

var nombreDestinatario = prompt("Ingrese nombre de quien reciba")
var telefonoDestinatario = prompt("Ingrese telefono de quien recibe")
var direccionDeEntrega = prompt("Ingrese direccion de destino")

const destinatario1 = new Destinatario(nombreDestinatario, telefonoDestinatario, direccionDeEntrega)
console.log(destinatario1)

let datosDestinatario =document.createElement("div")
datosDestinatario.innerHTML = `<h4>Destinatario:</h4>
<ul>
    <li>Nombre Remitente: ${nombreDestinatario}</li>
    <li>Contacto: ${telefonoDestinatario}</li>
    <li>Direccion de Entrega: ${direccionDeEntrega}</li>
</ul>`
document.body.appendChild(datosDestinatario)

// Seleccion de Paquete
const cantidadDeKM = prompt("Indique cantidad de KM") // provisorio
const tipoDePaquete = prompt("Selecione tipo de paquete: 1: pequeño 2: mediano 3: grande")
const paquetePequeño = 80
const paqueteMediano = 90
const paqueteGrande = 100

function calcularPaquetePequeño(cantidadDeKM, paquetePequeño){
    const pequeño = cantidadDeKM * paquetePequeño;
    console.log("El valor del viaje es: $" + pequeño)
    let valorFinal = document.createElement("div")
    valorFinal.innerHTML = `<h3>Valor del Viaje: ${pequeño}</h3>`;
    document.body.appendChild(valorFinal)

}

function calcularPaqueteMediano(cantidadDeKM, paqueteMediano){
    const mediano = cantidadDeKM * paqueteMediano;
    console.log("El valor del viaje es: $" + mediano)
    let valorFinal = document.createElement("div")
    valorFinal.innerHTML = `<h3>Valor del Viaje: $${mediano}</h3>`;
    document.body.appendChild(valorFinal)
}

function calcularPaqueteGrande(cantidadDeKM, paqueteGrande){
    const grande = cantidadDeKM * paqueteGrande;
    console.log("El valor del viaje es: $" + grande)
    let valorFinal = document.createElement("div")
    valorFinal.innerHTML = `<h3>Valor del Viaje: $${grande}</h3>`;
    document.body.appendChild(valorFinal)
}

switch (tipoDePaquete) {
        case "1":
            calcularPaquetePequeño(cantidadDeKM, paquetePequeño);
            break;
        case "2":
            calcularPaqueteMediano(cantidadDeKM, paqueteMediano);
            break;
        case "3":
            calcularPaqueteGrande(cantidadDeKM, paqueteGrande);
            break;
        default:
            alert("Error de paquete")
    }
