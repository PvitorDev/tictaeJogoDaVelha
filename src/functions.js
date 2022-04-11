const playerT = document.getElementById('player')
const square = Array.from(document.querySelectorAll(".squares"))
const lastPlayer = document.getElementById('last')

let point = ''
const scores = {
  playerX: 0,
  playerO: 0
}

let player = ''
let winner = ''
let winnerView = ''

function switchPlayer() {
  if (Math.floor(Math.random() * 2) == 0) {
    player = 'O'
    playerT.innerHTML = 'Player: O'
  } else {
    player = 'X'
    playerT.innerHTML = 'Player: X'
  }
}

function changePlayer() {
  if (player == 'X') {
    player = 'O'
    playerT.innerHTML = 'Player: O'
  } else {
    player = 'X'
    playerT.innerHTML = 'Player: X'

  }
}

let playerWin = function () {
  if (square[0].textContent == 'X' && square[1].textContent == 'X' && square[2].textContent == 'X' || square[0].textContent == 'O' && square[1].textContent == 'O' && square[2].textContent == 'O') {
    for (let i = 0; i < 3; i++) {
      square[0].style.color = '#00FF7F'
      square[1].style.color = '#00FF7F'
      square[2].style.color = '#00FF7F'

      return square[0].textContent
    }

  }
  if (square[3].textContent == 'X' && square[4].textContent == 'X' && square[5].textContent == 'X' || square[3].textContent == 'O' && square[4].textContent == 'O' && square[5].textContent == 'O') {
    for (let i = 3; i < 6; i++) {
      square[3].style.color = '#00FF7F'
      square[4].style.color = '#00FF7F'
      square[5].style.color = '#00FF7F'
      return square[3].textContent
    }

  }
  if (square[6].textContent == 'X' && square[7].textContent == 'X' && square[8].textContent == 'X' || square[6].textContent == 'O' && square[7].textContent == 'O' && square[8].textContent == 'O') {
    for (let i = 6; i < 9; i++) {
      square[6].style.color = '#00FF7F'
      square[7].style.color = '#00FF7F'
      square[8].style.color = '#00FF7F'
      return square[6].textContent

    }

  }
  if (square[0].textContent == 'X' && square[3].textContent == 'X' && square[6].textContent == 'X' || square[0].textContent == 'O' && square[3].textContent == 'O' && square[6].textContent == 'O') {
    for (let i = 0; i < 9; i += 3) {
      square[0].style.color = '#00FF7F'
      square[3].style.color = '#00FF7F'
      square[6].style.color = '#00FF7F'
      return square[0].textContent

    }

  }
  if (square[1].textContent == 'X' && square[4].textContent == 'X' && square[7].textContent == 'X' || square[1].textContent == 'O' && square[4].textContent == 'O' && square[7].textContent == 'O') {
    for (let i = 1; i < 9; i += 3) {
      square[1].style.color = '#00FF7F'
      square[4].style.color = '#00FF7F'
      square[7].style.color = '#00FF7F'
      return square[1].textContent

    }

  }
  if (square[2].textContent == 'X' && square[5].textContent == 'X' && square[8].textContent == 'X' || square[2].textContent == 'O' && square[5].textContent == 'O' && square[8].textContent == 'O') {
    for (let i = 2; i < 9; i += 3) {
      square[2].style.color = '#00FF7F'
      square[5].style.color = '#00FF7F'
      square[8].style.color = '#00FF7F'
      return square[2].textContent

    }

  }
  if (square[0].textContent == 'X' && square[4].textContent == 'X' && square[8].textContent == 'X' || square[0].textContent == 'O' && square[4].textContent == 'O' && square[8].textContent == 'O') {
    for (let i = 0; i < 9; i += 4) {
      square[0].style.color = '#00FF7F'
      square[4].style.color = '#00FF7F'
      square[8].style.color = '#00FF7F'
      return square[0].textContent

    }

  }
  if (square[2].textContent == 'X' && square[4].textContent == 'X' && square[6].textContent == 'X' || square[2].textContent == 'O' && square[4].textContent == 'O' && square[6].textContent == 'O') {
    for (let i = 2; i < 8; i += 2) {
      square[2].style.color = '#00FF7F'
      square[4].style.color = '#00FF7F'
      square[6].style.color = '#00FF7F'
      return square[2].textContent

    }

  }

  return ''
}

function updatePoint() {
  document.getElementById("point-player1").innerHTML = scores.playerX
  document.getElementById("point-player2").innerHTML = scores.playerO
}


function points() {
  if (winner == 'X') {
    scores.playerX++
  } else {
    scores.playerO++
  }
  updatePoint()
}

function reloadGame() {
  for (let i = 0; i < 9; i++) {
    let empty = square[i]
    if (empty != '') {
      empty.innerHTML = ''
      empty.style.color = 'white'
    }
  }
  winner = ''
  switchPlayer()
}

function clearPoints() {
  if (confirm("Clear POints ?")) {
    scores['playerX'] = 0
    scores['playerO'] = 0
    updatePoint()
    reloadGame()
  }
}

//VSCOM 

