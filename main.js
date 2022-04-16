status = "";
input_name = "";

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.size(400, 400);
    webcam.hide();
}

function start() {
    cocomelon = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects";
    input_name = document.getElementById("input").value;
}

function modelLoaded() {
    console.log("Success!");
    status = true;
}

function draw() {
    image(webcam,0,0,400,400);
}