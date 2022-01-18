img=""
staus=""
object=[]
function preload(){
    img=loadImage("tv and ac on same wall.jpg")
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
    fill("blue")
    noStroke()
    text("TV",200,194)
    noFill()
    stroke("blue")
    rect(190,180,230,150)
    fill("blue")
    noStroke()
    text("AC",200,13)
    noFill()
    stroke("blue")
    rect(180,0,260,150)}