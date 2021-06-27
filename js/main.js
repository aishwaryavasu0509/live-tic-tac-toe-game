import Game from "./Game.js"
import GameView from "./GameView.js"

let game = new Game();
let gameView = new GameView();
gameView.updateBoard(game);

document.querySelector(".restart")
.addEventListener("click",() => {
   onRestartClick();
})

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click", ()=> {
        onTileClick(tile.dataset.index);
    })
})


function onTileClick(i){
    //do something
    game.makeMove(i);
    //change turn
    gameView.updateBoard(game);
 
  
}

function onRestartClick() {
    game = new Game();
    gameView.updateBoard(game);
}

gameView.updateBoard(game);