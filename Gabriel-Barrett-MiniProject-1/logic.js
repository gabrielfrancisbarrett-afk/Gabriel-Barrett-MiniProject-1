
let Player = "X"
let Turn0 = true

const squares = document.querySelectorAll(".squares").

forEach(squares =>{
    squares.addEventListener("click", () => { 
        squares.textContent = Player



    }
    })

const winSequence = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetButton = document.getElementById("reset")
resetButton.addEventListener("click", resetGame)

const resetGame = () => {
    Turn0 = true
    Player = "X"


}




