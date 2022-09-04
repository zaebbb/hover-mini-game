const board = document.getElementById('board')
const SQUARE_NUMBERS = 500
const colors = [' #a64a48 ',' #7c32b6 ',' #abb495 ','#2c61e0 ','#448da0 ','  #1237b4  ',' #c9a642  ','#9b0d00  ']

for(let i = 0; i < SQUARE_NUMBERS; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square);
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square);
    })

    board.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.background = "#1d1d1d"
    element.style.boxShadow = `0 0 2px #000`
}
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}