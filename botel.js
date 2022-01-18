img=""
staus=""
object=[]
function preload(){
    img=loadImage("botle.jpg")
}
function setup(){
Canvas=createCanvas(500,400)
Canvas.center()


}
function back(){
    window.location="index.html"
}


function draw(){
    image(img,0,0,500,400)
    fill("green")
    noStroke()
    text("botels",80, 30)
    noFill()
    stroke("green")
    rect(10,10,500,400)
}