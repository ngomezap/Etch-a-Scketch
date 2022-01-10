
function createCanvas(number){

    //Creamos las filas
    for(let i = 0; i < number; i++){
        canvas.appendChild(document.createElement('div'));
    }

    rows.forEach(e => {
        e.classList.add("rows");
        //Creamos las columnas dentro de cada fila
        for(let i = 0; i < number; i++){
            e.appendChild(document.createElement('div'));
        }
        e.childNodes.forEach(e => {
            e.classList.add("square");
        })
    })
}

function paint(e){
    const objetivo = e.target.classList[0];
    if(objetivo === "square"){
        if(color === "black"){
            e.target.removeAttribute("style");
            e.target.classList.add("black");
        }
        else{
            e.target.classList.remove("black");
            let redC = Math.floor(Math.random() * (255 - 0 + 1));
            let greenC = Math.floor(Math.random() * (255 - 0 + 1));
            let blueC = Math.floor(Math.random() * (255 - 0 + 1));
            e.target.style.backgroundColor = `rgb(${redC},${greenC},${blueC})`;
        }
    }
}

function clear(){
    for(let i = number - 1; i >= 0; i--){
        rows[i].remove();
    }
    number = numSquare.value;
    createCanvas(number);
}

function changeColor(e){
    
    if(e.target.id === "black"){
        color = "black";
    }
    else{
        color = "rainbow";
    }
}

//Elementos
const canvas = document.getElementById("canvas");
const rows = canvas.childNodes;
const resetButton = document.getElementById("reset");
const blackButton = document.getElementById("black");
const rainButton = document.getElementById("rainbow");
const numSquare = document.getElementById("numSquare");

//Valores por defecto:
let number = 16;
let color = "black";
numSquare.value = number;

//Listeners
canvas.addEventListener("mouseover", paint);
resetButton.addEventListener("click", clear);
blackButton.addEventListener("click", changeColor);
rainButton.addEventListener("click", changeColor);

///
createCanvas(number);