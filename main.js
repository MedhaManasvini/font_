left_wrist = 0
right_wrist = 0
difference = 0

function setup() {
    video = createCapture(VIDEO);
    video.size(600, 600);
    canvas = createCanvas(400, 400);
    canvas.position(800, 120);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("model is loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        left_wrist = results[0].pose.leftWrist.x;
        right_wrist = results[0].pose.rightWrist.x;
        difference = floor(left_wrist - right_wrist);
    }
}

function draw() {
    background('#9cffd4');
    textSize(difference);
    fill('#0000ff');
    text('Medha', 50, 400);
}
