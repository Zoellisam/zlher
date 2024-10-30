input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    for (let Index = 0; Index <= 10000; Index++) {
        _4digit.show(Index)
        basic.pause(100)
    }
})
let _4digit: grove.TM1637 = null
let zahl = 0
_4digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
basic.forever(function () {
	
})
