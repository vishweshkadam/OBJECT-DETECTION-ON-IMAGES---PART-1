img=""
staus=""
object=[]
function preload(){
    img=loadImage("cell phon and laptop.jpg")
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
    text("Cell Phone",200,194)
    noFill()
    stroke("blue")
    rect(180,160,100,170)
    fill("blue")
    noStroke()
    text("Laptop",200,13)
    noFill()
    stroke("blue")
    rect(100,0,260,150)}