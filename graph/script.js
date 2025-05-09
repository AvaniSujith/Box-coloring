const gridContainer = document.getElementById("gridsContainer");

const yAxisLength = document.getElementById("yAxis");
const xAxisLength = document.getElementById("xAxis");
const generateGridBtn = document.getElementById("submit");

const colorBtn = document.getElementById("simpleColorBtn");
const colorX = document.getElementById("xNum");
const colorY = document.getElementById("yNum");


const buildGraphBtn = document.getElementById("drawGraph");
const graphGeneration = document.getElementById("time");



generateGridBtn.addEventListener("click", ()=>{
    console.log("Click");


    const rowNum = parseInt(yAxisLength.value);
    const colNum = parseInt(xAxisLength.value);


    gridContainer.innerHTML ="";


    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = `repeat(${colNum}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${rowNum}, 50px)`;



    for(let row = 0; row < rowNum; row++){

        for(let col = 0; col < colNum; col++){
            const box = document.createElement("div");
            box.classList.add("box");
            box.classList.add(`row-${row + 1}`, `col-${col + 1}`);
            box.style.border = "1px solid #ccc";


            gridContainer.appendChild(box);
        }

    }
});


colorBtn.addEventListener("click", () => {


    const rowNum = parseInt(colorY.value);
    const colNum = parseInt(colorX.value);


    const box = document.querySelector(`.row-${rowNum}.col-${colNum}`);

    if(box){
        box.style.backgroundColor = "red";
    }

} );



buildGraphBtn.addEventListener("click", () => {

    let parts = graphGeneration.value.split(":");
    // console.log(parts);

    let hours = parseInt(parts[0]) || 0;
    let minutes = parseInt(parts[1]) || 0;
    let seconds = parseInt(parts[2]) || 0;

    
    // let total = 0;

    // for(let i = 0; i< parts.length;  i++){
    //     let part = parseInt(parts[i]);
    //     total = total + part
    // }

    let totalhours = hours + (minutes / 60) + (seconds / 3600);
    let fullBox = Math.floor(totalhours);
    // console.log(fullBox)
    let partBox = totalhours - fullBox;

    // console.log(partBox);

    

    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.style.backgroundColor = "";
        box.style.background = "";
    });

    // for(let i = 0; i < colorBox && i < boxes.length; i++){
    //     boxes[i].style.backgroundColor = "blue"
    // }
    
    const rowNum = parseInt(yAxisLength.value);
    const colNum = parseInt(xAxisLength.value);


    const fullColumn = Math.floor( fullBox / rowNum);



    for(let col = 0; col <=  fullColumn ; col++){

        // const row = rowNum - Math.floor(i / colNum) - 1;
        // const col = i % colNum;

        // const col = Math.floor(i / rowNum) + 1;
        // const row = rowNum - (i % rowNum);

        // // boxes[i].style.backgroundColor = "blue";

        // const box = document.querySelector(`.row-${row + 1}.col-${col + 1}`);
        // if(box) {
        //     box.style.backgroundColor = "blue";
        // }

        for( let row = rowNum; row >=1; row-- ){
            const box = document.querySelector(`.row-${row}.col-${col}`);
            if(box){
                box.style.backgroundColor = "blue";
            }
        }
    }

    const remainingBoxes = fullBox % rowNum;

    if(remainingBoxes > 0){
        const partialCol = fullColumn + 1;

        for(let i = 0; i < remainingBoxes; i++){
            const row = rowNum - i;
            const box = document.querySelector(`.row-${row}.col-${partialCol}`);
            if(box){
                box.style.backgroundColor ="blue";
            }
        }
    }

    if (partBox > 0 && fullBox < rowNum * colNum) {
        // const row = rowNum - Math.floor(fullBox / colNum) - 1;
        const partialCol = fullColumn +1;
        const partialRow = rowNum - remainingBoxes;


        // const col = Math.floor(fullBox / colNum) + 1;

        // const row = rowNum - (fullBox % rowNum);

        const partialBox = document.querySelector(`.row-${partialRow}.col-${partialCol}`);

        if(partialBox){
        partialBox.style.background = `linear-gradient(to top, blue ${partBox * 100}%, white 0%)`; 
        }
    }
    console.log("colored")
});