var board = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]
var pos
var boards = document.getElementById("board")
var img = boards.getElementById("image")
var image = img.src
function toggle(pos) {
    switch (pos) {
        case 0:
            image = "images.png"
            break;
    }
}
