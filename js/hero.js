'use strict'

const LASER_SPEED = 80

var gHero

function shoot(laserColl) {
    if (gHero.isShoot) return
    var i = HERO_ROW - 1
    var laserPos = { i: i, j: laserColl }
    gHero.isShoot = setInterval(() => {
        if (i < 0 || gHero.isShoot === false) {
            clearInterval(gHero.isShoot)
            gHero.isShoot = false
            return
        }
        if (gBoard[i][laserColl].gameElement === 'alien') {
            laserPos = { i: i, j: laserColl }
            hitAlien(laserPos)
            clearInterval(gHero.isShoot)
            gHero.isShoot = false
            return
        }
        if (gBoard[i][laserColl].gameElement === 'candy') {
            laserPos = { i: i, j: laserColl }
            hitCandy(laserPos)
            clearInterval(gHero.isShoot)
            gHero.isShoot = false
            return
        }
        blinkLaser(laserPos)
        laserPos = { i: i, j: laserColl }
        --i
    }, 80);
}

function blinkLaser(pos) {
    renderCell(pos, LASER)
    setTimeout(renderCell, LASER_SPEED, pos, '')
}

function moveTo(colIdx) {
    if (colIdx < 0 || colIdx > DIMENENSIONS - 1) return

    gBoard[HERO_ROW][gHero.colIdx].gameElement = null
    var location = { i: HERO_ROW, j: gHero.colIdx }
    renderCell(location, '')

    gHero.colIdx = colIdx
    gBoard[HERO_ROW][colIdx].gameElement = 'hero'
    location = { i: HERO_ROW, j: gHero.colIdx }
    renderCell(location, HERO)
    // console.log('gHero.colIdx : ', gHero.colIdx)
}

function handleKey(ev) {
    switch (ev.key) {
        case 'ArrowLeft':
            moveTo(gHero.colIdx - 1)
            break
        case 'ArrowRight':
            moveTo(gHero.colIdx + 1)
            break
        case ' ':
            shoot(gHero.colIdx)
            break
    }
}