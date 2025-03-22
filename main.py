var_serie1 = ""

def on_data_received():
    global var_serie1
    var_serie1 = serial.read_until(serial.delimiters(Delimiters.FULLSTOP))
serial.on_data_received(serial.delimiters(Delimiters.FULLSTOP), on_data_received)

def on_forever():
    global var_serie1
    if var_serie1 == "temp.":
        serial.write_line("" + str(input.temperature()))  # Send the temperature over serial
        var_serie1 = ""  # Reset var_serie1 to allow future commands
        for index in range(4):
            basic.show_icon(IconNames.HEART)  # Show heart icon
            basic.pause(500)  # Pause for 500 ms
            basic.clear_screen()  # Clear the screen
            basic.pause(500)  # Pause for another 500 ms

    # Continue processing further serial inputs
basic.forever(on_forever)
