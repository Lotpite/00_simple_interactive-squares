const board = document.querySelector('#board');
const SQUARES_QUANTITY = 1000;
const colors = ['#9F3E9A', '#F66A98', '#FF8997','#64ADF1','#C15AA8', '#669933', '#3366FF', '#FF6633','FFFF33'];

for (let i = 0; i < SQUARES_QUANTITY; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    square.addEventListener('mouseover',() => {
        changeColor(square);
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    })

    board.append(square);
}

function changeColor(element) {
    const color = getColor(colors);
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 50px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = 'rgba(29, 28, 28, 0.144)';
    element.style.boxShadow = `0 0 2px #000`;
}

function getColor(arr) {
    const idx = Math.floor(Math.random() * colors.length);
    return arr[idx];
}