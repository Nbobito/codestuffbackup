var player = document.getElementById("player");
player.addEventListener("mouseover", tlee);
var num = document.getElementById("num");
var la = 0
function tlee() {
    player.style.top = la + "px"
    player.style.left = la + "px"
    la += 100
    if (la > 500) {
        la = 0
    }
}
