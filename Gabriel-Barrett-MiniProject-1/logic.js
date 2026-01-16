let resetGame = (box) => {
    box.forEach(box => {
        box.textContent = "";
 })
}

let Player = "X"
let turn = true

let resetButton = document.getElementById("reset")
resetButton.addEventListener("click", resetGame)


let grid = document.querySelectorAll(".gridCells")

grid.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText !== "") return; 
    if (turn) {
      box.innerText = "X";
      box.style.color = "red";
      turn = false;
    } else {
      box.innerText = "O";
      box.style.color = "black";
      turn = true;
    }
  })
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

let winner = () => {
    
}
