var img = document.getElementById("img")
var imgs = [
    "image (2).png",
    "flib.jpg",
    "download.jpg"
]
var n = 0
function slides() {
    n++
    img.src = imgs[n]
    if (n == 3) {
        n = 0
    }
}
