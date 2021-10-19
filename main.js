var noseX=0;
var noseY=0;
var leftWrist=0;
var rightWrist=0;
var differnce=0;
function setup(){
    canvas=createCanvas(400, 400);
    canvas.position(500,170);
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet=ml5.poseNet(video,Modelloaded);
    poseNet.on('pose',gotPoses);
}
function Modelloaded(){
    console.log("PoseNet Loaded");
}
function draw(){
    background("#ff5450");
    fill("#00ffae");
    stroke("#7e21db");
    square(noseX,noseY,differnce);
    document.getElementById("squar").innerHTML="Width and Height of the square= "+differnce+"px";
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose X="+noseX+"Nose Y="+noseY);
        leftWrist=results[0].pose.leftWrist.x;
        rightWrist=results[0].pose.rightWrist.x;
        differnce=floor(leftWrist-rightWrist);
        console.log("Left Wrist X="+leftWrist+"Right Wrist X="+rightWrist+"Difference="+differnce);
    }
}