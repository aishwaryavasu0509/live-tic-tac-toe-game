export default class GameView{

    constructor() {
        console.log("init game view");
    }

    updateBoard(game){
        this.updateTurn(game);
        const winningCombination = game.findWinningCombination();
        console.log("this is a board within GameView");
        console.log(game.board);
        for(let i=0;i < game.board.length;i++)
        {
            const tile = document.querySelector('.board-title[data-index=`${i}`]');
            tile.textContent=game.board[i];

            tile.classList.remove("tile-winner");
            
            let tileType = game.board[i] == 'X' ? "tile-X" : "tile-o";
        
            tile.innerHTML = `<span class="${tileType}">${game.board[i] ? game.board[i] : ""}</span>`;

            if(winningCombination && winningCombination.includes(i)){
                tile.classList.add("tile-winner");
            }
        }
    }

    updateTurn(game){
        let playerX = document.querySelector(".player");
        let playerO = document.querySelector(".player");
        playerX.classList.remove("active");
        playerO.classList.remove("active");

        if(game.turn == 'X')
        {
            playerX.classList.add('active');
        } else {
            playerO.classList.add('active');
        }
        
    }

    
}