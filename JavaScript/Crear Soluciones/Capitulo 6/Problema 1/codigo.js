/*crear sistema para poder elegir una llave entre 20 y
enviarla en un formulario*/

const contenedor = document.querySelector(".flex-container");
const boton = document.querySelector(".send-button");
let valor_antiguo = boton.value;
boton.value = valor_antiguo.toUpperCase();

function crearLlave(nombre, modelo, precio){
	img = `<img class="llave-img" src="data:image/jpeg;base64,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">`
	nombre = `<h2> ${nombre} </h2>`;
	modelo = `<h3> ${modelo} </h3>`;
	precio = `<p> Precio: <b>$${precio}</b> </p>`;
	return [img, nombre,modelo,precio];
}
const changeHidden = (number)=>{
	document.querySelector(".key-data").value = number
}

let documentFragment = document.createDocumentFragment();

for (let i = 0; i < 20; i++){
	let modeloRandom = Math.round(Math.random()*10000)
	let precioRandom = Math.round(Math.random()*10+30)
	let llave = crearLlave(`Llave ${i}`,`Modelo ${modeloRandom}`, precioRandom)
	let div = document.createElement("DIV");
	div.addEventListener("click",()=>{changeHidden(modeloRandom)})
	div.tabIndex = i;
	div.classList.add(`item-${i}`, `flex-item`);
	div.innerHTML =  llave[0] + llave[1] + llave[2] + llave[3]
	documentFragment.appendChild(div)
}

contenedor.appendChild(documentFragment)

// intentar optimizar el codigo