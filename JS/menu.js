/* 

Table of Contents

1. Create Effect for Hamburger Menu Lines
2. Transform Menu after Click

*/


// Create Effect for Hamburger Menu Lines
const header = document.querySelector (".header");
const menuIcon = document.querySelector (".hamburgerMenu");
const mobileMenuIcon = document.querySelector (".hamburgerAreaMobile");


menuIcon.addEventListener("click", () => 
{
    header.classList.toggle("changeMenu");
});


mobileMenuIcon.addEventListener("click", () => 
{
    header.classList.toggle("changeMenuMobile");
});


// Transform Menu after Click 
$(document).ready(function() 
{
    $(".phoneLink").on("click", function() 
    {
        $(".header").removeClass("changeMenuMobile");
    });
}); 


// Close Header Menu on the Right After Scroll
$(window).scroll(function() 
{
    if($(window).scrollTop() > 0) 
    {
        $(".header").addClass("changeMenuClose");
    }
});