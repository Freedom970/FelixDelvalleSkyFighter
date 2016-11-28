
function levelTwo() {
 
 var enemy2Default = loadAnimation('assets/Enemy200000.png','assets/Enemy200024.png');
 
 if (frameCount%20=== 0){
      var enemy = createSprite(random(width),0,30,40);
      
      enemy.addAnimation("enemy2Default",enemy2Default);
      enemy.setSpeed(8,random(50,90));
      enemy.life = 200;
      enemy.shapeColor = 'blue';
      enemy.animation.frameDelay = 1;
      //enemy.addImage(enemyTwoImg); 
      enemies.add(enemy);
    
 }


for(var i = 0;i < enemies.length;i++){
  if(enemies[i].position.x > width || enemies[i].position.x < 0){
    enemies[i].velocity.x *= -1;
  }
}

 
  background(bg_level2);
  
  textSize(32);
  text('score'+score,10,30);

  text('Status',10,60);
   switch(heroHealth){
    case 1 :
      image(hitFour,40,60);break;
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