import React, { useState, useEffect, useRef } from 'react';
import GameArea from '../game.js'
import Hero from '../hero.js'
import Object from '../object.js'
import './MainGame.css';


const MainGame = ({ }) => {
  const canvasRef = useRef(null);


  useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      canvas.width =1092;
      canvas.height = 910;
    
      const game = new GameArea(canvas.width, canvas.height);
      const hero = new Hero(game)
      const serverBig = new Object("server-big", 249, 156, 49, 500)
      const wallComputer = new Object("wall-computer", 108, 139, 70, 180)
      
      function animate (){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        serverBig.render(ctx, hero)
        wallComputer.render(ctx, hero)
        hero.draw(ctx)
        hero.animate()
        requestAnimationFrame(animate);
      }
      animate(); 
})
  

  return(
    <>
    <div id="wrapper">
      <canvas ref={canvasRef} id="canvas1"></canvas>
    </div>
    <img src="$MorganB.png" alt="hero" id="hero"/>
    <img src="server-big.png" alt="server-big" id="server-big"/>
    <img src="wall-computer.png" alt="wall-computer" id="wall-computer"/>
    
    </>
  )
}

export default MainGame;