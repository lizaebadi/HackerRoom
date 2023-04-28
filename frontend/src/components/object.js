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
    context.strokeRect(this.positionX ,this.positionY , this.imageWidth, this.imageHeight);
  }
}

// class Bookshelf extends Object{
//   constructor(game){
//     super(game);
//     this.game = game;
//     this.image= document.getElementById('bookshelf')
//     this.imageWidth= this.width = 32 
//      = 40
//     this.x=300;
//     this.y=280;
//   }
// }