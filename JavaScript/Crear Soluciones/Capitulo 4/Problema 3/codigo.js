// funcion para preguntar en que materia se quiere inscribir
// negar la inscripcion si hay mas de 20 alumnos anotados
// si has menos de 20 inscribir y añadir a la lista de alumnos

let materias = {
		fisica: ["Perez","pedro","pepito","cofla","maria"],
		programacion: ["Rodriguez","pedro", "juan","pepito"],
		logica: ["Hernandez","pedro", "juan","pepito","cofla","maria"],
		quimica: ["Dalto","pedro", "juan","pepito","cofla","maria"]
	}

const inscribir = (alumno, materia) => {
	let personas = materias[materia];
	if (personas.length >= 21) {
		document.write(`Lo siento ${alumno},
			la clase de ${materia} ya está llena <br> <br>`)
	} else {
		personas.push(alumno);
		if (materia == "fisica"){
			materias = {
				fisica: personas,
				programacion: materias[`programacion`],
				logica: materias[`logica`],
				quimica: materias[`quimica`]
			}
		}
	else if (materia == "programacion"){
			materias = {
				fisica: materias[`fisica`],
				programacion: personas, 
				logica: materias[`logica`],
				quimica: materias[`quimica`]
			}
	} else if (materia == "logica"){
			materias = {
				fisica: materias[`fisica`],
				programacion: materias[`programacion`],
				logica: personas,
				quimica: materias[`quimica`]
			}
	} else if (materia == "quimica"){
			materias = {
				fisica: materias[`fisica`],
				programacion: materias[`programacion`],
				logica: materias[`logica`],
				quimica: personas
			}
	}
	document.write(`Felicidades ${alumno}! te has inscripto
		a ${materia} correctamente`)
}
}

document.write(materias["fisica"] + "<br>")
inscribir("pepe", "fisica")
document.write("<br>" + materias["fisica"])