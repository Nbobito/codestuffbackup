var canvas = document.getElementById("canvas")
var c = canvas.getContext("2d")
var x, y, i, xt, zx, zy
var xc, yc
var color
function mandelbrott() {
    for (x = 0; x < 100; x++) {
        for (y = 0; x < 100; x++) {
            i = 0
            xc = -2 + x / 50
            yc = -2 + y / 50
            zx = 0
            zy = 0
            do {
                xt = xc * yc
                zx = xc * xc - yc * yc + xt
                zy = xt + yc
            }
            while (i < 225 && (zx * zx + zy * zy) < 4)
            color = i.toString(16)
            c.fillStyle = "#" + color + color + color
            c.fillRect(x, y, 1, 1)
        }
    }
}
mandelbrott()