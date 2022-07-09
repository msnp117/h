// dejar pasar solo a los mayores de edad
// la 1er persona despues de las 2am entra gratis


let free = false;

const validarCliente = (time)=>{
	let edad = prompt("¿Cual es tu edad?");
	if (edad > 18){
		if (time > 2 && time < 7 && free == false){
			alert("pasa gratis")
			free = true;
		}
		else {
			alert("paga la entrada")
		}
	}
	else {
		alert("sos menor, no pasas")
	}
}

validarCliente(23)
validarCliente(3)
validarCliente(4)