info.onScore(30, function () {
    UP_POWER += 1
    animation.runImageAnimation(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 4 4 f . . . . 
        . . . f 5 5 5 5 5 5 4 4 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 f f f f f f f f 4 5 5 f 
        f 5 4 f d f f d f f f f f 4 5 f 
        . f 4 f f 1 d f 1 f f f f 4 f . 
        . . f f f 1 d f 1 d f f f f . . 
        . . . f d d d d d d f f . . . . 
        . . . . f d d d d f f f . . . . 
        . . . . f f 5 2 2 2 f f f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . . f f f f 8 8 f f f f . . . 
        . . . f f f f f 8 8 f f . . . . 
        . . . f f f f . f d f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 4 4 f . . . . 
        . . . f 5 5 5 5 5 5 4 4 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 f f f f f f f f 4 5 5 f 
        f 5 4 f d f f d f f f f f 4 5 f 
        . f 4 f f 1 d f 1 f f f f 4 f . 
        . . f f f 1 d f 1 d f f f f . . 
        . . . f d d d d d d f f . . . . 
        . . . . f d d d d f f f . . . . 
        . . . f f 2 5 2 2 2 f f f . . . 
        . . f f f 2 5 2 2 f f f f . . . 
        . . f f f 8 8 8 8 f f f f . . . 
        . . . f f 8 f f 8 8 f f . . . . 
        . . . . f d f . f d f . . . . . 
        `],
    200,
    false
    )
    myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
    pause(5000)
    myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
})
info.onScore(10, function () {
    UP_POWER += 1
    animation.runImageAnimation(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 4 4 f . . . . 
        . . . f 5 5 5 5 5 5 4 4 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 f f f f f f f f 4 5 5 f 
        f 5 4 f f f f f f f f f f 4 5 f 
        . f 4 f f f f f f f f f f 4 f . 
        . . f f f f f f f f f f f f . . 
        . . . f f d f 3 f f f f . . . . 
        . . . . f 3 d d 3 f d f . . . . 
        . . . . f f d 2 2 2 d 3 f . . . 
        . . . f d 3 f 2 2 f 3 3 f . . . 
        . . . f 3 d f 8 8 f 3 3 f . . . 
        . . . f 3 d f f 8 8 f f . . . . 
        . . . f d 3 f . f 3 f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 4 4 f . . . . 
        . . . f 5 5 5 5 5 5 4 4 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 f f f f f f f f 4 5 5 f 
        f 5 4 f f f f f f f f f f 4 5 f 
        . f 4 f f f f f f f f f f 4 f . 
        . . f f f f f f f f f f f f . . 
        . . . f f d f 3 f f f f . . . . 
        . . . . f 3 d d 3 f d f . . . . 
        . . . . f f d 2 2 2 d 3 f . . . 
        . . . f d 3 f 2 2 f 3 3 f . . . 
        . . . f 3 d f 8 8 f 3 3 f . . . 
        . . . f 3 d f f 8 8 f f . . . . 
        . . . f d 3 f . f 3 f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 4 4 f . . . . 
        . . . f 5 5 5 5 5 5 4 4 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 f f f f f f f f 4 5 5 f 
        f 5 4 f f f f f f f f f f 4 5 f 
        . f 4 f f f f f f f f f f 4 f . 
        . . f f f f f f f f f f f f . . 
        . . . f f d f 3 f f f f . . . . 
        . . . . f 3 d d 3 f d f . . . . 
        . . . . f f d 2 2 2 d 3 f . . . 
        . . . f d 3 f 2 2 f 3 3 f . . . 
        . . . f 3 d f 8 8 f 3 3 f . . . 
        . . . f 3 d f f 8 8 f f . . . . 
        . . . f d 3 f . f 3 f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 4 4 f . . . . 
        . . . f 5 5 5 5 5 5 4 4 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 f f f f f f f f 4 5 5 f 
        f 5 4 f f f f f f f f f f 4 5 f 
        . f 4 f f f f f f f f f f 4 f . 
        . . f f f f f f f f f f f f . . 
        . . . f f d f 3 f f f f . . . . 
        . . . . f 3 d d 3 f d f . . . . 
        . . . . f f d 2 2 2 d 3 f . . . 
        . . . f d 3 f 2 2 f 3 3 f . . . 
        . . . f 3 d f 8 8 f 3 3 f . . . 
        . . . f 3 d f f 8 8 f f . . . . 
        . . . f d 3 f . f 3 f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 4 4 f . . . . 
        . . . f 5 5 5 5 5 5 4 4 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 f f f f f f f f 4 5 5 f 
        f 5 4 f d f f d f f f f f 4 5 f 
        . f 4 f f 1 d f 1 f f f f 4 f . 
        . . f f f 1 d f 1 3 f f f f . . 
        . . . f d 3 d d 3 d f f . . . . 
        . . . . f d 3 3 3 f 2 f . . . . 
        . . . f f 2 5 2 2 2 2 2 f . . . 
        . . f 2 f 2 5 2 2 f 2 2 f . . . 
        . . f d f 8 8 8 8 f d d f . . . 
        . . . f f 8 f f 8 8 f f . . . . 
        . . . . f d f . f d f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 4 4 f . . . . 
        . . . f 5 5 5 5 5 5 4 4 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 f f f f f f f f 4 5 5 f 
        f 5 4 f d f f d f f f f f 4 5 f 
        . f 4 f f 1 d f 1 f f f f 4 f . 
        . . f f f 1 d f 1 3 f f f f . . 
        . . . f d 3 d d 3 d f f . . . . 
        . . . . f d 3 3 3 f 2 f . . . . 
        . . . f f 2 5 2 2 2 2 2 f . . . 
        . . f 2 f 2 5 2 2 f 2 2 f . . . 
        . . f d f 8 8 8 8 f d d f . . . 
        . . . f f 8 f f 8 8 f f . . . . 
        . . . . f d f . f d f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 4 4 f . . . . 
        . . . f 5 5 5 5 5 5 4 4 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 f f f f f f f f 4 5 5 f 
        f 5 4 f d f f d f f f f f 4 5 f 
        . f 4 f f 1 d f 1 f f f f 4 f . 
        . . f f f 1 d f 1 3 f f f f . . 
        . . . f d 3 d d 3 d f f . . . . 
        . . . . f d 3 3 3 f 2 f . . . . 
        . . . f f 2 5 2 2 2 2 2 f . . . 
        . . f 2 f 2 5 2 2 f 2 2 f . . . 
        . . f d f 8 8 8 8 f d d f . . . 
        . . . f f 8 f f 8 8 f f . . . . 
        . . . . f d f . f d f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 4 4 f . . . . 
        . . . f 5 5 5 5 5 5 4 4 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 f f f f f f f f 4 5 5 f 
        f 5 4 f d f f d f f f f f 4 5 f 
        . f 4 f f 1 d f 1 f f f f 4 f . 
        . . f f f 1 d f 1 3 f f f f . . 
        . . . f d 3 d d 3 d f f . . . . 
        . . . . f d 3 3 3 f 2 f . . . . 
        . . . f f 2 5 2 2 2 2 2 f . . . 
        . . f 2 f 2 5 2 2 f 2 2 f . . . 
        . . f d f 8 8 8 8 f d d f . . . 
        . . . f f 8 f f 8 8 f f . . . . 
        . . . . f d f . f d f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 4 4 f . . . . 
        . . . f 5 5 5 5 5 5 4 4 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 f f f f f f f f 4 5 5 f 
        f 5 4 f d f f d f f f f f 4 5 f 
        . f 4 f f 1 d f 1 f f f f 4 f . 
        . . f f f 1 d f 1 d f f f f . . 
        . . . f d d d d d d f f . . . . 
        . . . . f d d d d f 2 f . . . . 
        . . . f f 2 5 2 2 2 2 2 f . . . 
        . . f 2 f 2 5 2 2 f 2 2 f . . . 
        . . f d f 8 8 8 8 f d d f . . . 
        . . . f f 8 f f 8 8 f f . . . . 
        . . . . f d f . f d f . . . . . 
        `],
    200,
    false
    )
    myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
    pause(5000)
    myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
})
info.onScore(100, function () {
    game.setGameOverMessage(true, "WIN")
})
info.onScore(50, function () {
    info.setLife(999)
    UP_POWER += 1
    animation.runImageAnimation(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . f f f f f f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 d 1 1 d 1 1 1 1 1 1 1 f 
        . f 1 1 f 1 d f 1 1 1 1 1 1 f . 
        . . 1 1 f 1 d f 1 d 1 1 1 1 . . 
        . . . 1 d d d d d d f f . . . . 
        . . . . f d d d d f 1 f . . . . 
        . . . . f f 5 1 1 1 1 1 f . . . 
        . . . f 1 1 f 1 1 f 1 1 f . . . 
        . . . f 1 1 f 1 1 f d d f . . . 
        . . . f 1 1 f f 1 1 f f . . . . 
        . . . f d d f . f d f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 d 1 1 d 1 1 1 1 1 1 1 f 
        . f 1 1 f 1 d f 1 1 1 1 1 1 f . 
        . . 1 1 f 1 d f 1 d 1 1 1 1 . . 
        . . . 1 d d d d d d f f . . . . 
        . . . . f d d d d f 1 f . . . . 
        . . . . f f 5 1 1 1 1 1 f . . . 
        . . . f 1 1 f 1 1 f 1 1 f . . . 
        . . . f 1 1 f 1 1 f d d f . . . 
        . . . f 1 1 f f 1 1 f f . . . . 
        . . . f d d f . f d f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 d 1 1 d 1 1 1 1 1 1 1 f 
        . f 1 1 f 1 d f 1 1 1 1 1 1 f . 
        . . 1 1 f 1 d f 1 d 1 1 1 1 . . 
        . . . 1 d d d d d d f f . . . . 
        . . . . f d d d d f 1 f . . . . 
        . . . . f f 5 1 1 1 1 1 f . . . 
        . . . f 1 1 f 1 1 f 1 1 f . . . 
        . . . f 1 1 f 1 1 f d d f . . . 
        . . . f 1 1 f f 1 1 f f . . . . 
        . . . f d d f . f d f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 d 1 1 d 1 1 1 1 1 1 1 f 
        . f 1 1 f 1 d f 1 1 1 1 1 1 f . 
        . . 1 1 f 1 d f 1 d 1 1 1 1 . . 
        . . . 1 d d d d d d f f . . . . 
        . . . . f d d d d f 1 f . . . . 
        . . . . f f 5 1 1 1 1 1 f . . . 
        . . . f 1 1 f 1 1 f 1 1 f . . . 
        . . . f 1 1 f 1 1 f d d f . . . 
        . . . f 1 1 f f 1 1 f f . . . . 
        . . . f d d f . f d f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 d 1 1 d 1 1 1 1 1 1 1 f 
        . f 1 1 f 1 d f 1 1 1 1 1 1 f . 
        . . 1 1 f 1 d f 1 d 1 1 1 1 . . 
        . . . 1 d d d d d d f f . . . . 
        . . . . f d d d d f 1 f . . . . 
        . . . . f f 5 1 1 1 1 1 f . . . 
        . . . f 1 1 f 1 1 f 1 1 f . . . 
        . . . f 1 1 f 1 1 f d d f . . . 
        . . . f 1 1 f f 1 1 f f . . . . 
        . . . f d d f . f d f . . . . . 
        `],
    200,
    false
    )
    myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
    pause(5000)
    myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
})
info.onScore(20, function () {
    UP_POWER += 1
    animation.runImageAnimation(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 4 4 f . . . . 
        . . . f 5 5 5 5 5 5 4 4 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 f f f f f f f f 4 5 5 f 
        f 5 4 f d f f d f f f f f 4 5 f 
        f f 4 f f 1 d f 1 f f f f 4 f . 
        f f f f f 1 d f 1 d f f f f . . 
        d f f f d d d d d d f f . . . . 
        d d f f f d d d d f 2 f . . . . 
        f d d d f f 5 2 2 2 2 2 f . . . 
        f d d d d d f 2 2 f 2 2 f . . . 
        f f d d d d f 8 8 f d d f . . . 
        . f f f f f f f 8 8 f f . . . . 
        . . . . . . . . f d f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 4 4 f . . . . 
        . . . f 5 5 5 5 5 5 4 4 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 f f f f f f f f 4 5 5 f 
        f 5 4 f d f f d f f f f f 4 5 f 
        f f 4 f f 1 d f 1 f f f f 4 f . 
        f f f f f 1 d f 1 d f f f f . . 
        d f f f d d d d d d f f . . . . 
        d d f f f d d d d f 2 f . . . . 
        f d d d f f 5 2 2 2 2 2 f . . . 
        f d d d d d f 2 2 f 2 2 f . . . 
        f f d d d d f 8 8 f d d f . . . 
        . f f f f f f f 8 8 f f . . . . 
        . . . . . . . . f d f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 4 4 f . . . . 
        . . . f 5 5 5 5 5 5 4 4 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 f f f f f f f f 4 5 5 f 
        f 5 4 f d f f d f f f f f 4 5 f 
        f f 4 f f 1 d f 1 f f f f 4 f . 
        f f f f f 1 d f 1 d f f f f . . 
        d f f f d d d d d d f f . . . . 
        d d f f f d d d d f 2 f . . . . 
        f d d d f f 5 2 2 2 2 2 f . . . 
        f d d d d d f 2 2 f 2 2 f . . . 
        f f d d d d f 8 8 f d d f . . . 
        . f f f f f f f 8 8 f f . . . . 
        . . . . . . . . f d f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 4 4 f . . . . 
        . . . f 5 5 5 5 5 5 4 4 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 f f f f f f f f 4 5 5 f 
        f 5 4 f d f f d f f f f f 4 5 f 
        f f 4 f f 1 d f 1 f f f f 4 f . 
        f f f f f 1 d f 1 d f f f f . . 
        d f f f d d d d d d f f . . . . 
        d d f f f d d d d f 2 f . . . . 
        f d d d f f 5 2 2 2 2 2 f . . . 
        f d d d d d f 2 2 f 2 2 f . . . 
        f f d d d d f 8 8 f d d f . . . 
        . f f f f f f f 8 8 f f . . . . 
        . . . . . . . . f d f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 4 4 f . . . . 
        . . . f 5 5 5 5 5 5 4 4 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 f f f f f f f f 4 5 5 f 
        f 5 4 f d f f d f f f f f 4 5 f 
        . f 4 f f 1 d f 1 f f f f 4 f . 
        . . f f f 1 d f 1 d f f f f . . 
        . . . f d d d d d d f f . . . . 
        . . . . f d d d d f 2 f . . . . 
        . . . f f 2 5 2 2 2 2 2 f . . . 
        . . f 2 f 2 5 2 2 f 2 2 f . . . 
        . . f d f 8 8 8 8 f d d f . . . 
        . . . f f 8 f f 8 8 f f . . . . 
        . . . . f d f . f d f . . . . . 
        `],
    200,
    false
    )
    myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
    pause(5000)
    myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
})
info.onScore(40, function () {
    UP_POWER += 1
    animation.runImageAnimation(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 4 4 f . . . . 
        . . . f 5 5 5 5 5 5 4 4 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 f f f f f f f f 4 5 5 f 
        f 5 4 f d f f d f f f f f 4 5 f 
        . f 4 f f 1 d f 1 f f f f 4 f . 
        . . f f f 1 d f 1 d f f f f . . 
        . . . f d d d d d d f f . . . . 
        . . . . f d d d d f f f . . . . 
        . f f f f b d b b b f f f f f . 
        . f f f f b d b b f f f f f f . 
        . . . . f 4 4 4 4 f . . . . . . 
        . . . . f 1 f f 4 1 f . . . . . 
        . . . . f d f . f d f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 4 4 f . . . . 
        . . . f 5 5 5 5 5 5 4 4 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 f f f f f f f f 4 5 5 f 
        f 5 4 f d f f d f f f f f 4 5 f 
        . f 4 f f 1 d f 1 f f f f 4 f . 
        . . f f f 1 d f 1 d f f f f . . 
        . . . f d d d d d d f f . . . . 
        . . . . f d d d d f f f . . . . 
        . f f f f b d b b b f f f f f . 
        . f f f f b d b b f f f f f f . 
        . . . . f 4 4 4 4 f . . . . . . 
        . . . . f 1 f f 4 1 f . . . . . 
        . . . . f d f . f d f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 4 4 f . . . . 
        . . . f 5 5 5 5 5 5 4 4 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 f f f f f f f f 4 5 5 f 
        f 5 4 f d f f d f f f f f 4 5 f 
        . f 4 f f 1 d f 1 f f f f 4 f . 
        . . f f f 1 d f 1 d f f f f . . 
        . . . f d d d d d d f f . . . . 
        . . . . f d d d d f f f . . . . 
        . f f f f b d b b b f f f f f . 
        . f f f f b d b b f f f f f f . 
        . . . . f 4 4 4 4 f . . . . . . 
        . . . . f 1 f f 4 1 f . . . . . 
        . . . . f d f . f d f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 4 4 f . . . . 
        . . . f 5 5 5 5 5 5 4 4 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 f f f f f f f f 4 5 5 f 
        f 5 4 f d f f d f f f f f 4 5 f 
        . f 4 f f 1 d f 1 f f f f 4 f . 
        . . f f f 1 d f 1 d f f f f . . 
        . . . f d d d d d d f f . . . . 
        . . . . f d d d d f f f . . . . 
        . f f f f b d b b b f f f f f . 
        . f f f f b d b b f f f f f f . 
        . . . . f 4 4 4 4 f . . . . . . 
        . . . . f 1 f f 4 1 f . . . . . 
        . . . . f d f . f d f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 4 4 f . . . . 
        . . . f 5 5 5 5 5 5 4 4 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 f f f f f f f f 4 5 5 f 
        f 5 4 f d f f d f f f f f 4 5 f 
        . f 4 f f 1 d f 1 f f f f 4 f . 
        . . f f f 1 d f 1 d f f f f . . 
        . . . f d d d d d d f f . . . . 
        . . . . f d d d d f f f . . . . 
        . f f f f b d b b b f f f f f . 
        . f f f f b d b b f f f f f f . 
        . . . . f 4 4 4 4 f . . . . . . 
        . . . . f 1 f f 4 1 f . . . . . 
        . . . . f d f . f d f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 5 5 5 5 4 4 f . . . . 
        . . . f 5 5 5 5 5 5 4 4 f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 f f f f f f f f 4 5 5 f 
        f 5 4 f d f f d f f f f f 4 5 f 
        . f 4 f f 1 d f 1 f f f f 4 f . 
        . . f f f 1 d f 1 d f f f f . . 
        . . . f d d d d d d f f . . . . 
        . . . . f d d d d f f f . . . . 
        . f f f f b d b b b f f f f f . 
        . f f f f b d b b f f f f f f . 
        . . . . f 4 4 4 4 f . . . . . . 
        . . . . f 1 f f 4 1 f . . . . . 
        . . . . f d f . f d f . . . . . 
        `],
    200,
    false
    )
    myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
    pause(5000)
    myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
})
let myEnemy: Sprite = null
let UP_POWER = 0
info.setLife(5)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . . f 5 5 5 5 4 4 f . . . . 
    . . . f 5 5 5 5 5 5 4 4 f . . . 
    . . f f 2 2 2 2 2 2 2 2 f f . . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    f 5 5 4 f f f f f f f f 4 5 5 f 
    f 5 4 f d f f d f f f f f 4 5 f 
    . f 4 f f 1 d f 1 f f f f 4 f . 
    . . f f f 1 d f 1 d f f f f . . 
    . . . f d d d d d d f f . . . . 
    . . . . f d d d d f 2 f . . . . 
    . . . f f 2 5 2 2 2 2 2 f . . . 
    . . f 2 f 2 5 2 2 f 2 2 f . . . 
    . . f d f 8 8 8 8 f d d f . . . 
    . . . f f 8 f f 8 8 f f . . . . 
    . . . . f d f . f d f . . . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . . f 7 7 7 7 7 7 f . . . . 
    . . . f 7 7 7 7 7 7 7 7 f . . . 
    . . f 7 7 7 7 7 7 7 7 7 7 f . . 
    . . f 7 7 7 7 7 7 7 7 7 7 f . . 
    . . f 7 d d d d d 7 7 7 7 f . . 
    . . f 7 d d d d d d 7 7 7 f . . 
    . . f 7 f 1 d d f d d 7 7 f . . 
    . . . f f 1 d f d d d 7 f . . . 
    . . . f d d d d d d f f . . . . 
    . . . . f d d d d f 7 f . . . . 
    . . . f f d d d d 7 7 7 f . . . 
    . . f 7 f 2 2 2 2 f 7 7 f . . . 
    . . f d f 7 7 7 7 f d d f . . . 
    . . . f f 7 f 7 7 7 f f . . . . 
    . . . . f 7 f 7 7 7 f . . . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
    . . . . . f f f f f f f f f . . 
    . . . . f 4 5 5 4 4 5 5 5 4 f . 
    . . . f 5 5 5 5 5 5 5 5 5 5 4 f 
    . . . f 4 5 5 5 5 5 5 5 5 5 4 f 
    . . . f 5 5 5 5 5 5 5 5 5 4 4 f 
    . . . f 5 5 5 5 5 d 5 5 5 5 4 f 
    . . . f 5 5 5 5 5 d d 5 5 5 4 f 
    . . . f 5 5 5 5 d f 1 d 5 5 4 f 
    . . . . f 5 5 4 d f 1 d 5 5 f . 
    . . . . f 4 4 d d d d d f f . . 
    . . . . . f f f 1 1 f f f f . . 
    . . . . f f f f 1 1 f f f f f . 
    . . . . f f f f f f f f f f f . 
    . . . f d f f f f f f f f f f . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f f . f f f f . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f d d d d b f . . . . . 
    . . . f d d d d d b f . . . . . 
    . . . f d b d d b b b f . . . . 
    . . f b f f d b f f b b f . . . 
    . f f f d d f f d d f f f f . . 
    . . . f d d d f d d f f f f . . 
    . . . f f 1 d f 1 d d f f f f . 
    . . . f f 1 d f 1 d d f f f f . 
    . . f d d d d d d d f f f f f . 
    . . f f f f f d d f d f f f . . 
    . . . f f d d d 2 d d d f . . . 
    . . f d f d d d e f d d f . . . 
    . . f d f e e e e f d d f . . . 
    . . . f f e f f e e f f . . . . 
    . . . . f d f . f d f . . . . . 
    `, SpriteKind.Player))
myEnemy = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
let FOOD_E = sprites.create(img`
    . . d d . . . d d d d d . . . . 
    . . . d d d d d . . . d . . . . 
    . . . . . . . d . . d . . . . . 
    . . . . a a a a a a a a . . . . 
    . . . a a c c c a c a c a . . . 
    . . c a a c a c c a c c a a . . 
    . a c c a a c c c c c a a c a . 
    . a a c c c c a a a a a c c a . 
    . c a a a a c c c a a c c a a . 
    . c c c a a c a c a c c a a a . 
    . c a c c a c c c c c a a a a . 
    . c a a a c c a a a a a a a c . 
    . a c a a c c c c a a a c c c . 
    . . c c a c c a c a a c c a . . 
    . . . c c a c c c a c c a . . . 
    . . . . c c c c a a c a . . . . 
    `, SpriteKind.Food)
myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four))
scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), sprites.dungeon.collectibleInsignia)
tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), sprites.dungeon.collectibleInsignia)
tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), sprites.dungeon.collectibleInsignia)
tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), sprites.dungeon.collectibleInsignia)
info.setScore(0)
forever(function () {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.A)) {
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.Down)) {
            animation.runImageAnimation(
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
            [img`
                . . . . . f f f f f f f f f . . 
                . . . . f 4 5 4 4 5 5 5 5 4 f . 
                . . . f 5 5 5 5 5 5 5 5 5 5 4 f 
                . . . f 4 5 5 5 5 5 5 5 5 4 4 f 
                . . . f 5 5 5 5 5 d 5 5 5 5 4 f 
                . . . f 5 5 5 5 5 d d 5 5 5 4 f 
                . . . f 5 5 5 5 d f 1 d 5 5 4 f 
                . . . . f 5 5 4 d f 1 d 5 5 f . 
                . . . . f 4 4 d d d d d f f . . 
                . . . . . f f f 1 1 f f f f . . 
                . . . . f f f f 1 1 f f f f f . 
                . . . . f f f f f f f f f f f . 
                . . . . f f f f f f f f f f f . 
                . . . f d f f f f f f f f f f . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f f . f f f f . . . 
                `,img`
                . . . . . f f f f f f f f f . . 
                . . . . f 4 5 4 4 5 5 5 5 4 f . 
                . . . f 5 5 5 5 5 5 5 5 5 5 4 f 
                . . . f 4 5 5 5 5 5 5 5 5 4 4 f 
                . . . f 5 5 9 9 5 d 5 5 5 5 4 f 
                . . . f 5 5 5 9 5 d d 5 5 5 4 f 
                . . . f 5 5 5 9 d f 1 d 5 5 4 f 
                9 9 8 . f 8 5 9 d 8 1 d 5 5 f . 
                . 9 8 8 f 8 8 9 d d d 9 9 f . . 
                . 9 . 8 8 f 8 9 8 1 f 9 f f . . 
                . . 9 8 8 8 8 9 1 8 f 9 f f f . 
                . . 9 . 8 f 8 9 8 8 8 9 f f f . 
                . . . 9 8 f 8 9 8 8 9 9 f f f . 
                . . . 9 8 8 8 9 8 8 9 f f f f . 
                . . . 9 9 8 9 8 8 9 f f f f . . 
                . . . . 9 9 9 9 . f f f f . . . 
                `],
            200,
            false
            )
            myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
            pause(5000)
            myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
            pause(5000)
        }
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.Up)) {
            animation.runImageAnimation(
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
            [img`
                . . . . . f f f f f f f f f . . 
                . . . . f 4 5 4 4 5 5 5 5 4 f . 
                . . . f 5 5 5 5 5 5 5 5 5 5 4 f 
                . . . f 4 5 5 5 5 5 5 5 5 4 4 f 
                . . . f 5 5 5 5 5 d 5 5 5 5 4 f 
                . . . f 5 5 5 5 5 d d 5 5 5 4 f 
                . . . f 5 5 5 5 d f 1 d 5 5 4 f 
                . . . . f 5 5 4 d f 1 d 5 5 f . 
                . . . . f 4 4 d d d d d f f . . 
                . . . . . f f f 1 1 f f f f . . 
                . . . . f f f f 1 1 f f f f f . 
                . . . . f f f f f f f f f f f . 
                . . . . f f f f f f f f f f f . 
                . . . f d f f f f f f f f f f . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f f . f f f f . . . 
                `,img`
                . . . . . f f f f f f f f f . . 
                . . . . f 4 5 4 4 5 5 5 5 4 f . 
                . . . f 5 5 5 5 5 5 5 5 5 5 4 f 
                . . . f 4 5 5 5 5 5 5 5 5 4 4 f 
                . . . f 5 5 2 2 5 d 5 5 5 5 4 f 
                . . . f 5 5 5 2 5 d d 5 5 5 4 f 
                . . . f 5 5 5 2 d f 1 d 5 5 4 f 
                2 2 4 . f 4 5 2 d 4 1 d 5 5 f . 
                . 2 4 4 f 4 4 2 d d d 2 2 f . . 
                . 2 . 4 4 f 4 2 4 1 f 2 f f . . 
                . . 2 4 4 4 4 2 1 4 f 2 f f f . 
                . . 2 . 4 f 4 2 4 4 4 2 f f f . 
                . . . 2 4 f 4 2 4 4 2 2 f f f . 
                . . . 2 4 4 4 2 4 4 2 f f f f . 
                . . . 2 2 4 2 4 4 2 f f f f . . 
                . . . . 2 2 2 2 . f f f f . . . 
                `],
            200,
            false
            )
            myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
            pause(5000)
            myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
            pause(5000)
        }
    }
})
forever(function () {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.A)) {
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Up)) {
            animation.runImageAnimation(
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
            [img`
                . . . . . f f f f f f . . . . . 
                . . . . f f f f f f f f . . . . 
                . . . f f f f f f f f f f . . . 
                . . f f f f f f f f f f f f . . 
                . . f f f f f f f f f f f f . . 
                . . f d d d d d d 7 7 7 7 f . . 
                . . f f 1 d d d f d 7 7 7 f . . 
                . . f f 1 d d f d d d 7 7 f . . 
                1 1 1 1 1 1 b b d d d 7 f . . . 
                . . . f d d d d d d f f . . . . 
                . . . . f d d d d f 7 f . . . . 
                . . . f f d d d d 7 7 7 f . . . 
                . . f 7 f 2 2 2 2 f 7 7 f . . . 
                1 1 1 b 1 1 1 1 1 1 b b f . . . 
                . . . f f 7 f 7 7 7 f f . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                `,img`
                . . . . . f f f f f f . . . . . 
                . . . . f f f f f f f f . . . . 
                . . . f f f f f f f f f f . . . 
                . . f f f f f f f f f f f f . . 
                . . f f f f f f f f f f f f . . 
                . . f d d d d d d 7 7 7 7 f . . 
                . . f f 1 d d d f d 7 7 7 f . . 
                . . f f 1 d d f d d d 7 7 f . . 
                1 1 1 1 1 1 b b d d d 7 f . . . 
                . . . f d d d d d d f f . . . . 
                . . . . f d d d d f 7 f . . . . 
                . . . f f d d d d 7 7 7 f . . . 
                . . f 7 f 2 2 2 2 f 7 7 f . . . 
                1 1 1 b 1 1 1 1 1 1 b b f . . . 
                . . . f f 7 f 7 7 7 f f . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                `,img`
                . . . . . f f f f f f . . . . . 
                . . . . f f f f f f f f . . . . 
                . . . f f f f f f f f f f . . . 
                . . f f f f f f f f f f f f . . 
                . . f f f f f f f f f f f f . . 
                . . f d d d d d d 7 7 7 7 f . . 
                . . f f 1 d d d f d 7 7 7 f . . 
                . . f f 1 d d f d d d 7 7 f . . 
                1 1 1 1 1 1 b b d d d 7 f . . . 
                . . . f d d d d d d f f . . . . 
                . . . . f d d d d f 7 f . . . . 
                . . . f f d d d d 7 7 7 f . . . 
                . . f 7 f 2 2 2 2 f 7 7 f . . . 
                1 1 1 b 1 1 1 1 1 1 b b f . . . 
                . . . f f 7 f 7 7 7 f f . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                `,img`
                . . . . . f f f f f f . . . . . 
                . . . . f 7 7 7 7 7 7 f . . . . 
                . . . f 7 7 7 7 7 7 7 7 f . . . 
                . . f 7 7 7 7 7 7 7 7 7 7 f . . 
                . . f 7 7 7 7 7 7 7 7 7 7 f . . 
                . . f d d d d d d 7 7 7 7 f . . 
                . . f f 1 d d d f d 7 7 7 f . . 
                . . f f 1 d d f d d d 7 7 f . . 
                . . f d d d d d d d d 7 f . . . 
                . . . f d d d d d d f f . . . . 
                . . . . f d d d d f 7 f . . . . 
                . . . f f d d d d 7 7 7 f . . . 
                . . f 7 f 2 2 2 2 f 7 7 f . . . 
                1 1 1 b 1 1 1 1 1 1 b b f . . . 
                . . . f f 7 f 7 7 7 f f . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                `],
            200,
            false
            )
            myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
            pause(5000)
            myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
            pause(5000)
        }
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Right)) {
            animation.runImageAnimation(
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
            [img`
                . . . . . f f f f f f . . . . . 
                . . . . f f f f f f f f . . . b 
                . . . f f f f f f f f f f b b . 
                . . f f f f f f f f f b b f b b 
                . . f f f f f f f b b f b b . . 
                . . f d d d d d b 7 7 b 7 f . . 
                . . f f 1 d b b f d b 7 7 f . . 
                . . f f 1 b d f b b d 7 7 f . . 
                1 1 1 1 b 1 b b d d d 7 f . . . 
                . . . b d b d d d d f f . . . . 
                . . b b b d d d d f 7 f . . . . 
                . b . b f d d d d 7 7 7 f . . . 
                b . f b f 2 2 2 2 f 7 7 f . . . 
                1 1 1 b 1 1 1 1 1 1 b b f . . . 
                . . . f f 7 f 7 7 7 f f . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                `,img`
                . . . . . f f f f f f . . . . . 
                . . . . f f f f f f f f . . . b 
                . . . f f f f f f f f f f b b . 
                . . f f f f f f f f f b b f b b 
                . . f f f f f f f b b f b b . . 
                . . f d d d d d b 7 7 b 7 f . . 
                . . f f 1 d b b f d b 7 7 f . . 
                . . f f 1 b d f b b d 7 7 f . . 
                1 1 1 1 b 1 b b d d d 7 f . . . 
                . . . b d b d d d d f f . . . . 
                . . b b b d d d d f 7 f . . . . 
                . b . b f d d d d 7 7 7 f . . . 
                b . f b f 2 2 2 2 f 7 7 f . . . 
                1 1 1 b 1 1 1 1 1 1 b b f . . . 
                . . . f f 7 f 7 7 7 f f . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                `,img`
                . . . . . f f f f f f . . . . . 
                . . . . f f f f f f f f . . . b 
                . . . f f f f f f f f f f b b . 
                . . f f f f f f f f f b b f b b 
                . . f f f f f f f b b f b b . . 
                . . f d d d d d b 7 7 b 7 f . . 
                . . f f 1 d b b f d b 7 7 f . . 
                . . f f 1 b d f b b d 7 7 f . . 
                1 1 1 1 b 1 b b d d d 7 f . . . 
                . . . b d b d d d d f f . . . . 
                . . b b b d d d d f 7 f . . . . 
                . b . b f d d d d 7 7 7 f . . . 
                b . f b f 2 2 2 2 f 7 7 f . . . 
                1 1 1 b 1 1 1 1 1 1 b b f . . . 
                . . . f f 7 f 7 7 7 f f . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                `,img`
                . . . . . f f f f f f . . . . . 
                . . . . f f f f f f f f . . . b 
                . . . f f f f f f f f f f b b . 
                . . f f f f f f f f f b b f b b 
                . . f f f f f f f b b f b b . . 
                . . f d d d d d b 7 7 b 7 f . . 
                . . f f 1 d b b f d b 7 7 f . . 
                . . f f 1 b d f b b d 7 7 f . . 
                1 1 1 1 b 1 b b d d d 7 f . . . 
                . . . b d b d d d d f f . . . . 
                . . b b b d d d d f 7 f . . . . 
                . b . b f d d d d 7 7 7 f . . . 
                b . f b f 2 2 2 2 f 7 7 f . . . 
                1 1 1 b 1 1 1 1 1 1 b b f . . . 
                . . . f f 7 f 7 7 7 f f . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                `,img`
                . . . . . f f f f f f . . . . . 
                . . . . f f f f f f f f . . . b 
                . . . f f f f f f f f f f b b . 
                . . f f f f f f f f f b b f b b 
                . . f f f f f f f b b f b b . . 
                . . f d d d d d b 7 7 b 7 f . . 
                . . f f 1 d b b f d b 7 7 f . . 
                . . f f 1 b d f b b d 7 7 f . . 
                1 1 1 1 b 1 b b d d d 7 f . . . 
                . . . b d b d d d d f f . . . . 
                . . b b b d d d d f 7 f . . . . 
                . b . b f d d d d 7 7 7 f . . . 
                b . f b f 2 2 2 2 f 7 7 f . . . 
                1 1 1 b 1 1 1 1 1 1 b b f . . . 
                . . . f f 7 f 7 7 7 f f . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                `],
            200,
            false
            )
            myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
            pause(5000)
            myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
            pause(5000)
        }
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Left)) {
            animation.runImageAnimation(
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
            [img`
                . . . . . f f f f f f . . . . . 
                b . . . f f f f f f f f . . . . 
                . b b f f f f f f f f f f . . . 
                b b f b b f f f f f f f f f . . 
                . . b b f b b f f f f f f f . . 
                . . f 7 b 7 7 b d d d d d f . . 
                . . f 7 7 b d f b b d 1 f f . . 
                . . f 7 7 d b b f d b 1 f f . . 
                . . . f 7 d d d b b 1 b 1 1 1 1 
                . . . . f f d d d d b d b . . . 
                . . . . f 7 f d d d d b b b . . 
                . . . f 7 7 7 d d d d f b . b . 
                . . . f 7 7 f 2 2 2 2 f b f . b 
                . . . f b b 1 1 1 1 1 1 b 1 1 1 
                . . . . f f 7 7 7 f 7 f f . . . 
                . . . . . f 7 7 7 f 7 f . . . . 
                `,img`
                . . . . . f f f f f f . . . . . 
                b . . . f f f f f f f f . . . . 
                . b b f f f f f f f f f f . . . 
                b b f b b f f f f f f f f f . . 
                . . b b f b b f f f f f f f . . 
                . . f 7 b 7 7 b d d d d d f . . 
                . . f 7 7 b d f b b d 1 f f . . 
                . . f 7 7 d b b f d b 1 f f . . 
                . . . f 7 d d d b b 1 b 1 1 1 1 
                . . . . f f d d d d b d b . . . 
                . . . . f 7 f d d d d b b b . . 
                . . . f 7 7 7 d d d d f b . b . 
                . . . f 7 7 f 2 2 2 2 f b f . b 
                . . . f b b 1 1 1 1 1 1 b 1 1 1 
                . . . . f f 7 7 7 f 7 f f . . . 
                . . . . . f 7 7 7 f 7 f . . . . 
                `,img`
                . . . . . f f f f f f . . . . . 
                b . . . f f f f f f f f . . . . 
                . b b f f f f f f f f f f . . . 
                b b f b b f f f f f f f f f . . 
                . . b b f b b f f f f f f f . . 
                . . f 7 b 7 7 b d d d d d f . . 
                . . f 7 7 b d f b b d 1 f f . . 
                . . f 7 7 d b b f d b 1 f f . . 
                . . . f 7 d d d b b 1 b 1 1 1 1 
                . . . . f f d d d d b d b . . . 
                . . . . f 7 f d d d d b b b . . 
                . . . f 7 7 7 d d d d f b . b . 
                . . . f 7 7 f 2 2 2 2 f b f . b 
                . . . f b b 1 1 1 1 1 1 b 1 1 1 
                . . . . f f 7 7 7 f 7 f f . . . 
                . . . . . f 7 7 7 f 7 f . . . . 
                `,img`
                . . . . . f f f f f f . . . . . 
                b . . . f f f f f f f f . . . . 
                . b b f f f f f f f f f f . . . 
                b b f b b f f f f f f f f f . . 
                . . b b f b b f f f f f f f . . 
                . . f 7 b 7 7 b d d d d d f . . 
                . . f 7 7 b d f b b d 1 f f . . 
                . . f 7 7 d b b f d b 1 f f . . 
                . . . f 7 d d d b b 1 b 1 1 1 1 
                . . . . f f d d d d b d b . . . 
                . . . . f 7 f d d d d b b b . . 
                . . . f 7 7 7 d d d d f b . b . 
                . . . f 7 7 f 2 2 2 2 f b f . b 
                . . . f b b 1 1 1 1 1 1 b 1 1 1 
                . . . . f f 7 7 7 f 7 f f . . . 
                . . . . . f 7 7 7 f 7 f . . . . 
                `,img`
                . . . . . f f f f f f . . . . . 
                b . . . f f f f f f f f . . . . 
                . b b f f f f f f f f f f . . . 
                b b f b b f f f f f f f f f . . 
                . . b b f b b f f f f f f f . . 
                . . f 7 b 7 7 b d d d d d f . . 
                . . f 7 7 b d f b b d 1 f f . . 
                . . f 7 7 d b b f d b 1 f f . . 
                . . . f 7 d d d b b 1 b 1 1 1 1 
                . . . . f f d d d d b d b . . . 
                . . . . f 7 f d d d d b b b . . 
                . . . f 7 7 7 d d d d f b . b . 
                . . . f 7 7 f 2 2 2 2 f b f . b 
                . . . f b b 1 1 1 1 1 1 b 1 1 1 
                . . . . f f 7 7 7 f 7 f f . . . 
                . . . . . f 7 7 7 f 7 f . . . . 
                `],
            200,
            false
            )
            myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
            pause(5000)
            myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
            pause(5000)
        }
    }
})
forever(function () {
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).overlapsWith(FOOD_E)) {
        info.changeScoreBy(1)
        pause(1000)
    }
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).overlapsWith(myEnemy)) {
        info.changeLifeBy(-1)
        pause(1000)
    }
})
forever(function () {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.A)) {
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.Down)) {
            animation.runImageAnimation(
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)),
            [img`
                . . . . . f f f f f . . . . . . 
                . . . . f d d d d b f . . . . . 
                . . . f d d d d d b f . . . . . 
                . . . f d b d d b b b f . . . . 
                . . f b f f d b f f b b f . . . 
                . f f f d d f f d d f f f f . . 
                . . . f d d d f d d f f f f . . 
                . . . f f 1 d f 1 d d f f f f . 
                . . . f f 1 d f 1 d d f f f f . 
                . . f d d d d d d d f f f f f . 
                . . f f f f f d d f d f f f . . 
                . . . f f d d d 2 d d d f . . . 
                . . f d f d d d e f d d f . . . 
                . . f d f e e e e f d d f . . . 
                . . . f f e f f e e f f . . . . 
                . . . . f d f . f d f . . . . . 
                `,img`
                . . . b b c f f f f c . . . . . 
                . . . . f c b d d b c . . . . . 
                . . . f d c b d d c c . . . . . 
                . . . c d c b b b c c f . . . . 
                . . f c c f b b f c c b f . . b 
                b b b c c d b f c c f f f b b . 
                . . b c c d b c d c f b b f . . 
                . b b c c 1 b f 1 c d b f f f . 
                . b . c c b d b 1 c b f f f f . 
                . b f c c b d c c b f f f f f . 
                . . b c c b c c b f d f f f . . 
                . . b c c b c c b d d d f . . . 
                . . b d c b c b e f d d f . . . 
                . . f b c b b e e f d d f . . . 
                . . . b c b b f e e f f . . . . 
                . . . . b b b . f d f . . . . . 
                `],
            200,
            false
            )
            myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
            pause(5000)
            myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
            pause(5000)
        }
    }
})
forever(function () {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)) {
        if (UP_POWER == 5) {
            if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Down)) {
                info.setLife(999)
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += -1
                myEnemy.x += -10
                myEnemy.y += -10
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("HA HA HA HA HA ")
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
                [img`
                    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
                    . 1 1 . . . . . . . . . 1 . . . 
                    . 1 . . . . . . . . . . 1 1 . . 
                    . 1 . . . 1 1 1 1 1 1 . . 1 1 1 
                    . 1 . . 1 1 1 1 1 1 1 1 . . . 1 
                    . 1 . 1 1 1 1 1 1 1 1 1 1 . . 1 
                    . 1 . 1 d f f d 1 1 1 1 1 . . 1 
                    . 1 . 1 f d d f 1 1 1 1 1 . 1 1 
                    . 1 f f f d d f 1 d 1 1 1 . 1 . 
                    . f f 1 1 f f 2 2 d 1 1 . 1 1 . 
                    . f 1 1 f f 2 2 d f 1 1 . 1 . . 
                    . f 1 1 f 1 d 1 1 f 1 1 f . . . 
                    . . f 1 f 1 d 1 1 d 1 1 f . . . 
                    . . f f f a a a a d d f f . . . 
                    . . . . f 1 f f f 1 1 f . . . . 
                    . . . f d f . . . f d f . . . . 
                    `,img`
                    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
                    . 1 1 . . . . . . . . . 1 . . . 
                    . 1 . . . . . . . . . . 1 1 . . 
                    . 1 . . . 1 1 1 1 1 1 . . 1 1 1 
                    . 1 . . 1 1 1 1 1 1 1 1 . . . 1 
                    . 1 . 1 1 1 1 1 1 1 1 1 1 . . 1 
                    . 1 . 1 d f f d 1 1 1 1 1 . . 1 
                    . 1 . 1 f d d f 1 1 1 1 1 . 1 1 
                    . 1 f f f d d f 1 d 1 1 1 . 1 . 
                    . f f 1 1 f f 2 2 d 1 1 . 1 1 . 
                    . f 1 1 f f 2 2 d f 1 1 . 1 . . 
                    . f 1 1 f 1 d 1 1 f 1 1 f . . . 
                    . . f 1 f 1 d 1 1 d 1 1 f . . . 
                    . . f f f a a a a d d f f . . . 
                    . . . . f 1 f f f 1 1 f . . . . 
                    . . . f d f . . . f d f . . . . 
                    `,img`
                    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
                    . 1 1 . . . . . . . . . 1 . . . 
                    . 1 . . . . . . . . . . 1 1 . . 
                    . 1 . . . 1 1 1 1 1 1 . . 1 1 1 
                    . 1 . . 1 1 1 1 1 1 1 1 . . . 1 
                    . 1 . 1 1 1 1 1 1 1 1 1 1 . . 1 
                    . 1 . 1 d f f d 1 1 1 1 1 . . 1 
                    . 1 . 1 f d d f 1 1 1 1 1 . 1 1 
                    . 1 f f f d d f 1 d 1 1 1 . 1 . 
                    . f f 1 1 f f 2 2 d 1 1 . 1 1 . 
                    . f 1 1 f f 2 2 d f 1 1 . 1 . . 
                    . f 1 1 f 1 d 1 1 f 1 1 f . . . 
                    . . f 1 f 1 d 1 1 d 1 1 f . . . 
                    . . f f f a a a a d d f f . . . 
                    . . . . f 1 f f f 1 1 f . . . . 
                    . . . f d f . . . f d f . . . . 
                    `,img`
                    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
                    . 1 1 . . . . . . . . . 1 . . . 
                    . 1 . . . . . . . . . . 1 1 . . 
                    . 1 . . . 1 1 1 1 1 1 . . 1 1 1 
                    . 1 . . 1 1 1 1 1 1 1 1 . . . 1 
                    . 1 . 1 1 1 1 1 1 1 1 1 1 . . 1 
                    . 1 . 1 d f f d 1 1 1 1 1 . . 1 
                    . 1 . 1 f d d f 1 1 1 1 1 . 1 1 
                    . 1 f f f d d f 1 d 1 1 1 . 1 . 
                    . f f 1 1 f f 2 2 d 1 1 . 1 1 . 
                    . f 1 1 f f 2 2 d f 1 1 . 1 . . 
                    . f 1 1 f 1 d 1 1 f 1 1 f . . . 
                    . . f 1 f 1 d 1 1 d 1 1 f . . . 
                    . . f f f a a a a d d f f . . . 
                    . . . . f 1 f f f 1 1 f . . . . 
                    . . . f d f . . . f d f . . . . 
                    `,img`
                    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
                    . 1 1 . . . . . . . . . 1 . . . 
                    . 1 . . . . . . . . . . 1 1 . . 
                    . 1 . . . 1 1 1 1 1 1 . . 1 1 1 
                    . 1 . . 1 1 1 1 1 1 1 1 . . . 1 
                    . 1 . 1 1 1 1 1 1 1 1 1 1 . . 1 
                    . 1 . 1 d f f d 1 1 1 1 1 . . 1 
                    . 1 . 1 f d d f 1 1 1 1 1 . 1 1 
                    . 1 f f f d d f 1 d 1 1 1 . 1 . 
                    . f f 1 1 f f 2 2 d 1 1 . 1 1 . 
                    . f 1 1 f f 2 2 d f 1 1 . 1 . . 
                    . f 1 1 f 1 d 1 1 f 1 1 f . . . 
                    . . f 1 f 1 d 1 1 d 1 1 f . . . 
                    . . f f f a a a a d d f f . . . 
                    . . . . f 1 f f f 1 1 f . . . . 
                    . . . f d f . . . f d f . . . . 
                    `,img`
                    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
                    . 1 1 . . . . . . . . . 1 . . . 
                    . 1 . . . . . . . . . . 1 1 . . 
                    . 1 . . . 1 1 1 1 1 1 . . 1 1 1 
                    . 1 . . 1 1 1 1 1 1 1 1 . . . 1 
                    . 1 . 1 1 1 1 1 1 1 1 1 1 . . 1 
                    . 1 . 1 d f f d 1 1 1 1 1 . . 1 
                    . 1 . 1 f d d f 1 1 1 1 1 . 1 1 
                    . 1 f f f d d f 1 d 1 1 1 . 1 . 
                    . f f 1 1 f f 2 2 d 1 1 . 1 1 . 
                    . f 1 1 f f 2 2 d f 1 1 . 1 . . 
                    . f 1 1 f 1 d 1 1 f 1 1 f . . . 
                    . . f 1 f 1 d 1 1 d 1 1 f . . . 
                    . . f f f a a a a d d f f . . . 
                    . . . . f 1 f f f 1 1 f . . . . 
                    . . . f d f . . . f d f . . . . 
                    `,img`
                    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
                    . 1 1 . . . . . . . . . 1 . . . 
                    . 1 . . . . . . . . . . 1 1 . . 
                    . 1 . . . 1 1 1 1 1 1 . . 1 1 1 
                    . 1 . . 1 1 1 1 1 1 1 1 . . . 1 
                    . 1 . 1 1 1 1 1 1 1 1 1 1 . . 1 
                    . 1 . 1 d f f d 1 1 1 1 1 . . 1 
                    . 1 . 1 f d d f 1 1 1 1 1 . 1 1 
                    . 1 f f f d d f 1 d 1 1 1 . 1 . 
                    . f f 1 1 f f 2 2 d 1 1 . 1 1 . 
                    . f 1 1 f f 2 2 d f 1 1 . 1 . . 
                    . f 1 1 f 1 d 1 1 f 1 1 f . . . 
                    . . f 1 f 1 d 1 1 d 1 1 f . . . 
                    . . f f f a a a a d d f f . . . 
                    . . . . f 1 f f f 1 1 f . . . . 
                    . . . f d f . . . f d f . . . . 
                    `],
                200,
                true
                )
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
                pause(5000)
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
                pause(5000)
            }
            if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Right)) {
                info.setLife(999)
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . 1 1 . . . 
                    . . . . . . . . . 1 1 1 . 1 1 . 
                    . . . . . . . 1 1 1 . . . . 1 1 
                    . . . . . 1 1 1 . . . . . . . 1 
                    . . . 1 1 1 . . 1 1 1 1 1 1 . . 
                    . . . 1 . . . 1 1 1 1 1 1 1 1 . 
                    . . . 1 . . . 1 1 1 1 1 1 1 1 . 
                    . . . 1 1 . . 1 d 1 d d 1 1 1 . 
                    . . . . 1 . . 1 f 1 d f 1 1 1 . 
                    . . . . . 1 . 1 f 1 d f 1 d 1 . 
                    . . . . . 1 1 . d d d d d d 1 . 
                    f f f f f f f f 1 d 1 1 1 1 1 f 
                    f d 1 1 1 1 1 1 1 d 1 1 f d d f 
                    f f f f f f f f f 1 a a 1 f f . 
                    . . . . . . . . f d f f d f . . 
                    `,img`
                    . . . . . 1 1 1 1 1 1 1 1 . . . 
                    . . . 1 1 1 . . . . . . 1 1 . . 
                    . 1 1 . . . . . . . . . . 1 . . 
                    1 1 . . . . 1 1 1 1 . . . 1 1 . 
                    1 1 . . . 1 1 1 1 1 1 . . . 1 . 
                    . 1 . . 1 1 1 1 1 1 1 1 . . 1 . 
                    . 1 . 1 d 1 1 d 1 1 1 1 1 . . 1 
                    . 1 . 1 f 1 d f 1 1 1 1 1 . . 1 
                    . 1 . 1 f 1 d f 1 d 1 1 1 . 1 1 
                    . 1 1 1 d d d d d d 1 1 . . 1 . 
                    . . 1 . f d d d d f 1 1 . 1 . . 
                    . . . f f 1 d 1 1 1 1 1 f . . . 
                    . . f 1 f 1 d 1 1 f 1 1 f . . . 
                    . . f d f a a a a f d d f . . . 
                    . . . f f 1 f f 1 1 f f . . . . 
                    . . . . f d f . f d f . . . . . 
                    `],
                200,
                false
                )
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
                pause(5000)
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
                pause(1000)
            }
            if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Right)) {
                info.setLife(999)
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . 1 1 . . . . . . . . . . . 
                    . 1 1 . 1 1 1 . . . . . . . . . 
                    1 1 . . . . 1 1 1 . . . . . . . 
                    1 . . . . . . . 1 1 1 . . . . . 
                    . . 1 1 1 1 1 1 . . 1 1 1 . . . 
                    . 1 1 1 1 1 1 1 1 . . . 1 . . . 
                    . 1 1 1 1 1 1 1 1 . . . 1 . . . 
                    . 1 1 1 d d 1 d 1 . . 1 1 . . . 
                    . 1 1 1 f d 1 f 1 . . 1 . . . . 
                    . 1 d 1 f d 1 f 1 . 1 . . . . . 
                    . 1 d d d d d d . 1 1 . . . . . 
                    f 1 1 1 1 1 d 1 f f f f f f f f 
                    f d d f 1 1 d 1 1 1 1 1 1 1 d f 
                    . f f 1 a a 1 f f f f f f f f f 
                    . . f d f f d f . . . . . . . . 
                    `,img`
                    . . . 1 1 1 1 1 1 1 1 . . . . . 
                    . . 1 1 . . . . . . 1 1 1 . . . 
                    . . 1 . . . . . . . . . . 1 1 . 
                    . 1 1 . . . 1 1 1 1 . . . . 1 1 
                    . 1 . . . 1 1 1 1 1 1 . . . 1 1 
                    . 1 . . 1 1 1 1 1 1 1 1 . . 1 . 
                    1 . . 1 1 1 1 1 d 1 1 d 1 . 1 . 
                    1 . . 1 1 1 1 1 f d 1 f 1 . 1 . 
                    1 1 . 1 1 1 d 1 f d 1 f 1 . 1 . 
                    . 1 . . 1 1 d d d d d d 1 1 1 . 
                    . . 1 . 1 1 f d d d d f . 1 . . 
                    . . . f 1 1 1 1 1 d 1 f f . . . 
                    . . . f 1 1 f 1 1 d 1 f 1 f . . 
                    . . . f d d f a a a a f d f . . 
                    . . . . f f 1 1 f f 1 f f . . . 
                    . . . . . f d f . f d f . . . . 
                    `],
                200,
                false
                )
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
                pause(5000)
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
                pause(1000)
            }
        }
        if (UP_POWER == 4) {
            if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Down)) {
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += -1
                myEnemy.x += -10
                myEnemy.y += -10
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
                [img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 5 5 5 5 4 4 f . . . . 
                    . . . f 5 5 5 5 5 5 4 4 f . . . 
                    . . f f 2 2 2 2 2 2 2 2 f f . . 
                    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 5 4 f f f f f f f f 4 5 5 f 
                    f 5 4 f d f f d f f f f f 4 5 f 
                    . f 4 f f 1 d f 1 f f f f 4 f . 
                    . . f f f 1 d f 1 d f f f f . . 
                    . . . f d d d d d d f f . . . . 
                    . . . . f d d d d f f f . . . . 
                    . . . . f f d b b b f f f . . . 
                    . . . f f f f b b f f f f . . . 
                    . . . f f f f 4 4 f f f f . . . 
                    . . . f f f f f 4 1 f f . . . . 
                    . . . f f f f . f d f . . . . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 5 5 5 5 4 4 f . . . . 
                    . . . f 5 5 5 5 5 5 4 4 f . . . 
                    . . f f 2 2 2 2 2 2 2 2 f f . . 
                    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 5 4 f f f f f f f f 4 5 5 f 
                    f 5 4 f d f f d f f f f f 4 5 f 
                    . f 4 f f 1 d f 1 f f f f 4 f . 
                    . . f f f 1 d f 1 d f f f f . . 
                    . . . f d d d d d d f f . . . . 
                    . . . . f d d d d f f f . . . . 
                    . . . f f b d b b b f f f . . . 
                    . . f f f b d b b f f f f . . . 
                    . . f f f 4 4 4 4 f f f f . . . 
                    . . . f f 1 f f 4 1 f f . . . . 
                    . . . . f d f . f d f . . . . . 
                    `],
                200,
                false
                )
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
                pause(5000)
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
                pause(5000)
            }
            if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Right)) {
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . f f f f f . . . 
                    . . . . . . . f 5 5 5 5 4 f . . 
                    . . . . . . f 2 2 2 2 2 2 2 f . 
                    . . . . . f 5 5 5 5 5 5 5 5 5 f 
                    . . . . f 5 5 4 f f f f f f 4 f 
                    . . . . f 5 4 f f f f f f f f . 
                    . . . . . f 4 f d f d d f f f . 
                    . . . . . . f f f 1 d f 1 f f . 
                    . . . . . . . f f 1 d f 1 d f . 
                    . . . . . . . . d d d d d d f . 
                    f f f f f f f f b d b b b f f f 
                    f f f f f f f f b d b b f f f f 
                    f f f f f f f f f 1 4 4 1 f f . 
                    . . . . . . . . f d f f d f . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 5 5 5 5 4 4 f . . . . 
                    . . . f 5 5 5 5 5 5 4 4 f . . . 
                    . . f f 2 2 2 2 2 2 2 2 f f . . 
                    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 5 4 f f f f f f f f 4 5 5 f 
                    f 5 4 f d f f d f f f f f 4 5 f 
                    . f 4 f f 1 d f 1 f f f f 4 f . 
                    . . f f f 1 d f 1 d f f f f . . 
                    . . . f d d d d d d f f . . . . 
                    . . . . f d d d d f f f . . . . 
                    . . . f f b d b b b f f f . . . 
                    . . f f f b d b b f f f f . . . 
                    . . f f f 4 4 4 4 f f f f . . . 
                    . . . f f 1 f f 4 1 f f . . . . 
                    . . . . f d f . f d f . . . . . 
                    `],
                200,
                false
                )
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
                pause(5000)
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
                pause(1000)
            }
            if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Right)) {
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f f f f f . . . . . . . . 
                    . . f 4 5 5 5 5 f . . . . . . . 
                    . f 2 2 2 2 2 2 2 f . . . . . . 
                    f 5 5 5 5 5 5 5 5 5 f . . . . . 
                    f 4 f f f f f f 4 5 5 f . . . . 
                    . f f f f f f f f 4 5 f . . . . 
                    . f f f d d f d f 4 f . . . . . 
                    . f f 1 f d 1 f f f . . . . . . 
                    . f d 1 f d 1 f f . . . . . . . 
                    . f d d d d d d . . . . . . . . 
                    f f f b b b d b f f f f f f f f 
                    f f f f b b d b f f f f f f f f 
                    . f f 1 4 4 1 f f f f f f f f f 
                    . . f d f f d f . . . . . . . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 4 4 5 5 5 5 f . . . . 
                    . . . f 4 4 5 5 5 5 5 5 f . . . 
                    . . f f 2 2 2 2 2 2 2 2 f f . . 
                    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 5 4 f f f f f f f f 4 5 5 f 
                    f 5 4 f f f f f d f f d f 4 5 f 
                    . f 4 f f f f 1 f d 1 f f 4 f . 
                    . . f f f f d 1 f d 1 f f f . . 
                    . . . . f f d d d d d d f . . . 
                    . . . . f f f d d d d f . . . . 
                    . . . f f f b b b d b f f . . . 
                    . . . f f f f b b d b f f f . . 
                    . . . f f f f 4 4 4 4 f f f . . 
                    . . . . f f 1 4 f f 1 f f . . . 
                    . . . . . f d f . f d f . . . . 
                    `],
                200,
                false
                )
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
                pause(5000)
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
                pause(1000)
            }
        }
        if (UP_POWER == 3) {
            if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Down)) {
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += -1
                myEnemy.x += -10
                myEnemy.y += -10
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
                [img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 5 5 5 5 4 4 f . . . . 
                    . . . f 5 5 5 5 5 5 4 4 f . . . 
                    . . f f 2 2 2 2 2 2 2 2 f f . . 
                    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 5 4 f f f f f f f f 4 5 5 f 
                    f 5 4 f d f f d f f f f f 4 5 f 
                    . f 4 f f 1 d f 1 f f f f 4 f . 
                    . . f f f 1 d f 1 d f f f f . . 
                    . . . f d d d d d d f f . . . . 
                    . . . . f d d d d f f f . . . . 
                    . . . . f f 5 2 2 2 f f f . . . 
                    . . . f f f f 2 2 f f f f . . . 
                    . . . f f f f 8 8 f f f f . . . 
                    . . . f f f f f 8 8 f f . . . . 
                    . . . f f f f . f d f . . . . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 5 5 5 5 4 4 f . . . . 
                    . . . f 5 5 5 5 5 5 4 4 f . . . 
                    . . f f 2 2 2 2 2 2 2 2 f f . . 
                    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 5 4 f f f f f f f f 4 5 5 f 
                    f 5 4 f d f f d f f f f f 4 5 f 
                    . f 4 f f 1 d f 1 f f f f 4 f . 
                    . . f f f 1 d f 1 d f f f f . . 
                    . . . f d d d d d d f f . . . . 
                    . . . . f d d d d f f f . . . . 
                    . . . f f 2 5 2 2 2 f f f . . . 
                    . . f f f 2 5 2 2 f f f f . . . 
                    . . f f f 8 8 8 8 f f f f . . . 
                    . . . f f 8 f f 8 8 f f . . . . 
                    . . . . f d f . f d f . . . . . 
                    `],
                200,
                false
                )
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
                pause(5000)
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
                pause(5000)
            }
            if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Right)) {
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . f f f f f . . . 
                    . . . . . . . f 5 5 5 5 4 f . . 
                    . . . . . . f 2 2 2 2 2 2 2 f . 
                    . . . . . f 5 5 5 5 5 5 5 5 5 f 
                    . . . . f 5 5 4 f f f f f f 4 f 
                    . . . . f 5 4 f f f f f f f f . 
                    . . . . . f 4 f d f d d f f f . 
                    . . . . . . f f f 1 d f 1 f f . 
                    . . . . . . . f f 1 d f 1 d f . 
                    . . . . . . . . d d d d d d f . 
                    f f f f f f f f 2 5 2 2 2 f f f 
                    f f f f f f f f 2 5 2 2 f f f f 
                    f f f f f f f f f 8 8 8 8 f f . 
                    . . . . . . . . f d f f d f . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 5 5 5 5 4 4 f . . . . 
                    . . . f 5 5 5 5 5 5 4 4 f . . . 
                    . . f f 2 2 2 2 2 2 2 2 f f . . 
                    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 5 4 f f f f f f f f 4 5 5 f 
                    f 5 4 f d f f d f f f f f 4 5 f 
                    . f 4 f f 1 d f 1 f f f f 4 f . 
                    . . f f f 1 d f 1 d f f f f . . 
                    . . . f d d d d d d f f . . . . 
                    . . . . f d d d d f f f . . . . 
                    . . . f f 2 5 2 2 2 f f f . . . 
                    . . f f f 2 5 2 2 f f f f . . . 
                    . . f f f 8 8 8 8 f f f f . . . 
                    . . . f f 8 f f 8 8 f f . . . . 
                    . . . . f d f . f d f . . . . . 
                    `],
                200,
                false
                )
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
                pause(5000)
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
                pause(1000)
            }
            if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Right)) {
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f f f f f . . . . . . . . 
                    . . f 4 5 5 5 5 f . . . . . . . 
                    . f 2 2 2 2 2 2 2 f . . . . . . 
                    f 5 5 5 5 5 5 5 5 5 f . . . . . 
                    f 4 f f f f f f 4 5 5 f . . . . 
                    . f f f f f f f f 4 5 f . . . . 
                    . f f f d d f d f 4 f . . . . . 
                    . f f 1 f d 1 f f f . . . . . . 
                    . f d 1 f d 1 f f . . . . . . . 
                    . f d d d d d d . . . . . . . . 
                    f f f 2 2 2 5 2 f f f f f f f f 
                    f f f f 2 2 5 2 f f f f f f f f 
                    . f f 8 8 8 8 f f f f f f f f f 
                    . . f d f f d f . . . . . . . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 4 4 5 5 5 5 f . . . . 
                    . . . f 4 4 5 5 5 5 5 5 f . . . 
                    . . f f 2 2 2 2 2 2 2 2 f f . . 
                    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 5 4 f f f f f f f f 4 5 5 f 
                    f 5 4 f f f f f d f f d f 4 5 f 
                    . f 4 f f f f 1 f d 1 f f 4 f . 
                    . . f f f f d 1 f d 1 f f f . . 
                    . . . . f f d d d d d d f . . . 
                    . . . . f f f d d d d f . . . . 
                    . . . f f f 2 2 2 5 2 f f . . . 
                    . . . f f f f 2 2 5 2 f f f . . 
                    . . . f f f f 8 8 8 8 f f f . . 
                    . . . . f f 8 8 f f 8 f f . . . 
                    . . . . . f d f . f d f . . . . 
                    `],
                200,
                false
                )
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
                pause(5000)
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
                pause(1000)
            }
        }
        if (UP_POWER == 0) {
            if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Down)) {
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += -1
                myEnemy.x += -10
                myEnemy.y += -10
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
                [img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 5 5 5 5 4 4 f . . . . 
                    . . . f 5 5 5 5 5 5 4 4 f . . . 
                    . . f f 2 2 2 2 2 2 2 2 f f . . 
                    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 5 4 f f f f f f f f 4 5 5 f 
                    f 5 4 f d f f d f f f f f 4 5 f 
                    . f 4 f f 1 d f 1 f f f f 4 f . 
                    . . f f f 1 d f 1 d f f f f . . 
                    . . . f d d d d d d f f . . . . 
                    . . . . f d d d d f 2 f . . . . 
                    . . . . f f 5 2 2 2 2 2 f . . . 
                    . . . f 2 2 f 2 2 f 2 2 f . . . 
                    . . . f 2 2 f 8 8 f d d f . . . 
                    . . . f 2 2 f f 8 8 f f . . . . 
                    . . . f d d f . f d f . . . . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 5 5 5 5 4 4 f . . . . 
                    . . . f 5 5 5 5 5 5 4 4 f . . . 
                    . . f f 2 2 2 2 2 2 2 2 f f . . 
                    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 5 4 f f f f f f f f 4 5 5 f 
                    f 5 4 f d f f d f f f f f 4 5 f 
                    . f 4 f f 1 d f 1 f f f f 4 f . 
                    . . f f f 1 d f 1 d f f f f . . 
                    . . . f d d d d d d f f . . . . 
                    . . . . f d d d d f 2 f . . . . 
                    . . . f f 2 5 2 2 2 2 2 f . . . 
                    . . f 2 f 2 5 2 2 f 2 2 f . . . 
                    . . f d f 8 8 8 8 f d d f . . . 
                    . . . f f 8 f f 8 8 f f . . . . 
                    . . . . f d f . f d f . . . . . 
                    `],
                200,
                false
                )
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
                pause(5000)
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
                pause(5000)
            }
            if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Right)) {
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . f f f f f . . . 
                    . . . . . . . f 5 5 5 5 4 f . . 
                    . . . . . . f 2 2 2 2 2 2 2 f . 
                    . . . . . f 5 5 5 5 5 5 5 5 5 f 
                    . . . . f 5 5 4 f f f f f f 4 f 
                    . . . . f 5 4 f f f f f f f f . 
                    . . . . . f 4 f d f d d f f f . 
                    . . . . . . f f f 1 d f 1 f f . 
                    . . . . . . . f f 1 d f 1 d f . 
                    . . . . . . . . d d d d d d f . 
                    f f f f f f f f 2 5 2 2 2 2 2 f 
                    f d 2 2 2 2 2 2 2 5 2 2 f d d f 
                    f f f f f f f f f 8 8 8 8 f f . 
                    . . . . . . . . f d f f d f . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 5 5 5 5 4 4 f . . . . 
                    . . . f 5 5 5 5 5 5 4 4 f . . . 
                    . . f f 2 2 2 2 2 2 2 2 f f . . 
                    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 5 4 f f f f f f f f 4 5 5 f 
                    f 5 4 f d f f d f f f f f 4 5 f 
                    . f 4 f f 1 d f 1 f f f f 4 f . 
                    . . f f f 1 d f 1 d f f f f . . 
                    . . . f d d d d d d f f . . . . 
                    . . . . f d d d d f 2 f . . . . 
                    . . . f f 2 5 2 2 2 2 2 f . . . 
                    . . f 2 f 2 5 2 2 f 2 2 f . . . 
                    . . f d f 8 8 8 8 f d d f . . . 
                    . . . f f 8 f f 8 8 f f . . . . 
                    . . . . f d f . f d f . . . . . 
                    `],
                200,
                false
                )
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
                pause(5000)
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
                pause(1000)
            }
            if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Right)) {
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f f f f f . . . . . . . . 
                    . . f 4 5 5 5 5 f . . . . . . . 
                    . f 2 2 2 2 2 2 2 f . . . . . . 
                    f 5 5 5 5 5 5 5 5 5 f . . . . . 
                    f 4 f f f f f f 4 5 5 f . . . . 
                    . f f f f f f f f 4 5 f . . . . 
                    . f f f d d f d f 4 f . . . . . 
                    . f f 1 f d 1 f f f . . . . . . 
                    . f d 1 f d 1 f f . . . . . . . 
                    . f d d d d d d . . . . . . . . 
                    f 2 2 2 2 2 5 2 f f f f f f f f 
                    f d d f 2 2 5 2 2 2 2 2 2 2 d f 
                    . f f 8 8 8 8 f f f f f f f f f 
                    . . f d f f d f . . . . . . . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 4 4 5 5 5 5 f . . . . 
                    . . . f 4 4 5 5 5 5 5 5 f . . . 
                    . . f f 2 2 2 2 2 2 2 2 f f . . 
                    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 5 4 f f f f f f f f 4 5 5 f 
                    f 5 4 f f f f f d f f d f 4 5 f 
                    . f 4 f f f f 1 f d 1 f f 4 f . 
                    . . f f f f d 1 f d 1 f f f . . 
                    . . . . f f d d d d d d f . . . 
                    . . . . f 2 f d d d d f . . . . 
                    . . . f 2 2 2 2 2 5 2 f f . . . 
                    . . . f 2 2 f 2 2 5 2 f 2 f . . 
                    . . . f d d f 8 8 8 8 f d f . . 
                    . . . . f f 8 8 f f 8 f f . . . 
                    . . . . . f d f . f d f . . . . 
                    `],
                200,
                false
                )
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
                pause(5000)
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
                pause(1000)
            }
        }
        if (UP_POWER == 1) {
            if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Down)) {
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += -1
                myEnemy.x += -10
                myEnemy.y += -10
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
                [img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 5 5 5 5 4 4 f . . . . 
                    . . . f 5 5 5 5 5 5 4 4 f . . . 
                    . . f f 2 2 2 2 2 2 2 2 f f . . 
                    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 5 4 f f f f f f f f 4 5 5 f 
                    f 5 4 f d f f d f f f f f 4 5 f 
                    . f 4 f f 1 d f 1 f f f f 4 f . 
                    . . f f f 1 d f 1 d f f f f . . 
                    . . . f d d 3 3 3 3 f f . . . . 
                    . . . . f 3 3 d d f 2 f . . . . 
                    . . . . f f 5 2 2 2 2 2 f . . . 
                    . . . f 2 2 f 2 2 f 2 2 f . . . 
                    . . . f 2 2 f 8 8 f d d f . . . 
                    . . . f 2 2 f f 8 8 f f . . . . 
                    . . . f d d f . f d f . . . . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 5 5 5 5 4 4 f . . . . 
                    . . . f 5 5 5 5 5 5 4 4 f . . . 
                    . . f f 2 2 2 2 2 2 2 2 f f . . 
                    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 5 4 f f f f f f f f 4 5 5 f 
                    f 5 4 f d f f d f f f f f 4 5 f 
                    . f 4 f f 1 d f 1 f f f f 4 f . 
                    . . f f f 1 d f 1 d f f f f . . 
                    . . . f d d d d 3 3 f f . . . . 
                    . . . . f d d 3 3 f 2 f . . . . 
                    . . . f f 2 5 2 2 2 2 2 f . . . 
                    . . f 2 f 2 5 2 2 f 2 2 f . . . 
                    . . f d f 8 8 8 8 f d 3 f . . . 
                    . . . f f 8 f f 8 8 f f . . . . 
                    . . . . f d f . f d f . . . . . 
                    `],
                200,
                false
                )
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
                pause(5000)
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
                pause(5000)
            }
            if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Right)) {
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . f f f f f . . . 
                    . . . . . . . f 5 5 5 5 4 f . . 
                    . . . . . . f 2 2 2 2 2 2 2 f . 
                    . . . . . f 5 5 5 5 5 5 5 5 5 f 
                    . . . . f 5 5 4 f f f f f f 4 f 
                    . . . . f 5 4 f f f f f f f f . 
                    . . . . . f 4 f d f d d f f f . 
                    . . . . . . f f f 1 d f 1 f f . 
                    . . . . . . . f f 1 d f 1 3 f . 
                    . . . . . . . . d d 3 3 3 3 f . 
                    f f f f f f f f 2 5 2 2 2 2 2 f 
                    f 3 2 2 2 2 2 2 2 5 2 2 f d 3 f 
                    f f f f f f f f f 8 8 8 8 f f . 
                    . . . . . . . . f d f f d f . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 5 5 5 5 4 4 f . . . . 
                    . . . f 5 5 5 5 5 5 4 4 f . . . 
                    . . f f 2 2 2 2 2 2 2 2 f f . . 
                    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 5 4 f f f f f f f f 4 5 5 f 
                    f 5 4 f d f f d f f f f f 4 5 f 
                    . f 4 f f 1 d f 1 f f f f 4 f . 
                    . . f f f 1 d f 1 d f f f f . . 
                    . . . f d d 3 3 3 3 f f . . . . 
                    . . . . f d 3 d d f 2 f . . . . 
                    . . . f f 2 5 2 2 2 2 2 f . . . 
                    . . f 2 f 2 5 2 2 f 2 2 f . . . 
                    . . f d f 8 8 8 8 f d 3 f . . . 
                    . . . f f 8 f f 8 8 f f . . . . 
                    . . . . f d f . f d f . . . . . 
                    `],
                200,
                false
                )
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
                pause(5000)
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
                pause(1000)
            }
            if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Right)) {
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f f f f f . . . . . . . . 
                    . . f 4 5 5 5 5 f . . . . . . . 
                    . f 2 2 2 2 2 2 2 f . . . . . . 
                    f 5 5 5 5 5 5 5 5 5 f . . . . . 
                    f 4 f f f f f f 4 5 5 f . . . . 
                    . f f f f f f f f 4 5 f . . . . 
                    . f f f d d f d f 4 f . . . . . 
                    . f f 1 f d 1 f f f . . . . . . 
                    . f 3 1 f 3 1 f f . . . . . . . 
                    . f d d 3 3 d d . . . . . . . . 
                    f 2 2 2 2 2 5 2 f f f f f f f f 
                    f d d f 2 2 5 2 2 2 2 2 2 2 3 f 
                    . f f 8 8 8 8 f f f f f f f f f 
                    . . f d f f d f . . . . . . . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 4 4 5 5 5 5 f . . . . 
                    . . . f 4 4 5 5 5 5 5 5 f . . . 
                    . . f f 2 2 2 2 2 2 2 2 f f . . 
                    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 5 4 f f f f f f f f 4 5 5 f 
                    f 5 4 f f f f f d f f d f 4 5 f 
                    . f 4 f f f f 1 f d 1 f f 4 f . 
                    . . f f f f d 1 f d 1 f f f . . 
                    . . . . f f d d d 3 d d f . . . 
                    . . . . f 2 f d 3 3 d f . . . . 
                    . . . f 2 2 2 2 2 5 2 f f . . . 
                    . . . f 2 2 f 2 2 5 2 f 2 f . . 
                    . . . f 3 d f 8 8 8 8 f 3 f . . 
                    . . . . f f 8 8 f f 8 f f . . . 
                    . . . . . f d f . f d f . . . . 
                    `],
                200,
                false
                )
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
                pause(5000)
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
                pause(1000)
            }
        }
        if (UP_POWER == 2) {
            if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Down)) {
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += -1
                myEnemy.x += -10
                myEnemy.y += -10
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
                [img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 5 5 5 5 4 4 f . . . . 
                    . . . f 5 5 5 5 5 5 4 4 f . . . 
                    . . f f 2 2 2 2 2 2 2 2 f f . . 
                    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 5 4 f f f f f f f f 4 5 5 f 
                    f 5 4 f d f f d f f f f f 4 5 f 
                    . f 4 f f 1 d f 1 f f f f 4 f . 
                    . . f f f 1 d f 1 d f f f f . . 
                    . . . f d d d d d d f f . . . . 
                    . . . . f d d d d f 2 f . . . . 
                    . . . f d f 5 2 2 2 2 2 f . . . 
                    . . f f d d f 2 2 f 2 2 f . . . 
                    . f d d d d f 8 8 f d d f . . . 
                    . f d d d d f f 8 8 f f . . . . 
                    . f d d d d f . f d f . . . . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 5 5 5 5 4 4 f . . . . 
                    . . . f 5 5 5 5 5 5 4 4 f . . . 
                    . . f f 2 2 2 2 2 2 2 2 f f . . 
                    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 5 4 f f f f f f f f 4 5 5 f 
                    f 5 4 f d f f d f f f f f 4 5 f 
                    . f 4 f f 1 d f 1 f f f f 4 f . 
                    . . f f f 1 d f 1 d f f f f . . 
                    . . . f d d d d d d f f . . . . 
                    . . . . f d d d d f 2 f . . . . 
                    . . f f f 2 5 2 2 2 2 2 f . . . 
                    f f d d f 2 5 2 2 f 2 2 f . . . 
                    f d d d f 8 8 8 8 f d d f . . . 
                    f d d d f 8 f f 8 8 f f . . . . 
                    f d d d f d f . f d f . . . . . 
                    `],
                200,
                false
                )
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
                pause(5000)
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
                pause(5000)
            }
            if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Right)) {
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . f f f f f . . . 
                    . . . . . . . f 5 5 5 5 4 f . . 
                    . . . . . . f 2 2 2 2 2 2 2 f . 
                    . . . . . f 5 5 5 5 5 5 5 5 5 f 
                    . . . . f 5 5 4 f f f f f f 4 f 
                    . . . . f 5 4 f f f f f f f f . 
                    f f f f . f 4 f d f d d f f f . 
                    f d d d f . f f f 1 d f 1 f f . 
                    f d d d f . . f f 1 d f 1 d f . 
                    f d d d d f . . d d d d d d f . 
                    f d d d d d f f 2 5 2 2 2 2 2 f 
                    f d d d d d d d 2 5 2 2 f d d f 
                    f d d d d d f f f 8 8 8 8 f f . 
                    f f f f f f . . f d f f d f . . 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 5 5 5 5 4 4 f . . . . 
                    . . . f 5 5 5 5 5 5 4 4 f . . . 
                    . . f f 2 2 2 2 2 2 2 2 f f . . 
                    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 5 4 f f f f f f f f 4 5 5 f 
                    f 5 4 f d f f d f f f f f 4 5 f 
                    . f 4 f f 1 d f 1 f f f f 4 f . 
                    . . f f f 1 d f 1 d f f f f . . 
                    . . . f d d d d d d f f . . . . 
                    . . . . f d d d d f 2 f . . . . 
                    . . f f f 2 5 2 2 2 2 2 f . . . 
                    . f d d f 2 5 2 2 f 2 2 f . . . 
                    . f d d f 8 8 8 8 f d d f . . . 
                    . f d d f 8 f f 8 8 f f . . . . 
                    . f d d f d f . f d f . . . . . 
                    `],
                200,
                false
                )
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
                pause(5000)
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
                pause(1000)
            }
            if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Right)) {
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f f f f f . . . . . . . . 
                    . . f 4 5 5 5 5 f . . . . . . . 
                    . f 2 2 2 2 2 2 2 f . . . . . . 
                    f 5 5 5 5 5 5 5 5 5 f . . . . . 
                    f 4 f f f f f f 4 5 5 f . . . . 
                    . f f f f f f f f 4 5 f . . . . 
                    . f f f d d f d f 4 f . f f f f 
                    . f f 1 f d 1 f f f . f d d d f 
                    . f d 1 f d 1 f f . . f d d d f 
                    . f d d d d d d . . f d d d d f 
                    f 2 2 2 2 2 5 2 f f d d d d d f 
                    f d d f 2 2 5 2 d d d d d d d f 
                    . f f 8 8 8 8 f f f d d d d d f 
                    . . f d f f d f . . f f f f f f 
                    `,img`
                    . . . . . f f f f f f . . . . . 
                    . . . . f 4 4 5 5 5 5 f . . . . 
                    . . . f 4 4 5 5 5 5 5 5 f . . . 
                    . . f f 2 2 2 2 2 2 2 2 f f . . 
                    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                    f 5 5 4 f f f f f f f f 4 5 5 f 
                    f 5 4 f f f f f d f f d f 4 5 f 
                    . f 4 f f f f 1 f d 1 f f 4 f . 
                    . . f f f f d 1 f d 1 f f f . . 
                    . . . . f f d d d d d d f . . . 
                    . . . . f 2 f d d d d f . . . . 
                    . . . f 2 2 2 2 2 5 2 f f f . . 
                    . . . f 2 2 f 2 2 5 2 f d d f . 
                    . . . f d d f 8 8 8 8 f d d f . 
                    . . . . f f 8 8 f f 8 f d d f . 
                    . . . . . f d f . f d f d d f . 
                    `],
                200,
                false
                )
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
                pause(5000)
                myEnemy.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
                pause(1000)
            }
        }
    }
})
