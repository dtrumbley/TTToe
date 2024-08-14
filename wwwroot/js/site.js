var turn = "X";

var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

//dictionary for managing specific indices / values
var keyvals =
{
    "A": 0,
    "B": 1,
    "C": 2,
    "X": -1,
    "O": 1
};

const sectors = document.querySelectorAll(`.sector`);
const curturn = document.getElementById(`curturn`);
const resultbanner = document.getElementById(`resultbanner`);
const resetbutton = document.getElementById(`resetbtn`);

resetbutton.addEventListener(`click`, function () {
    resetGame();
});

sectors.forEach(sector => {
    sector.addEventListener(`click`, function () {
        if (!this.className.includes(`used`)) {
            updateCSSClass(this, ` used`, `add`);
            updateInnerHTML(this, turn);
            updateBoardLogic(this.id, turn);
            checkWinner();
            changeTurn(turn);
            updateInnerHTML(curturn, turn);
        } else {
            return;
        }

    });
});

function changeTurn(t) {
    if (t == "X") {
        turn = "O";
    } else if (t == "O") {
        turn = "X";
    } else {
        return;
    }
}

function updateInnerHTML(element,value) {
    element.innerHTML = `${value}`;
}

function updateBoardLogic(boardkey, turn) {
    let y_axis = boardkey[1];
    let x_axis = keyvals[boardkey[0]];
    let pushval = keyvals[turn];
    (board[y_axis])[x_axis] = pushval;
}

function updateCSSClass(element,value,option) {
    if (option == `add`) {
        element.className += ` ${value}`;
    } else if (option == `toggle`) {
        element.classList.toggle(value);
    }
    else {
        element.className = `${value}`;
    }
}

function checkWinner() {
    let drawflag;
    //top row across
    if ((((board[0])[0]) + ((board[0])[1]) + ((board[0])[2])) === 3 || (((board[0])[0]) + ((board[0])[1]) + ((board[0])[2])) === -3) {
        updateInnerHTML(resultbanner, `${turn} wins!`);
        updateCSSClass(resetbutton, `hide`, `toggle`);
        sectors.forEach(s => {
            s.className = `sector used`;
        });
        return;
    }
    //middle row across
    if ((((board[1])[0]) + ((board[1])[1]) + ((board[1])[2])) === 3 || (((board[1])[0]) + ((board[1])[1]) + ((board[1])[2])) === -3) {
        updateInnerHTML(resultbanner, `${turn} wins!`);
        updateCSSClass(resetbutton, `hide`, `toggle`);
        sectors.forEach(s => {
            s.className = `sector used`;
        });
        return;
    }
    //bottom row across
    if ((((board[2])[0]) + ((board[2])[1]) + ((board[2])[2])) === 3 || (((board[2])[0]) + ((board[2])[1]) + ((board[2])[2])) === -3) {
        updateInnerHTML(resultbanner, `${turn} wins!`);
        updateCSSClass(resetbutton, `hide`, `toggle`);
        sectors.forEach(s => {
            s.className = `sector used`;
        });
        return;
    }
    //first column
    if ((((board[0])[0]) + ((board[1])[0]) + ((board[2])[0])) === 3 || (((board[0])[0]) + ((board[1])[0]) + ((board[2])[0])) === -3) {
        updateInnerHTML(resultbanner, `${turn} wins!`);
        updateCSSClass(resetbutton, `hide`, `toggle`);
        sectors.forEach(s => {
            s.className = `sector used`;
        });
        return;
    }
    //second column
    if ((((board[0])[1]) + ((board[1])[1]) + ((board[2])[1])) === 3 || (((board[0])[1]) + ((board[1])[1]) + ((board[2])[1])) === -3) {
        updateInnerHTML(resultbanner, `${turn} wins!`);
        updateCSSClass(resetbutton, `hide`, `toggle`);
        sectors.forEach(s => {
            s.className = `sector used`;
        });
        return;
    }
    //third column
    if ((((board[0])[2]) + ((board[1])[2]) + ((board[2])[2])) === 3 || (((board[0])[2]) + ((board[1])[2]) + ((board[2])[2])) === -3) {
        updateInnerHTML(resultbanner, `${turn} wins!`);
        updateCSSClass(resetbutton, `hide`, `toggle`);
        sectors.forEach(s => {
            s.className = `sector used`;
        });
        return;
    }
    //diag pointing at 5oclock
    if ((((board[0])[0]) + ((board[1])[1]) + ((board[2])[2])) === 3 || (((board[0])[0]) + ((board[1])[1]) + ((board[2])[2])) === -3) {
        updateInnerHTML(resultbanner, `${turn} wins!`);
        updateCSSClass(resetbutton, `hide`, `toggle`);
        sectors.forEach(s => {
            s.className = `sector used`;
        });
        return;
    }
    //diag pointing at 7oclock
    if ((((board[0])[2]) + ((board[1])[1]) + ((board[2])[0])) === 3 || (((board[0])[2]) + ((board[1])[1]) + ((board[2])[0])) === -3) {
        updateInnerHTML(resultbanner, `${turn} wins!`);
        updateCSSClass(resetbutton, `hide`, `toggle`);
        sectors.forEach(s => {
            s.className = `sector used`;
        });
        return;
    }
    //check for draw
    let nestedarr = [];
    for (i = 0; i < board.length; i++) {
        nestedarr = board[i];
        for (j = 0; j < nestedarr.length; j++) {
            if (nestedarr[j] == 0) {
                return;
            }
        }
    }
    updateInnerHTML(resultbanner, `DRAW`);
    updateCSSClass(resetbutton, `hide`, `toggle`);


}

function resetGame() {
    sectors.forEach(e => {
        e.className = `sector`;
        e.innerHTML = ``;
    });
    board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    turn = "X";
    //hiding reset button
    updateCSSClass(resetbutton, `hide`, `toggle`);

    //resetting current turn back to X
    updateInnerHTML(curturn, turn);

    //resetting win notification
    updateInnerHTML(resultbanner, ``);

}