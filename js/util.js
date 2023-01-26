'use strict'

function renderCell(location, value) {
    const cellSelector = '.' + getClassName(location)
    const elCell = document.querySelector(cellSelector)
    elCell.innerHTML = value
}

function getClassName(location) {
    const cellClass = 'cell-' + location.i + '-' + location.j
    return cellClass
}

function copyMat(mat) {
    var copy = []
    for (var i = 0; i < mat.length; i++) {
        copy[i] = []
        for (var j = 0; j < mat[0].length; j++) {
            copy[i][j] = gBoard[i][j]
        }
    }
    return copy
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}