input.onButtonPressed(Button.A, function () {
    led.unplot(x, 0)
    led.plot(x - 1, 0)
    x = x - 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    if (x < 4) {
        led.unplot(x, 0)
        led.plot(x + 1, 0)
        x = x + 1
    } else {
        led.plot(x, 0)
    }
})
let x = 0
x = 2
basic.showLeds(`
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
