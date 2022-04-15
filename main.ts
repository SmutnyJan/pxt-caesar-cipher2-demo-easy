input.onButtonPressed(Button.A, function () {
    radio.sendString(cipher.decryptText("microbit", 5))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(cipher.encryptText(receivedString, 5))
})
