let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
basic.forever(function () {
    if (input.lightLevel() < 10) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        if (input.lightLevel() > 10) {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
        }
    }
})
