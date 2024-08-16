"use strict"

// DOM elements
const bg = document.querySelector(".bg");
const menu = document.querySelector(".menu");
const view_wh = document.querySelector(".view-wh");
const menu_wh = document.getElementById("wh");
const view_mth = document.querySelector(".view-mth");
const menu_mth = document.getElementById("mth");
const view_wi = document.querySelector(".view-wi");
const view_wi_office = document.querySelector(".view-wi-office");
const view_wi_kitchen = document.querySelector(".view-wi-kitchen");
const view_wi_bed = document.querySelector(".view-wi-bed");
const menu_wi = document.getElementById("wi");
const view_hat = document.querySelector(".view-hat");
const menu_hat = document.getElementById("hat");
const go_left = document.getElementById("go_left");
const go_down = document.getElementById("go_down");
const go_right = document.getElementById("go_right");
const back_btn = document.querySelector(".back-btn");
const root = document.documentElement.style;

// Control variables
let inExecution = false;
let enableArrows = false;

// DOM Onload
document.addEventListener("DOMContentLoaded", function() {

    // Set the active menu
    menu_wh.classList.add("active");

    // load page events
    loadEvents();
});

// EVENTS
function loadEvents() {

    // Arrow navigation
    window.addEventListener('keydown', function(event) {
        const key = event.key;
        
        if (enableArrows) {
            if (key == "ArrowRight") goRight();
            else if (key == "ArrowLeft") goLeft();
            else if (key == "ArrowDown") goDown();
        }
    });

    go_left.addEventListener("click", function(){
        if (enableArrows) goLeft();
    });

    go_down.addEventListener("click", function(){
        if (enableArrows) goDown();
    });

    go_right.addEventListener("click", function(){
        if (enableArrows) goRight();
    });

    // Back navigation
    back_btn.addEventListener("click", async () => {
        removeWI();
    });

    // Welcome home navigation
    menu_wh.addEventListener("click", async () => {

        if (!inExecution) {

            // Flag the execution variable
            inExecution = true;

            // set the root theme
            root.setProperty('--theme', "#dc4963");

            // deactivate menu items
            deactivateMenu();
            menu_wh.classList.add("active");

            // remove content
            removeContent();

            // BG transition
            animateF2();
            await sleep(1500);
            animateWH();

            // Display the new content
            await sleep(1500);
            view_wh.classList.remove("out");

            // Free the execution variable
            inExecution = false;
        }
    });

    // Meet the host navigation
    menu_mth.addEventListener("click", async () => {

        if (!inExecution) {

            // Flag the execution variable
            inExecution = true;

            // set the root theme
            root.setProperty('--theme', "#956c20");

            // deactivate menu items
            deactivateMenu();
            menu_mth.classList.add("active");

            // remove content
            removeContent();

            // BG transition
            animateF2();
            await sleep(1500);
            animateMTH();

            // Display the new content
            await sleep(1500);
            view_mth.classList.remove("out");

            // Free the execution variable
            inExecution = false;
        }
    });

    // What is inside navigation
    menu_wi.addEventListener("click", async () => {

        if (!inExecution) {

            // Flag the execution variable
            inExecution = true;

            // set the root theme
            root.setProperty('--theme', "#081144")

            // deactivate menu items
            deactivateMenu();
            menu_wi.classList.add("active");

            // remove content
            removeContent();

            // BG transition
            animateF2();
            await sleep(1500);
            animateWI();

            // Display the new content
            await sleep(1500);
            view_wi.classList.remove("out");

            // Free the execution variable
            inExecution = false;
            enableArrows = true;
        }
    });

    // Here and there navigation
    menu_hat.addEventListener("click", async () => {

        if (!inExecution) {

            // Flag the execution variable
            inExecution = true;

            // set the root theme
            root.setProperty('--theme', "#104408")

            // deactivate menu items
            deactivateMenu();
            menu_hat.classList.add("active");

            // remove content
            removeContent();

            // BG transition
            animateF2();
            await sleep(1500);
            animateHAT();

            // Display the new content
            await sleep(1500);
            view_hat.classList.remove("out");

            // Free the execution variable
            inExecution = false;
        }
    });
}

// Remove active class
function deactivateMenu(){
    menu_wh.classList.remove("active");
    menu_mth.classList.remove("active");
    menu_hat.classList.remove("active");
    menu_wi.classList.remove("active");
}

// Remove content from page
function removeContent() {
    view_wh.classList.add("out");
    view_mth.classList.add("out");
    view_wi.classList.add("out");
    view_hat.classList.add("out");
}

// Animate the bg to the second frame
function animateF2() {
    bg.classList.remove("a-wh");
    bg.classList.remove("a-mth");
    bg.classList.remove("a-wi");
    bg.classList.remove("a-hat");
    bg.classList.add("frame2");
}

// Animate the bg to the section welcome home
function animateWH() {
    bg.classList.remove("frame2");
}

// Animate the bg to the section meet the host
function animateMTH() {
    bg.classList.add("a-mth");
    bg.classList.remove("frame2");
}

// Animate the bg to the section what is inside
function animateWI() {
    bg.classList.add("a-wi");
    bg.classList.remove("frame2");
}

// Animate the bg to the section here and there
function animateHAT() {
    bg.classList.add("a-hat");
    bg.classList.remove("frame2");
}

// Animate the go left transition
async function goLeft() {
    enableArrows = false;
    bg.classList.remove("a-wi");
    bg.classList.add("a-left");
    view_wi.classList.add("out");
    menu.classList.add("out");
    await sleep(500);
    back_btn.style = "background-color: var(--peach); transform: rotate(180deg)";
    back_btn.classList.remove("out");
    view_wi_office.classList.remove("out");
}

// Animate the go down transition
async function goDown() {
    enableArrows = false;
    bg.classList.remove("a-wi");
    bg.classList.add("a-down");
    view_wi.classList.add("out");
    menu.classList.add("out");
    await sleep(500);
    back_btn.style = "background-color: var(--peach); transform: rotate(90deg)";
    back_btn.classList.remove("out");
    view_wi_kitchen.classList.remove("out");
}

// Animate the go right transition
async function goRight() {
    enableArrows = false;
    bg.classList.remove("a-wi");
    bg.classList.add("a-right");
    view_wi.classList.add("out");
    menu.classList.add("out");
    await sleep(500);
    back_btn.style = "background-color: var(--gold)";
    back_btn.classList.remove("out");
    view_wi_bed.classList.remove("out");
}

// Remove subcontent
async function removeWI() {
    enableArrows = true;
    bg.classList.remove("a-right");
    bg.classList.remove("a-down");
    bg.classList.remove("a-left");
    view_wi_office.classList.add("out");
    view_wi_kitchen.classList.add("out");
    view_wi_bed.classList.add("out");
    menu.classList.remove("out");
    bg.classList.add("a-wi");
    await sleep(500);
    view_wi.classList.remove("out");
    back_btn.classList.add("out");
    back_btn.style = "";
}

// Common functions
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}