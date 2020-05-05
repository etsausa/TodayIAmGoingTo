let quotes = [
    "today i am going to exercise",
    "today i am going to read",
    "today i am going to write",
    "today i am going to code",
    "today i am going to study",
    "today i am going to work on my resume"
]



//REFRESH BUTTON
document.getElementById("refresh").onclick = function () {
    refresh()
}; //listener

function refresh() {
    //'randomly' pick one of the three possible goals
    document.getElementById("goal").innerHTML = quotes[Math.floor(Math.random() * 6)];
}

//NEW BUTTON
document.getElementById("new").onclick = function () {
    clear()
}; //listener

function clear() {
    //sets data of goal to nothing
    document.getElementById("goal").innerHTML = "";
}

//CHECK BUTTON
document.getElementById("check").onclick = function () {
    check()
}; //listener

function check() {
    var goal = document.getElementById("goal");
    var userIN = document.getElementById("goal").innerHTML;

    console.log(userIN);

    localStorage.setItem("userInput", userIN);

    window.location.href = "mygoal.html"; 

   
}
