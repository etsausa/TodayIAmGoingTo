$(function () {
    var includes = $('[data-include]');

    jQuery.each(includes, function () {

        var file = 'views/' + $(this).data('include') + '.html';
        $(this).load(file);

    });
});

function displayContent(page) {
    //changes the view
    var file = 'views/' + page + '.html';
    $("#pageContainer").load(file);

}

let quotes = [
    "today i am going to exercise",
    "today i am going to read",
    "today i am going to write",
    "today i am going to code",
    "today i am going to study",
    "today i am going to work on my resume"
]

function check() {
    displayContent("goalexample");
}



/*

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
*/
