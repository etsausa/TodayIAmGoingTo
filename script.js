let quotes = [
    "today i am going to exercise",
    "today i am going to read",
    "today i am going to write"
]

let userQuote = "";

let textInput = document.getElementById("hero").innerHTML;


document.getElementById("refresh").onclick = function() {refresh()};

function refresh() {
    document.getElementById("hero").innerHTML = quotes[Math.floor(Math.random() * 3)];
}

document.getElementById("new").onclick = function() {clear()};

function clear() {
    document.getElementById("hero").innerHTML  = "";
}

document.getElementById("check").onclick = function() {check()};

function check() {
    userQuote = textInput;
    console.log(userQuote);
}