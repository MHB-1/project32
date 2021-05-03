const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    getBackgroundImg()
}

function draw(){
    if(backgroundImg)
    background(backgroundImg)

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responseJSON = await response.json()

var datetime = responseJSON.datetime
var hour = datetime.slice(11,13);
if(hour>=04 && hour<=06){
    bg="sunrise1.png"
}
else if(hour>=08 && hour<=11){
    bg="sunrise2.png"
}

else if(hour>=011 && hour<=13){
    bg="sunrise3.png"
}

else if(hour>=13 && hour<=15){
    bg="sunrise4.png"
}

else if(hour>=15 && hour<=17){
    bg="sunrise5.png"
}

else if(hour>=17 && hour<=19){
    bg="sunrise6.png"
}

else if(hour>=19 && hour<=21){
    bg="sunrise7.png"
}

else if(hour>=21 && hour<=24){
    bg="sunrise8.png"
}

else if(hour>=05 && hour<=11){
    bg="sunrise2.png"
}
    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime
    backgroundImg=loadImage(bg)


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
