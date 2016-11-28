
function levelThree() {
 
var enemy3Default = loadAnimation('assets/enem300000.png','assets/enem300013.png');
 
 if (frameCount%15=== 0){
      var enemy = createSprite (random(width),0,random(60),40);
      enemy.addAnimation("enemy3Default",enemy3Default);
      enemy.setSpeed(random(6,9),90);
      enemy.life = 200;
      enemy.shapeColor = 'green';
      //enemy.addImage(enemyThreeImg); 
      enemies.add(enemy);
    
 }
for(var i = 0;i < enemies.length;i++){
  if(random(100)<50){
    enemies[i].velocity.x += random(-3,3);
  }
}
 
 
 
  background(bg_level3);
  
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
