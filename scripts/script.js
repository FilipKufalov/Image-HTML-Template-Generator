/*
Author: Filip Kufalov
File Name: script.js
Date: 4/14/2022
*/

function CustomizablePost() {

    // We use strictly linking the IDs themselves directly to their textContext and replacing it with some value from an Input to save lines and not use variables
    // Example: for one function то changе тхе TextContext with a Value using a variable анд to write that њхоле function takes 3 lines and without it, it takes only 1 line
    // In short We have here 7*2(Variables) = 14 Lines , BoxBG & BoxInput are left just to present that how will look


    // Background Image
    var BoxBG = document.getElementById("boxID");
    var BoxInput = document.getElementById("input_customizable_background_image");
    BoxBG.style.backgroundImage = "url(" + BoxInput.value + ")";
    
    // Direct link without using variables can be seen below for the same function upper
    // document.getElementById("boxID").style.backgroundImage = "url(" + document.getElementById("input_customizable_background_image").value + ")";

    // Box Value for Width & Height
    document.getElementById("boxID").style.width = document.getElementById("input_customizable_box_width").value;
    document.getElementById("boxID").style.height = document.getElementById("input_customizable_box_height").value;

    // Youtube Input Value to Social Medias value
    document.getElementById("span_customizable_profile_yt").textContent = document.getElementById("input_customizable_profile_yt").value;
    
    // Instagram Input Value to Social Medias Value
    document.getElementById("span_customizable_profile_ig").textContent = document.getElementById("input_customizable_profile_ig").value;
    
    // TikTok Input Value to Social Medias Value
    document.getElementById("span_customizable_profile_tt").textContent = document.getElementById("input_customizable_profile_tt").value;

    // Facebook Input Value to Social Medias Value
    document.getElementById("span_customizable_profile_fb").textContent = document.getElementById("input_customizable_profile_fb").value;

    // Caption Input to Caption Display Value
    document.getElementById("customizablecaption").textContent = document.getElementById("input_customizable_caption").value;

    // if (document.getElementById("boxID").style.width = "1000px") {
    //     document.body.style.display = "block";
    // } else if ( document.getElementById("boxID").style.width = "999px" ) {
    //     document.body.style.display = "flex";
    // }
}

function ShowSocialMediaPlatform() {
    document.getElementById("socialmediadisplay").style.display = "block";
}

function HideSocialMediaPlatform() {
    document.getElementById("socialmediadisplay").style.display = "none";
}

function ShowCaption() {
    document.getElementById("customizablecaption").style.display = "block";
}

function HideCaption() {
    document.getElementById("customizablecaption").style.display = "none";
}