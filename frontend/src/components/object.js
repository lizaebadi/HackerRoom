export default class Object {
  constructor(elementName, width, height, x, y){
    this.image= document.getElementById(elementName)
    this.imageWidth = width
    this.imageHeight= height
    this.positionX = x
    this.positionY = y 
  }
  draw(context){
    context.drawImage(this.image, this.positionX, this.positionY, this.imageWidth, this.imageHeight);
    // context.strokeRect(this.positionX ,this.positionY , this.imageWidth, this.imageHeight);
  }

  collision(hero){
      if (hero.x < this.positionX + this.imageWidth &&
          hero.x + hero.width > this.positionX &&
          hero.y < this.positionY + this.imageHeight &&
          hero.y + hero.height > this.positionY
      ){console.log('collision')}
  }
}