// find our elements
const stageContainer = document.getElementById("stage-container");
const circleButton = document.getElementById("circle-button");

// Get the width and height of the stage container.
let stageContainerWidth = stageContainer.offsetWidth;
let stageContainerHeight = stageContainer.offsetHeight;

//console.log("Stage container width:", stageContainerWidth);
//console.log("Stage container height:", stageContainerHeight);

//set default circle colour
let circleColour = "red";

// create the konva stage
const stage = new Konva.Stage({
  container: "konva-stage",
  width: stageContainerWidth,
  height: stageContainerHeight,
});

const firstLayer = new Konva.Layer();

//add the first layer to the stage
stage.add(firstLayer);

// add interaction to the circle button
function drawNewCircle() {
  const circle = new Konva.Circle({
    x: stage.width() * Math.random(),
    y: stage.height() * Math.random(),
    radius: 50 * Math.random(),
    fill: random(circleColour),
  });
  firstLayer.add(circle);
}

circleButton.addEventListener("click", drawNewCircle);
