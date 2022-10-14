let boardLength = document.getElementById('board-length-input');
let boardWidth = document.getElementById('board-width-input');
let boardThickness = document.getElementById('thickness-length-input');
let boardType = document.getElementById('board-type');
let boardCubePrice = boardType.options[boardType.selectedIndex].value;
let countButton = document.getElementById('count-button');
let resultDisplay = document.getElementById('result');
let numberOfBoards = document.getElementById('count-borders');

boardType.addEventListener('change', () => {
    boardCubePrice = boardType.options[boardType.selectedIndex].value;
});

countButton.addEventListener('click', countBoardCubes);

function countBoardCubes() {
    let result = ((boardLength.value/1000 * boardWidth.value/1000 * boardThickness.value/1000) * numberOfBoards.value).toFixed(6);
    if (result > 0) {
        resultDisplay.innerHTML = `Объем: ${result} куб.` + '<br>' + `Вес: ${result * boardCubePrice} кг.`;
    }
}