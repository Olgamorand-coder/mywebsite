let gameLoopInterval, isBoardCreated = false, ant;

export class Langton {
    static createBoard() {
        let table = document.createElement('table');
        for (let index = 0; index < 100; index++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < 100; j++) {
                let td = document.createElement('td');
                td.id = index + "," + j;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.getElementById('langtonBoard').appendChild(table);
        isBoardCreated = true;
    }

    static startLangton() {
        // Je ne créé le board qu'une seule fois (pour ne pas en avoir plusieurs lorsqu'on start
        // plusieurs fois le jeu)
        if (!isBoardCreated) {
            Langton.createBoard();
        }
        Langton.cleanBoard();
        ant = new Ant();
        ant.create();
        Langton.loop(0, ant);
    }

    static loop(deltaTimeInMs) {
        ant.changeDirection();
        ant.changeCellColor()
        ant.move();
        window.requestAnimationFrame(Langton.loop)
    }

    static cleanBoard() {
        if (document.getElementsByClassName("black").length > 0) {
            while (document.getElementsByClassName("black").length > 0) {
                document.getElementsByClassName("black")[0].classList.remove("black");
            }
        }
        if (document.getElementsByClassName("ant").length > 0) {
            document.getElementsByClassName("ant")[0].classList.remove("ant");
        }
    }
}


class Ant {
    constructor() {
        this.x = 50;
        this.y = 50;
        this.direction = "N"
    }
    create() {
        let elementPosition = this.x + ',' + this.y;
        let element = document.getElementById(elementPosition);
        element.classList.add("ant");

    }
    changeDirection() {
        let elementPosition = this.x + ',' + this.y;
        let element = document.getElementById(elementPosition);
        if ((this.direction === "N") && (!(element.classList.contains("black")))) {
            this.direction = "E";
        }
        else if ((this.direction === "N") && (element.classList.contains("black"))) {
            this.direction = "W";
        }
        else if ((this.direction === "E") && (!(element.classList.contains("black")))) {
            this.direction = "S";
        }
        else if ((this.direction === "E") && (element.classList.contains("black"))) {
            this.direction = "N";
        }
        else if ((this.direction === "S") && (!(element.classList.contains("black")))) {
            this.direction = "W";
        }
        else if ((this.direction === "S") && (element.classList.contains("black"))) {
            this.direction = "E";
        }
        else if ((this.direction === "W") && (!(element.classList.contains("black")))) {
            this.direction = "N";
        }
        else if ((this.direction === "W") && (element.classList.contains("black"))) {
            this.direction = "S";
        }
    }
    changeCellColor() {
        let elementPosition = this.x + ',' + this.y;
        let element = document.getElementById(elementPosition);
        if (!(element.classList.contains("black"))) {
            element.classList.add("black");
        }
        else {
            element.classList.remove("black");
        }
    }
    move() {
        let elementPosition = this.x + ',' + this.y;
        let element = document.getElementById(elementPosition);

        if (this.direction === "N") {
            this.y += 1;

        } else if (this.direction === "E") {
            this.x += 1;
        }
        else if (this.direction === "S") {
            this.y -= 1;
        }
        else if (this.direction == "W") {
            this.x -= 1;
        }
        let newPosition = this.x + ',' + this.y;
        let newElement = document.getElementById(newPosition);
        newElement.classList.add("ant");
        element.classList.remove("ant");
    }

}



