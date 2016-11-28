var hero;
var bullets;
var enemies;
var canvasMultiplier = 40;
var score = 0;
var explosionDensity = 20;
var gameState = 'startUp';
var heroHealth = 6;


var default_sheet;

var heroDefaultFrames = [
  {'name':'HeroD00000', 'frame':{'x':0, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'HeroD00001', 'frame':{'x':256, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'HeroD00002', 'frame':{'x':512, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'HeroD00003', 'frame':{'x':768, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'HeroD00004', 'frame':{'x':1024, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'HeroD00005', 'frame':{'x':1280, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'HeroD00006', 'frame':{'x':1536, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'HeroD00007', 'frame':{'x':1792, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'HeroD00008', 'frame':{'x':0, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'HeroD00009', 'frame':{'x':256, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'HeroD00010', 'frame':{'x':512, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'HeroD00011', 'frame':{'x':768, 'y': 256, 'width': 256, 'height': 256}},
];
var left_sheet;
var heroLeftFrames = [
  {'name':'Left00003', 'frame':{'x':1024, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'Left00004', 'frame':{'x':1280, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'Left00006', 'frame':{'x':1536, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'Left00008', 'frame':{'x':1792, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'Left00010', 'frame':{'x':0, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'Left00012', 'frame':{'x':256, 'y': 768, 'width': 256, 'height': 256}},
];
var right_sheet;
var heroRightFrames = [
  {'name':'heroRturn00002', 'frame':{'x':768, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'heroRturn00003', 'frame':{'x':1024, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'heroRturn00004', 'frame':{'x':1280, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'heroRturn00005', 'frame':{'x':1536, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'heroRturn00006', 'frame':{'x':1792, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'heroRturn00007', 'frame':{'x':0, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'heroRturn00008', 'frame':{'x':256, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'heroRturn00009', 'frame':{'x':512, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'heroRturn00010', 'frame':{'x':768, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'heroRturn00011', 'frame':{'x':1024, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'heroRturn00012', 'frame':{'x':1280, 'y': 512, 'width': 256, 'height': 256}},
];
var enemyOne_sheet;
var enemyOneFrames = [
  {'name':'enemy100000', 'frame':{'x':512, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'enemy100003', 'frame':{'x':768, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'enemy100005', 'frame':{'x':1024, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'enemy100007', 'frame':{'x':1280, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'enemy100009', 'frame':{'x':1536, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'enemy100011', 'frame':{'x':1792, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'enemy100013', 'frame':{'x':0, 'y': 1024, 'width': 256, 'height': 256}},
];
var enemyTwo_sheet;
var enemyTwoFrames = [
  {'name':'Enemy100000', 'frame':{'x':512, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'enemy100003', 'frame':{'x':768, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'enemy100005', 'frame':{'x':1024, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'enemy100007', 'frame':{'x':1280, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'enemy100009', 'frame':{'x':1536, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'enemy100011', 'frame':{'x':1792, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'enemy100013', 'frame':{'x':0, 'y': 1024, 'width': 256, 'height': 256}},
];

//sound..........................................................................
var gunShot;
var heroHitSound;
var enemyHitSound;
var heroTurnSound;


var winSong;
var loseSong;
var levelOneSong;
var levelTwoSong;
var levelThreeSong;

var heroDefault, heroLeft, heroRight;

var countDowntimer1 = 0;
var countDowntimer2 = 0;
var bg_title, bg_win, bg_lose, bg_level1, bg_level2, bg_level3;

var bg_transition2, bg_transition1;

var hitfull, hitOne, hitTwo, hitThree, hitFour;
 
var enemyOneImg, enemyTwoImg, enemyThreeImg, bulletImg;

function preload() {
//loading animations............................................................................
default_sheet = loadSpriteSheet('assets/animation_sheet.png',heroDefaultFrames);
heroDefault = loadAnimation(default_sheet);
  
left_sheet = loadSpriteSheet('assets/animation_sheet.png',heroLeftFrames);
heroLeft = loadAnimation(left_sheet);
 
right_sheet = loadSpriteSheet('assets/animation_sheet.png',heroRightFrames);
heroRight = loadAnimation(right_sheet);

enemyOne_sheet = loadSpriteSheet('assets/animation_sheet.png',enemyOneFrames);
enemy1Default = loadAnimation(enemyOne_sheet);





//loading sound......................................................................
gunShot = loadSound("assets/gunShot.mp3");
enemyHitSound = loadSound("assets/enemyHitSound.mp3");
heroTurnSound = loadSound("assets/heroTurnSound.mp3");
heroHitSound = loadSound("assets/heroHitSound.mp3");

loseSong = loadSound("assets/loseScreenSong.mp3");
winSong = loadSound("assets/winScreenSong.mp3");
levelOneSong = loadSound("assets/levelOneSong.mp3");
levelTwoSong = loadSound("assets/levelTwoSong.mp3");
levelThreeSong = loadSound("assets/levelThreeSong.mp3");
//load images.......................................................................
bg_level1 = loadImage("assets/level1blur1.png"); 
bg_level2 = loadImage("assets/level2.png"); 
bg_level3 = loadImage("assets/level3.png");   
bg_lose=loadImage("assets/lose.png");  
bg_win=loadImage("assets/win.png");  
bg_transtion = loadImage("assets/transition.png")  

//enemyOneImg = loadImage("assets/First_Enemy.png");
//enemyTwoImg = loadImage("assets/Second_Enemy.png");
//enemyThreeImg = loadImage("assets/Third_Enemy.png");
bulletImg = loadImage("assets/bullet.png")

hitfull = loadImage("assets/healthFull.png");
hitOne = loadImage("assets/Hit3-01.png");
hitTwo = loadImage("assets/hit2-01.png");
hitThree = loadImage("assets/hit1-01.png");
hitFour = loadImage("assets/hitDeath-01.png");

//loading animations......................................................................
bg_title = loadAnimation("assets/title_00000.png","assets/title_00010.png"); 

//heroLeft = loadAnimation("assets/Left00000.png","assets/Left00015.png");
heroLeft.looping = false

//heroRight = loadAnimation("assets/heroRturn00000.png","assets/heroRturn00013.png");
heroRight.looping = false


bg_transition2 = loadAnimation("assets/transtion200000.png","assets/transtion200099.png");   
bg_transition1 = loadAnimation("assets/transition100000.png","assets/transition100056.png");  
}
//.....................................................................................
function setup() {
  var tempwidth = canvasMultiplier *9;
  var tempheight = canvasMultiplier *16;
  createCanvas(tempwidth, tempheight);
  bullets = new Group();
  enemies = new Group();
  
  var heroImg = loadImage("assets/Skin_Hero.png");
 
 
  //var heroDefault = loadAnimation("assets/HeroD00000.png","assets/HeroD00009.png");
  
  
  hero = createSprite(width / 2, height * .8, 30, 30);

  
  hero.friction = 0.90;
  hero.addAnimation("heroRight",heroRight);
  
  hero.addAnimation("heroLeft",heroLeft);
  
  hero.addAnimation("hitOne",hitOne);
  
  hero.addAnimation("heroDefault", heroDefault);
 
  hero.changeAnimation("heroDefault");
  
  hero.addImage(heroImg);

  hero.shapeColor = 'white';
hero.scale = .2;



}


function draw() {
  switch (gameState) {
    case 'startUp':
      animation(bg_title,width/2,height/2);
      bg_title.looping = true
      
      break;
    case 'levelOne':
      levelOne();
      break;
    case 'levelTwo':
      levelTwo();
      break;
    case 'levelThree':
      levelThree();
      break;
    case 'win':
     // text('Allied Victory', width / 2, height / 2);
      background(bg_win);
     
      break;
    case 'lose':
      //text('ooooooooo you Lost', width / 2, height / 2);
      background(bg_lose);
       textSize(20);
       fill('red');
       text('score'+score,width/2,30);
      break;
    case 'countDown1':
     //background(bg_transtion)
      animation(bg_transition1,width/2,height/2);
      textSize(25);
      if(countDowntimer1 === 0){
        countDowntimer1 = frameCount;
      }
      var floorCount = floor((frameCount - countDowntimer1)/50);
      textAlign(CENTER);
      textSize(30);
      //text("Incoming Enemy Planes",width/2,100);
      textSize(150);
      text(3-floorCount, width/2, 250);
    
    if(floorCount > 3){
      gameState="levelTwo";
    gunShot.play();
    }
      break;
    case 'countDown2':
     //background(bg_transtion)
      animation(bg_transition2,width/2,height/2);
      textSize(25);
      if(countDowntimer2 === 0){
        countDowntimer2 = frameCount;
      }
      var floorCount = floor((frameCount - countDowntimer2)/50);
      textAlign(CENTER);
      textSize(30);
      //text("Incoming Enemy Planes",width/2,100);
      textSize(150);
      text(3-floorCount, width/2, 250);
    
    if(floorCount > 3){
      gameState="levelThree";
    }
      break;
 }



  /*
  if(gameState == 'startUp'){
    text('Begin',width/2,height/2);
  }else if(gameState =='levelOne'){
  levelOne();
  }else if(gameState =='levelTwo'){
  levelTwo();
  }else if(gameState =='levelThree'){
  levelThree();
  }else if(gameState == 'lose'){
    text ('ooooooooo you Lost',width/2,height/2);
  }else if(gameState == 'win'){
    text('Allied Victory',width/2,height/2);
  */

}



function keyPressed() {
var loudness = .3 
var heroLoudness = .4
   heroTurnSound.amp(loudness);
  if (keyCode == RIGHT_ARROW) {
    hero.setSpeed(9, 0);
    hero.changeAnimation('heroRight');
    hero.animation.frameDelay = 2;
    hero.animation.changeFrame(0);
  heroTurnSound.play();
    
  } else if (keyCode == LEFT_ARROW) {
    hero.setSpeed(9, 180);
    hero.changeAnimation('heroLeft');
    hero.animation.frameDelay = 3;
    hero.animation.changeFrame(0);
  heroTurnSound.play();
    
  } else if (key == ' ') {
      
      gunShot.amp(.2);
      gunShot.play();
    var bullet = createSprite(hero.position.x, hero.position.y, 5, 5);
    bullet.setSpeed(40, random(260, 280));

    bullet.life = 10;
    bullet.addImage(bulletImg);  
    bullet.shapeColor = 'white';
    bullets.add(bullet);
  }
}

function keyTyped() {
  if (key === 'x') {
    gameState = 'levelOne';
    levelOneSong.loop();
    
  }
}
