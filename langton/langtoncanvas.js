class LangtonCanvas {
    constructor() {
        this.canvas = document.getElementById("grid");
        this.ctx = this.canvas.getContext('2d');
        this.grid = new Grid(this.ctx);
        this.ant = new Ant(this.grid, 50, 50);
    }

    play() {
        this.loop();
    }

    loop() {
        for(let i=0; i<6; i++){
            this.ant.changeDirection(this.grid.cells[this.ant.i][this.ant.j]);
            this.grid.cells[this.ant.i][this.ant.j].changeColor(); //
            this.ant.move();
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.grid.draw(this.ctx);
        this.ant.draw(this.ctx);

        window.requestAnimationFrame(this.loop.bind(this))
    }
}

class Grid {
    constructor(ctx) {
        this.ctx=ctx;
        //this.grid=grid; // Inutile
        this.cells = [];
        for (let i = 0; i < 100; i++) {
            let rows = [];
            for (let j = 0; j < 100; j++) {
                rows.push(new Cell( i,j, "white")); // Erreur, que doit contenit new Cells(??)
            }
            this.cells.push(rows)
        }
    }
    draw(ctx){
        for(let i=0; i<100; i++){
            for (let j=0; j<100; j++){
                this.cells[i][j].draw(ctx)
            }
        }
    }


}

class Cell {
    constructor( i, j, color) {
        //this.ctx=ctx; //  a remove : non utilisé
        this.i=i;
        this.j=j;
        //this.grid=grid; //  a remove : non utilisé
        this.color = color;
    }

    draw(ctx) {                                                                                                         //pourquooi je ne peux pas passer ctx dans les paramètres comme pour la classe ant(erreur)??
        ctx.fillStyle = this.color;
        ctx.fillRect(this.i * 10, this.j * 10, 10, 10);
    }
    changeColor() {
        if (this.color==="white"){
            this.color="black"
        }
        else if (this.color==="black"){
            this.color="white"
        }
    }
}

class Ant {
    constructor(grid, i, j) {
        this.i=i;
        this.j=j; // stocker position (i, j)
        this.direction = "N";
        this.grid = grid;
    }

    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.i * 10, this.j * 10, 10, 10);
    }
    move(){
        if (this.direction === "N") {
            this.j += 1; // Fzux, la fourmi ne bouge pas la cellule

        } else if (this.direction === "E") {
            this.i += 1;
        }
        else if (this.direction === "S") {
            this.j -= 1;
        }
        else if (this.direction == "W") {
           this.i-= 1;
        }
        
        
        
    }
    changeDirection(cell) {

        if ((this.direction === "N") && (cell.color==="white")) {
            this.direction = "E";
        }
        else if ((this.direction === "N") && (cell.color==="black")) {
            this.direction = "W";
        }
        else if ((this.direction === "E") && (cell.color==="white")) {
            this.direction = "S";
        }
        else if ((this.direction === "E") && (cell.color==="black")) {
            this.direction = "N";
        }
        else if ((this.direction === "S") && (cell.color==="white")) {
            this.direction = "W";
        }
        else if ((this.direction === "S") && (cell.color==="black")) {
            this.direction = "E";
        }
        else if ((this.direction === "W") && (cell.color==="white")) {
            this.direction = "N";
        }
        else if ((this.direction === "W") && (cell.color=="black")) {
            this.direction = "S";
        }
    }
}


