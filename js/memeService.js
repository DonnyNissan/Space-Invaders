'use strict'


let gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'politics'] },
    { id: 2, url: 'img/2.jpg', keywords: ['cute', 'dog'] },
    { id: 3, url: 'img/3.jpg', keywords: ['cute', 'baby', 'dog'] },
    { id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'img/5.jpg', keywords: ['funny', 'baby'] },
    { id: 6, url: 'img/6.jpg', keywords: ['funny', 'science'] },
    { id: 7, url: 'img/7.jpg', keywords: ['funny', 'baby'] },
    { id: 8, url: 'img/8.jpg', keywords: ['funny'] },
    { id: 9, url: 'img/9.jpg', keywords: ['funny', 'baby'] },
    { id: 10, url: 'img/10.jpg', keywords: ['funny', 'politics'] },
    { id: 11, url: 'img/11.jpg', keywords: ['guys', 'kissing'] },
    { id: 12, url: 'img/12.jpg', keywords: ['funny'] },
    { id: 13, url: 'img/13.jpg', keywords: ['cheers', 'actors'] },
    { id: 14, url: 'img/14.jpg', keywords: ['matrix', 'actors'] },
    { id: 15, url: 'img/15.jpg', keywords: ['lord of the rings', 'actors'] },
    { id: 16, url: 'img/16.jpg', keywords: ['funny', 'actors'] },
    { id: 17, url: 'img/17.jpg', keywords: ['politics'] },
    { id: 18, url: 'img/18.jpg', keywords: ['toy story'] }
]

let gKeywordSearchCountMap = {}
let gSelectedLineIdx = 0

let gMeme = {
    selectedImgId: null,
    selectedLineIdx: 0,
    lines: [
        {
            txt: null,
            size: 40,
            align: 'center',
            font: 'Impact',
            color: 'white'
        },
        {
            txt: null,
            size: 40,
            align: 'center',
            font: 'Impact',
            color: 'white'
        }
    ]
}

function drawImgFromLocal(idx) {
    const img = new Image()
    img.src = `img/${idx}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) //img,x,y,xEnd,yEnd
    }
}

function switchLines(lineIdx) {
    gSelectedLineIdx = lineIdx
}

function addTextLine(txt) {
    gMeme.lines[gSelectedLineIdx].txt = txt
    // renderMeme(gMeme.selectedImgId)
    drawLine(gMeme.lines[gSelectedLineIdx])
}

function changeFontSize(diff) {
    gMeme.lines[gSelectedLineIdx].size += diff
    console.log(' gMeme.lines[gSelectedLineIdx].size: ', gMeme.lines[gSelectedLineIdx].size)
}

function setAlign(val) {
    gMeme.lines[gSelectedLineIdx].align = val
}

function setFont(val) {
    gMeme.lines[gSelectedLineIdx].font = val
}

function changeColor(color) {
    gMeme.lines[gSelectedLineIdx].color = color
}

function clearText() {
    renderMeme(gMeme.selectedImgId)
}

function setSelectedImgId(imgId) {
    gMeme.selectedImgId = imgId
}

function getMeme() {
    return gMeme
}

function getImgs() {
    return gImgs
}

function clearMeme() {
    gMeme = {
        selectedImgId: null,
        selectedLineIdx: 0,
        lines: [
            {
                txt: null,
                size: 40,
                align: 'center',
                font: 'Impact',
                color: 'white'
            },
            {
                txt: null,
                size: 40,
                align: 'center',
                font: 'Impact',
                color: 'white'
            }
        ]
    }
}