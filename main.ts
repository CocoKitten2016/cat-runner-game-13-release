namespace SpriteKind {
    export const cat = SpriteKind.create()
    export const time = SpriteKind.create()
    export const cat_mew = SpriteKind.create()
    export const consumble_cat = SpriteKind.create()
    export const brb = SpriteKind.create()
}
info.onScore(250, function () {
    info.changeLifeBy(1)
})
info.onScore(210, function () {
    info.changeLifeBy(1)
})
info.onScore(60, function () {
    info.changeLifeBy(1)
})
info.onScore(300, function () {
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.time, function (sprite, otherSprite) {
    info.changeCountdownBy(10)
    sprites.destroy(otherSprite)
})
info.onScore(30, function () {
    info.changeLifeBy(1)
})
info.onCountdownEnd(function () {
    game.gameOver(true)
})
info.onScore(301, function () {
    cat_mew = sprites.create(img`
        . . . f f f . . 
        . . f 8 8 8 f . 
        . f 8 8 8 8 8 f 
        . f 8 8 8 8 8 f 
        . f 4 4 4 4 4 f 
        . f 4 4 4 4 4 f 
        . . f 4 4 4 f . 
        . . . f f f . . 
        `, SpriteKind.cat_mew)
    cat_mew.setPosition(randint(0, 160), randint(0, 120))
})
info.onScore(100, function () {
    cat_mew = sprites.create(img`
        . . . f f f . . 
        . . f 8 8 8 f . 
        . f 8 8 8 8 8 f 
        . f 8 8 8 8 8 f 
        . f 4 4 4 4 4 f 
        . f 4 4 4 4 4 f 
        . . f 4 4 4 f . 
        . . . f f f . . 
        `, SpriteKind.cat_mew)
    cat_mew.setPosition(randint(0, 160), randint(0, 120))
})
info.onScore(280, function () {
    info.changeLifeBy(1)
})
info.onScore(0, function () {
    info.changeLifeBy(1)
})
info.onScore(90, function () {
    info.changeLifeBy(1)
})
info.onScore(180, function () {
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
info.onScore(240, function () {
    info.changeLifeBy(1)
})
info.onScore(150, function () {
    info.changeLifeBy(1)
})
info.onScore(200, function () {
    cat_mew = sprites.create(img`
        . . . f f f . . 
        . . f 8 8 8 f . 
        . f 8 8 8 8 8 f 
        . f 8 8 8 8 8 f 
        . f 4 4 4 4 4 f 
        . f 4 4 4 4 4 f 
        . . f 4 4 4 f . 
        . . . f f f . . 
        `, SpriteKind.cat_mew)
    cat_mew.setPosition(randint(0, 160), randint(0, 120))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cat_mew, function (sprite, otherSprite) {
    sprites.destroy(myEnemy)
    sprites.destroy(otherSprite)
    myEnemy = sprites.create(img`
        e e e . . . . e e e . . . . 
        c 9 9 c . . c 9 9 c . . . . 
        c b 9 9 f f 9 9 b c . . . . 
        c 3 b 9 9 b 9 b 3 c . . . . 
        f b 3 9 9 9 9 3 b f . . . . 
        e 9 9 9 9 9 9 9 9 e . . . . 
        e 9 f 9 9 9 9 f 9 e . b f b 
        f 9 9 9 b b 9 9 9 f . f 9 f 
        f b 9 9 9 9 9 9 2 f . f 9 f 
        . f 2 2 2 2 2 2 b b f f 9 f 
        . f b 9 5 5 9 9 9 b b 9 b f 
        . f 9 9 9 9 9 b 9 9 f f f . 
        . f 9 f f f 9 f f 9 f . . . 
        . f f . . f f . . f f . . . 
        `, SpriteKind.consumble_cat)
    pause(5000)
    sprites.destroy(myEnemy)
    myEnemy = sprites.create(img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d d b b d d d f . f d f 
        f b d d d d d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d 5 5 d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    myEnemy,
    [img`
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        b f b . e d f d d d d f d e 
        f d f . f d d d b b d d d f 
        f d f . f 2 d d d d d d b f 
        f d f f b b 2 2 2 2 2 2 f . 
        f b d b b d d d 5 5 d b f . 
        . f f f d d b d d d d d f . 
        . . . f d f f d f f f d f . 
        . . . f f . . f f . . f f . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        . b f b e d f d d d d f d e 
        . f d f f d d d b b d d d f 
        . f d f b 2 d d d d d d b f 
        . f b d b d 2 2 2 2 2 2 f . 
        . . f f f d d d 5 5 d d f . 
        . . . . f d f f f d b d f . 
        . . . . f f . . f f f f . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        b f b . e d f d d d d f d e 
        f d f . f d d d b b d d d f 
        f d f f b 2 d d d d d d b f 
        f b d b b d 2 2 2 2 2 2 f . 
        . f f f f d d d 5 5 d d f . 
        . . . . . f d f d b d f . . 
        . . . . . f f f f f f . . . 
        `],
    500,
    true
    )
    myEnemy.follow(mySprite, 70)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.consumble_cat, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    pause(1000)
})
info.onScore(350, function () {
    cat_mew = sprites.create(img`
        . . . f f f . . 
        . . f 8 8 8 f . 
        . f 8 8 8 8 8 f 
        . f 8 8 8 8 8 f 
        . f 4 4 4 4 4 f 
        . f 4 4 4 4 4 f 
        . . f 4 4 4 f . 
        . . . f f f . . 
        `, SpriteKind.cat_mew)
    cat_mew.setPosition(randint(0, 160), randint(0, 120))
})
info.onScore(120, function () {
    info.changeLifeBy(1)
})
let extra_time: Sprite = null
let gyro: Sprite = null
let cat_mew: Sprite = null
let myEnemy: Sprite = null
let mySprite: Sprite = null
music.play(music.createSong(hex`0078000408050100001c00010a006400f401640000040000000000000000000000000005000004e10000000400051e2225292c08000c000222250c00100001291000140001291400180002222918001c0001251c00200002272920002400012924002800012928002c0005191e2225272c003000021b2c30003400041e22252934003800011938003c00021e223c00400001224000440001254400480002222548004c00011e4c0050000320252a50005400012258005c0002191e60006400011964006800021d2068006c0001226c007000012574007800061b1e2225292c7c0080000225298400880001228c00900006191e2225292c94009800012798009c0001249c00a000021e22`), music.PlaybackMode.LoopingInBackground)
game.splash("Welcome to cats Press \"A\" to start")
mySprite = sprites.create(img`
    e e e . . . . e e e . . . . 
    c 1 1 c . . c 1 1 c . . . . 
    c b 1 1 f f 1 1 b c . . . . 
    c 3 b 1 1 b 1 b 3 c . . . . 
    f b 3 1 1 1 1 3 b f . . . . 
    e 1 1 1 1 1 1 1 1 e . . . . 
    e 1 9 1 1 1 1 9 1 e . b f b 
    f 1 1 1 b b 1 1 1 f . f 1 f 
    f b 1 1 1 1 1 1 2 f . f 1 f 
    . f 2 2 2 2 2 2 b b f f 1 f 
    . f b 1 5 5 1 1 1 b b 1 b f 
    . f 1 1 1 1 1 b 1 1 f f f . 
    . f 1 f f f 1 f f 1 f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
info.setLife(3)
info.startCountdown(300)
animation.runImageAnimation(
mySprite,
[img`
    . . . . e e e . . . . e e e 
    . . . . c 1 1 c . . c 1 1 c 
    . . . . c b 1 1 f f 1 1 b c 
    . . . . c 3 b 1 b 1 1 b 3 c 
    . . . . f b 3 1 1 1 1 3 b f 
    . . . . e 1 1 1 1 1 1 1 1 e 
    b f b . e 1 9 1 1 1 1 9 1 e 
    f 1 f . f 1 1 1 b b 1 1 1 f 
    f 1 f . f 2 1 1 1 1 1 1 b f 
    f 1 f f b b 2 2 2 2 2 2 f . 
    f b 1 b b 1 1 1 5 5 1 b f . 
    . f f f 1 1 b 1 1 1 1 1 f . 
    . . . f 1 f f 1 f f f 1 f . 
    . . . f f . . f f . . f f . 
    `,img`
    . . . . . . . . . . . . . . 
    . . . . e e e . . . . e e e 
    . . . . c 1 1 c . . c 1 1 c 
    . . . . c b 1 1 f f 1 1 b c 
    . . . . c 3 b 1 b 1 1 b 3 c 
    . . . . f b 3 1 1 1 1 3 b f 
    . . . . e 1 1 1 1 1 1 1 1 e 
    . b f b e 1 9 1 1 1 1 9 1 e 
    . f 1 f f 1 1 1 b b 1 1 1 f 
    . f 1 f b 2 1 1 1 1 1 1 b f 
    . f b 1 b 1 2 2 2 2 2 2 f . 
    . . f f f 1 1 1 5 5 1 1 f . 
    . . . . f 1 f f f 1 b 1 f . 
    . . . . f f . . f f f f . . 
    `,img`
    . . . . . . . . . . . . . . 
    . . . . e e e . . . . e e e 
    . . . . c 1 1 c . . c 1 1 c 
    . . . . c b 1 1 f f 1 1 b c 
    . . . . c 3 b 1 b 1 1 b 3 c 
    . . . . f b 3 1 1 1 1 3 b f 
    . . . . e 1 1 1 1 1 1 1 1 e 
    b f b . e 1 9 1 1 1 1 9 1 e 
    f 1 f . f 1 1 1 b b 1 1 1 f 
    f 1 f f b 2 1 1 1 1 1 1 b f 
    f b 1 b b 1 2 2 2 2 2 2 f . 
    . f f f f 1 1 1 5 5 1 1 f . 
    . . . . . f 1 f 1 b 1 f . . 
    . . . . . f f f f f f . . . 
    `],
500,
true
)
tiles.setCurrentTilemap(tilemap`level0`)
controller.moveSprite(mySprite, 100, 100)
pause(1000)
myEnemy = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d d b b d d d f . f d f 
    f b d d d d d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d 5 5 d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Enemy)
animation.runImageAnimation(
myEnemy,
[img`
    . . . . e e e . . . . e e e 
    . . . . c d d c . . c d d c 
    . . . . c b d d f f d d b c 
    . . . . c 3 b d b d d b 3 c 
    . . . . f b 3 d d d d 3 b f 
    . . . . e d d d d d d d d e 
    b f b . e d f d d d d f d e 
    f d f . f d d d b b d d d f 
    f d f . f 2 d d d d d d b f 
    f d f f b b 2 2 2 2 2 2 f . 
    f b d b b d d d 5 5 d b f . 
    . f f f d d b d d d d d f . 
    . . . f d f f d f f f d f . 
    . . . f f . . f f . . f f . 
    `,img`
    . . . . . . . . . . . . . . 
    . . . . e e e . . . . e e e 
    . . . . c d d c . . c d d c 
    . . . . c b d d f f d d b c 
    . . . . c 3 b d b d d b 3 c 
    . . . . f b 3 d d d d 3 b f 
    . . . . e d d d d d d d d e 
    . b f b e d f d d d d f d e 
    . f d f f d d d b b d d d f 
    . f d f b 2 d d d d d d b f 
    . f b d b d 2 2 2 2 2 2 f . 
    . . f f f d d d 5 5 d d f . 
    . . . . f d f f f d b d f . 
    . . . . f f . . f f f f . . 
    `,img`
    . . . . . . . . . . . . . . 
    . . . . e e e . . . . e e e 
    . . . . c d d c . . c d d c 
    . . . . c b d d f f d d b c 
    . . . . c 3 b d b d d b 3 c 
    . . . . f b 3 d d d d 3 b f 
    . . . . e d d d d d d d d e 
    b f b . e d f d d d d f d e 
    f d f . f d d d b b d d d f 
    f d f f b 2 d d d d d d b f 
    f b d b b d 2 2 2 2 2 2 f . 
    . f f f f d d d 5 5 d d f . 
    . . . . . f d f d b d f . . 
    . . . . . f f f f f f . . . 
    `],
500,
true
)
myEnemy.follow(mySprite, 70)
game.onUpdateInterval(1000, function () {
    gyro = sprites.create(img`
        . . 2 2 b b b b b . . . . . . . 
        . 2 b 4 4 4 4 4 4 b . . . . . . 
        2 2 4 4 4 4 d d 4 4 b . . . . . 
        2 b 4 4 4 4 4 4 d 4 b . . . . . 
        2 b 4 4 4 4 4 4 4 d 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 e . . . . 
        2 2 b 4 4 4 4 4 4 4 b e . . . . 
        . 2 b b b 4 4 4 b b b e . . . . 
        . . e b b b b b b b e e . . . . 
        . . . e e b 4 4 b e e e b . . . 
        . . . . . e e e e e e b d b b . 
        . . . . . . . . . . . b 1 1 1 b 
        . . . . . . . . . . . c 1 d d b 
        . . . . . . . . . . . c 1 b c . 
        . . . . . . . . . . . . c c . . 
        `, SpriteKind.Food)
    gyro.setPosition(randint(0, 160), randint(0, 120))
})
game.onUpdateInterval(120000, function () {
    extra_time = sprites.create(img`
        . f f f f f . . 
        f 1 1 1 1 1 f . 
        f 1 1 f 1 1 f . 
        f 1 1 f 1 1 f . 
        f 1 1 1 1 1 f . 
        f 1 1 1 1 1 f . 
        . f f f f f . . 
        . . . . . . . . 
        `, SpriteKind.time)
    extra_time.setPosition(randint(0, 160), randint(0, 120))
})
