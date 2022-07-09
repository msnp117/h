// funcion que al pasar por parametro una materia
// devuelva profesor asignado y nombre de alumnos

// funcion que diga en cuantas clases está

// nombrar las clases en las que esta y los prof de cada una

const obtenerInformacion = (materia=>{
	const materias = {
		fisica: ["Perez","pedro","pepito","cofla","maria"],
		programacion: ["Rodriguez","pedro", "juan","pepito"],
		logica: ["Hernandez","pedro", "juan","pepito","cofla","maria"],
		quimica: ["Dalto","pedro", "juan","pepito","cofla","maria"]
	}
	if (materias[materia] !== undefined){
		return [materias[materia],materia,materias]
	} else{
		return materias
	}
})

const mostrarInformacion = (materia=>{
	let informacion = obtenerInformacion(materia)

	if (informacion !== false){
		let profesor = informacion[0][0];
		let alumnos = informacion[0];
		alumnos.shift();
		document.write( `Materia: ${informacion[1]}<br>
				Profesor: ${profesor}<br>
				Alumnos: ${alumnos}<br><br>`);
		
	}
})

const cantidadDeClases = (alumno)=>{
	let informacion = obtenerInformacion();
	let clasesPresentes = [];
	let cantidadTotal = 0;
	for (info in informacion){
		if (informacion[info].includes(alumno)){
			cantidadTotal++;
			clasesPresentes.push(" " + info);
		}
	}
	return `${alumno} está en ${cantidadTotal} clases:
			${clasesPresentes}`
}

mostrarInformacion("fisica");
mostrarInformacion("logica");
document.write(cantidadDeClases("pedro"))