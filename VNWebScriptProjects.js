// JavaScript source code
//var thesismodal = document.getElementById("thesisModal");
var pipermodal = document.getElementById("piperModal");
var myynmodal = document.getElementById("myynModal");
var skyskarmodal = document.getElementById("skyskarModal");
var istwtmodal = document.getElementById("istwtModal");
var lumbermodal = document.getElementById("lumberModal");
var mycellmodal = document.getElementById("mycellModal");
var ppmodal = document.getElementById("ppModal");
var awdmodal = document.getElementById("awdModal");


// Get the button that opens the modal
//var thesisthumb = document.getElementById("thesis");
var piperthumb = document.getElementById("piper");
var myynthumb = document.getElementById("myyn");
var skyskarthumb = document.getElementById("skyskar");
var istwtthumb = document.getElementById("istwt");
var lumberthumb = document.getElementById("lumber");
var mycellthumb = document.getElementById("mycell");
var ppthumb = document.getElementById("pp");
var awdthumb = document.getElementById("awd");

// Get the <span> element that closes the modal
//var thesisClose = document.getElementById("thesisclose");
//var thesisCtc = document.getElementById("thesisctc");
var piperClose = document.getElementById("piperclose");
var piperCtc = document.getElementById("piperctc");
var myynClose = document.getElementById("myynclose");
var myynCtc = document.getElementById("myynctc");
var skyskarClose = document.getElementById("skyskarclose");
var skyskarCtc = document.getElementById("skyskarctc");
var istwtClose = document.getElementById("istwtclose");
var istwtCtc = document.getElementById("istwtctc");
var lumberClose = document.getElementById("lumberclose");
var lumberCtc = document.getElementById("lumberctc");
var mycellClose = document.getElementById("mycellclose");
var mycellCtc = document.getElementById("mycellctc");
var ppClose = document.getElementById("ppclose");
var ppCtc = document.getElementById("ppctc");
var awdClose = document.getElementById("awdclose");
var awdCtc = document.getElementById("awdctc");

// When the user clicks on the button, open the modal
//thesisthumb.onclick = function () {
//    thesismodal.style.display = "block";
//}
piperthumb.onclick = function () {
    pipermodal.style.display = "block";
}
myynthumb.onclick = function () {
    myynmodal.style.display = "block";
}
skyskarthumb.onclick = function () {
    skyskarmodal.style.display = "block";
}
istwtthumb.onclick = function () {
    istwtmodal.style.display = "block";
}
lumberthumb.onclick = function () {
    lumbermodal.style.display = "block";
}
mycellthumb.onclick = function () {
    mycellmodal.style.display = "block";
}
ppthumb.onclick = function () {
    ppmodal.style.display = "block";
}
awdthumb.onclick = function () {
    awdmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
//thesisClose.onclick = function () {
//    thesismodal.style.display = "none";
//}
//thesisCtc.onclick = function () {
//    thesismodal.style.display = "none";
//}
piperClose.onclick = function () {
    pipermodal.style.display = "none";
}
piperCtc.onclick = function () {
    pipermodal.style.display = "none";
}
myynClose.onclick = function () {
    myynmodal.style.display = "none";
}
myynCtc.onclick = function () {
    myynmodal.style.display = "none";
}
skyskarClose.onclick = function () {
    skyskarmodal.style.display = "none";
}
skyskarCtc.onclick = function () {
    skyskarmodal.style.display = "none";
}
istwtClose.onclick = function () {
    istwtmodal.style.display = "none";
}
istwtCtc.onclick = function () {
    istwtmodal.style.display = "none";
}
lumberClose.onclick = function () {
    lumbermodal.style.display = "none";
}
lumberCtc.onclick = function () {
    lumbermodal.style.display = "none";
}
mycellClose.onclick = function () {
    mycellmodal.style.display = "none";
}
mycellCtc.onclick = function () {
    mycellmodal.style.display = "none";
}
ppClose.onclick = function () {
    ppmodal.style.display = "none";
}
ppCtc.onclick = function () {
    ppmodal.style.display = "none";
}
awdClose.onclick = function () {
    awdmodal.style.display = "none";
}
awdCtc.onclick = function () {
    awdmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
//    if (event.target == thesismodal) {
//        thesismodal.style.display = "none";
//    }
    if (event.target == pipermodal) {
        pipermodal.style.display = "none";
    }
    if (event.target == myynmodal) {
        myynmodal.style.display = "none";
    }
    if (event.target == skyskarmodal) {
        skyskarmodal.style.display = "none";
    }
    if (event.target == istwtmodal) {
        istwtmodal.style.display = "none";
    }
    if (event.target == lumbermodal) {
        lumbermodal.style.display = "none";
    }
    if (event.target == mycellmodal) {
        mycellmodal.style.display = "none";
    }
    if (event.target == ppmodal) {
        ppmodal.style.display = "none";
    }
	if (event.target == awdmodal) {
        awdmodal.style.display = "none";
    }
}