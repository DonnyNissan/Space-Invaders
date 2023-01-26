'use strict'

const ALIEN_SPEED = 1000

var gIsAliensFreez
var gAliensInterval
var gISAliensRight
var gAliensTopRowIdx
var gAliensBottomRowIdx
var gAliensLeftColIdx
var gAliensRightColIdx
var gSpaceCandy


function moveAliens() {
    if (gIsAliensFreez) return
    if (gISAliensRight) {
        shiftBoardRight()
    } else { shiftBoardLeft() }
}

function hitAlien(hitPos) {
    // console.log(hitPos)
    gBoard[hitPos.i][hitPos.j].gameElement = null
    gGame.aliencount--
    gScore += 10
    renderCell(hitPos, '')
    renderHeader()
    if (gGame.aliencount === 0) gameOver(1)
}

function shiftBoardRight() {
    if (gIsAliensFreez) return
    // console.log('LeftColIdx: ', gAliensLeftColIdx)
    // console.log('RightColIdx: ', gAliensRightColIdx)
    // console.log('TopRowIdx: ', gAliensTopRowIdx)
    // console.log('BottomRowIdx: ', gAliensBottomRowIdx)
    if (gAliensRightColIdx === gBoard.length - 2) {
        gISAliensRight = false
        shiftBoardDown()
        return
    }
    var copyBoard = copyMat(gBoard)
    for (var i = gAliensTopRowIdx; i < gAliensBottomRowIdx + 1; i++) {
        for (var j = gAliensLeftColIdx - 1; j < gAliensRightColIdx + 1; j++) {
            gBoard[i][j + 1] = copyBoard[i][j]
        }
    }
    renderBoard()
    setTimeout(moveAliens, ALIEN_SPEED)
    gAliensLeftColIdx++
    gAliensRightColIdx++
}

function shiftBoardLeft() {
    if (gIsAliensFreez) return
    // console.log('LeftColIdx: ', gAliensLeftColIdx)
    // console.log('RightColIdx: ', gAliensRightColIdx)
    // console.log('TopRowIdx: ', gAliensTopRowIdx)
    // console.log('BottomRowIdx: ', gAliensBottomRowIdx)
    if (gAliensLeftColIdx === 1) {
        gISAliensRight = true
        shiftBoardDown()
        return
    }
    var copyBoard = copyMat(gBoard)
    for (var i = gAliensTopRowIdx; i < gAliensBottomRowIdx + 1; i++) {
        for (var j = gAliensLeftColIdx; j < gAliensRightColIdx + 2; j++) {

            gBoard[i][j - 1] = copyBoard[i][j]
        }
    }
    renderBoard()
    setTimeout(moveAliens, ALIEN_SPEED)
    gAliensLeftColIdx--
    gAliensRightColIdx--
}

function shiftBoardDown() {
    if (gIsAliensFreez) return
    if (gAliensBottomRowIdx > HERO_ROW - 1) {
        lifeDown()
        return
    }
    var copyBoard = copyMat(gBoard)
    for (var i = gAliensTopRowIdx - 1; i < gAliensBottomRowIdx + 1; i++) {
        for (var j = gAliensLeftColIdx; j < gAliensRightColIdx + 1; j++) {

            gBoard[i + 1][j] = copyBoard[i][j]
        }
    }
    renderBoard()
    gAliensInterval = setTimeout(moveAliens, ALIEN_SPEED)
    gAliensTopRowIdx++
    gAliensBottomRowIdx++
}


function checkAlienBox() {

}