function grow() {
    height++;
    width++;
    box.style.height = height + "px";
    box.style.width = width + "px";
    box.style.background = colorchange();
    if (height >= 1000) {
        height = 1;
    }
    if (width >= 1000) {
        width = 1;
    }
}
var box = document.getElementById("box");
var height = 1;
var width = 1;
var color = 0
var colorname = "black";
setInterval(grow, 1);
function colorchange() {
    color++
    switch (color) {
        case 0:
            colorname = "black";
            break;
        case 1:
            colorname = "navy";
            break;
        case 2:
            colorname = "blue";
            break;
        case 3:
            colorname = "skyblue";
            break;
        case 4:
            colorname = "red"
            break;
        case 5:
            colorname = "darkred";
            break;
        case 6:
            colorname = "black";
            break;
        case 7:
            colorname = "darkgoldenrod"
            break;
        case 8:
            colorname = "yellow";
            break;
        case 9:
            colorname = "lightyellow";
            break;
        case 10:
            color = 0
            break;
        default:


    }
    return colorname;
}
var pos = 0
var smallbox = document.getElementById("innerbox");
function bluebox() {
    pos++
    smallbox.style.top = pos + "px"
}
setInterval(bluebox(), 1);
smallbox.addEventListener("mouseover", blurfunc);
function blurfunc() {
    alert("mouse over box!")
}
var body = document.getElementById("box");
body.addEventListener("click", openWin);
var p = document.getElementById("p");

function pclick() {
    small += 500;
    p.style.left = small + "px";
}
var small = 0
setInterval(pclick, 2)
function openWin() {
    myWindow = window.open("", "myWindow", "width=200, height=100");   // Opens a new window
}

function closeWin() {
    myWindow.close();   // Closes the new window
}
