input.onButtonPressed(Button.A, function () {
    radio.sendString("Hallo Nachbar!")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
basic.showIcon(IconNames.Heart)
radio.setGroup(8)
