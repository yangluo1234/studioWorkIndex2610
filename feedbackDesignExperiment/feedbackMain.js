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
const synth = new Tone.Synth().toDestination();

//play sound with tone
function playNote() {
  synth.triggerAttackRelease("C4", "8n");
}

//playButton.addEventListener("click", playNote);

function startNote() {
  synth.triggerAttack("C4");
  document.body.style.backgroundColor = "lightblue";
}

function endNote() {
  synth.triggerRelease();
  document.body.style.backgroundColor = "lightgreen";
}

playButton.addEventListener("mousedown", startNote);
playButton.addEventListener("mouseup", endNote);

//Note button Experiment
//play sound with tone and visual feedback ( background color change from red to yellow)
function playNoteWithFeedback() {
  synth.triggerAttackRelease("C4", "8n");
  document.body.style.backgroundColor = "red";
  setTimeout(() => {
    document.body.style.backgroundColor = "yellow";
  }, 500);
}

function resetBackground() {
  document.body.style.backgroundColor = "white";
}
//when mouse leaves the button, reset background color to white
noteButton.addEventListener("mouseleave", resetBackground);

noteButton.addEventListener("click", playNoteWithFeedback);
