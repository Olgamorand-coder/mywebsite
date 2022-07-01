import { Langton } from "./langton/langton.js";

const tictactoeBtn = document.getElementById("tictactoeButton")
const langtonBtn = document.getElementById("langtonButton")
const mainBtn = document.getElementById("mainButton")
const shapesBtn=document.getElementById("shapesButton")

tictactoeBtn.addEventListener("click", () => {
    document.getElementsByClassName("show")[0].classList.remove("show");
    document.getElementById("tictactoe").classList.add("show")
});  

langtonBtn.addEventListener("click", () => {
    document.getElementsByClassName("show")[0].classList.remove("show");
    document.getElementById("langton").classList.add("show");

    Langton.startLangton();
    const langtonCanvas = new LangtonCanvas();
    langtonCanvas.play();
});

mainBtn.addEventListener("click", () => {
    document.getElementsByClassName("show")[0].classList.remove("show");
    document.getElementById("main").classList.add("show")
});

shapesBtn.addEventListener("click", ()=>{
    document.getElementsByClassName("show")[0].classList.remove("show");
    document.getElementById("shapes").classList.add("show")
});

