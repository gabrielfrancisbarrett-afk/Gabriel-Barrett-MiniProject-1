let player = true
let symbol
let grid = document.querySelectorAll(".gridCells")

let currentBoard = [
  ["", "", ""],["", "", ""],["", "", ""]
] 


grid.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText !== "") return 
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
    const winner = checkWinner(currentBoard)
      if (winner) {
        console.log(`${winner} wins!`)
    } 
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
    const winner = checkWinner(currentBoard)
      if (winner) {
      console.log(`${winner} wins!`)
    }
    }
  })
})



//actual board visualisation 
// [0,1,2]
// [3,4,5]
// [6,7,8]

// const winSequence = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8]
// ]

const winSequences = [
  // rows
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],
  // columns
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],
  // diagonals
  [[0, 0], [1, 1], [2, 2]],
  [[0, 2], [1, 1], [2, 0]]
];


function getCell(board,row,column){
  return board[row][column]
}

function checkLine(board, positions) {
  const firstPosition = positions[0]
  const secondPosition = positions[1]
  const thirdPosition = positions[2]
  const first = getCell(board, firstPosition[0],firstPosition[1])
  const second = getCell(board, secondPosition[0],secondPosition[1])
  const third = getCell(board, thirdPosition[0], thirdPosition[1])
  if (first !== "" && first == second && first === third) {
    return first
  } return null
}


function checkWinner(board) {
    for (let i=0;i < winSequences.length;i++) {
      // const result = checkLine(board,line)
      console.log(winSequences[i])
      if (result !== null) {
        return result
      } 
    } 
}




// function topRowWinner(board) {
//   const first = board[0][0]
//   const second = board[0][1]
//   const third = board[0][2]
//   if (first !== "" && first === second && first === third) {
//     return first 
//   }
//   return null
// }
















// function checkWinner() {
//   for(const sequence of winSequence){
//     console.log("CHECKING")
//     let value1 = sequence[0].innerText
//     let value2 = sequence[1].innerText
//     let value3 = sequence[2].innerText
//     if (value1 !"" value2 && value3 === winSequence){
//       console.log("Winner")
//     }else{
//         return 
//       }

//     }
//   }


