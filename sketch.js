var player;
var playerWalk;
var playerClimb;
var playerJump;
var player;
var guard1, guard2, guard3, guard4, guard5;
var robot1, robot2;
var robot;
var door, doorIMG;
var wall1; 
var floor = 5;
var block1, block2, block3;
var invisGround, invisGround2, invisGround3, invisGround4, invisGround5;
var ladderIMG, ladder;
var guardBlock1, guardBlock2, guardBlock3;
var backgroundIMG;
var blackScreen;
var gameOver, gameOverIMG;
var jailKey, jailKeyIMG;
var box, boxIMG;
//ar whiteScreen;
var youWin, youWinIMG;

function preload(){
  playerWalk = loadAnimation("images/alienWalk1.png", "images/alienWalk2.png");
  playerClimb = loadAnimation("images/alienClimb1.png", "images/alienClimb2.png");
  playerDuck = loadImage("images/alienDuck.png");
  playerAlien = loadImage("images/alien.png");
  playerJump = loadImage("images/alienJump.png");
  robot1 = loadImage("images/Robot1.png");
  robot2 = loadImage("images/Robot2.png");
  ladderIMG = loadImage("images/ladder.png");
  backgroundIMG = loadImage("images/bg1.png");
  doorIMG = loadImage("images/door.png");
  gameOverIMG = loadImage("images/gameOver.png");
  jailKeyIMG = loadImage("images/key.png");
  boxImage = loadImage("images/box.png");
  youWinIMG = loadImage("images/youWin.png");
}


function setup() {
  createCanvas(1200,800);
  guard1 = createSprite(600, 425, 50, 50);
  guard2 = createSprite(400, 130, 50, 50);
  guard2.velocityX = 4;
  player = createSprite(250, 435, 20, 20);
  ladder = createSprite(700, 450, 20, 20);
  guardBlock1 = createSprite(850, 435, 10, 10);
  guardBlock1.visible = false;
  box = createSprite(300, 150, 10, 10);
  box.addImage("Box", boxImage);
  box.scale = 0.1;


  //block3 = createSprite();

  //add animation
  block2 = createSprite(600, 200, 1200, 50);
  ladder.addImage("up", ladderIMG);
  ladder.scale = 5.5;
  jailKey = createSprite(1100, 125, 50, 50);
  jailKey.addImage("Key", jailKeyIMG);
  jailKey.scale = 0.5;
  jailKey.visible = true;
  player.addAnimation("Walk", playerWalk);
  player.addAnimation("Climb", playerClimb);
  player.addImage("Duck", playerDuck);
  player.addImage("alien", playerAlien);
  player.addImage("Jump", playerJump);
  block1 = createSprite(350, 412, 50, 75);
  guard1.addImage("bot2", robot2);
  guard1.addImage("bot1", robot1);
  guard1.scale = 0.11;
  //guard1.debug = true;
  guard1.velocityX = -4;
  guard2.addImage("bot1", robot1);
  guard2.addImage("bot2", robot2);
  guard2.scale = 0.11;
  //guard2.debug = true;
  door = createSprite(1100, 400, 50, 50);
  door.addImage("Door", doorIMG);
  door.scale = 2.0;
  invisGround = createSprite(600, 460, 1200, 20);
  invisGround.visible = false;
  invisGround2 = createSprite(350, 200, 475, 50);
  //invisGround2.visible = false;
  invisGround3 = createSprite(955, 200, 600, 50);
  invisGround4 = createSprite(350, 260, 475, 50);
  invisGround4.visible = false;
  invisGround5 = createSprite(955, 260, 600, 50);
  invisGround5.visible = false;
  guardBlock2 = createSprite(1050, 150, 10, 10);
  guardBlock2.visible = false;
  guardBlock3 = createSprite(750, 150, 10, 10);
  guardBlock3.visible = false;
  blackScreen = createSprite(600, 400, 1200, 800);
  blackScreen.shapeColor = "black"
  blackScreen.visible = false;
  gameOver = createSprite(600, 400, 50, 50);
  gameOver.addImage("game", gameOverIMG);
  gameOver.visible = false;
  youWin = createSprite(600, 400, 50, 50);
  youWin.addImage("win", youWinIMG);
  youWin.visible = false;
}
function draw() {
  background(backgroundIMG); 
  
  fill(155);
  rect(0, 450, 1200, 200);
  fill(125);
  rect(0, 50, 200, 600);

  player.velocityY = player.velocityY + 0.8;

  player.collide(invisGround);
  player.collide(invisGround2);
  player.collide(invisGround3);
  player.collide(invisGround4);
  player.collide(invisGround5);
  player.collide(block1);
  //player.collide(invisGround2);

  ladder.depth = player.depth;
  ladder.depth = ladder.depth - 1;

  guard1.depth = player. depth;

  if(player.isTouching(box)){
    text("press 'd' to hide in box", 300, 125);
  }

  if(keyDown('d') && player.isTouching(box)){
    player.tint = 155;
    box.visible = false;
    box.x = player.x;
  }

  if(keyWentUp('d')){
    player.tint = 0;
    //box.x = player.x;
    box.visible = true;
  }

  if(player.isTouching(box) && player.isTouching(guard2)){
    blackScreen.visible = false;
    gameOver.visible = false;
  }

  //if(player.y > 130){
    //player.velocityY = 0;
  //}

  //if(player.y > 130 && player.isTouching(ladder) && keyDown('space')){
    //climb();
    //player.velocityY = 3;
  //

  //player.collide(guard1);
  //player.collide(guard2);

  if(player.isTouching(guard1)){
    player.velocityX = 0;
    player.velocityY = 0;
    guard1.velocityX = 0;
    guard2.velocityX = 0;
    player.changeAnimation("alien", playerAlien);
    blackScreen.visible = true;
    gameOver.visible = true;
    //textSize(100);
    //stroke(0);
    //text("Game Over!", 400, 300);
  }

  /*
  if(player.isTouching(guard2)){
    player.velocityX = 0;
    player.velocityY = 0;
    guard1.velocityX = 0;
    guard2.velocityX = 0;
    player.changeAnimation("alien", playerAlien);
    blackScreen.visible = true;
    gameOver.visible = true;
    //textSize(100);
    //stroke(0);
    //text("Game Over!", 400, 300);
  }
  */

  
  if(player.isTouching(jailKey)){
    jailKey.visible = false;
    jailKey.x = player.x;
    jailKey.y = player.y;
  }
  
 
  
  if(jailKey.isTouching(player) && player.isTouching(door)){
    blackScreen.visible = true;
    youWin.visible = true;
    //guard1.velocityX = 0;
    //guard2.velocityX = 0;
  }
 


  if(guard2.isTouching(guardBlock2)){
    guard2.changeAnimation("bot2", robot2);
    guard2.velocityX = -3;
    guard2.setCollider("rectangle", -200, 0, 900, guard2.height);
  }

  if(guard2.isTouching(guardBlock3)){
guard2.changeAnimation("bot1", robot1);
guard2.velocityX = 3;
guard2.setCollider("rectangle", 200, 0, 900, guard2.height);
  }

  if(keyDown('space') && player.isTouching(ladder)){
    climb();
    player.velocityY = -3;
  }

  if(keyWentUp('space')){
    player.velocityY = 3;
  }

  if(keyDown(RIGHT_ARROW)){
    playerRight();
  }

  if(keyDown(LEFT_ARROW)){
    playerLeft();
  }

  if(keyDown(UP_ARROW)){
    Jump(); 
  }
/*
  if(keyDown(DOWN_ARROW)){
    playerDown();
  }
*/
  if(keyDown(DOWN_ARROW)){
    Duck();
  }
  
  if(keyWentUp(DOWN_ARROW)){
    player.changeAnimation("alien", playerAlien);
  }

  if(keyWentUp(UP_ARROW)){
    player.changeAnimation("alien", playerAlien);
  }

  if(guard1.isTouching(block1)){
    guard1.changeAnimation("bot1", robot1);
    guard1.velocityX = 3;
    guard1.setCollider("rectangle", 200, 0, 900, guard1.height);
  }

  if(guard1.isTouching(guardBlock1)){
    guard1.changeAnimation("bot2", robot2);
    guard1.velocityX = -3;
    guard1.setCollider("rectangle", -200, 0, 900, guard1.height);
  }

  drawSprites();
}

function playerRight(){
  player.changeAnimation("Walk", playerWalk);
  //player.velocityY = 0;
  player.x = player.x + 5;
}

function playerLeft(){
  player.changeAnimation("Walk", playerWalk);
  //player.velocityY = 0;
  player.x = player.x - 5;
}

function Jump(){
  player.changeAnimation("Jump", playerJump);
  player.velocityY = -8;
}

function Duck(){
  player.changeAnimation("Duck", playerDuck);
}

function climb(){
  player.changeAnimation("Climb", playerClimb);
  //player.y = player.y + 5;
}
/*
function playerDown(){
  player.changeAnimation("Jump", playerJump);
  player.y = player.y + 5;
}
*/