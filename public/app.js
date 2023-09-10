let header=document.getElementById('header');
let reset=document.getElementById('reset');
let boxes=Array.from(document.getElementsByClassName('btn'));
let who=document.getElementById('who');
const b0=document.getElementById('0');

const O_TEXT="O"
const X_TEXT="X"
let currentPlayer=X_TEXT
let spaces=Array(9).fill(null)

const startGame=()=>{
    boxes.forEach(btn=>btn.addEventListener('click',boxClicked))
}

// Function to handle player moves
function boxClicked(e){
    const id=e.target.id

    if(!spaces[id])
    {
        spaces[id]=currentPlayer
        e.target.innerText=currentPlayer
    
        currentPlayer=currentPlayer==X_TEXT?O_TEXT:X_TEXT
        who.innerHTML=`Player ${currentPlayer} turn`

        if(playerHasWon()!=false)
        {
//     2. Display a winning message in the 'result' element when a player wins.
            if(currentPlayer=X_TEXT)
                who.innerHTML=`Player X Won🎉`
            else    
                who.innerHTML=`Player O Won🎉`

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
        //3. Disable all buttons after a win.
            currentPlayer=''
        }
    }
    return false;
}

reset.addEventListener('click',resetGame)

//Function to reset the game
function resetGame(){
    // Your code to reset the game state
    spaces.fill(null)
    boxes.forEach(btn=>{
        btn.innerText=''
    })
    currentPlayer=X_TEXT
    who.innerHTML=''
    // Your code to re-enable buttons
    // b0.disabled=false;
}

startGame();


//     // Your code to display the current player's turn
//     // ...

//     // Your code to handle button and cell interactions
//     // ...
// };

//     /*
//     **Part 2: Reset Function (Add your code here)**

//     1. Implement a new function that resets the game to its initial state.
//     2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
//     3. Update the 'result' element to indicate the current player's turn.
//     4. Re-enable all buttons for a new game.
