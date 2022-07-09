document.getElementById('hablar').addEventListener("click",()=>{
	decir(document.getElementById('texto').value);
});

function decir(texto) {
	speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}


document.getElementById('hablar2').addEventListener("click",()=>{
	decir2(
		`
		<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">
   			<voice name="en-US-JennyNeural">
       			 hola
    		</voice>
		</speak>
		`
		);
});

function decir2(texto) {
	speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}
