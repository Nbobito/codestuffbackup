var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d")
var keynum = ""
var grad
c.fillStyle = "000000"
c.strokeRect(0, 0, 1000, 700)
function reset() {
    x = 150
    y = 150
    c.fillStyle = "#FFE006"
    c.fillRect(150, 150, 50, 50)
    c.fillStyle = "#FF0000"
    c.fillRect(500, 200, 50, 300)
}
reset()
var x = 150
var y = 150
canvas.style.cursor = "none"
function refresh() {
    if (450 < x && x < 550 && 150 < y && y < 500) {
        reset()
    }
    c.fillStyle = "#FFE006"
    c.clearRect(1, 1, 998, 698);
    c.fillRect(x, y, 50, 50)
    c.fillStyle = "#FF0000"
    c.fillRect(500, 200, 50, 300)
}
function moveUp() {
    y = y - 4
    if (0 > y) {
        y = y + 4
    }
    refresh();
}
function moveRight() {
    x = x + 4
    if (x > 949) {
        x = x - 4
    }
    refresh()
}
function moveDown() {
    y = y + 4
    if (y > 649) {
        y = y - 4
    }
    refresh()
}
function moveLeft() {
    x = x - 4
    if (0 > x) {
        x = x + 4
    }
    refresh();
}
function cEventHandler() {
    keynum = event.keyCode
    switch (keynum) {
        case 37:
            moveLeft();
            break;
        case 38:
            moveUp()
            break;
        case 39:
            moveRight()
            break;
        case 40:
            moveDown()
            break;

    }
}
window.addEventListener("keydown", cEventHandler)
