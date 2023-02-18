'use strict'

function init() {
    document.querySelector('.canvas-container').style.display = "none"
    document.querySelector('.control-box').style.display = "none"
    renderGallery()
    document.querySelector('.gallery-main').style.display = "block"
}

function renderGallery() {
    clearMeme()
    const imgs = getImgs()
    let strHTML = ''
    imgs.forEach(img => {
        strHTML += `<img onclick="onImgSelect(${img.id})" src="${img.url}" alt="Img${img.id}">`
    })
    const elGallery = document.querySelector('.img-container')
    elGallery.innerHTML = strHTML
}

function onImgSelect(imgIdx) {
    setSelectedImgId(imgIdx)
    renderMeme(imgIdx)
    document.querySelector('.gallery-main').style.display = "none"
    document.querySelector('.canvas-container').style.display = "block"
    document.querySelector('.control-box').style.display = "grid"
}