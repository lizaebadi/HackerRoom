import React, { useState, useEffect, useRef } from 'react';
import GameArea from '../game.js'
import Hero from '../hero.js'
import Object from '../object.js'
import './MainGame.css';
import Menu from '../menu/Menu.js';


const MainGame = ({ navigate }) => {
  const canvasRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      canvas.width =1092;
      canvas.height = 910;       
  
      const game = new GameArea(canvas.width, canvas.height);
      const hero = new Hero(game)
      const serverBig = new Object("server-big", 249, 156, 49, 500)
      const wallComputer = new Object("wall-computer", 81, 104, 75, 223)
      const desk = new Object("desk", 235, 117, 270, 270)
      const bookshelf = new Object("bookshelf", 74, 148, 940, 265)
      const wallComputer2 = new Object("wall-computer2", 58, 103, 850, 180)
      const wallServer = new Object("wall-server", 76, 159, 972, 500)
      const floorServer = new Object("floor-server", 52, 99, 49, 730)
      // x, y, width, height, up, left 
      const objectList = [
        {obj: desk, x: 295, y: 240, width: 185, height: 60, down: true},
        {obj: bookshelf, x: 965, y:220, width: 0, height: 90, left: true},
        {obj: serverBig, x: 49, y: 520, width: 185, height: 0, down: true},
        {obj: serverBig, x: 279, y: 560, width: 0, height: 10, right: true},
        {obj: serverBig, x: 250, y: 550, width: 0, height: 10, left: true},
        {obj: serverBig, x: 250, y: 510, width: 0, height: 10, right: true},
        {obj: wallServer, x: 990, y: 560, width: 50, height: 0, left: true},
        {obj: wallServer, x: 1025, y: 510, width: 0, height: 20, left: true}
      ]

      function animate (){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        serverBig.render(ctx, hero, objectList)
        wallComputer.render(ctx, hero, objectList)
        wallComputer2.render(ctx, hero, objectList)
        desk.render(ctx, hero, objectList)
        bookshelf.render(ctx, hero, objectList)
        wallServer.render(ctx, hero, objectList)
        floorServer.render(ctx, hero, objectList)

        
        hero.draw(ctx)
        hero.animate()
        requestAnimationFrame(animate);
      }
      animate();
      
      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          setShowMenu(!showMenu);
        } else if (event.code === "Space" && wallComputer.collision(hero)) {
          navigate('/wallComputer');
        } else if (event.code === "Space" && wallServer.collision(hero)) {
          navigate('/wallServer');
        }
      }

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
})
  

  return(
    <div id='game-container'>
      <div id="wrapper">
        <canvas ref={canvasRef} id="canvas1"></canvas>
      </div>
        <img src="server-big.png" alt="server-big" id="server-big"/>
      <img src="$MorganB.png" alt="hero" id="hero"/>
      <img src="wall-computer.png" alt="wall-computer" id="wall-computer"/>
      <img src="wall-computer2.png" alt="wall-computer2" id="wall-computer2"/>
      <img src="desk.png" alt="desk" id="desk"/>
      <img src="table.png" alt="table" id="table"/>
      <img src="bookshelf.png" alt="bookshelf" id="bookshelf"/>
      <img src="wall-server.png" alt="wall-server" id="wall-server"/>
      <img src="floor-server.png" alt="floor-server" id="floor-server"/>
      <div>
        {showMenu && <Menu navigate={navigate} /> }
      </div>
    </div>
  )
}

export default MainGame;