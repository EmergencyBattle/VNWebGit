var homebutton = document.getElementById("buttonhome");
var gamesbutton = document.getElementById("buttongames");
var illustbutton = document.getElementById("buttonillust");
var aboutbutton = document.getElementById("buttonabout");
var shopbutton = document.getElementById("buttonshop");

var hasrun = false;


function menuclick() {
    console.log("clicked");
    if (hasrun == true) {
        reverseHome();
        reverseGames();
        reverseIllust();
        reverseAbout();
        reverseShop();
        hasrun = false;
        console.log("trying to reverse");
    } else {
        moveHome();
        moveGames();
        moveIllust();
        moveAbout();
        moveShop();
        hasrun = true;
        console.log("trying to animate");
    }
}

function moveShop() {
    console.log("the function has started");
    var xpos = 0;
    var ypos = 0;
    var opacity = 0.0;
    var id = setInterval(frame, 1);
    function frame() {
        if (xpos == 120) {
            clearInterval(id);
        } else {
            xpos = (xpos + 1);
            ypos = (ypos + (1 * 0));
            opacity = (opacity + 0.01);
            shopbutton.style.bottom = ypos + 'px';
            shopbutton.style.left = xpos + 'px';
            shopbutton.style.opacity = opacity;
        }
    }
}

function reverseShop() {
    console.log("the function has started");
    var xpos = 120;
    var ypos = 0;
    var opacity = 1.0;
    var id = setInterval(frame, 1);
    function frame() {
        if (xpos == 0) {
            clearInterval(id);
        } else {
            xpos = (xpos - 1);
            ypos = (ypos - (1 * 0));
            opacity = (opacity - 0.01);
            shopbutton.style.bottom = ypos + 'px';
            shopbutton.style.left = xpos + 'px';
            shopbutton.style.opacity = opacity;
        }
    }
}

function moveAbout() {
    console.log("the function has started");
    var xpos = 0;
    var ypos = 0;
    var opacity = 0.0;
    var id = setInterval(frame, 6);
    function frame() {
        if (xpos == 80) {
            clearInterval(id);
        } else {
            xpos = (xpos + 1);
            ypos = (ypos + (1 * 1.0));
            opacity = (opacity + 0.02);
            aboutbutton.style.bottom = ypos + 'px';
            aboutbutton.style.left = xpos + 'px';
            aboutbutton.style.opacity = opacity;
        }
    }
}

function reverseAbout() {
    console.log("the function has started");
    var xpos = 80;
    var ypos = 80;
    var opacity = 1.0;
    var id = setInterval(frame, 6);
    function frame() {
        if (xpos == 0) {
            clearInterval(id);
        } else {
            xpos = (xpos - 1);
            ypos = (ypos - (1 * 1.0));
            opacity = (opacity - 0.02);
            aboutbutton.style.bottom = ypos + 'px';
            aboutbutton.style.left = xpos + 'px';
            aboutbutton.style.opacity = opacity;
        }
    }
}


function moveIllust() {
    console.log("the function has started");
    var xpos = 0;
    var ypos = 0;
    var opacity = 0.0;
    var id = setInterval(frame, 1);
    function frame() {
        if (ypos >= 108.0000000000002) {
            clearInterval(id);
        } else {
            xpos = (xpos + 0);
            ypos = (ypos + (1 * 0.9));
            opacity = (opacity + 0.01);
            illustbutton.style.bottom = ypos + 'px';
            illustbutton.style.right = xpos + 'px';
            illustbutton.style.opacity = opacity;
            console.log(xpos + " " + ypos)
        }
    }
}

function reverseIllust() {
    console.log("the function has started");
    var xpos = 0;
    var ypos = 108.0000000000002;
    var opacity = 1.0;
    var id = setInterval(frame, 1);
    function frame() {
        if (ypos <= 0) {
            clearInterval(id);
        } else {
            xpos = (xpos - 0);
            ypos = (ypos - (1 * 0.9));
            opacity = (opacity - 0.01);
            illustbutton.style.bottom = ypos + 'px';
            illustbutton.style.right = xpos + 'px';
            illustbutton.style.opacity = opacity;
            console.log(xpos + " " + ypos)
        }
    }
}

function moveGames() {
    console.log("the function has started");
    var xpos = 0;
    var ypos = 0;
    var opacity = 0.0;
    var id = setInterval(frame, 6);
    function frame() {
        if (xpos == 80) {
            clearInterval(id);
        } else {
            xpos = (xpos + 1);
            ypos = (ypos + (1 * 1.0));
            opacity = (opacity + 0.02);
            gamesbutton.style.bottom = ypos + 'px';
            gamesbutton.style.right = xpos + 'px';
            gamesbutton.style.opacity = opacity;
        }
    }
}

function reverseGames() {
    console.log("the function has started");
    var xpos = 80;
    var ypos = 80;
    var opacity = 1.0;
    var id = setInterval(frame, 6);
    function frame() {
        if (xpos == 0) {
            clearInterval(id);
        } else {
            xpos = (xpos - 1);
            ypos = (ypos - (1 * 1.0));
            opacity = (opacity - 0.02);
            gamesbutton.style.bottom = ypos + 'px';
            gamesbutton.style.right = xpos + 'px';
            gamesbutton.style.opacity = opacity;
        }
    }
}

function moveHome() {
    console.log("the function has started");
    var xpos = 0;
    var ypos = 0;
    var opacity = 0.0;
    var id = setInterval(frame, 1);
    function frame() {
        if (xpos == 120) {
            clearInterval(id);
        } else {
            xpos = (xpos + 1);
            ypos = (ypos + (1 * 0));
            opacity = (opacity+0.01);
            homebutton.style.bottom = ypos + 'px'; 
            homebutton.style.right = xpos + 'px';
            homebutton.style.opacity = opacity;
        }
    }
}

function reverseHome() {
    console.log("the function has started");
    var xpos = 120;
    var ypos = 0;
    var opacity = 1.0;
    var id = setInterval(frame, 1);
    function frame() {
        if (xpos == 0) {
            clearInterval(id);
        } else {
            xpos = (xpos - 1);
            ypos = (ypos - (1 * 0));
            opacity = (opacity - 0.01);
            homebutton.style.bottom = ypos + 'px';
            homebutton.style.right = xpos + 'px';
            homebutton.style.opacity = opacity;
        }
    }
}