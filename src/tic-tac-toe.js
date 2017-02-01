class TicTacToe {
    constructor() {
		this.field = [[null, null, null], [null, null, null], [null, null, null]];
		this.step = 0;
		this.checkFinished = 0;
		this.winner = null;
		this._checkTurns = null;
    }

    getCurrentPlayerSymbol() {
		if (this.step === 0) {
			return 'x';
		} else {
			return 'o';
		}
    }

    nextTurn(rowIndex, columnIndex) {
		var matrix = this.field;
		var checkTurns = true;
		var i = 0;
		var j = 0;
		if (this.field[rowIndex][columnIndex] === null){
			
			if (this.step === 0) {
				this.field[rowIndex][columnIndex] = 'x';
				this.step = 1;
			} else {
				this.field[rowIndex][columnIndex] = 'o';
				this.step = 0;
			}
		}
		for (i = 0; i < 3; i++){
			for (j = 0; j < 3; j++){
				if (this.field[i][j] === null){
					checkTurns = false;
				}
			}
		}
		if (checkTurns === true){
			this.checkFinished = 1;
		} else {
			this.checkFinished = 0;
		}
		if (matrix[0][0] === 'x' && matrix[0][1] === 'x' && matrix[0][2] === 'x'){
			this.winner = 'x'; //1
			this.checkFinished = 1;
		}
		if (matrix[1][0] === 'x' && matrix[1][1] === 'x' && matrix[1][2] === 'x'){
			this.winner = 'x'; //2
			this.checkFinished = 1;
		}
		if (matrix[2][0] === 'x' && matrix[2][1] === 'x' && matrix[2][2] === 'x'){
			this.winner = 'x'; //3
			this.checkFinished = 1;
		}
		if (matrix[0][0] === 'x' && matrix[1][1] === 'x' && matrix[2][2] === 'x'){
			this.winner = 'x'; //4
			this.checkFinished = 1;
		}
		if (matrix[0][0] === 'x' && matrix[1][0] === 'x' && matrix[2][0] === 'x'){
			this.winner = 'x'; //5
			this.checkFinished = 1;
		}
		if (matrix[0][1] === 'x' && matrix[1][1] === 'x' && matrix[2][1] === 'x'){
			this.winner = 'x'; //6
			this.checkFinished = 1;
		}
		if (matrix[0][2] === 'x' && matrix[1][2] === 'x' && matrix[2][2] === 'x'){
			this.winner = 'x'; //7
			this.checkFinished = 1;
		}
		if (matrix[0][2] === 'x' && matrix[1][1] === 'x' && matrix[2][0] === 'x'){
			this.winner = 'x'; //8
			this.checkFinished = 1;
		}
		if (matrix[0][0] === 'o' && matrix[0][1] === 'o' && matrix[0][2] === 'o'){
			this.winner = 'o'; //1
			this.checkFinished = 1;
		}
		if (matrix[1][0] === 'o' && matrix[1][1] === 'o' && matrix[1][2] === 'o'){
			this.winner = 'o'; //2
			this.checkFinished = 1;
		}
		if (matrix[2][0] === 'o' && matrix[2][1] === 'o' && matrix[2][2] === 'o'){
			this.winner = 'o'; //3
			this.checkFinished = 1;
		}
		if (matrix[0][0] === 'o' && matrix[1][1] === 'o' && matrix[2][2] === 'o'){
			this.winner = 'o'; //4
			this.checkFinished = 1;
		}
		if (matrix[0][0] === 'o' && matrix[1][0] === 'o' && matrix[2][0] === 'o'){
			this.winner = 'o'; //5
			this.checkFinished = 1;
		}
		if (matrix[0][1] === 'o' && matrix[1][1] === 'o' && matrix[2][1] === 'o'){
			this.winner = 'o'; //6
			this.checkFinished = 1;
		}
		if (matrix[0][2] === 'o' && matrix[1][2] === 'o' && matrix[2][2] === 'o'){
			this.winner = 'o'; //7
			this.checkFinished = 1;
		}
		if (matrix[0][2] === 'o' && matrix[1][1] === 'o' && matrix[2][0] === 'o'){
			this.winner = 'o'; //8
			this.checkFinished = 1;
		}
	}

    isFinished() {
		var finished = null;
		if (this.checkFinished === 0){
			finished = false;
		} else {
			finished = true;
		}
		return finished;
    }

    getWinner() {
		return this.winner;
    }

    noMoreTurns() {
		var checkTurns = true;
		var i = 0;
		var j = 0;
		for (i = 0; i < 3; i++){
			for (j = 0; j < 3; j++){
				if (this.field[i][j] === null){
					checkTurns = false;
				}
			}
		}
		if (checkTurns === true){
			this.checkFinished = 1;
		} else {
			this.checkFinished = 0;
		}
		return checkTurns;
    }

    isDraw() {
		var draw = true;
		var i = 0;
		var j = 0;
		var checkTurns = 1;
		//this.checkFinished = 1;
		for (i = 0; i < 3; i++) {
			for (j = 0; j < 3; j++){
				if (this.field[i][j] === null){
					checkTurns = 0;
				} 
			}
		}
		if (checkTurns === 0 || this.winner != null){
			draw = false;
		} 
		return draw;
    }

    getFieldValue(rowIndex, colIndex) {
		var value;
		value = this.field[rowIndex][colIndex];
		return value;
    }
}

module.exports = TicTacToe;
