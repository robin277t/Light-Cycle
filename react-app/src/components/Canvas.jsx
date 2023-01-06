import React, { useRef, useEffect } from 'react'

const Canvas = props => {

    //Player1 Variables
    var p1direction = "right";
    var p1linelength = 0;
    var p1MaxLinelength = 20;
    var P1LineObjects = [];
    const Bike1 = {
        x: 0,
        y: 250
    }

    //Player2 Variables
    var p2direction = "left";
    var p2linelength = 0;
    var p2MaxLinelength = 20;
    var P2LineObjects = [];
    var ctx;
    
    const Bike2 = {
        x: 500,
        y: 250
    }

    const gridsize = 100;
  
  const canvasRef = useRef(null);


  useEffect(() => {
    const canvas = canvasRef.current;
    ctx = canvas.getContext('2d');

  }, []);

  window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.key) {
      case "ArrowDown":
        p2direction = "down";
        break;
      case "ArrowUp":
        p2direction = "up";
        break;
      case "ArrowLeft":
        p2direction = "left";
        break;
      case "ArrowRight":
        p2direction = "right";
        break;
      case "s":
        p1direction = "down";
        break;
      case "w":
        p1direction = "up";
        break;
      case "a":
        p1direction = "left";
        break;
      case "d":
        p1direction = "right";
        break;
        
      default:
        return; // Quit when this doesn't handle the key event.
    }
});
  
    function renderGrid(context){ //Temporary background / grid
        context.fillStyle = 'grey';
        context.fillRect(0, 0, 5 * gridsize, 5 * gridsize); // One single background

    }

    function render(){
        renderGrid(ctx);// replace with Grid
        Drawline();
        //set Snake head position
        for(let i =0; i <P1LineObjects.length; i++)
        {
            ctx.fillStyle = 'red';
            ctx.fillRect(P1LineObjects[i].x, P1LineObjects[i].y, 5, 5);
        }
    
        for(let i =0; i <P2LineObjects.length; i++)
        {
            ctx.fillStyle = 'blue';
            ctx.fillRect(P2LineObjects[i].x, P2LineObjects[i].y, 5, 5);
        }
        //console.log(LineObjects.length);
        ctx.fillStyle = 'red';
        ctx.fillRect(Bike1.x, Bike1.y, 5, 5);
    
        ctx.fillStyle = 'blue';
        ctx.fillRect(Bike2.x, Bike2.y, 5, 5);
    }



  function collisionDetection(){
    for(let i = 0; i <P1LineObjects.length; i++)
    {
        var x, y;
        x = P1LineObjects[i].x;
        y = P1LineObjects[i].y;
        if(i != 0){
            if(x == Bike1.x){
                if(y == Bike1.y){
                   // console.log("Player 1 hit itslef");
                   window.location.reload(false);
                }
            }
        }

        if(x == Bike2.x){
            if(y == Bike2.y){
              //  console.log("Player 2 has hit player 1");
              window.location.reload(false);
            }
        }
    }

    for(let i = 0; i <P2LineObjects.length; i++)
    {
        var x, y;
        x = P2LineObjects[i].x;
        y = P2LineObjects[i].y;

        if(x == Bike1.x){
            if(y == Bike1.y){
               // console.log("Player 1 has hit player 2");
               window.location.reload(false);
            }
        }
        if(i != 0){
            if(x == Bike2.x){
                if(y == Bike2.y){
                  //  console.log("Player 2 hit itslef");
                  window.location.reload(false);
                }
            }
        }
    }
}

function Drawline(){

    if(p1linelength < p1MaxLinelength)
    {
        p1linelength++;    
        P1LineObjects.unshift({x: Bike1.x, y: Bike1.y});
        
    }else{
    
        P1LineObjects.splice(p1MaxLinelength -1,1);

        p1linelength = p1MaxLinelength -1;
        if(p1linelength < p1MaxLinelength){
            p1linelength++; 
            P1LineObjects.unshift({x: Bike1.x, y: Bike1.y});
        }
    }
    //Player2
    if(p2linelength < p2MaxLinelength)
    {
        p2linelength++;    
        P2LineObjects.unshift({x: Bike2.x, y: Bike2.y});
        
    }else{
    
        P2LineObjects.splice(p2MaxLinelength -1,1);

        p2linelength = p2MaxLinelength -1;
        if(p2linelength < p2MaxLinelength){
            p2linelength++; 
            P2LineObjects.unshift({x: Bike2.x, y: Bike2.y});
        }
    }
}


setInterval(function() {//Update movement and rendering

    switch(p1direction){// move x and y in direction
        case "up" :
            Bike1.x +=0;
            Bike1.y -= 5;
            break;
        case "down" :
            Bike1.x +=0;
            Bike1.y += 5;
            break;
        case "left" :
            Bike1.x -=5;
            Bike1.y += 0;
            break;
        case "right" :
            Bike1.x += 5;
            Bike1.y += 0;
            break;

    }

    switch(p2direction){// move x and y in direction
        case "up" :
            Bike2.x +=0;
            Bike2.y -= 5;
            break;
        case "down" :
            Bike2.x +=0;
            Bike2.y += 5;
            break;
        case "left" :
            Bike2.x -=5;
            Bike2.y += 0;
            break;
        case "right" :
            Bike2.x += 5;
            Bike2.y += 0;
            break;

    }
    
    render(); //Render snake and background
    collisionDetection();

    if(Bike1.x > (gridsize * 5) || Bike1.x < 0 || Bike1.y > (gridsize * 5) || Bike1.y < 0){
        window.location.reload(false);
    }

    if(Bike2.x > (gridsize * 5) || Bike2.x < 0 || Bike2.y > (gridsize * 5) || Bike2.y < 0){
        window.location.reload(false);
      }

    //Add self collision here

}, 100);// updates every 100ms (1/10th of a second) ... basically handles movement speed


  
  
  return <canvas ref={canvasRef} {...props} width="500" height="500"/>
}

export default Canvas