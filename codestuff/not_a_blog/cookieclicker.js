var cookie = document.getElementById("cookie");
var cookies = 0
var p = document.getElementById("cookies");
cookie.addEventListener("click", cookieclick);
function cookieclick() {
    cookies++
    p.innerText = 'Ammount of cookies: ' + cookies
}
var grandma = document.getElementById("grandma");
var grandmas = 0
function grandmaclick() {
    if (cookies >= 30) {
        grandmas++
        cookies -= 30
    }
}