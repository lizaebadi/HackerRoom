export default class Game {
  constructor(width, height){
    this.width= width;
    this.height=height;
    this.topMargin = 280;
    this.bottomMargin = 860;
    this.rightMargin = 1045
    this.lastKey = undefined;
    // this.hero = hero;
    // interactables become an array of objects that player can interact with
    // this.interactables = [];
    // this.interactables.push(new Bookshelf(this)); // start with just one for now
  
    
  }
  // render(context){
  //   this.interactables.forEach(item => item.draw(context));
  //   this.hero.draw(context);
  //   this.hero.update(this.interactables);
  //   // order of drawing dictates the position on screen

  // }
}