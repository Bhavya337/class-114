  nose_x=0;
  nose_y=0;
  function preload(){
clown_nose=loadImage("https://i.postimg.cc/q7zvGDKR/red-nose.png");
 }

 function setup(){
     canvas=createCanvas (350 ,350) ;
     canvas.center();
     video = createCapture(VIDEO);
     video.size(350, 350);
     video.hide();
     
     poseNet=ml5.poseNet(video,modelLoaded);
     poseNet.on('pose',gotPoses );

 }

 function modelLoaded(){
     console.log('pose net model is loaded ');
 }
 
 function takesnapshot(){
    save("filterimage.png")
 }
 function gotPoses(results){
if (results.length>0){
    console.log(results);
    nose_x=results[0].pose.nose.x-15;
    nose_y=results[0].pose.nose.y-15;
    console.log("x codinate for nose is "+ results[0].pose.nose.x );
    console.log("y codinate for nose is "+ results[0].pose.nose.y );

}
 }
 function  draw(){
  image(video,0,0,350,350);
  // fill(255,0,0);
   ///stroke(255,0,0);
  // circle(nose_y,nose_x,50);
  image(clown_nose,nose_x,nose_y,50,50);


}