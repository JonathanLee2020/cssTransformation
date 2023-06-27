// const { current } = require("@reduxjs/toolkit")

const HTMLboard = document.querySelectorAll(".board__square")
console.log(HTMLboard.length)

const title = document.querySelector(".board__title")

let currentPlayer = "X"

let moves = 0

let board = new Array(9).fill(false)

// possible winners
// horizontal
    // [0,1,2]
    // [3,4,5]
    // [6,7,8]
// vertical
    // [0,3,6]
    // [1,4,7]
    // [2,5,8]
// diagonal
    // [0,4,8]
    // [2,4,6]

HTMLboard.forEach((square, i) => {
    square.addEventListener("click", () => {
        if (moves < 9 && isWinner()) {
            title.innerHTML = `${currentPlayer} Wins!`
            return
        }
        if (moves === 9) {
            if (isWinner()) title.innerHTML = `${currentPlayer} Wins!`
            else title.innerHTML = "tie"
            return
        }
        board[i] = `${currentPlayer}`
        moves++
        // console.log(`clicked ${i}, we have ${9 - moves} moves left`)

        square.innerHTML = currentPlayer
        currentPlayer = currentPlayer === "X" ? "O" : "X"
        if (isWinner()) {
            title.innerHTML = "winner"
            return
        }        
        title.innerHTML = `${currentPlayer}'s Turn`
    })
})

function isWinner () { 
    let wCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for (let row = 0; row < wCombos.length; row++) {
        let s1 = wCombos[row][0]
        let s2 = wCombos[row][1]
        let s3 = wCombos[row][2]
       
        if (board[s1] && board[s1] === board[s2] && board[s1] === board[s3]) {
            console.log(`we have a winner!`)
            // console.log(`s1 = ${s1} s2 = ${s2} s3 = ${s3}, board[s1] is ${board[s1]}, board[s2] is ${board[s2]}, board[s3] is ${board[s3]}`);
            return true;
        }
    }
    return false
}