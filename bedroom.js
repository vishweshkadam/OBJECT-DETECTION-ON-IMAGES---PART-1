img=""
staus=""
object=[]
function preload(){
    img=loadImage("BEDROOM.jpg")
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
    fill("red")
    noStroke()
    text("Bed",40, 90)
    noFill()
    stroke("red")
    rect(30,40,400,300)
    fill("blue")
    noStroke()
    text("Lump",400,100)
    noFill()
    stroke("blue")
    rect(400,80,100,150)

}