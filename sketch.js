
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hero;
var gamestate = 0;
var wall1,wall105,wall2,wall205,wall3,wall305,wall4,wall405;
var corridor1,corridor105,corridor2,corridor205,corridor3,corridor305;

function preload()
{
	heroIMG = loadImage("FINALhero.png")
	enemy1IMG = loadImage("enemy1.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight-5);


	engine = Engine.create();
	world = engine.world;

	hero = createSprite(width/2,height/2,20,20);
	hero.addImage(heroIMG);
	hero.scale = 0.175;
	hero.rotation = 130;

	enemy1 = createSprite(-654,281,20,20);
	enemy1.addImage(enemy1IMG);
	enemy1.scale = 0.035;

	enemy101 = createSprite(-1089,506,20,20);
	enemy101.addImage(enemy1IMG);
	enemy101.scale = 0.035;

	enemy102 = createSprite(-1269,236,20,20);
	enemy102.addImage(enemy1IMG);
	enemy102.scale = 0.035;

	enemy103 = createSprite(-711,569,20,20);
	enemy103.addImage(enemy1IMG);
	enemy103.scale = 0.035;

	enemy104 = createSprite(-891,380,20,20);
	enemy104.addImage(enemy1IMG);
	enemy104.scale = 0.035;

	
	camera.x = hero.x;
	camera.y = hero.y;
	camera.zoom = 2; // change to 2 later

	wall1 = createSprite(width/2-400, height/2-140,5,220);
	wall105= createSprite(width/2-400, height/2+140,5,220);
	wall2 = createSprite(width/2+400, height/2-140,5,220);
	wall205 = createSprite(width/2+400, height/2+140,5,220);
	wall3 = createSprite(width/2-220, height/2+250,360,5);
	wall305 = createSprite(width/2+220, height/2+250,360,5);
	wall4 = createSprite(width/2-220, height/2-250,360,5);
	wall405 = createSprite(width/2+220, height/2-250,360,5);

	corridor1 = createSprite(680,-93,5,450);
	corridor105 = createSprite(760,-93,5,450);

	wall5 = createSprite(width/2-400, height/2-1090,5,220);
	wall505= createSprite(width/2-400, height/2-810,5,220);
	wall6 = createSprite(width/2+400, height/2-1090,5,220);
	wall605 = createSprite(width/2+400, height/2-810,5,220);
	wall7 = createSprite(width/2-220, height/2-700,360,5);
	wall705 = createSprite(width/2+220, height/2-700,360,5);
	//wall8 = createSprite(width/2-220, height/2-1200,360,5);
	wall805 = createSprite(width/2, height/2-1200,800,5);

	corridor2 = createSprite(680,855,5,450);
	corridor205 = createSprite(760,855,5,450);

	wall9 = createSprite(width/2-400, height/2+810,5,220);
	wall905= createSprite(width/2-400, height/2+1090,5,220);
	wall10 = createSprite(width/2+400, height/2+810,5,220);
	wall1005 = createSprite(width/2+400, height/2+1090,5,220);
	//wall11 = createSprite(width/2-220, height/2+1200,360,5);
	wall1105 = createSprite(width/2, height/2+1200,800,5);
	wall12 = createSprite(width/2-220, height/2+700,360,5);
	wall1205 = createSprite(width/2+220, height/2+700,360,5);

	corridor3 = createSprite(-105,350,850,5);
	corridor305 = createSprite(-105,410,850,5);

	//wall13 = createSprite(width/2-2050, height/2-140,5,220);
	wall1305= createSprite(width/2-2050, height/2,5,500);
	wall14 = createSprite(width/2-1250, height/2-140,5,220);
	wall1405 = createSprite(width/2-1250, height/2+140,5,220);
	wall15 = createSprite(width/2-1870, height/2+250,360,5);
	wall1505 = createSprite(width/2-1430, height/2+250,360,5);
	wall16 = createSprite(width/2-1870, height/2-250,360,5);
	wall1605 = createSprite(width/2-1430, height/2-250,360,5);

	corridor4 = createSprite(1545,350,850,5);
	corridor405 = createSprite(1545,410,850,5);

	wall17 = createSprite(width/2+1250, height/2-140,5,220);
	wall1705= createSprite(width/2+1250, height/2+140,5,220);
	//wall18 = createSprite(width/2+2050, height/2-140,5,220);
	wall1805 = createSprite(width/2+2050, height/2,5,500);
	wall19 = createSprite(width/2+1430, height/2+250,360,5);
	wall1905 = createSprite(width/2+1870, height/2+250,360,5);
	wall20 = createSprite(width/2+1430, height/2-250,360,5);
	wall2005 = createSprite(width/2+1870, height/2-250,360,5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#1a0d00");

  

  if(keyDown(LEFT_ARROW)){
	  hero.x = hero.x-9;//slow later
	  hero.rotation = 40;
  }
  if(keyDown(RIGHT_ARROW)){
	hero.x = hero.x+9;//slow later
	hero.rotation = 220;
}
if(keyDown(UP_ARROW)){
	hero.y = hero.y-9;//slow later
	hero.rotation = 130;
}

if(keyDown(DOWN_ARROW)){
	hero.y = hero.y+9;//slow later
	hero.rotation = 310;
}

camera.x = hero.x;
camera.y = hero.y;



hero.collide(wall1);
hero.collide(wall105);
hero.collide(wall2);
hero.collide(wall205);
hero.collide(wall3);
hero.collide(wall305);
hero.collide(wall4);
hero.collide(wall405);
hero.collide(corridor1);
hero.collide(corridor105);
hero.collide(corridor2);
hero.collide(corridor205);
hero.collide(corridor3);
hero.collide(corridor305);
hero.collide(corridor4);
hero.collide(corridor405);
hero.collide(wall5);
hero.collide(wall505);
hero.collide(wall6);
hero.collide(wall605);
hero.collide(wall7);
hero.collide(wall705);
//hero.collide(wall8);
hero.collide(wall805);
hero.collide(wall9);
hero.collide(wall905);
hero.collide(wall10);
hero.collide(wall1005);
//hero.collide(wall11);
hero.collide(wall1105);
hero.collide(wall12);
hero.collide(wall1205);
//hero.collide(wall13);
hero.collide(wall1305);
hero.collide(wall14);
hero.collide(wall1405);
hero.collide(wall15);
hero.collide(wall1505);
hero.collide(wall16);
hero.collide(wall1605);
hero.collide(wall17);
hero.collide(wall1705);
//hero.collide(wall18);
hero.collide(wall1805);
hero.collide(wall19);
hero.collide(wall1905);
hero.collide(wall20);
hero.collide(wall2005);



  
  drawSprites();
 
}



