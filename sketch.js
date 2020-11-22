const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var box1;
var bg="bg2.jpg"
var backgroundimage
var score=0
var birdSound
var pigSound
var birds=[]
function preload(){
    GetBackgroundImage()
birdSound=loadSound("bird_flying.mp3")
pigSound=loadSound("pig_snort.mp3")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70)
    log1=new Log(810,260,300,PI/2 )    
    log2=new Log(810,180,300,PI/2 )   
    log3=new Log(760,120,150,PI/7 )  
    log4=new Log(870,120,150,-PI/7 )  
    log5=new Log(230,180,80,PI/2)
    ground = new Ground(600,height,1200,20)
platform=new Ground(150,305,300,170)
    bird1=new Bird(200,50)
    bird2=new Bird(150,170)
    bird3=new Bird(100,170)
    bird4=new Bird(50,170)
    birds.push(bird4)
    birds.push(bird3)
    birds.push(bird2)
    birds.push(bird1)
pig1=new Pig(810,350)
pig2=new Pig(810,220)
string=new String(bird1.body,{x:200,y:50})
}

function draw(){
 if(backgroundimage)  
    background(backgroundimage);
    Engine.update(engine);
    textSize(25)
    text("Score"+score,width-300,20)
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
box1.display()
box3.display()
box4.display()
box5.display()
log1.display()
log2.display()
log3.display()
log4.display()
pig1.display()
pig1.score()
pig2.display()
pig2.score()
bird1.display()
bird2.display()
bird3.display()
bird4.display()
//log5.display()
string.display()
platform.display()
}
function mouseDragged(){
Matter.Body.setPosition(birds[birds.length-1].body,{x:mouseX,y:mouseY})
Matter.Body.applyForce(birds[birds.length-1].body,birds[birds.length-1].body.setPosition,{x:5,y:-5})
}

function mouseReleased(){
string.fly()
birdSound.play()
}
function keyPressed(){
    if(keyCode==32){
       //bird.trajectory=[]
       if(birds.length>0){
       Matter.Body.setPosition(birds[birds.length-1].body,{x:200,y:50})
       string.attach(birds[birds.length-1].body)
        }
 }
}
async function GetBackgroundImage(){
var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responseJSON=await response.json()
var datetime=responseJSON.datetime
var hour=datetime.slice(11,13)
if(hour>=06&&hour<=19){
    bg="bg.png"
}else{
    bg="bg2.jpg"
}
backgroundimage=loadImage(bg)
}