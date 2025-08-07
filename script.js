score=0;
cross=true;

// Function to play the game


let audio = new Audio('gamemusic.mp3');
let audiogo = new Audio('gameover.mp3');
let musicStarted = false;


document.onkeydown = function(e) {
    console.log("key code is : ",e.keyCode);
 if (!musicStarted) {
        audio.play();
        musicStarted = true;
    }

    if(e.keyCode == 38) {
        
      dino=document.querySelector(".dino");
      dino.classList.add("animateDino");
      setTimeout(() => {
        dino.classList.remove("animateDino");
      }, 700);
}
    if(e.keyCode == 39) {
      dino = document.querySelector(".dino");
      dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
      dino.style.left = dx + 350 + "px";
    }
    if(e.keyCode == 37) {
      dino = document.querySelector(".dino");
      dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
      dino.style.left = (dx - 350) + "px";
    }
}

// Game Over logic
let gameOver = document.querySelector('.gameOver');

setInterval(() => {
  dino =document.querySelector(".dino");


  obstacle = document.querySelector(".Obstacle");


dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));
ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"));
oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"));



  offsetX=Math.abs(dx-ox);
  offsetY=Math.abs(dy-oy);
  console.log(offsetX,offsetY);

  // If the dino collides with the obstacle
if (offsetX < 150 && offsetY < 100) {
    gameOver.classList.add('show');
    obstacle.classList.remove("ObstacleAni");
    let scoreDisplay = document.getElementById('scoreCount');
  scoreDisplay.classList.add('showScore');
   document.querySelector('#playAgainBtn').classList.add('show');
    audiogo.play();
    setTimeout(() => {
      audio.pause();
    }, 1000);
  } 
  
  // If the dino successfully crosses the obstacle
  else if(offsetX<150 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);

    // Increase the speed of the obstacle

    setTimeout(() => {
      aniDur= parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue("animation-duration"));
    newDur = aniDur - 0.1;
    obstacle.style.animationDuration = newDur + "s";
    console.log("New animation duration: ", newDur);
    
  },500);


  }
    
    
 
},100);

document.querySelector('#playAgainBtn').addEventListener('click', () => {
  location.reload(); // Reloads the entire game
});


// Function to update the score display
function updateScore() {
  scoreCount.innerHTML = "Your Score: " + score;
}


