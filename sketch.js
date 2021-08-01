const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var sqaure1;
var polygon;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  console.log(sqaure1)
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  sqaure1= new Block(640,175,30,40);
  sqaure2=new Block(670,175,30,40);
  sqaure3=new Block(700,175,30,40);
 sqaure4= new Block(730,175,30,40);
  sqaure5=new Block(760,175,30,40);

  sqaure6=new Block(670,155,30,40);
  sqaure7=new Block(700,155,30,40);
  sqaure8=new Block(730,155,30,40);

  sqaure9=new Block(700,135,30,40);

  // To create Main polygon shape (shapePoly)
  shapePoly = Bodies.circle(50,200,20);
  World.add(world,shapePoly);

// To create Constraint

polygon=new Polygon(this.shapePoly,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill(rgb(201,69,78));
  stand2.display();

  fill(rgb(128,201,237));
  sqaure1.display();
  sqaure2.display();
  sqaure3.display();
  sqaure4.display();
  sqaure5.display();

  fill(rgb(51,207,208));
  sqaure6.display();
  sqaure7.display();
  sqaure8.display();

  fill(rgb(255,198,205));
  sqaure9.display();
//To display the constraint
  polygon.display();
//To display the polygon shape (shapePoly)
  imageMode(CENTER)
  image(polygon_img ,shapePoly.position.x,shapePoly.position.y,40,40);

  //{Here instead of slingshot u have to give polygon and the main object name is shapePoly}

}

function mouseDragged(){
  Matter.Body.setPosition(this.shapePoly,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  polygon.fly();
}

