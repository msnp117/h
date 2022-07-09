/*var nombre = "maria";
var altura = 160;

 var concatenacion = nombre + " " + altura;

var datos = document.getElementById("datos");
datos.innerHTML = `
				<h1>Soy la caja de datos</h1>
				<h2>Mi nombre es: ${nombre}</h2>
				<h3>Mido: ${altura} cm</h3>
`;

if (altura >= 190) {
	datos.innerHTML += `<h1>Sos una persona ALTA`;
}
else {
	datos.innerHTML += `<h1>Sos una persona BAJITA`;
}

for (var i = 2; i <= 10; i++) {
	datos.innerHTML += i+ " elefantes se balanceaban sobre la tela de una araña "+
						"como veian que resistia, fueron a buscar otro elefante"+`<br>`;
} */

function muestraMiNombre(nombre, altura){
	var misDatos=
datos.innerHTML = `
				<h1>Soy la caja de datos</h1>
				<h2>Mi nombre es: ${nombre}</h2>
				<h3>Mido: ${altura} cm</h3>
`;

return misDatos;
}
function imprimir(){
	var datos = document.getElementById("datos");
datos.innerHTML = muestraMiNombre("ana", 140)
}
imprimir();

var nombres = ["Ana", "Jose", "Esteban"];

document.write(`<h1>Listado de nombres</h1>`)
/*
for (i=0 ; i<nombres.length ; i++){
	document.write(nombres[i] + `<br>`);
}*/

nombres.forEach((nombre) => {
	document.write(nombre + `<br>`);
})




















