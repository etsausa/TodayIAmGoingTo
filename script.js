let quotes = [
    "today i am going to exercise",
    "today i am going to read",
    "today i am going to write"
]

let userQuote = "";


//REFRESH BUTTON
document.getElementById("refresh").onclick = function() {refresh()};//listener

function refresh() {
    //'randomly' pick one of the three possible goals
    document.getElementById("goal").innerHTML = quotes[Math.floor(Math.random() * 3)];
}

document.getElementById("new").onclick = function() {clear()}; //listener

function clear() {
    //sets data of goal to nothing
    document.getElementById("goal").innerHTML  = "";
}

document.getElementById("check").onclick = function() {check()}; //listener

function check() {
    userQuote = document.getElementById("goal").innerHTML;
    console.log(userQuote);
    window.location.href = "mygoal.html";
}