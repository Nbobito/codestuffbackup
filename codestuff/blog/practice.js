var pos = 0;
//our box element
var box = document.getElementsById("box");
var t = setInterval(move, 10);

function move() {
    if (pos >= 1000) {
        clearInterval(t);
    }
    else {
        pos += 1;
        box.style.left = pos + "px";
    }
}
var t = setInterval(progress, 10);
var loading = document.getElementById("progressbar");
var i = 0;
var change = 1;
function progress() {
    if (change == 1) {
        i++;
        loading.value = i;
        if (i == 100) {
            change = 0;
        }
    }
    if (change == 0) {
        i--;
        loading.value = i;
        if (i == 0) {
            change = 1;
        }

    }

}
