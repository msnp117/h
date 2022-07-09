/* crear un sistema para mostrar las 
particularidades de 3 celulares*/
/*cada celular debe tener color, peso, resolucion
de pantalla, resolucion de camara y memoria ram*/
/*cada celular debe poder prender, reiniciar, 
apagar, tomar fotos y grabar*/

/*implementar estas cualidades en los celulares de alta gama*/
/*pueden hacer lo mismo que los otros y cosas mejores*/
/*pueden: grabar en camara super lenta, tienen reconocimiento 
facial y una camara extra*/

class Celular {
	constructor(color, peso, tamaño, rdc, ram){
		this.color = color;
		this.peso = peso;
		this.tamaño = tamaño;
		this.resolucionDeCamara = rdc;
		this.memoriaRam = ram;

		this.encendido = false;
	}
	presionarBotonEncendido (){
		if (this.encendido==false){
			alert("celular prendido");
			this.encendido = true;
		} else {
			alert ("celular apagado");
			this.encendido = false;
		}
	}
	reiniciar (){
		if (this.encendido==false){
			alert("reiniciando celular");
		} else {
			alert ("celular apagado");
		}
	}

	tomarFoto(){
		alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
	}

	grabarVideo(){
		alert(`grabando video en: ${this.resolucionDeCamara}`)
	}

	mostrarInfo(){
		return `
		Color: <b>${this.color}</b> <br>
		Peso: <b>${this.peso}</b> <br>
		Tamaño: <b>${this.tamaño}</b> <br>
		Resolución de Cámara: <b>${this.resolucionDeCamara}</b> <br>
		Memoria Ram: <b>${this.memoriaRam}</b> <br>
		`
	}
}

class CelularAltaGama extends Celular {
	constructor (color,peso,tamaño,rdc,ram,rdce){
		super(color,peso,tamaño,rdc,ram);
		this.resolucionDeCamaraExtra = rdce;
		this.mostrarInfo
	}

	grabarVideoLento(){
		alert("estas grabando en camara lenta");
	}
	reconocimientoFacial(){
		alert("vamos a iniciar un reconocimiento facial");
	}
	infoAltaGama(){
		return this.mostrarInfo() + `
		Resolución de Cámara Extra: <b>${this.resolucionDeCamaraExtra}</b>`;
	}
}

celular1 = new Celular("rojo","150g","5'","hd","1gb");
celular2 = new Celular("negro","155g","5.4'","full hd","2gb");
celular3 = new Celular("blanco","145g","5.9'","full hd","2gb");

celular3= new CelularAltaGama("rojo","130g","5.2","4k","3gb","full hd");
celular4 = new CelularAltaGama("rojo","130g","5.2","4k","3gb","full hd");

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

document.write(`
	CELULARES <br>
	${celular1.mostrarInfo()}<br>
	${celular2.mostrarInfo()}<br>
	${celular3.mostrarInfo()}<br>
	`)
document.write(`
	CELULARES ALTA GAMA <br>
	${celular3.infoAltaGama()} <br><br>
	${celular4.infoAltaGama()} <br>
	`)