window.onscroll = function() {myFunction()};
var stickyArea = document.getElementById("stickyMenu");
var stickyOffset = stickyArea.offsetTop;
const screens2400 = window.matchMedia('(min-width:1921px) and (max-width:2400px)');
const screens3000 = window.matchMedia('(min-width:2401px) and (max-width:3000px)');
const screens3750 = window.matchMedia('(min-width:3001px) and (max-width:3750px)');
const screensLarge = window.matchMedia('(min-width:3751px)');

function myFunction() 
{
    if (window.pageYOffset >= 100) 
    {
        stickyArea.classList.add("stickyMenu");
    } 
    else 
    {
        stickyArea.classList.remove("stickyMenu");
    } 
}


if (screens2400.matches) {
    function myFunction() {
        if (window.pageYOffset >= 125) {
            stickyArea.classList.add("stickyMenu");
        } else {
            stickyArea.classList.remove("stickyMenu");
        } 
    }
}


if (screens3000.matches) {
    function myFunction() {
        if (window.pageYOffset >= 156) {
            stickyArea.classList.add("stickyMenu");
        } else {
            stickyArea.classList.remove("stickyMenu");
        } 
    }
}


if (screens3750.matches) {
    function myFunction() {
        if (window.pageYOffset >= 195) {
            stickyArea.classList.add("stickyMenu");
        } else {
            stickyArea.classList.remove("stickyMenu");
        } 
    }
}


if (screensLarge.matches) {
    function myFunction() {
        if (window.pageYOffset >= 244) {
            stickyArea.classList.add("stickyMenu");
        } else {
            stickyArea.classList.remove("stickyMenu");
        } 
    }
}