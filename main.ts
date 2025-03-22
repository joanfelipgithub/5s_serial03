let var_serie1 = ""
serial.onDataReceived(serial.delimiters(Delimiters.Fullstop), function () {
    var_serie1 = serial.readUntil(serial.delimiters(Delimiters.Fullstop))
})
// Pause for another 500 ms
// Continue processing further serial inputs
basic.forever(function () {
    if (var_serie1 == "rosa") {
        basic.showIcon(IconNames.Heart)
        // Reset var_serie1 to allow future commands
        for (let index = 0; index < 4; index++) {
            music.play(music.createSoundExpression(
            WaveShape.Sine,
            5000,
            0,
            255,
            0,
            100,
            SoundExpressionEffect.None,
            InterpolationCurve.Linear
            ), music.PlaybackMode.UntilDone)
        }
        var_serie1 = "res"
    }
    if (var_serie1 == "blau") {
        for (let index = 0; index < 4; index++) {
            music.play(music.createSoundExpression(
            WaveShape.Sine,
            1,
            5000,
            255,
            0,
            100,
            SoundExpressionEffect.None,
            InterpolationCurve.Linear
            ), music.PlaybackMode.UntilDone)
            var_serie1 = "res"
            // Show heart icon
            basic.pause(200)
        }
    }
})
