function enemyHit(enemy,bullet){
  for(var i=0; i<explosionDensity; i++) {
    var p = createSprite(bullet.position.x, bullet.position.y,4,4);
    p.setSpeed(random(3,5), random(360));
    p.friction = 0.95;
    p.life = 15;
    }
   var loudness = 1
   enemyHitSound.amp(loudness);
   enemyHitSound.play();
  enemy.remove();
  bullet.remove();
   score++;
   
  if (score == 30){
    gameState = 'countDown1';
  levelOneSong.stop();
    levelTwoSong.loop();
  } 
    if (score == 50){
    gameState = 'countDown2';
  levelTwoSong.stop()
      levelThreeSong.loop()
    } 
      if (score > 90 ) {  
    gameState = 'win';
  levelThreeSong.stop();
 winSong.loop();
        
      } 
   
}
function heroHit(enemy,hero){
  heroHealth--;
  heroHitSound.play();
  if(heroHealth <= 0){
    gameState = 'lose';
  loseSong.loop();
   levelOneSong.stop();
   levelTwoSong.stop();
   levelThreeSong.stop();
  }
  enemy.remove();
  hero.shapeColor=('red');
}