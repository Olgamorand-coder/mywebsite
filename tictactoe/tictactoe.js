
class TicTacToe {

    constructor() {
        this.availableBoxes = 9;
        this.winningCombinations = [["case1", "case2", "case3"], ["case4", "case5", "case6"], ["case7", "case8", "case9"], ["case1", "case5", "case9"], ["case3", "case5", "case7"], ["case1", "case4", "case7"], ["case2", "case5", "case8"], ["case3", "case6", "case9"]];
    }

    initTicTacToeTable() {
        for (let i = 1; i < 10; i++) {
            const cell = document.getElementById("case" + i);
            cell.addEventListener("click", () => this.play(cell));
        }
    }

    play(cell) {
        if (!this.isGameFinished()) {
            if (this.isLegalCaseToPlay(cell)) {
                this.makePlayerTurn(cell);
                this.makeComputerTurn();
            }
        }
    }

    makePlayerTurn(box) {
        box.classList.add("croix");
        this.availableBoxes -= 1;
        if (this.checkWinner() === 'x') {
            this.winnerMessage('x');
        }
        else if (this.checkTie() === true) {
            document.getElementById("winnerMessage").innerHTML += "It's a tie!";
        }
    }

    makeComputerTurn() {
        let computerCase;
        let shouldContinue = true;
        do {
            computerCase = document.getElementById("case" + this.getRandomInt(1, 9));
            if (this.checkWinner() === 'x') {
                shouldContinue = false;
            }
            else if (!(computerCase.classList.contains("croix") || computerCase.classList.contains("zero"))) {
                computerCase.classList.add("zero");
                shouldContinue = false;
                this.availableBoxes -= 1;
                if (this.checkWinner() === 'o') {
                    this.winnerMessage('o');
                }
                else if (this.checkTie() === true) {
                    document.getElementById("winnerMessage").innerHTML += "It's a tie!";
                }

            }
            if (this.availableBoxes === 0) {
                shouldContinue = false;
            }

        } while (shouldContinue);
    }


    checkWinner() {
        const winningCombinations = [["case1", "case2", "case3"], ["case4", "case5", "case6"], ["case7", "case8", "case9"], ["case1", "case5", "case9"], ["case3", "case5", "case7"], ["case1", "case4", "case7"], ["case2", "case5", "case8"], ["case3", "case6", "case9"]];
        const XwinnerList = []
        const OwinnerList = []
        for (let i = 1; i < 10; i++) {
            const cell = document.getElementById("case" + i);
            if (cell.classList.contains("croix")) {
                XwinnerList.push(cell.id)
            }
            else if (cell.classList.contains("zero")) {
                OwinnerList.push(cell.id)
            }
        }
        for (let i = 0; i < winningCombinations.length; i++) {
            if (XwinnerList.includes(winningCombinations[i][0]) && XwinnerList.includes(winningCombinations[i][1]) && XwinnerList.includes(winningCombinations[i][2])) {
                return 'x';
            }
            else if (OwinnerList.includes(winningCombinations[i][0]) && OwinnerList.includes(winningCombinations[i][1]) && OwinnerList.includes(winningCombinations[i][2])) {
                return 'o';
            }

        }
        return '-';
    }

    checkTie() {
        if (this.checkWinner() === '-' && this.availableBoxes === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    isGameFinished() {
        return this.checkWinner() === 'x' || this.checkWinner() === 'o' || this.checkTie() === true;
    }

    winnerMessage(winner) {
        document.getElementById("winnerMessage").innerHTML = winner + " has won!";
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    isLegalCaseToPlay(box) {
        return !(box.classList.contains("croix") || box.classList.contains("zero"));
    }

    static cleanBoard() {
        if (document.getElementsByClassName("croix").length>0){
            while (document.getElementsByClassName("croix").length>0){
                document.getElementsByClassName("croix")[0].classList.remove("croix");
            }
            if (document.getElementsByClassName("zero").length>0){
                while(document.getElementsByClassName("zero").length>0){
                    document.getElementsByClassName("zero")[0].classList.remove("zero");
                };
        }
        
        }
    }

}

//TicTacToe.cleanBoard();
const ticTacToe = new TicTacToe();
ticTacToe.initTicTacToeTable();
const resetButton = document.getElementById("btn_reset");
resetButton.addEventListener("click", () => {
    document.getElementById("winnerMessage").innerHTML = "";
    ticTacToe.availableBoxes = 9;
    TicTacToe.cleanBoard();
    ticTacToe.play();
    }
   
    
);
//document.getElementsByClassName("show")[0].classList.remove("show");
    //document.getElementById("tictactoe").classList.add("show")