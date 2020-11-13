let ring = neopixel.create(DigitalPin.P2, 7, NeoPixelMode.RGB)
ring.setBrightness(10)
ring.showRainbow(1, 360)
basic.forever(function () {
    ring.show()
    ring.rotate(1)
    basic.pause(500)
})
