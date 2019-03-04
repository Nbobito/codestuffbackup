var ask;
var asked
var ques = [
    /who/gi
]
function search() {
    ask = document.forms[0].elements[0].nodeValue;
    if (ques[0].test(asked)) {
        document.write(")")
    }
}