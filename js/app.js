'use strict'

const DIMENENSIONS = 14
const HERO_ROW = DIMENENSIONS - 2
const ALIENS_ROWS = 4
const ALIEN = '👽'
const HERO = '🥸'
const LASER = '❤️‍🔥'
const CANDY = '🍭'

var gBoard
var gGame
var gLife
var gScore

function init() {
    gLife = 3
    gScore = 0
    setInitVals()
    createBoard()
    renderBoard()
    renderHeader()
    moveAliens()
    setInterval(addCandy, 10000)
}

function playTurn() {
    if (gLife === 0) {
        gameOver()
        return
    }
    setInitVals()
    createBoard()
    renderBoard()
    renderHeader()
    moveAliens()
}

function lifeDown() {
    gLife--
    clearTimeout(gAliensInterval)
    playTurn()
}

function setInitVals() {
    var elModal = document.querySelector('.modal')
    elModal.style.display = 'none'
    gISAliensRight = true
    gAliensTopRowIdx = 1
    gAliensBottomRowIdx = 5
    gAliensLeftColIdx = 3
    gAliensRightColIdx = 10
    gIsAliensFreez = false
    gGame = {
        isOn: false,
        aliencount: 0,
    }
    gHero = {
        colIdx: 1,
        isShoot: false,
        isSuperShoot: false
    }
}

function gameOver(isWin) {
    gIsAliensFreez = true
    console.log(isWin)
    var elMsg = document.querySelector('.user-msg')
    elMsg.innerText = (isWin) ? 'You WON!' : 'You Lost'
    var elModal = document.querySelector('.modal')
    elModal.style.display = 'block'
}

function addCandy() {
    var ranColIdx = getRandomIntInclusive(1, DIMENENSIONS - 2)
    gBoard[0][ranColIdx].gameElement = 'candy'
    var location = { i: 0, j: ranColIdx }
    renderCell(location, CANDY)
    setTimeout(() => {
        gBoard[0][ranColIdx].gameElement = null
        renderCell(location, '')
    }, 5000);
}

function hitCandy(hitPos) {
    gBoard[hitPos.i][hitPos.j].gameElement = null
    gScore += 50
    renderCell(hitPos, '')
    renderHeader()
    gIsAliensFreez = true
    setTimeout(() => {
        gIsAliensFreez = false
        moveAliens()
    }, 5000);
}

function createBoard() {
    gBoard = []
    for (var i = 0; i < DIMENENSIONS; i++) {
        gBoard[i] = []
        for (var j = 0; j < DIMENENSIONS; j++) {
            var gameElement = null
            if (i > 0 && i < ALIENS_ROWS + 1 && j > 2 && j < 11) {
                gameElement = 'alien'
                gGame.aliencount++
            }
            gBoard[i][j] = {
                type: 'sky',
                gameElement: gameElement
            }
        }
    }
    gBoard[HERO_ROW][gHero.colIdx].gameElement = 'hero'
}

function renderBoard() {
    var strHTML = ''
    for (var i = 0; i < gBoard.length; i++) {
        strHTML += `<tr>`
        for (var j = 0; j < gBoard[0].length; j++) {
            const className = (gBoard[i][j].type === 'sky') ? 'sky' : ''
            const cellClass = `cell-${i}-${j}`
            var gameElement = ''
            if (gBoard[i][j].gameElement === 'alien') gameElement = ALIEN
            else if (gBoard[i][j].gameElement === 'hero') gameElement = HERO
            else if (gBoard[i][j].gameElement === 'laser') gameElement = LASER
            else if (gBoard[i][j].gameElement === 'candy') gameElement = CANDY
            strHTML += `<td class="${className} ${cellClass}">${gameElement}</td>`
        }
        strHTML += `</tr>`
    }
    const elSky = document.querySelector('table')
    elSky.innerHTML = strHTML
}


function renderHeader() {
    var elAliens = document.querySelector('.aliens')
    elAliens.innerText = gGame.aliencount
    var elScore = document.querySelector('.score')
    elScore.innerText = gScore
    var elLife = document.querySelector('.life')
    elLife.innerText = gLife
}

