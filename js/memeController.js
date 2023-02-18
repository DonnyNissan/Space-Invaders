'use strict'

let gElCanvas
let gCtx
let gLineNum = 0

function renderMeme(imgIdx) {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    drawImgFromLocal(imgIdx)
}

function drawLine(line) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = line.color
    gCtx.font = `${line.size}px ${line.font}`
    gCtx.textAlign = line.align
    gCtx.textBaseline = 'middle'
    const y = (gLineNum) ? 350 : 50
    let x = gElCanvas.width / 2
    if (line.align === 'left') x = 50
    if (line.align === 'right') x = 350
    gCtx.fillText(line.txt, x, y)
    gCtx.strokeText(line.txt, x, y)
}

function onAddTextLine() {
    const meme = getMeme()
    if (meme.lines[gLineNum].txt) return
    const txt = document.querySelector('.user-text').value
    addTextLine(txt)
}

function onSetFont(val) {
    setFont(val)
}

function onSetAlign(val) {
    setAlign(val)
}

function onGenerateMeme() {
    const idx = getRandomInt(1, 18)
    gCurrLine.txt = 'Random Text'
    onImgSelect(idx)
}

function onChangeColor(color) {
    changeColor(color)
}

function onChangeFontSize(diff) {
    changeFontSize(diff)
}

function onClearText() {
    clearText()
}

function onSwitchLines() {
    if (gLineNum) gLineNum = 0
    else gLineNum = 1
    switchLines(gLineNum)
    const line = (gLineNum) ? 'Bottom' : 'Top'
    document.querySelector('.choose-line span').innerText = line
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-img'
}

function clearCanvas() {
    gCtx.fillStyle = '#ede5ff'
    gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
}

// function resizeCanvas() {
//     const elContainer = document.querySelector('.canvas-container')
//     gElCanvas.width = elContainer.offsetWidth
//     gElCanvas.height = elContainer.offsetHeight
// }
