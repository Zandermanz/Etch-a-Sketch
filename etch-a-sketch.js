const container = document.querySelector('#gridContainer')
const reset =document.querySelector('#reset')
const colorPicker = document.querySelector('#colorPicker')
const color = "#7fffd4"

setGridSize(); //calls set grid size function on page load

function setGridSize(){
    let rowsAndColumns = prompt("Choose the number of columns and rows");
    //Prompts again if user enters more than 100
    if (rowsAndColumns > 100){
        rowsAndColumns = prompt("Please enter a grid size of 100 or less")
    }
    //Squares the rows and columns to get total number of grid item squares/Divs
    let gridSize = rowsAndColumns * rowsAndColumns;
    //Updates CSS styles to make the grid square
    setCssGrid(rowsAndColumns);   
    //Loop to create number of Div's required
    for(let i = 0; i < gridSize; i++){
        addDiv();
    }
}


reset.addEventListener('click', () => {
    // Removes all child nodes from container
    //Uses container from global scope
    removeAllChildNodes(container);
    //sets a new grid and updates css
    setGridSize();
})


function addDiv(){
    const div = document.createElement('div');
    div.classList.add('grid-item');
    //adds the round result to the page
    div.textContent = ``;
    //changes color to blue after mouseover
    div.addEventListener('mouseover', () => {
         div.style.backgroundColor = color;
     })
    //appends div, uses container from global scope
    container.appendChild(div);
}

//standard function to remove all child nodes
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// function to update CSS row and column templates
function setCssGrid(rowsAndColumns){
    let gridTemplate = "auto";
    //for each additional row/column, the for loops adds an auto to the grid style
    for (i = 1; i<rowsAndColumns; i++){
        gridTemplate += " auto";
    }
    //pushes the string with the appropriate number of "auto" 's to the gridTemplateRow and Column settings
    //uses container from global scope
    container.style.gridTemplateRows = gridTemplate;
    container.style.gridTemplateColumns = gridTemplate;
}

colorPicker.addEventListener('input', changeColor)

function changeColor(event){
    let color = event.target.value;
    console.log (color);
    const mainHeading = document.getElementById("mainHeading");
    mainHeading.style.color = color;
    const div = document.querySelectorAll("div.grid-item");
    //loops through each div to set add a new event listener for new
    div.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = color;
        })
    });
   
}
