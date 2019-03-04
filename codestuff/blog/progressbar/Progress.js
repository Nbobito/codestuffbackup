/*
Tutorial by Nathan Galley.
Progress bar function is in this file
© Nathan Galley 2018
*/
//variable declarations
var Progress = document.getElementById("progressbar");
var count = 0;
function progresscount() {
    count++;
    Progress.value = count;
    if (count >= 1000)
        ;
    {
        count = 0;
    }
}
var interval = setInterval(progresscount, 1);