// let numero = 0;

/*
while (numero < 1000){
	numero ++;
	document.write(numero);
	if (numero == 10){
		break;  //rompe el bucle
	}
}
*/
/*
do {
	document.write(numero + "<br>");
	numero++
}
while (numero < 4)
*/
/*
for (let i = 0; i < 20; i++) {

	if (i === 12) {
		continue; //saltea lo indicado
	}
	document.write(i + "<br>")
}
*/
/*
let animales = ["gato", "perro", "tiranosaurio rex"];

for (animal in animales){ //muestra la posicion de los elementos
	document.write(animal + "<br>");
}

for (animal of animales){ // muestra el valor de los elementos
	document.write(animal + "<br>");
}
*/

// let array1 = ["maria", "josefa", "roberta"];
// let array2 = ["pedro", "marcelo", array1, "josefina"];

/*
label: //fijate maria, yo tampoco entendi bien
for (let array in array2){
	if (array == 2) {
		for (let array of array1){
			document.write(array + "<br>");
			break label;
		}
	}
	else {
		document.write(array2[array] + "<br>");
	}
}
*/
/*
let frase = `Hola ${nombre}! ¿Cómo estás?`;

function saludar(nombre){
	document.write(frase);
}

const saludar = function(nombre){
	document.write(frase);
}

const saludar = nombre=> document.write(frase);
//si es un solo parametro no hace falta ()
//si solo hay una linea no hace falta {}

saludar("pedro")
*/

/* POO
class Animal {
	constructor(especie, edad, color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `soy ${this.especie},
							tengo ${this.edad} años
							y soy de color ${this.color}`;
	}
	verInfo(){
		document.write(this.info + "<br>");
	}
}

class Perro extends Animal {
	constructor(especie,edad,color,raza){
		super(especie,edad,color);
		this.raza = null;
	}
	
	static ladrar(){ //se puede usar sin definir objeto
		alert("waf");
	}

	set setRaza(newName){
	//modificar algo
	//funciona como propiedad
		this.raza = newName;
	}

	get getRaza(){ //obtener un valor
		return this.raza;
	}
}

const perro = new Perro("perro", 5, "marron", "doberman");
const gato = new Animal("gato", 2, "negro");
const pajaro = new Animal("pajaro", 1, "verde");

// document.write(perro.info + "<br>");
// document.write(gato.info + "<br>");
// document.write(pajaro.info + "<br>");

perro.setRaza = "pedro"; //set
document.write(perro.getRaza);

*/

//concat(cadena) concatena

//BUSCAR CADENAS Y DEVOLVER UN VALOR
//startsWith(cadena) comienza con B
//endsWith(cadena) termina con B
//includes(cadena) incluye B
// indexOf(cadena) posicion en donde empieza la 1° conincidencia
// lastIndexOf(cadena) posicion donde empieza la ultima coincidencia


// RELLENAR CADENA
// padStart(num, relleno) rellena la cadena al principio
// padEnd(num, relleno) rellena la cadena al final
// repeat(num) repite la cadena 

//OTRAS MODIFICACIONES
//split() la convierte en array separado por "-valor-"
//substring(num1, num2) muestra un pedazo de la cadena
// toLowerCase() minuscula
//toUpperCase() mayuscula
// toString() convierte a string 
// trim() elimina los espacios
// trimEnd() elimina los espacios del final
// trimStart() elimina los espacios del principio

//METODOS DE ARRAYS
// pop() elimina el ultimo elemento y lo muestra
// shift() elimina el primero y lo muestra
// push(cadena) agrega un elemento al final y muestra la cant final
// reverse() invierte el orden del array
// unshift() agrega elementos al inicio y muestra la longitud del array
// sort() ordena lexicograficamente
// splice(arranca, cantElim-elem, "agreg-elem") elimina-agrega elementos
// splice(-1, cantElim-elem, "agreg-elem") elimina-agrega al final - en realidad en el penultimo lugar


//ACCESORES crea nuevo array
// join(separador) convierte a string - poner separador entre elem
// slice(num1, num2) como substring 
// slice(num1, -1) selecciono todo menos el ultimo
// slice(0) selecciona todo
// metodos de cadenas

//DE REPETICION
// filter(funcion(cadaElem)) recorre el bucle
// filter(funcion(cadaElem => condicion)) nuevo array con elem que cumplan la cond
// forEach(funcion(cadaElem)) recorre el bucle



// METODOS OBJETO MATH
// sqrt() raiz cuadrada
// cbrt() raiz cubica
// max() numero mas grande
// min() numero mas chico
// random()*num  numero aleatorio entre 0 y 1 - 0 a num
// round() redondea al numero mas cercano
// floor() redondea al numero menor
// fround() no entendi ajsj - creo que redondea con 15 decimales (4 byter) o algo asi 
// trunc() elimina los decimales

//PROPIEDADES
// PI pi
// SQRT1_2 raiz cuadrado de un medio 1/2
// SQRT2 raiz cuadrada de 2
// E euler
// LN2 logaritmo natural de 2
// LN10 logaritmo natural de 10
// LOG2E logaritmo de E con base 2
// LOG10E  logaritmo de E con base 10

// CONSOLA 

//funciones de registro

// assert() muestra aciertos
// clear() limpia todo lo anterior
// error() muestra un mensaje en forma de error
// info() mensaje informativo 
// log() mensaje de depuracion
// table([array u objeto]) muestra una tabla con index y valor
// warn() advertencia
// dir() muestra propiedade de un objeto
 
 // funciones de conteo

 // count() cuantas veces se ejecuta
 // countReset() reinicia el conteo de count

 // funciones de agrupacion

 // group(nombre del grupo) abre un grupo desplegable abierto
 // groupEnd() termina el grupo
 // groupCollapsed() abre un grupo cerrado

// funciones de temporizacion

// time() inicia un temporizador
// timeLog() dice cuanto tiempo paso desde que empezo
// timeEnd() finaliza el temporizador

// console.log("%cpalabra", "estilo1; estilo2; estilo3")


// DOM

// tipos de Nodos
// document: nodo raiz de donde nacen los otros nodos
// element : definidos por etiquetas html
// text: texto dentro de "element"
// Atribute: info asociada a un "element"
// comentarios y otros: 

// METODOS DE SELECCION DE ELEMENTOS
// document.

// getElementById() selecciona elemeto por id
// getElementsByTagName() devuelve lista de elementos 
// -seleccionan con selectores css
// querySelector() primer elemento que coincida con el grupo especificdo
// querySelectorAll() lista de todos los elementos que coincidan con el grupo especificado

// elemento. 
// setAtributte("atributo", "modificacion") modifica y/o crea
// getAtributte("atributo") obtiene
// removeAtributte("atributo") remueve 

// ATRIBUTOS GLOBALES todos los elementos html lo tienen

// contentEditable - el elemento se puede edtar
// dir - direccion
// hidden - oculta
// tabindex - indica si puede tener focus y el orden en que se seleccionan con tab
// title - da informacion sobre el elemeto como que es o para que sirve

// ATRIBUTOS INPUT

// className - nombre de clase
// value
// type
// accept - en type file se pone que formatos se aceptan
// form - ejecutar inout dentro de form
// minLength - minimo de crcacteres
// placeholder 
// require 

// STYLE
// element.style.propiedad
// en lugar de un guion- se usa camelCase

// elemento.CLASSLIST. 

// add() añade una clase
// remove() remueve una clase 
// item(num) accede a las clases segun el numero
// contains() indica true o false si contine la clase
// toggle() si tiene la clase la remueve y si no la tiene la agrega
// cuando agreg tiene valor true
// cuando la elimina tiene valor false
// si le ponemos como segundo valor true, siemepre la agrega
// si le ponemos como segundo valor false, siempre la elimina
// replace(clase1, clase2) remueve la clase1 y la remplaza con clase2

// OBTENCION Y MODIFICACION DE ELEMENTOS

// textContent - muestra el texto sin html ni css
// innerText - muestra texto visible 
// outerText - no entendi , no es recomendado
// innerHTML - muestra el codigo HTML(elementos sin atributos)
// outerHTML - muestra el codigo HTML(elementos con atributos)

// CREACION DE ELEMENTOS document.

// createElement("NOMB-ELEM")
// createTextNode()
// createDocumentFragment() 

// elemento.
// appendChild(elemento2) agrega el elemento2 como hijo del elemento

// OBTENCION T MODIFICACION DE CHILDS(HUJOS)

// elemento.
// firstChild - primer hijo
// lastChild - ultimo hijo
// firstElementChild - primer elemento hijo
// childNodes - NodeList de los elementos dentro del elemento
// children - etiquetas HTML hijos

// -los espacios etre etiquetas son tomados como texto y elemento-

// METODOS DE CHILDS 

//replaceChild(elementNuevo,elementAntiguo) reemplaza 
// removeChild() remueve 
// hasChildNodes() indica si tiene o no tiene hijos

// PROPIEDADES DE PARENTS(PADRES)

// parentElement - selecciona elemento padre de un elemento
// parentNode - seleccion nodo padre de un elemento

// PROPIEDADES DE SWIBLINGS(HERMANOS)

// nextSibling - nodo hermano que le sigue
// previousSibling - nodo hermano previo
// nextElementSibling - elemento hermano que le sigue
// previousElementSibling - elemento hemano previo

// closest("selector") muestra el elemento ascendente mas cercano -contenedor mas cercano-
