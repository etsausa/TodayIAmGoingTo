let quotes = [
    "today i am going to exercise",
    "today i am going to read",
    "today i am going to write"
]

let userQuote = "";

let textInput = document.getElementById("goal").innerHTML;



//REFRESH BUTTON
document.getElementById("refresh").onclick = function() {refresh()};//listener

function refresh() {
    //'randomly' pick one of the three possible goals
    document.getElementById("goal").innerHTML = quotes[Math.floor(Math.random() * 3)];
}

document.getElementById("new").onclick = function() {clear()};

function clear() {
    //sets data of goal to nothing
    document.getElementById("goal").innerHTML  = "";
}

document.getElementById("check").onclick = function() {check()};

function check() {
    userQuote = textInput;
    console.log(userQuote);
    location.replace("mygoal.html")
    doument.getElementById("goal").innerHTML = userQuote;

}