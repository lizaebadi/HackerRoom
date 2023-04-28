import React, { useState, useEffect, useRef } from 'react';
import GameArea from '../game.js'
import Hero from '../hero.js'
import Object from '../object.js'
import './MainGame.css';

const MainGame = ({ }) => {
  useEffect(() => {
      const canvas = document.getElementById('canvas1');
      const ctx = canvas.getContext('2d');
      canvas.width =1092;
      canvas.height = 910;
    
      const game = new GameArea(canvas.width, canvas.height);
      const hero = new Hero(game)
      const bookshelf = new Object('bookshelf', 96, 120, 300, 230)
      const serverBig = new Object('server-big', 249, 156, 49, 500)
      
      function animate (){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        // game.render(ctx);
        bookshelf.draw(ctx)
        serverBig.draw(ctx)
        hero.draw(ctx)
        bookshelf.collision(hero)
        hero.animate()
        requestAnimationFrame(animate);
      }
      animate(); 
})
  

  return(
    <>
    <div id="wrapper">
      <canvas id="canvas1"></canvas>
    </div>
    <img src = "/$MorganB.png" alt="hero" id="hero"></img>
    <img src = "/bookshelf.png" alt="bookshelf" id="bookshelf"></img>
    <img src = "/server-big.png" alt="server-big" id="server-big"></img>
    </>
  )
}

export default MainGame;