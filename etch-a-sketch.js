const container = document.querySelector('#gridContainer')

setGridSize(); //calls set grid size function

function setGridSize(){
    let rowsAndColumns = prompt("Choose the number of columns and rows");
    //Prompts again if user enters more than 100
    if (rowsAndColumns > 100){
        rowsAndColumns = prompt("Please enter a grid size of 100 or less")
    }
    //Squares the rows and columns to get total number of grid squares
    let gridSize = rowsAndColumns * rowsAndColumns;
    setCssGrid(rowsAndColumns);   
    //Loop to create number of Div's imputed
    for(let i = 0; i < gridSize; i++){
        addDiv();
    }
    return rowsAndColumns;
}

const reset =document.querySelector('#reset')
reset.addEventListener('click', () => {
    //resetBackground();
    removeAllChildNodes(container);
    setGridSize();
})


function addDiv(){
const container = document.querySelector('#gridContainer');
const div = document.createElement('div');
    div.classList.add('grid-item');
    //adds the round result to the page
    div.textContent = ``;
    //changes color to blue after mouseover
    div.addEventListener('mouseover', () => {
         div.style.backgroundColor = "#7fffd4";
     })
    container.appendChild(div);
}

//changes color of each div
function resetBackground(){
    const div =document.querySelectorAll("div.grid-item")
    div.forEach(div => {
        div.style.backgroundColor = "#FFFFFF";
    });
}

//standard function to remove all child nodes
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// function to update CSS grid and column templates
function setCssGrid(rowsAndColumns){
    let gridTemplate = "auto";
    for (i = 1; i<rowsAndColumns; i++){
        gridTemplate += " auto";
    }
    container.style.gridTemplateRows = gridTemplate;
    container.style.gridTemplateColumns = gridTemplate;
}
