document.getElementById("button").addEventListener("click", ()=>{
	decir("aaa");
});

function decir(valor){
	var utterance = new SpeechSynthesisUtterance();
	utterance.text = valor; // texto
	utterance.voice = speechSynthesis.getVoices()[1]; //voz
	utterance.volume = 1; //volumen
	utterance.rate = 0.9; //velocidad
	utterance.pitch = 1; //tono
	speechSynthesis.speak(utterance);
}
 function conversacion(){
 	var voices = window.speechSynthesis.getVoices(),
    agnesUtterance = new SpeechSynthesisUtterance(),
    albertUtterance = new SpeechSynthesisUtterance();
 
	agnesUtterance.voice = voices[11];
	albertUtterance.voice = voices[12];
	 
	agnesUtterance.text = 'Hello Albert, I\'m Agnes';
	albertUtterance.text = 'Hi Agnes, nice to meet you!';
	//eventos: start, end, pause, resume
	agnesUtterance.onend = function () {
    	speechSynthesis.speak(albertUtterance);
	}

	speechSynthesis.speak(agnesUtterance);
 }

// MOSTRAR LAS VOCES DISPONIBLES :
speechSynthesis.getVoices();
setTimeout(function () {
	speechSynthesis.getVoices().forEach(function(voice){
		console.log(voice.name)
	});
}, 1000);

