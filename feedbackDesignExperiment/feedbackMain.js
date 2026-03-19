//find elements to use in the page
const introDialog = document.getElementById("intro-dialog");
const dialogCloseButton = document.getElementById("dialog-close-button");
const playButton = document.getElementById("play-button");
//create a new button for note playing
const noteButton = document.getElementById("note-button");

//intro dialog setup
introDialog.showModal();
dialogCloseButton.addEventListener("click", () => {
  introDialog.close();
  Tone.start();
});

//tone synth init
const synth = new Tone.Synth({
  oscillator: {
    type: "sine",
  },
  envelope: {
    attack: 0.1,
    decay: 0.2,
    sustain: 0.5,
    release: 1,
  },
}).toDestination();

//play sound with tone
//This button will play a note when clicked.
function playNote() {
  synth.triggerAttackRelease("C4", "8n");
}

//playButton.addEventListener("click", playNote);

function startNote() {
  synth.triggerAttack("C4");
  document.body.style.backgroundColor = "lightblue";
  //Add a class to the button to indicate it's pressed, which can be styled with CSS for visual feedback.
}

function endNote() {
  synth.triggerRelease();
  document.body.style.backgroundColor = "lightgreen";
}

playButton.addEventListener("mousedown", startNote);
playButton.addEventListener("mouseup", endNote);
playButton.addEventListener("mouseleave", endNote);

//Note button Experiment
//This button focus on playful feedback through hover, click and reset.
//play sound with tone and visual feedback ( background color change from red to yellow)
//setTimeout is used to change the background colour back to yellow after 500ms, creating a visual feedback
//that indicates the note has been played.
//This experiment is to explore how visual feedback changes with the sound.
function playNoteWithFeedback() {
  synth.triggerAttackRelease("C4", "8n");
  document.body.style.backgroundColor = "red";
  setTimeout(() => {
    document.body.style.backgroundColor = "yellow";
  }, 500);
}
//Reset background colour to white.
//I chose to reset the background colour to white because it provides
//a clean feel and allows the feedback colours (red and yellow during note play)to stand out more clearly.

function resetBackground() {
  document.body.style.backgroundColor = "white";
}
//when mouse leaves the button, reset background color to white
noteButton.addEventListener("mouseleave", resetBackground);

//when button is clicked, play note and change background color for feedback
noteButton.addEventListener("click", playNoteWithFeedback);
