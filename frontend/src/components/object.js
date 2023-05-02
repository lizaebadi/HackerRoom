export default class Object {
  constructor(elementName, width, height, x, y){
    this.image = document.getElementById(elementName)
    this.imageWidth = width
    this.imageHeight= height
    this.positionX = x
    this.positionY = y 
  }
  
  draw(context){
    context.drawImage(this.image, this.positionX, this.positionY, this.imageWidth, this.imageHeight);
    // context.strokeRect(this.positionX ,this.positionY , this.imageWidth, this.imageHeight);
  }

  collision(hero, objectList){
    objectList.forEach(object => {
      if ((hero.x < object.x + object.width) &&
        (hero.x + hero.width > object.x) && 
        (hero.y < object.y + object.height) &&
        (hero.y + hero.height > object.y)
        ){
          if (object.down) {
            hero.y += 6
          }
          if (object.up){
            hero.y -= 6
          }
          if (object.left) {
            hero.x -= 6
          }
          if (object.right) { 
            hero.x += 6
          }
        }
    });
      
  }

  render(context, hero, objectList) {
    this.draw(context)
    this.collision(hero, objectList)
  }
}