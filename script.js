let quotes = [
    "today i am going to exercise",
    "today i am going to read",
    "today i am going to write"
]



//REFRESH BUTTON
document.getElementById("refresh").onclick = function() {refresh()};//listener

function refresh() {
    //'randomly' pick one of the three possible goals
    document.getElementById("goal").innerHTML = quotes[Math.floor(Math.random() * 3)];
}

//NEW BUTTON
document.getElementById("new").onclick = function() {clear()}; //listener

function clear() {
    //sets data of goal to nothing
    document.getElementById("goal").innerHTML  = "";
}

//CHECK BUTTON
document.getElementById("check").onclick = function() {check()}; //listener

function check() {
    let userIN = document.getElementById("goal").innerHTML;
    console.log(userIN);
    
    local.Storage.setItem("userInput", userIn);
    
    window.location.href = "mygoal.html";
    
    document.getElementById("goal").innerHTML = localStorage.getItem("userInput");

}