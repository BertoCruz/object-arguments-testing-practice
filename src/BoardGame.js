class BoardGame {
    constructor(boardGame) {
        this.name = boardGame.name;
        this.rating = boardGame.rating;
        this.minimumPlayers = boardGame.minPlayers;
        this.maximumPlayers = boardGame.maxPlayers;
        this.played = boardGame.played;
    }

    play() {
        if(this.rating >= 10){
            this.played = true;
        }
    }
}

module.exports = BoardGame;
