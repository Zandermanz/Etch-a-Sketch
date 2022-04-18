setGridSize(); //calls set grid size function
function setGridSize(){
    let gridSize = 16 
    //for Later -- prompt("Choose your Grid Size");
    //Prompts again if user enters more than 100
    if (gridSize > 100){
        gridSize = prompt("Please enter a grid size of 100 or less")
    }
    //Loop to create number of Div's imputed
    for(let i = 0; i < gridSize; i++){
        addDiv();
    }
}

const reset =document.querySelector('#reset')
reset.addEventListener('click', () => {resetBackground()})


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

function resetBackground(){
    const div =document.querySelectorAll("div.grid-item")
    div.forEach(div => {
        div.style.backgroundColor = "#FFFFFF";
    });
}