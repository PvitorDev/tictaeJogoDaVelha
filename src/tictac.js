function vsPlayer() {
    switchPlayer()

    for (let i = 0; i < 9; i++) {
        square[i].addEventListener('click', (event) => {
            if ((event.target.textContent == '') && (winner == '')) {
                event.target.innerHTML = player

                changePlayer()

                winner = playerWin()
                winnerView = playerWin()

                if (winnerView != '') {
                    lastPlayer.innerHTML = 'Ultimo Vencedor: Player ' + winner
                    points()
                }

            }
        })
    }
}


