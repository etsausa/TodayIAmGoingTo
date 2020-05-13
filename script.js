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
//function routes
function back() {//landing
    displayContent("landing");
}

function clearList() {
    localStorage.clear();
    console.log("cleared list?");
    
    list();
    
    localStorage.setItem("01", "off");
    localStorage.setItem("02", "off");
    localStorage.setItem("03", "off");
}

window.onload = (event) => {

    localStorage.setItem("01", "off");
    localStorage.setItem("02", "off");
    localStorage.setItem("03", "off");
    
    
};

 
function addGoal(name) {
    
    var one = "01";
    var two = "02";
    var three = "03";
    var selector;
    
    //figures out which goal is open
    if ( localStorage.getItem("01") == "off" ) {
        console.log("goal 01 selected");
        selector = one;
        localStorage.setItem("01", "on");
    } else if ( localStorage.getItem("02") == "off" ) {
        console.log("goal 02 selected");
        selector = two;
        localStorage.setItem("02", "on");
    } else {
        console.log("goal 03 selected");
        selector = three;
        localStorage.setItem("03", "on");
    }
        
    //generates id and value to display content of goal 
    var size = 5; //number of steps
    for (var i = 0; i <= size; i++) {
        
        var id = name + "_0" + i; 
        var key = "goal_" + selector + "_0" + i;
        var value = document.getElementById(id).innerHTML;
        
        console.log("Added data to local Storage:   " + id + "," + value);//logs data added

        localStorage.setItem(key, value);
    }
    list();//redirects 
}

function clearGoal(id) {
   
    var size = 5; //number of steps
    for (var i = 0; i <= size; i++) {
        var key = "goal_" + id + "_0" + i;
        
        console.log("Removed data from local Storage:   " + id);//logs data added

        localStorage.removeItem(key);
    }
    
    localStorage.setItem(id, "off");
    
    list();
    
    
    
}

//page routes
function list() {
    displayContent("myList");
}

function build() {
    displayContent("build");
}

function create() {
    displayContent("create");
}

function draw() {
    displayContent("draw");
}
function exercise() {
    displayContent("exercise");
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

function writing() {
    displayContent("writing");
}
//-----------------------------------------
