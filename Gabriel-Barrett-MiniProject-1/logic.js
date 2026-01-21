let player = true

let grid = document.querySelectorAll(".gridCells")

grid.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText !== "") return 
    let symbol
    if (player) {
      box.innerText = "X"
      box.style.color = "red"
      symbol =  "X"
      player = false
    let row = Math.floor(box.id / 3)
    console.log(row)
    let column = box.id % 3
    console.log(column)
    currentBoard[row][column] = symbol
    console.log(currentBoard)
    } else {
      box.innerText = "O";
      box.style.color = "black"
      symbol = "O"
      player = true;
      console.log(box.id)
    let row = Math.floor(box.id / 3)
    console.log(row)
    let column = box.id % 3
    console.log(column)
    currentBoard[row][column] = symbol
    console.log(currentBoard)
    }
  })
})

let currentBoard = [
  ["", "", ""],["", "", ""],["", "", ""]
]

//actual board visualisation 
// [0,1,2]
// [3,4,5]
// [6,7,8]

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
   if (i of winSequence) {
    let valueOne = gridcells[i][0] = innerText
    let valueTwo = gridcells[i][1] = innerText
    let valueThree = gridcells[i][2] = innerText
}}

