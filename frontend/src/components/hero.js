export default class Hero {
  constructor(game){
    this.game = game;
    this.spriteWidth = 18; // width of sprite sheet/ num of collumns
    this.spriteHeight = 32;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 2; //number of frames per row within sprite sheet
    this.width = this.spriteWidth;
    this.height =  this.spriteHeight;
    this.x = 300;
    this.y = 300;
    this.speedX = 0;
    this.speedY = 0;
    this.maxSpeed = 4;
    this.image = document.getElementById('hero');
    this.isMoving = false;

    window.addEventListener('keydown', e => {
      this.game.lastKey = 'P' + e.key;
    });
    window.addEventListener('keyup', e => {
      this.game.lastKey = 'R' + e.key;
    });
  }
  draw(context){
    // context.strokeRect(this.x ,this.y , this.width, this.height);
    context.drawImage(this.image, this.frameX *this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
  }
  setSpeed(speedX, speedY){
    this.speedX = speedX;
    this.speedY = speedY;
  }

  playerMovement(){
    //player movement
    switch(this.game.lastKey) {
    case 'PArrowLeft':
      this.setSpeed(-this.maxSpeed,0)
      this.frameY = 1;
      this.isMoving = true;
      break;
    case 'RArrowLeft':
      this.setSpeed(0,0)
      this.frameY = 1;
      this.isMoving = false;
      break;
    case 'PArrowRight':
      this.setSpeed(this.maxSpeed,0)
      this.frameY = 2;
      this.isMoving = true;
      break;
    case 'RArrowRight':
      this.setSpeed(0,0)
      this.frameY = 2;
      this.isMoving = false;
      break;
    case 'PArrowUp':
      this.setSpeed(0, -this.maxSpeed*0.6)
      this.frameY = 3;
      this.isMoving = true;
      break;
    case 'RArrowUp':
      this.setSpeed(0,0)
      this.frameY = 3;
      this.isMoving = false;
      break;
    case 'PArrowDown':
      this.setSpeed(0, this.maxSpeed*0.6)
      this.frameY = 0;
      this.isMoving = true;
      break;
    case 'RArrowDown':
      this.setSpeed(0,0)
      this.frameY = 0;
      this.isMoving = false;
      break;
    default:
      this.setSpeed(0,0)
      this.isMoving = false;
    }

    if(!this.isMoving) {
      this.frameX = 1;
    }
  }

  wallBoundaries(){
    //setting horizontal bouandaries on the screen
    if (this.x<45){
      this.x = 45;
    } else if (this.x > this.game.rightMargin - this.width){
      this.x =this.game.rightMargin - this.width;
    }
    // set diagonal boudaries for walls
    // y = mx + b
    const leftSlope = -1.056 * this.x + 462.72
    const rightSlope = ((130/127) * this.x) - 660.48

    if(!(this.y <= leftSlope) && !(this.y <= rightSlope)){
      this.x += this.speedX;
      this.y += this.speedY;
       
    } 
    else {
      this.y += 0.1
    }
    //setting vertical bouandaries on the scree 
    if (this.y <0 + this.game.topMargin){
      this.y = this.game.topMargin;
    } else if (this.y > this.game.bottomMargin - this.height) {
      this.y = this.game.bottomMargin - this.height;
    }
  }

  // NOTE TO TEAM: this function was too long and a lot of
  // the logic was better off in its own function.
  // tomorrow (friday), we should get rid of this function
  // entirely and have better seperation of concerns. Also, we should work on 
  // we should work on testing, seperating the classes into files,  
  // and adding more objects to interact with.

  update(items){
    // collision logic
    items.forEach(item => {
      if (item.x < this.x + this.width &&
          item.x + item.width > this.x &&
          item.y < this.y + this.height &&
          item.y + item.height > this.y
      ){console.log('collision')}
    });

    this.playerMovement()
    this.wallBoundaries()

    // sprite animation
    if (this.isMoving) {
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
    }
  }
}