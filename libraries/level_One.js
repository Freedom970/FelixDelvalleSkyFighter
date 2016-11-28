
function levelOne() {
    
//var enemy1Default = loadAnimation('assets/enemy100000.png','assets/enemy100019.png');
  if (frameCount%20=== 0){
      var enemy = createSprite(random(width),0,40,40);
      enemy.addAnimation("enemy1Default",enemy1Default);
      enemy.setSpeed(5,90);
      enemy.life = 200;
      enemy.shapeColor = 'blue';
 
     // enemy.addImage(enemyOneImg);  
      enemies.add(enemy);
      enemy.scale=.2;    
  }

  

  background(bg_level1);
  
  textSize(32);
  text('score'+score,10,30);
  
  text('health',10,60);
  switch(heroHealth){
    case 1 :
      image(hitFour,40,60);
      textSize(20);
      text("5",30,60);break;
    case 2 : 
      image(hitThree,40,60);break;
    case 3 :  
      image(hitTwo,40,60);break;
    case 4 :  
      image(hitOne,40,60);break;
    case 5 : 
      image(hitfull,40,60);break;
    
    
  }
  drawSprites();
  
  enemies.overlap(bullets, enemyHit);
  enemies.overlap(hero,heroHit);
  
  if(hero.getAnimationLabel() == "heroLeft" && hero.animation.getFrame() === hero.animation.getLastFrame()){
      hero.changeAnimation('heroDefault');
      hero.animation.changeFrame(0);
  }
  if(hero.getAnimationLabel() == "heroRight" && hero.animation.getFrame() === hero.animation.getLastFrame()){
      hero.changeAnimation('heroDefault');
      hero.animation.changeFrame(0);
  }
  
  
}

