export default class Hero {
  constructor(game){
    this.game = game
    
    this.spriteWidth = 18; // width of sprite sheet/ num of collumns
    this.spriteHeight = 32;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 2; //number of frames per row within sprite sheet
    this.width = this.spriteWidth * 3;
    this.height =  this.spriteHeight * 3;
    this.x = 350;
    this.y = 350;
    this.speedX = 0;
    this.speedY = 0;
    this.maxSpeed = 6;
    this.image = document.getElementById('hero');
    this.isMoving = false;
  }
  draw(context){
    context.strokeRect(this.x ,this.y , this.width, this.height);
    context.drawImage(this.image, this.frameX *this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
  }
  setSpeed(speedX, speedY){
    this.speedX = speedX;
    this.speedY = speedY;
  }

  playerMovement(){
    window.addEventListener('keydown', e => {
      this.game.lastKey = 'P' + e.key;
    });
    window.addEventListener('keyup', e => {
      this.game.lastKey = 'R' + e.key;
    });

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
    if (this.x<45){
      this.x = 45;
    } else if (this.x > this.game.rightMargin - this.width){
      this.x =this.game.rightMargin - this.width;
    }

    // y = mx + b
    const leftSlope = -1.6 * this.x + 450
    const rightSlope = ((130/127) * this.x) - 660.48
    
    if(!(this.y <= leftSlope) && !(this.y <= rightSlope)){
      this.x += this.speedX;
      this.y += this.speedY;
    } 

    if(this.y <= rightSlope){
      this.y += 0.3
      this.x -= 0.3
    }
    if(this.y <= leftSlope){
      this.y += 0.3
      this.x += 0.3
    }
 
    if (this.y <0 + this.game.topMargin){
      this.y = this.game.topMargin;
    } else if (this.y > this.game.bottomMargin - this.height) {
      this.y = this.game.bottomMargin - this.height;
    }
  }


  animate(){
    this.playerMovement()
    this.wallBoundaries()

    if (this.isMoving) {
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
    }
  }
}