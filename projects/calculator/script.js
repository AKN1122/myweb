let display = document.querySelector(".display")
function append(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = ''
}
function deleteChar() {
    display.value = display.value.slice(0, -1)
}
function calculate() {
    try {
        display.value = eval(display.value.replace('/','/').replace('X','*'))
    } catch {
        display.value = 'Error'
    }
}

