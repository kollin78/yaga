export class InputHandler {
    constructor(game) {
        this.game = game;
        this.keys = [];
        window.addEventListener('keydown', e => {
            if((    e.key === 'ArrowDown' ||
                    e.key === 'ArrowUp' || 
                    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight' ||
                    e.key === 'Shift' ||
                    e.key === 'Enter'
                ) && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
            } else if (e.key === 'Tab') {
                this.keys = [];
            } else if (e.key === 'Enter' && this.game.gameOver) {
                console.log('nice');
                this.game.restartGame(this.game);
            } else if (e.key === 'd') this.game.debug = !this.game.debug;
        });
        window.addEventListener('keyup', e => {
            if( e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' || 
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === 'Shift' ||
                e.key === 'Enter'
            ) {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
        });
    }
}