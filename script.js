//JQUERY code for loading different views
$(function () {
    //loads the inital view
    //looks for every tag with data-includes and loads the view
    var includes = $('[data-include]');

    jQuery.each(includes, function () {

        var file = 'views/' + $(this).data('include') + '.html';
        $(this).load(file);

    });
});

function displayContent(page) {
    //changes the source file
    //should take a string that is the file name (will add .html to end)
    var file = 'views/' + page + '.html';
    $("#pageContainer").load(file);

}
//-----------------------------------------

//ROUTES
function list() {
    displayContent("myList");
}

function back() {
    displayContent("landing");
}

function addGoal(name) {
    
    console.log("got here");
    
    for (var i = 0; i <= 5; i++) {
        var id = name + "_0" + i; 
        var key = "goal_" + "01" + "_0" + i;
        var value = document.getElementById(id).innerHTML;
        
        console.log(id + "," + value);

        localStorage.setItem(key, value);
    }
    list();
}

function check() {
    displayContent("goalexample");
}

function create() {
    displayContent("create");
}

function draw() {
    displayContent("draw");
}

function garden() {
    displayContent("garden");
}

function landing() {
    displayContent("landing");
}

function read() {
    displayContent("read");
}

function write() {
    displayContent("write");
}
//-----------------------------------------
