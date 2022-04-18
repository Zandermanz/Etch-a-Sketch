setGridSize(); //calls set grid size function
function setGridSize(){
    let gridSize = prompt("Choose your Grid Size");
    //Prompts again if user enters more than 100
    if (gridSize > 100){
        gridSize = prompt("Please enter a grid size of 100 or less")
    }
    //Loop to create number of Div's imputed
    for(let i = 0; i < gridSize; i++){
        addDiv();
    }
}




function addDiv(){
const container = document.querySelector('#gridContainer');
const div = document.createElement('div');
    div.classList.add('grid-item');
    //adds the round result to the page
    div.textContent = `Div`;
    container.appendChild(div);
}