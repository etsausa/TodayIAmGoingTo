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

//STORAGE
localStorage.setItem("goal01","goal 01");
localStorage.setItem("goal02","goal 02");
localStorage.setItem("goal03","goal 03");

//-----------------------------------------

//ROUTES
function check() {
    displayContent("goalexample");
}
function writing() {
    displayContent("writing");
}
function draw() {
    displayContent("draw");  
}

function list(){
    displayContent("myList");
}
//-----------------------------------------



