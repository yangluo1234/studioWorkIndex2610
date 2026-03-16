//find elements to use in the page
const introDialog = document.getElementById("intro-dialog");
const dialogCloseButton = document.getElementById("dialog-close-button");
const playButton = document.getElementById("play-button");

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
}

function endNote() {
  synth.triggerRelease();
}

playButton.addEventListener("mousedown", startNote);
playButton.addEventListener("mouseup", endNote);
