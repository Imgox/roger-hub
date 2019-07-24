window.onload = function(){
	let botona = document.getElementById('botona');
	let form = document.getElementById('form');
	let start = document.getElementById('start');
	let end = document.getElementById('end');
	let dakshi =document.getElementById('dakshi');
	let audio = new Audio('./snd/meme.mp3');

	botona.onclick = function(e){
		e.preventDefault();
		form.classList.add("hinge");
		audio.play();
		setInterval(function(){
			start.style.display = "none";
			end.style.display = "block";
		}, 3000);
	};
};
