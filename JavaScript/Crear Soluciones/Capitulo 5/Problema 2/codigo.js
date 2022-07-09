// dividir tares semanalmente
/* debe trabajar 8 horas por dia durante 2 semanas
y tiene que estudiar 24 horas
	hacer trabajos practicos 24 horas
	trabajar 56 horas
	hacer cosas de la casa 8 horas 
*/

// organizar las actividades diariamente
// utilizar la consola para organizar todo
// el tiempo por tarea no debe superar las 4 horas

/* 	30min para cosas de la casa
	100min trabajos practicos
	100min estudiar
	240min trabajar
	10min descanso
*/

let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos de hacer trabajos practicos";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";

console.log("TAREAS");

for (let i = 0; i < 14; i++){
	if (i == 0){
		console.group("Semana 1")
	} else if (i == 7){
		console.groupEnd();
		console.groupCollapsed("Semana 2")
	}
	console.groupCollapsed("Dia " + (i+1));
	console.log(trabajo);
	console.log(descanso);
	console.log(estudio);
	console.log(tp);
	console.log(homework);
	console.groupEnd();
	
}

console.groupEnd();
console.groupEnd();

