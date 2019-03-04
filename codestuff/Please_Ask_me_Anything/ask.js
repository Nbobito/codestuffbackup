// declaring vars
var Ques = [
    /Hello|hello|hi|hy|/,
    /Whatsyourname|whatsyourname/
]
var User = document.getElementById("Userasked")
var UserAsked = User.value
//var Asked = UserAsked.replace(/\s/g, '')
var send = document.getElementById("send")
//send.addEventListener("submit", ask)
function ask() {
    UserAsked = User.value
    if (UserAsked == Ques[0]) {
        document.write("hello there!");
    }
}