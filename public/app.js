let header=document.getElementById('header');
let reset=document.getElementById('reset');
let boxes=Array.from(document.getElementsByClassName('btn'));
let who=document.getElementById('who');

const O_TEXT="O"
const X_TEXT="X"
let currentPlayer=X_TEXT
let nextPlayer=O_TEXT
who.innerHTML=`Player X turn`
let spaces=Array(9).fill(null)

const startGame=()=>{
    boxes.forEach(btn=>btn.addEventListener('click',boxClicked))
}

//  Function to handle player moves
function boxClicked(e){
    const id=e.target.id

    if(!spaces[id])
    {
        spaces[id]=currentPlayer
        e.target.innerText=currentPlayer
    
        currentPlayer=currentPlayer==X_TEXT?O_TEXT:X_TEXT
        nextPlayer=nextPlayer==O_TEXT?X_TEXT:O_TEXT
        who.innerHTML=`Player ${currentPlayer} turn`
        
        if(playerHasWon()!=false)
        {
//      2. Display a winning message in the 'result' element when a player wins.
            // if(currentPlayer=X_TEXT)
            //     who.innerHTML=`Player X Won🎉`
            // else if(currentPlayer=O_TEXT)   
            //     who.innerHTML=`Player O Won🎉`

            who.innerHTML=`Player ${nextPlayer} Won🎉`
            
//      3. Disable all buttons after a win.
            currentPlayer=''
        }

    }
}
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// 1. Implement the logic to check for winning conditions using the 'conditions' array.
function playerHasWon(){
    for(const cond of conditions)
    {
// Your code to update the game state and check for a win
        let[a,b,c]=cond
        if(spaces[a] && (spaces[a]==spaces[b] && spaces[a]==spaces[c])){
            return [a,b,c];
            nextPlayer=currentPlayer
        }
    }
    return false;
}

reset.addEventListener('click',resetGame)

//Function to reset the game
function resetGame()
{
//  Your code to reset the game state
    spaces.fill(null)
    boxes.forEach(btn=>{
        btn.innerText=''
    })
//  Your code to re-enable buttons
    currentPlayer=X_TEXT
    who.innerHTML=''
}

startGame();