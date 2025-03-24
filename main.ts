let var_serie1 = ""
let CampMagnetic = 0
serial.onDataReceived(serial.delimiters(Delimiters.Fullstop), function () {
    var_serie1 = serial.readUntil(serial.delimiters(Delimiters.Fullstop))
})
basic.forever(function () {
    CampMagnetic = input.magneticForce(Dimension.Strength)
    if (CampMagnetic > 500) {
        serial.writeLine("CAPTURE")
        basic.pause(500)
        basic.clearScreen()
    }
    if (var_serie1 == "rosa") {
        basic.showIcon(IconNames.Heart)
        for (let index = 0; index < 4; index++) {
            music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        }
        var_serie1 = "res"
    }
    if (var_serie1 == "blau") {
        for (let index = 0; index < 4; index++) {
            music.play(music.createSoundExpression(WaveShape.Sine, 1, 5000, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            var_serie1 = "res"
            basic.pause(200)
        }
    }
})
