serial.redirectToUSB()
serial.writeLine("Hello !")
basic.forever(function () {
    serial.writeLine("" + (input.soundLevel()))
})
