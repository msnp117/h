/* 
	3 chicos deben ingresar cuanto dinero tienen y 
	hay que indicarles cual es el helado mas caro que pueden comprar
	y cuanto es su vuelto
*/

let dineroCofla = prompt("¿Cuanto dinero tienes, Cofla?");
let dineroRoberto = prompt("¿Cuanto dinero tienes, Roberto?");
let dineroPedro = prompt("¿Cuanto dinero tienes, Pedro?");

dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);

if (dineroCofla >= 0.6 && dineroCofla < 1){
	alert("comprate el helado de agua, Cofla");
	alert("y te sobran " + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6){
	alert("comprate el helado de crema, Cofla");
	alert("y te sobran " + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
	alert("comprate el helado de heladix, Cofla");
	alert("y te sobran " + (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
	alert("compate el helado de heladovich, Cofla");
	alert("y te sobran " + (dineroCofla - 1.7));
}

else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
	alert("comprate el helado de helardo, Cofla");
	alert("y te sobran " + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9){
	alert("comprate el helado con confites o el pote de 1/4kg, Cofla");
	alert("y te sobran " + (dineroCofla - 2.9));
}
 else {
 	alert("no te alcanza para nada, Cofla")
 }

//roberto

 if (dineroRoberto >= 0.6 && dineroRoberto < 1){
	alert("comprate el helado de agua, Roberto");
	alert("y te sobran " + (dineroRoberto - 0.6));
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
	alert("comprate el helado de crema, Roberto");
	alert("y te sobran " + (dineroRoberto - 1));
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
	alert("comprate el helado de heladix, Roberto");
	alert("y te sobran " + (dineroRoberto - 1.6));
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
	alert("compate el helado de heladovich, Roberto");
	alert("y te sobran " + (dineroRoberto - 1.7));
}

else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
	alert("comprate el helado de helardo, Roberto");
	alert("y te sobran " + (dineroRoberto - 1.8));
}

else if (dineroRoberto >= 2.9){
	alert("comprate el helado con confites o el pote de 1/4kg, Roberto");
	alert("y te sobran " + (dineroRoberto - 2.9));
}
 else {
 	alert("no te alcanza para nada, Roberto")
 }

 // pedro


 if (dineroPedro >= 0.6 && dineroPedro < 1){
	alert("comprate el helado de agua, Pedro");
	alert("y te sobran " + (dineroPedro - 0.6));
}
else if (dineroPedro >= 1 && dineroPedro < 1.6){
	alert("comprate el helado de crema, Pedro");
	alert("y te sobran " + (dineroPedro - 1));
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7){
	alert("comprate el helado de heladix, Pedro");
	alert("y te sobran " + (dineroPedro - 1.6));
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8){
	alert("compate el helado de heladovich, Pedro");
	alert("y te sobran " + (dineroPedro - 1.7));
}

else if (dineroPedro >= 1.8 && dineroPedro < 2.9){
	alert("comprate el helado de helardo, Pedro");
	alert("y te sobran " + (dineroPedro - 1.8));
}

else if (dineroPedro >= 2.9){
	alert("comprate el helado con confites o el pote de 1/4kg, Pedro");
	alert("y te sobran " + (dineroPedro - 2.9));
}
 else {
 	alert("no te alcanza para nada, Pedro")
 }


 // version mas optima
/*
 const definirCompra = (n) => {
 	let din = prompt(`Dinero de ${n}`);
 	if (din >= 0.6 && din < 1) return (`${n}: helado de agua`);
	if (din >= 1 && din < 1.6) return (`${n}: helado de crema`);
	if (din >= 1.6 && din < 1.7) return (`${n}: helado de heladix`);
	if (din >= 1.7 && din < 1.8) return (`${n}: helado de heladovich`);
	if (din >= 1.8 && din < 2.9) return (`${n}: helado de helardo`);
	if (din >= 2.9) return (`${n}: helado de confites o pote de 1/4kg`);
	else return (`${n}: no te alcanza para nada`);
 }

console.log(definirCompra("Cofla"));
console.log(definirCompra("Roberto"));
console.log(definirCompra("Pedro"));
*/