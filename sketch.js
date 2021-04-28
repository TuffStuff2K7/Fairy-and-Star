var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

var state = 0;


function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,0);
	star.addImage(starImg);
	star.scale = 0.2;
	star.visible = "false";
}


function draw() {
  background(bgImg);

  drawSprites();

  if(keyDown(RIGHT_ARROW)){
	fairy.x+=7;
  }

  if(keyDown(LEFT_ARROW)){
	fairy.x-=7;
  }

  if(keyDown(DOWN_ARROW)){
	  fall();
	  state = 1;
  }

  if(state === 0){
	  star.x = fairy.x;
  }

  if(star.y > 480 && star.isTouching(fairy)){
	  star.velocityY = 0;
  }

}

function fall() {
	
	if(state === 1){
		star.y = 0;
		star.x = fairy.x;
	}
	
	star.visible = "true";
	star.velocityY = 5;
}
