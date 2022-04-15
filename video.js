var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
	console.log("The current volume is " + video.volume)
	document.querySelector("#volume").innerHTML = video.volume *100+"%"
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume*100 + '%'
	console.log("The current volume is " + video.volume*100 + '%')
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
	
});


document.querySelector("#slower").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate)
	video.playbackRate *=.95
	console.log("New speed is " + video.playbackRate)

});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate)
	video.playbackRate /=.95
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("The value of mute is " + video.muted)
	if (video.muted == true) {
		video.muted = false
		this.innerHTML = "Mute"
		console.log("The value of mute is " + video.muted)
	}
	else {
		video.muted = true
		this.innerHTML = "Unmute"
		console.log("The value of mute is " + video.muted)
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = video.volume*100 + '%'
	console.log("The current volume is " + video.volume*100 + '%')
});

document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector("video").classList.add("oldSchool")
	console.log("Old School")
});

document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector("video").classList.remove("oldSchool")
	console.log("Original Styling")
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 15 >= video.duration) {
		video.currentTime = 0
	}
	else {
		video.currentTime += 15
	}
	console.log("The current time is " + video.currentTime)
});