const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 var raindrops = [];
 var umbrella;
 var thunder,thunderImage1,thunderImage2,thunderImage3,thunderImage4;

function setup() {
  engine = Engine.create();
  world = engine.world;
  var canvas = createCanvas(700,650);
  umbrella = new Umbrella(350, 540, 225);
  thunderImage1 = loadImage("1.png");
  thunderImage2 = loadImage("2.png");
  thunderImage3 = loadImage("3.png");
  thunderImage4 = loadImage("4.png");

}

function draw() {
  background("black");
  umbrella.display();
  

  if(frameCount % 1 === 0){
    var raindrop = new Raindrops(random(0, windowWidth), -100,10);
    raindrops.push(raindrop);
  }

  for(var i = 0; i < raindrops.length; i++){
    raindrops[i].fall(40);
    raindrops[i].velocityY++
    raindrops[i].display();
  }
  rand = Math.round(random(1,4))
  if(frameCount % 80 === 0){
    thunderCreatedFrame = frameCount;
    thunder = createSprite(random(10,370),random(10,30),10,10);
      switch(rand){
        case 1:thunder.addImage(thunderImage1);
        break;
        case 2:thunder.addImage(thunderImage2);
        break;
        case 3:thunder.addImage(thunderImage3);
        break;
        case 4:thunder.addImage(thunderImage4);
        break;
        default:break;
      }
      thunder.scale = random(0.3,0.6);
    }
  }

