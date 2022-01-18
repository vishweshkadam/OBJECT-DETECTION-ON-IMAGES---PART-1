img=""
staus=""
object=[]
function preload(){
    img=loadImage("furit basket.jpg")
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
    text("Friut Basket",110,13)
    noFill()
    stroke("blue")
    rect(100,0,360,350)}