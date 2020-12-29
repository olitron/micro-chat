input.onButtonPressed(Button.A, function () {
    radio.sendString("Big room")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(123)
basic.forever(function () {
	
})
