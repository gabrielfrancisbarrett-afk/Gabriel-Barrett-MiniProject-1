
let Player = "X"
let Turn0 = true
const resetButton = document.getElementById("reset")
resetButton.addEventListener("click", resetGame)
const resetGame = () => {
    Turn0 = true
    Player = "X"


}
const grid = document.querySelectorAll("gridCells")

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

grid.forEach((box)) => {
    box.addEventListener("click",() =>{
        if (Turn0){
            box.innerText = "X"
            box.style.color = "Red"
            turn0 = false
            box.disabled = 
        } else {
            box.innerText = "O"
            box.style.color = "Black"
            Turn0
        }
    }
    )
}
