leftwristX = 0
leftwristY = 0
rightwristX = 0
rightwristY = 0

function preload()
{
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function setup(){
    createCapture(VIDEO);
    
}

function draw(){
    
}

function modelLoaded(){
    console.log("posenet is initialised")
}

