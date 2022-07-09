// mini calculadora 

const sumar = (num1, num2)=>{
	return parseInt(num1) + parseInt(num2);
}

const restar = (num1, num2)=>{
	return parseInt(num1) - parseInt(num2);
}

const dividir = (num1, num2)=>{
	return parseInt(num1) / parseInt(num2);
}

const multiplicar = (num1, num2)=>{
	return parseInt(num1) * parseInt(num2);
}

alert("¿Que operacion desea realizar?");
let operacion = prompt("1: suma, 2: resta, 3: division 4: multiplicacion");
 if ( operacion == 1){
 	let numero1 = prompt("primer numero");
 	let numero2 = prompt("segundo numero");
 	resultado = sumar(numero1, numero2);
 	alert(`El resultado es: ${resultado}`);
 }
 else if ( operacion == 2){
 	let numero1 = prompt("primer numero");
 	let numero2 = prompt("segundo numero");
 	resultado = restar(numero1, numero2);
 	alert(`El resultado es: ${resultado}`);
 }
 else if ( operacion == 3){
 	let numero1 = prompt("primer numero");
 	let numero2 = prompt("segundo numero");
 	resultado = dividir(numero1, numero2);
 	alert(`El resultado es: ${resultado}`);
 }
 else if ( operacion == 4){
 	let numero1 = prompt("primer numero");
 	let numero2 = prompt("segundo numero");
 	resultado = multiplicar(numero1, numero2);
 	alert(`El resultado es: ${resultado}`);
 }
 else {
 	alert("la operacion no existe");
 }