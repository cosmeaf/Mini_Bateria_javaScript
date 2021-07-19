document.body.addEventListener('keyup', function(event){
	playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', function(){
	let song = document.querySelector('#input').value;

	if (song !== '') {
		let songArray = song.split('');
		console.log(songArray);
		payComposition(songArray);
	}

});


function playSound(sound){
	let audioElement = document.querySelector(`#s_${sound}`);
	let keyElement = document.querySelector(`div[data-key="${sound}"]`);

	if (audioElement) {
		audioElement.currentTime = 0;
		audioElement.play();
	}

	if (keyElement) {
		keyElement.classList.add('active');

		setTimeout(function(){
			keyElement.classList.remove('active');
		}, 250);
	}
}

function payComposition(songArray){
	let wait = 0;
	for(let songItem of songArray){
		setTimeout(function(){
			playSound(`key${songItem}`);
		}, wait);
		wait += 270;	
	}
}