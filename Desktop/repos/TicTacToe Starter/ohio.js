// we want create event listeners so every time we click on a square we print out either an X or an O
    // we want to alternate between clicking to mark an X and clicking to mark an O
// after every time we click a box, we want to run a function to check if there is a winner or not
// if there is a winner, we don't want our square to register if we have any more clicks or not
// if there is no winner after 9 click, we want to register a tie


let currentPlayer = "X"
let cells = document.querySelectorAll(".board__square")
let title = document.querySelector(".board__title")
cells.forEach((square, i) => {
    square.addEventListener("click", () => {
        square.innerHTML = currentPlayer
        currentPlayer = currentPlayer === "X" ? "O" : "X"
    })
})