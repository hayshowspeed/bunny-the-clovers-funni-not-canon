sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    music.pewPew.play()
    info.changeLifeBy(-1)
})
let bee: Sprite = null
let projectile: Sprite = null
scene.setBackgroundImage(assets.image`background`)
let mySprite = sprites.create(assets.image`cyclops become seek`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(5000, function () {
    projectile = sprites.createProjectileFromSide(assets.image`collect`, randint(-50, 50), randint(-50, 50))
    bee = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.Enemy)
})
game.onUpdateInterval(5000, function () {
    projectile = sprites.createProjectileFromSide(assets.image`collect`, randint(-50, 50), randint(-50, 50))
    bee = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.Enemy)
})
