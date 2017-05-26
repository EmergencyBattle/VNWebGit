// JavaScript source code
var thesismodal = document.getElementById("thesisModal");

// Get the button that opens the modal
var thesisthumb = document.getElementById("thesis");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("projectclose")[0];

// When the user clicks on the button, open the modal
thesisthumb.onclick = function () {

    thesismodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    thesismodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        thesismodal.style.display = "none";
    }
}