const gridContainer = document.querySelector('.grid-container');
const size = document.querySelector('#size');
const displaySize = document.querySelector('#displaySize');
const colorPick = document.querySelector('#colorPick');
const reset = document.querySelector('#reset');
displaySize.textContent = size.value;

size.addEventListener('input', ()=>{
    const sizeVal = size.value;
    displaySize.textContent = sizeVal;
    gridContainer.innerHTML = '';
    makeGrid(sizeVal);
})

reset.addEventListener('click', ()=>{
    gridContainer.innerHTML='';
    const getValue = prompt('How many Grids?');
    makeGrid(getValue);
})

const makeGrid = (size=32)=>{
    for(let i=0; i<=(size*size); i++){
        const creatElem = document.createElement('div');
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        creatElem.setAttribute('class', 'grid-item');
        gridContainer.appendChild(creatElem);
        creatElem.addEventListener('mouseover', ()=>{
            creatElem.style.backgroundColor= colorPick.value;
        })
    }
}

makeGrid();