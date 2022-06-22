/* 

Table of Contents

1. Create Effect for Hamburger Menu Lines
2. Transform Menu after Click

*/


// Create Effect for Hamburger Menu Lines
const header = document.querySelector (".header");
const menuIcon = document.querySelector (".hamburgerMenu");
var headerSection = document.getElementById("headerSection");

menuIcon.addEventListener("click", () => 
{
    header.classList.toggle("changeMenu");
});


// Transform Menu after Click 
$(document).ready(function() 
{
    $(".phoneLink").on("click", function() 
    {
        $(".header").removeClass("changeMenu");
    });
}); 