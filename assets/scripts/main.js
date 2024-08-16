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
const view_hat_photo = document.querySelector(".view-hat-photo");
const view_hat_plants = document.querySelector(".view-hat-plants");
const view_hat_music = document.querySelector(".view-hat-music");
const menu_hat = document.getElementById("hat");
const circle_photo = document.getElementById("circle_photo");
const circle_plants = document.getElementById("circle_plants");
const circle_music = document.getElementById("circle_music");
const menu_pg = document.getElementById("pg");
const view_pg = document.querySelector(".view_pg");
const go_left = document.getElementById("go_left");
const go_down = document.getElementById("go_down");
const go_right = document.getElementById("go_right");
const back_btn = document.querySelector(".back-btn");
const up_btn = document.querySelector(".up-btn");
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

    // Up navigation
    up_btn.addEventListener("click", async () => {
        bg.classList.remove("a-hat-down");
        view_hat_music.classList.add("out");
        view_hat_photo.classList.add("out");
        view_hat_plants.classList.add("out");
        menu.classList.remove("out");
        bg.classList.add("a-hat");
        await sleep(500);
        view_hat.classList.remove("out");
        up_btn.classList.add("out");
    });

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
            enableArrows = false;

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

    // Playground
    menu_pg.addEventListener("click", async () => {

        if (!inExecution) {
            enableArrows = false;

            // Flag the execution variable
            inExecution = true;

            // set the root theme
            root.setProperty('--theme', "#af6518");

            // deactivate menu items
            deactivateMenu();
            menu_pg.classList.add("active");

            // remove content
            removeContent();

            // BG transition
            animateF2();
            await sleep(1500);
            animatePG();

            // Display the new content
            await sleep(1500);
            view_pg.classList.remove("out");

            // Free the execution variable
            inExecution = false;
        }
    });

    // Meet the host navigation
    menu_mth.addEventListener("click", async () => {

        if (!inExecution) {
            enableArrows = false;

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
            enableArrows = false;

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

    circle_photo.addEventListener("click", async () => {
        fillPhoto();
    });

    circle_plants.addEventListener("click", async () => {
        fillPlants();
    });

    circle_music.addEventListener("click", async () => {
        fillMusic();
    });
}

// Remove active class
function deactivateMenu(){
    menu_wh.classList.remove("active");
    menu_mth.classList.remove("active");
    menu_hat.classList.remove("active");
    menu_wi.classList.remove("active");
    menu_pg.classList.remove("active");
}

// Remove content from page
function removeContent() {
    view_wh.classList.add("out");
    view_mth.classList.add("out");
    view_wi.classList.add("out");
    view_hat.classList.add("out");
    view_pg.classList.add("out");
}

// Animate the bg to the second frame
function animateF2() {
    bg.classList.remove("a-wh");
    bg.classList.remove("a-mth");
    bg.classList.remove("a-wi");
    bg.classList.remove("a-hat");
    bg.classList.remove("a-pg")
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

// Animate the bg to the section playground
function animatePG() {
    bg.classList.add("a-pg");
    bg.classList.remove("frame2");
}

// Fill photo section
async function fillPhoto() {
    view_hat.classList.add("out");
    menu.classList.add("out");
    bg.classList.remove("a-hat");
    bg.classList.add("a-hat-down");
    await sleep(500);
    up_btn.classList.remove("out");
    view_hat_photo.classList.remove("out");
}

// Fill plants section
async function fillPlants() {
    view_hat.classList.add("out");
    menu.classList.add("out");
    bg.classList.remove("a-hat");
    bg.classList.add("a-hat-down");
    await sleep(500);
    up_btn.classList.remove("out");
    view_hat_plants.classList.remove("out");
}

// Fill music section
async function fillMusic() {
    view_hat.classList.add("out");
    menu.classList.add("out");
    bg.classList.remove("a-hat");
    bg.classList.add("a-hat-down");
    await sleep(500);
    up_btn.classList.remove("out");
    view_hat_music.classList.remove("out");
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










/* GENERAZIONE DOMANDE DEL QUIZ : 7 DOMANDE CON 8 risposte OGNUNA.*********************************************************************************/
/*FUNZIONI*/
let index = 0;
function stamp() {
    let printer = document.getElementById("printer");
    printer.addEventListener("click", function () {
        window.print();
    });
}
function resetCategoryCounts() {
    categorycounts = [
        {
            valore: 0,
            keyword: "newidentities",
        },
        {
            valore: 0,
            keyword: "digital",
        },
        {
            valore: 0,
            keyword: "colors",
        },
        {
            valore: 0,
            keyword: "comfort",
        },
        {
            valore: 0,
            keyword: "artists",
        },
        {
            valore: 0,
            keyword: "must",
        },
        {
            valore: 0,
            keyword: "nights",
        },
    ];
}
function back() {
    let back = document.getElementById("arrow");
    back.addEventListener("click", function () {
        document.getElementById("intropage_quiz").style.display = "flex";
        document.getElementById("quiz").style.display = "none";
        document.getElementById("quizresult").style.display = "none";
        document.getElementById("menu").style.display="flex";
      
          // Ripristina i contenuti del quiz
            t2.innerHTML = "";
            t3.innerHTML = "";
            step1.innerHTML = "";
            step2.innerHTML = "";
            step3.innerHTML = "";
            step4.innerHTML = "";
            step5.innerHTML = "";
            step6.innerHTML = "";
            step7.innerHTML = "";
            pin1.style.backgroundImage = ``;
            pin2.style.backgroundImage = ``;
            pin3.style.backgroundImage = ``;
            pin4.style.backgroundImage = ``;
            pin5.style.backgroundImage = ``;
            pin6.style.backgroundImage = ``;
            pin7.style.backgroundImage = ``;
            
          
          // Ripristina immagini, sfondi e altri elementi se necessario
  
          // Ripristina variabili di stato
          resetCategoryCounts();
          index = 0;
          rispostequiz = [];
          categoriaConMassimoConteggio = "";
          massimoConteggio = 0;
          indiceValoreMassimo = 0;
    });
}
/*------------------------------------------------------INTRO QUIZ-------------------------------------------------------------------------------- */
// Aggiungi un gestore di eventi al clic del bottone
document.getElementById("start_quiz").addEventListener("click", function () {
    // Nascondi la pagina iniziale
    document.getElementById("intropage_quiz").style.display = "none";
    document.getElementById("menu").style.display="none";
    
    // Mostra la pagina del quiz
    document.getElementById("quiz").style.display = "flex";
    resetCategoryCounts();
    index = 0;
    /*All'interno dell'elemento QUESTION dell'HTML, si inserisce attraverso JS la domanda*/
    question.innerHTML = domandequiz[index].domanda;
    /*All'interno dell'elemento RISPOSTA dell'HTML, si inserisce attraverso JS il valore della risposta
    QUESTO CORRISPONDE ALLA PRIMA ASSOCIAZIONE DOMANDA/RISPOSTE*/
    risposta1.innerHTML = domandequiz[index].risposte[0].valore;
    risposta2.innerHTML = domandequiz[index].risposte[1].valore;
    risposta3.innerHTML = domandequiz[index].risposte[2].valore;
    risposta4.innerHTML = domandequiz[index].risposte[3].valore;
    risposta5.innerHTML = domandequiz[index].risposte[4].valore;
    risposta6.innerHTML = domandequiz[index].risposte[5].valore;
    risposta7.innerHTML = domandequiz[index].risposte[6].valore;
    page.innerHTML = index + 1 + "/" + total;
    coloredomanda.style.color = style_domandequiz[index].coloredomanda;
    colorerisposta1.style.color = style_domandequiz[index].colorerisposta1;
    colorerisposta2.style.color = style_domandequiz[index].colorerisposta2;
    colorerisposta3.style.color = style_domandequiz[index].colorerisposta3;
    colorerisposta4.style.color = style_domandequiz[index].colorerisposta4;
    colorerisposta5.style.color = style_domandequiz[index].colorerisposta5;
    colorerisposta6.style.color = style_domandequiz[index].colorerisposta6;
    colorerisposta7.style.color = style_domandequiz[index].colorerisposta7;
    colorepage.style.color = style_domandequiz[index].coloredomanda;
});
/*Al CLICK viene associata l'esecuzione di una funzione NEXTQUESTIONE, che fa andare avanti, percorrendo tutto l'elenco di oggetti domande/risposte
presenti all'interno dell'array domandequiz*/
/*------------------------------------------------------ QUIZ-------------------------------------------------------------------------------- */
let domandequiz = [
    /*DOMANDA 1 */
    {
        domanda: "What type of music do you listen to?",
        risposte: [
            {
                valore: "Indie/Rock: nights, where music is free and the soul is unleashed.",
                keyword: "nights",
            },
            {
                valore: "Pop: the songs that everyone sings and dances too, always and everywhere.",
                keyword: "must",
            },
            {
                valore: "Electronic: the music of the future, taking us to a world of electronic sounds and driving beats.",
                keyword: "digital",
            },
            {
                valore: "Hip-hop: the genre that gives a voice to young people and new cultures, to express themselves and their identity.",
                keyword: "newidentities",
            },
            {
                valore: "Jazz: the music that relaxes and accompanies us in moments of comfort, with its improvised melodies and syncopated rhythms.",
                keyword: "comfort",
            },
            {
                valore: "Classic: the great artists of classical music, who have given us immortal masterpieces.",
                keyword: "artists",
            },
            {
                valore: "Blues: the music of feelings, telling us the deepest emotions of the soul, and its colors.",
                keyword: "colors",
            },
        ]
    },
    /* DOMANDA 2*/
    {
        domanda: "What type of built environment do you prefer?",
        risposte: [
            {
                valore: "I prefer ancient and historical built environments, rich in cultural heritage.",
                keyword: "comfort",
            },
            {
                valore: "I appreciate landmarks and iconic places in a city.",
                keyword: "must",
            },
            {
                valore: "I'm drawn to places where artisans and creatives gather, fostering a vibrant atmosphere.",
                keyword: "artists",
            },
            {
                valore: "I prefer well-planned urban areas with modern amenities.",
                keyword: "digital",
            },
            {
                valore: "I love cities that are rich in vibrant shades, adding character to the environment.",
                keyword: "colors",
            },
            {
                valore: "I enjoy the bustling nightlife of cities, with plenty of entertainment options.",
                keyword: "nights",
            },
            {
                valore: "I'm intrigued by places with new identities, often shaped by innovation and advancements.",
                keyword: "newidentities",
            },
        ]
    },
    /* DOMANDA 3*/
    {
        domanda: "Where do you usually stay when you travel?",
        risposte: [
            {
                valore: "I typically stay in innovative hotels, where I can enjoy both the tranquillity and convenience they offer while staying at the forefront of technology advancements.",
                keyword: "digital",
            },
            {
                valore: "I prefer pleasant accommodations that provide a relaxing stay.",
                keyword: "comfort",
            },
            {
                valore: "I prioritize top places and landmarks when choosing where to stay.",
                keyword: "must",
            },
            {
                valore: "I'm drawn to places with vibrant tints and artistic decor.",
                keyword: "colors",
            },
            {
                valore: "I seek accommodations that showcase local artisans and their work.",
                keyword: "artists",
            },
            {
                valore: "I opt for unique accommodation options that embrace new identities and concepts.",
                keyword: "newidentities",
            },
            {
                valore: "I like places that offer easy access to the vibrant nightlife of the city.",
                keyword: "nights",
            },
        ]
    },
    /* DOMANDA 4*/
    {
        domanda: "How do you approach new cultures and innovation?",
        risposte: [
            {
                valore: "I enthusiastically embrace new cultures and change, welcoming innovative experiences.",
                keyword: "digital",
            },
            {
                valore: "I'm genuinely curious about others, and I'm drawn to the vibrant tints and artistic expressions they offer.",
                keyword: "artists",
            },
            {
                valore: "I tend to prefer my own cultural environment and familiar traditions, but I'm open to visit places that offer unique experiences.",
                keyword: "comfort",
            },
            {
                valore: "I'm excited about discovering new cultures, especially through the dynamic nightlife scenes in different places.",
                keyword: "nights",
            },
            {
                valore: "I'm naturally curious about others, exploring new identities.",
                keyword: "newidentities",
            },
            {
                valore: "I prefer staying within the bounds of my cultural environment, relishing familiar traditions, and making time for landmarks.",
                keyword: "must",
            },
            {
                valore: "I have a deep appreciation for new cultures and welcome change and innovation, immersing myself in the rich culture of Milan.",
                keyword: "colors",
            },
        ]
    },
    /* DOMANDA 5*/
    {
        domanda: "What is your lifestyle in relation to fashion and bustling environments? ",
        risposte: [
            {
                valore: "My lifestyle is a reflection of the latest trends and the allure of bustling crowds.",
                keyword: "must",
            },
            {
                valore: "I find my rhythm in the vibrant night and bustling streets, where the city's beauty shines brightest after dark.",
                keyword: "nights",
            },
            {
                valore: "I have an artistic soul that transcends fashion trends, focusing on personal tastes and the inherent beauty of individuality.",
                keyword: "artists",
            },
            {
                valore: "I'm an advocate for the unconventional, celebrating unique forms of beauty and embracing the unconventional.",
                keyword: "newidentities",
            },
            {
                valore: "Fashion is not merely an interest for me; it's a way of life, and I'm passionate about it.",
                keyword: "comfort",
            },
            {
                valore: "I'm captivated by innovative places where cutting-edge concepts blend with mainstream charm, representing a unique form of beauty.",
                keyword: "digital",
            },
            {
                valore: "I'm not particularly interested in fashion or crowded places. Instead, I seek out the serene, hidden beauty that escapes the mainstream.",
                keyword: "colors",
            },
        ]
    },
    /* DOMANDA 6*/
    {
        domanda: "In which historical period would you like to live and visit?",
        risposte: [
            {
                valore: "I'd love to experience Milan during the Renaissance era, the districts previously separated and somewhat notorious. Today a vibrant testament to Milan's transformation, combining the old and new in a unique way.",
                keyword: "newidentities",
            },
            {
                valore: "The industrial revolution and thriving art scene of that time fascinate me, offering a unique perspective on the city's history.",
                keyword: "digital",
            },
            {
                valore: "I'm drawn to the elegance of the 19th century, where Milan's aristocracy once lived, and exploring the city's historical charm.",
                keyword: "colors",
            },
            {
                valore: "The chic and glamorous atmosphere of the mid-20th century captures my imagination, highlighting Milan's style and sophistication.",
                keyword: "comfort",
            },
            {
                valore: "Exploring the narrow streets and artistic history of a particular district during the 18th century appeals to me, offering an authentic experience.",
                keyword: "artists",
            },
            {
                valore: "The Renaissance era and the grandeur of a particular historical site are my historical interests, symbolizing Milan's heritage.",
                keyword: "must",
            },
            {
                valore: "A modern perspective on Milan's late 20th-century transformation and its picturesque canal.",
                keyword: "nights",
            },
        ]
    },
    /* DOMANDA 7*/
    {
        domanda: "What are your expectations and desires when it comes to Milan?",
        risposte: [
            {
                valore: "I expect Milan to be a top destination, and I look forward to discovering its popular attractions.",
                keyword: "must",
            },
            {
                valore: "I'm excited to explore Milan's artistic side and appreciate its unique charm.",
                keyword: "artists",
            },
            {
                valore: "I look forward to experiencing the opulence and sophistication of Milan's rich culture.",
                keyword: "comfort",
            },
            {
                valore: "I'm technologically curious about Milan and eager to uncover its hidden treasures.",
                keyword: "digital",
            },
            {
                valore: "Milan's nightlife scene intrigues me, and I'd like to experience its vibrant energy.",
                keyword: "nights",
            },
            {
                valore: "I'm drawn to Milan's colorful culture and am eager to immerse myself in it.",
                keyword: "colors",
            },
            {
                valore: "I'm open to new identities and unexpected surprises in Milan, ready to embrace the unconventional.",
                keyword: "newidentities",
            },
        ]
    },
];
/*****************************************************FINE DOMANDE*****************************************************************/
let style_domandequiz = [
    /*colors */
    {
        coloredomanda: "var(--colorful)",
        colorerisposta1: "var(--shcolorful)",
        colorerisposta2: "var(--shcolorful)",
        colorerisposta3: "var(--shcolorful)",
        colorerisposta4: "var(--shcolorful)",
        colorerisposta5: "var(--shcolorful)",
        colorerisposta6: "var(--shcolorful)",
        colorerisposta7: "var(--shcolorful)",
        immagine: "assets/images/a1.png",
    },
    /* DOMANDA 2*/
    {
        coloredomanda: "var(--artistic)",
        colorerisposta1: "var(--shartistic)",
        colorerisposta2: "var(--shartistic)",
        colorerisposta3: "var(--shartistic)",
        colorerisposta4: "var(--shartistic)",
        colorerisposta5: "var(--shartistic)",
        colorerisposta6: "var(--shartistic)",
        colorerisposta7: "var(--shartistic)",
        immagine: "assets/images/a2.png",
    },
    /* DOMANDA 3*/
    {
        coloredomanda: "var(--reborn)",
        colorerisposta1: "var(--shreborn)",
        colorerisposta2: "var(--shreborn)",
        colorerisposta3: "var(--shreborn)",
        colorerisposta4: "var(--shreborn)",
        colorerisposta5: "var(--shreborn)",
        colorerisposta6: "var(--shreborn)",
        colorerisposta7: "var(--shreborn)",
        immagine: "assets/images/a3.png",
    },
    /* DOMANDA 4*/
    {
        coloredomanda: "var(--building)",
        colorerisposta1: "var(--shbuilding)",
        colorerisposta2: "var(--shbuilding)",
        colorerisposta3: "var(--shbuilding)",
        colorerisposta4: "var(--shbuilding)",
        colorerisposta5: "var(--shbuilding)",
        colorerisposta6: "var(--shbuilding)",
        colorerisposta7: "var(--shbuilding)",
        immagine: "assets/images/a4.png",
    },
    /* DOMANDA 5*/
    {
        coloredomanda: "var(--futuristic)",
        colorerisposta1: "var(--shfuturistic)",
        colorerisposta2: "var(--shfuturistic)",
        colorerisposta3: "var(--shfuturistic)",
        colorerisposta4: "var(--shfuturistic)",
        colorerisposta5: "var(--shfuturistic)",
        colorerisposta6: "var(--shfuturistic)",
        colorerisposta7: "var(--shfuturistic)",
        immagine: "assets/images/a5.png",
    },
    /* DOMANDA 6*/
    {
        coloredomanda: "var(--classic)",
        colorerisposta1: "var(--shclassic)",
        colorerisposta2: "var(--shclassic)",
        colorerisposta3: "var(--shclassic)",
        colorerisposta4: "var(--shclassic)",
        colorerisposta5: "var(--shclassic)",
        colorerisposta6: "var(--shclassic)",
        colorerisposta7: "var(--shclassic)",
        immagine: "assets/images/a6.png",
    },
    /* DOMANDA 7*/
    {
        coloredomanda: "var(--artistic)",
        colorerisposta1: "var(--shartistic)",
        colorerisposta2: "var(--shartistic)",
        colorerisposta3: "var(--shartistic)",
        colorerisposta4: "var(--shartistic)",
        colorerisposta5: "var(--shartistic)",
        colorerisposta6: "var(--shartistic)",
        colorerisposta7: "var(--shartistic)",
        immagine: "assets/images/a7.png",
    },
];
let inputtour = [
    /*COLORS */
    {
        t2: "THE COLOURFUL TOUR:",
        t3: "Immerse yourself in the vibrant hues of Milan, unveiling a kaleidoscope of colors and stories waiting to be discovered.",
        coloret2: "var(--colorful)",
        coloresteps: "var(--shcolorful)",
        immagine_pin: "assets/images/colorfulTour_pin.png",
        immagine_pinstar: "assets/images/star_pin.png",
        immagine_map: "assets/images/colorfulTour.png",
    },
    /* ARTISTS 2*/
    {
        t2: "THE ARTISTIC TOUR:",
        t3: "Immerse yourself in Milan's vibrant art scene.",
        coloret2: "var(--artistic)",
        coloresteps: "var(--shartistic)",
        immagine_pin: "assets/images/artisticTour_pin.png",
        immagine_pinstar: "assets/images/star_pin.png",
        immagine_map: "assets/images/artisticTour.png",
    },
    /* NEW IDENTITIES */
    {
        t2: "THE REBORN TOUR:",
        t3: "Uncover Milan's ever-evolving identity on this insightful journey.",
        coloret2: "var(--reborn)",
        coloresteps: "var(--shreborn)",
        immagine_pin: "assets/images/rebornTour_pin.png",
        immagine_pinstar: "assets/images/star_pin.png",
        immagine_map: "assets/images/rebornTour.png",
    },
    /* NIGHTS */
    {
        t2: "THE WET TOUR:",
        t3: "Dive into Milan's vibrant nightlife with this aquatic adventure.",
        coloret2: "var(--wet)",
        coloresteps: "var(--shwet)",
        immagine_pin: "assets/images/wetTour_pin.png",
        immagine_pinstar: "assets/images/star_pin.png",
        immagine_map: "assets/images/wetTour.png",
    },
    /* DIGITAL=FUTURISTIC TOUR */
    {
        t2: "THE FUTURISTIC TOUR",
        t3: "Immerse yourself in Milan's digital frontier on this high-tech adventure.",
        coloret2: "var(--futuristic)",
        coloresteps: "var(--shfuturistic)",
        immagine_pin: "assets/images/futuristicTour_pin.png",
        immagine_pinstar: "assets/images/star_pin.png",
        immagine_map: "assets/images/futuristicTour.png",
    },
    /* COMFORT=RICHTOUR*/
    {
        t2: "THE RICH TOUR:",
        t3: "Immerse yourself in Milan's vibrant art scene.",
        coloret2: "var(--rich)",
        coloresteps: "var(--shrich)",
        immagine_pin: "assets/images/richTour_pin.png",
        immagine_pinstar: "assets/images/star_pin.png",
        immagine_map: "assets/images/richTour.png",
    },
    /* MUST=CLASSIC TOUR*/
    {
        t2: "THE CLASSIC TOUR:",
        t3: "Immerse yourself in Milan's vibrant art scene.",
        coloret2: "var(--classic)",
        coloresteps: "var(--shclassic)",
        immagine_pin: "assets/images/classicTour_pin.png",
        immagine_pinstar: "assets/images/star_pin.png",
        immagine_map: "assets/images/classicTour.png",
    },
];
var tourSteps_colors = {
    Step1: "<strong>Departure from Piazza Cavour:</strong> a central hub of Milan's charm and history.",
    Step2: "<strong>Indro Montanelli Gardens:</strong> a lush oasis in the heart of Milan.",
    Step3: "<strong>Royal Palace|G.A.M:</strong> an architectural marvel, while here, don't forget to take a leisurely coffee break at Lu' Bar.",
    Step4: "<strong>Corso Venezia:</strong> where you can pass by the Natural History Museum, the Planetarium, and the elegant Palazzo Bovara and delve into the artistic treasures of the Rovati Foundation's art museum.",
    Step5: "<strong>Quadrilatero del Silenzio:</strong> home to architectural gems like and the enchanting Villa Invernizzi. After that Via Vivaio and the Institute for the Blind Foundation, adding depth to your journey.",
    Step6: "<strong>Piazza Tricolore, Viale Premuda, Via Archimede, Via Pasquale Sottocorno/Vial Lincoln:</strong> the tour comes to an end with a variety of delectable cuisines and admire the colorful and vibrant houses, including the renowned Ricci Osteria.",
    Extra: "<strong>Extra:</strong> visit the historic La Rotonda della Besana and savor a delightful coffee break, and then reach a peaceful oasis, The Guastalla’s Garden."
};
var tourSteps_artists = {
    Step1: "<strong>Duomo:</strong> as you marvel at its grandeur, don't forget to savor some Ciaccio Gelato.",
    Step2: "<strong>Galleria Vittorio Emanuele:</strong> explore the magnificent Galleria and delve into Osservatorio of Fondazione Prada and into the world of Leonardo at the Leonardo Museum. Treat yourself to something sweet at Marchesi.",
    Step3: "<strong>Piazza della Scala:</strong> discover the Scala Museum and Gallerie d'Italia, then take a leisurely coffee break at the café Voce.",
    Step4: "<strong>Piazza San Fedele:</strong> look at the square and at the Church then take a coffee at Lavazza flagship store and indulge in delicious panzerotti at Luini or in pizza at Gennaro Esposito Restaurant.",
    Step5: "<strong>Piazza Meda:</strong> explore the charm of Casa Omenoni, wander through Via Gerolamo Morone, and admire the elegance of Piazza Belgioioso and Casa Manzoni.",
    Step6: "<strong>Via Manzoni, Via Romagnosi, Via Monte di Pietà, Via Brera:</strong> immerse yourself in art at the Poldi Pezzoli Museum and discover the beauty of Palazzo Anguissola. Explore the treasures of Palazzo Brera, revel in the serenity of the Botanical Gardens, and savor delights at Salsamenteria di Parma.",
    Extra: "<strong>Via Pontaccio:</strong> end your tour on a cultural note with a show at the Piccolo Teatro."
};
var tourSteps_newidentities = {
    Step1: "<strong>Monumental Cemetery:</strong> a place where history and art intertwine, here don't miss the exhibits at Fabbrica del Vapore nearby.",
    Step2: "<strong>Paolo Sarpi Street:</strong> savor a delicious meal at Ravioleria Sarpi or Bento along the street.",
    Step3: "<strong>Pasubio Street:</strong> immerse yourself in culture at the Giacomo Feltrinelli Foundation and enjoy a coffee break at Feltrinelli Cafe.",
    Step4: "<strong>Porta Garibaldi, Corso Como, Piazza Gae Aulenti:</strong> Discover the dynamic Porta Garibaldi area and pay a visit to the modern marvel, Piazza Gae Aulenti and the innovative building Bosco Verticale.",
    Step5: "<strong>A Stroll through Isola:</strong> conclude your tour with a leisurely stroll through the trendy neighborhood of Isola.",
    Extra: "<strong>Extra:</strong> in the southeastern part of the city: Via Festa del Perdono where you can visit the Santuario delle Ossa, an ossuary steeped in history and intrigue, and the University of Milan; Corso di Porta Romana, a historic and vibrant thoroughfare in Milan, catch a show at Teatro Franco Parenti, and explore and eat at the historic Cascina Cuccagna; Fondazione Prada, an art foundation that beautifully blends tradition and contemporary art. Enjoy a coffee at Bar Luce, designed by filmmaker Wes Anderson."
};
var tourSteps_nights = {
    Step1: "<strong>Corso di Porta Ticinese|Colonne di San Lorenzo|Piazza Sant’Eustorgio| Verso Library:</strong> treat yourself to delectable treats at California Bakery in the charming Piazza Sant'Eustorgio. And speaking of books, just a stone's throw away lies the captivating Verso Library.",
    Step2: "<strong>Arco di Porta Ticinese:</strong> continue your aquatic journey through La Romana for artisanal ice-cream, Fonderie Milanesi, Al Cortile, Officina Milano and Enoteca Naturale, creative spaces where you can discover curated locations and food. Finally, don't miss Clori, a floral paradise.",
    Step3: "<strong>Darsena:</strong> embark on a picturesque journey along the historic Darsena waterfront.",
    Step4: "<strong>Naviglio Grande:</strong> walk along the iconic Naviglio Grande canal, explore the artistic haven of Combo Milano, the restaurant Damm-atrà and discover the charm of Vico dei Lavandai.",
    Step5: "<strong>Passerella Elvira|Via Tortona:</strong> traverse the enchanting Passerella Elvira, savor Italian cuisine at Osteria dei Binari and explore the cultural gems of BASE Milano, Armani Silos, and MUDEC."
};
var tourSteps_digital = {
    Step1: "<strong>CityLife:</strong> the journey launches in the ultramodern CityLife district, where innovation meets urban living.",
    Step2: "<strong>Piazza Gae Aulenti:</strong> sip coffee at Feltrinelli Cafe while taking in the futuristic vibes of Piazza Gae Aulenti.",
    Step3: "<strong>Piazza Lino Bo Bardi:</strong> explore the innovative architecture of Piazza Lino Bo Bardi and the neighboring Bastions with the restaurants all around.",
    Step4: "<strong>Palazzo Lombardia:</strong> witness the architectural marvel that is Palazzo Lombardia, a symbol of Milan's forward-thinking spirit.",
    Step5: "<strong>Milan Central Station:</strong> conclude the tour at the Milan Central Station, a transportation hub that epitomizes the city's modernity, where innovation extends to the newly revamped Central Market—a cutting-edge food hub featuring a diverse array of cuisines, all coexisting in one dynamic space."
};
var tourSteps_comfort = {
    Step1: "<strong>Mozart Street:</strong> where you can admire Villa Mozart and you'll visit Villa Necchi, an epitome of elegance, and enjoy a coffee at its charming cafe.",
    Step2: "<strong>San Damiano Street|Corso Venezia|Via della Spiga:</strong> immerse yourself in luxury along the streets full of shops and at Piazza Quadrilatero, Museo Bagatti Valsecchi, and Palazzo Morando.",
    Step3: "<strong>Via Manzoni|Via Montenapoleone:</strong> continue your upscale journey through the fashion districts of Via Manzoni and Via Monte Napoleone. Stroll along Corso Matteotti to the grandeur of Piazza della Scala.",
    Step4: "<strong>Via Giuseppe Verdi|Via Brera:</strong> conclude your tour on the refined streets of Via Giuseppe Verdi, which seamlessly transforms into Via Brera, where culture and luxury coalesce."
};
var tourSteps_must = {
    Step1: "<strong>Duomo:</strong> as you marvel at its grandeur, don't forget to savor some Ciaccio Gelato.",
    Step2: "<strong>Galleria Vittorio Emanuele:</strong> explore the magnificent Galleria and delve into Osservatorio of Fondazione Prada and into the world of Leonardo at the Leonardo Museum. Treat yourself to something sweet at Marchesi.",
    Step3: "<strong>Piazza della Scala:</strong> discover the Scala Museum and Gallerie d'Italia, then take a leisurely coffee break at the cafè Voce.",
    Step4: "<strong>Piazza San Fedele:</strong> look at the square and at the Church then take a coffee at Lavazza flagship store and indulge in delicious panzerotti at Luini or in pizza at Gennaro Esposito Restaurant.",
    Step5: "<strong>Piazza Meda:</strong> explore the charm of Casa Omenoni, wander through Via Gerolamo Morone, and admire the elegance of Piazza Belgioioso and Casa Manzoni.",
    Step6: "<strong>Via Manzoni, Via Romagnosi, Via Monte di Pietà, Via Brera| Via Pontaccio:</strong> immerse yourself in art at the Poldi Pezzoli Museum and discover the beauty of Palazzo Anguissola. Explore the treasures of Palazzo Brera, revel in the serenity of the Botanical Gardens, and savor delights at Salsamenteria di Parma. End your tour on a cultural note with a show at the Piccolo Teatro.",
    Extra: "<strong>Extra:</strong> marvel at the historic beauty of the Basilica di Sant'Ambrogio, where Milan's rich religious heritage comes to life."
};
/*array delle risposte date in cui si salvano le chiavi delle risposte date, in modo poi da poter calcolare il risultato del quiz*/
let rispostequiz = [];
/*Parole chiave che servono a contare quante risposte di un tipo sono state date in modo da determinare il tour risultante*/
let categorycounts = [
    {
        valore: 0,
        keyword: "newidentities",
    },
    {
        valore: 0,
        keyword: "digital",
    },
    {
        valore: 0,
        keyword: "colors",
    },
    {
        valore: 0,
        keyword: "comfort",
    },
    {
        valore: 0,
        keyword: "artists",
    },
    {
        valore: 0,
        keyword: "must",
    },
    {
        valore: 0,
        keyword: "nights",
    },
];
let categoriaConMassimoConteggio = "";
let massimoConteggio = 0;
let indiceValoreMassimo = 0;
/*Si prendono gli elementi dell'html che devono essere manipolati con il file di javascript*/
let question = document.getElementById("domanda");
let risposta1 = document.getElementById("risposta1");
let risposta2 = document.getElementById("risposta2");
let risposta3 = document.getElementById("risposta3");
let risposta4 = document.getElementById("risposta4");
let risposta5 = document.getElementById("risposta5");
let risposta6 = document.getElementById("risposta6");
let risposta7 = document.getElementById("risposta7");
/*Si prende l'elemento dell'html in cui vengono stampate le chiavi salvati risultanti dal quiz*/
let stamparisposte = document.getElementById("risposte");
let page = document.getElementById("page");
let total = 7;
let coloredomanda = document.getElementById("domanda");
let colorerisposta1 = document.getElementById("risposta1");
let colorerisposta2 = document.getElementById("risposta2");
let colorerisposta3 = document.getElementById("risposta3");
let colorerisposta4 = document.getElementById("risposta4");
let colorerisposta5 = document.getElementById("risposta5");
let colorerisposta6 = document.getElementById("risposta6");
let colorerisposta7 = document.getElementById("risposta7");
let colorepage = document.getElementById("page");
let immagine = document.getElementById("domandaimg");
/*Si prendono gli elementi dell'html che devono essere manipolati con il file di javascript del risultato del TOUR*/
let t2 = document.getElementById("title_quizresult_text_t2");
let t3 = document.getElementById("title_quizresult_text_t3");
let step1 = document.getElementById("step1");
let step2 = document.getElementById("step2");
let step3 = document.getElementById("step3");
let step4 = document.getElementById("step4");
let step5 = document.getElementById("step5");
let step6 = document.getElementById("step6");
let step7 = document.getElementById("step7");
let steps = [step1, step2, step3, step4, step5, step6, step7];
let pin1 = document.getElementById("pin1");
let pin2 = document.getElementById("pin2");
let pin3 = document.getElementById("pin3");
let pin4 = document.getElementById("pin4");
let pin5 = document.getElementById("pin5");
let pin6 = document.getElementById("pin6");
let pin7 = document.getElementById("pin7");
let map = document.getElementById("map_quizresult_content");
/*Si inizializza la variabile index che è quella che verrà usata per muoversi attraverso i vari oggetti all'interno dell'array di domandequiz*/
function next_question(answer) {
    rispostequiz[index] = answer.keyword;
    if (index < 6) {
        index++;
        question.innerHTML = domandequiz[index].domanda;
        risposta1.innerHTML = domandequiz[index].risposte[0].valore;
        risposta2.innerHTML = domandequiz[index].risposte[1].valore;
        risposta3.innerHTML = domandequiz[index].risposte[2].valore;
        risposta4.innerHTML = domandequiz[index].risposte[3].valore;
        risposta5.innerHTML = domandequiz[index].risposte[4].valore;
        risposta6.innerHTML = domandequiz[index].risposte[5].valore;
        risposta7.innerHTML = domandequiz[index].risposte[6].valore;
        page.innerHTML = index + 1 + "/" + total;
        coloredomanda.style.color = style_domandequiz[index].coloredomanda;
        colorerisposta1.style.color = style_domandequiz[index].colorerisposta1;
        colorerisposta2.style.color = style_domandequiz[index].colorerisposta2;
        colorerisposta3.style.color = style_domandequiz[index].colorerisposta3;
        colorerisposta4.style.color = style_domandequiz[index].colorerisposta4;
        colorerisposta5.style.color = style_domandequiz[index].colorerisposta5;
        colorerisposta6.style.color = style_domandequiz[index].colorerisposta6;
        colorerisposta7.style.color = style_domandequiz[index].colorerisposta7;
        colorepage.style.color = style_domandequiz[index].coloredomanda;
        immagine.src = style_domandequiz[index].immagine;
    }
    else {
        count();
        document.getElementById("quizresult").style.display = "flex";
        document.getElementById("quiz").style.display = "none";
        /*GENERAZIONE DEL TOUR*/
        if (categoriaConMassimoConteggio == "colors") {
            t2.innerHTML = inputtour[0].t2;
            t3.innerHTML = inputtour[0].t3;
            t2.style.color = inputtour[0].coloret2;
            step1.innerHTML = tourSteps_colors.Step1;
            step2.innerHTML = tourSteps_colors.Step2;
            step3.innerHTML = tourSteps_colors.Step3;
            step4.innerHTML = tourSteps_colors.Step4;
            step5.innerHTML = tourSteps_colors.Step5;
            step6.innerHTML = tourSteps_colors.Step6;
            step7.innerHTML = tourSteps_colors.Extra;
            step1.style.color = inputtour[0].coloresteps;
            step2.style.color = inputtour[0].coloresteps;
            step3.style.color = inputtour[0].coloresteps;
            step4.style.color = inputtour[0].coloresteps;
            step5.style.color = inputtour[0].coloresteps;
            step6.style.color = inputtour[0].coloresteps;
            step7.style.color = inputtour[0].coloresteps;
            pin1.style.backgroundImage = `url(${inputtour[0].immagine_pin})`;
            pin2.style.backgroundImage = `url(${inputtour[0].immagine_pin})`;
            pin3.style.backgroundImage = `url(${inputtour[0].immagine_pin})`;
            pin4.style.backgroundImage = `url(${inputtour[0].immagine_pin})`;
            pin5.style.backgroundImage = `url(${inputtour[0].immagine_pin})`;
            pin6.style.backgroundImage = `url(${inputtour[0].immagine_pin})`;
           

            if (tourSteps_colors.Extra !== "undefined") {
                pin7.style.backgroundImage = `url(${inputtour[0].immagine_pinstar})`;
            }
            else {
                pin7.style.backgroundImage = `url(${inputtour[0].immagine_pin})`;
            }(categoriaConMassimoConteggio);
            stamp();
            map.src = inputtour[0].immagine_map;
            console.log(categorycounts);
            console.log
            back();
        }
        if (categoriaConMassimoConteggio  == "artists") {
            t2.innerHTML = inputtour[1].t2;
            t3.innerHTML = inputtour[1].t3;
            t2.style.color = inputtour[1].coloret2;
            step1.innerHTML = tourSteps_artists.Step1;
            step2.innerHTML = tourSteps_artists.Step2;
            step3.innerHTML = tourSteps_artists.Step3;
            step4.innerHTML = tourSteps_artists.Step4;
            step5.innerHTML = tourSteps_artists.Step5;
            step6.innerHTML = tourSteps_artists.Step6;
            step7.innerHTML = tourSteps_artists.Extra;
            step1.style.color = inputtour[1].coloresteps;
            step2.style.color = inputtour[1].coloresteps;
            step3.style.color = inputtour[1].coloresteps;
            step4.style.color = inputtour[1].coloresteps;
            step5.style.color = inputtour[1].coloresteps;
            step6.style.color = inputtour[1].coloresteps;
            step7.style.color = inputtour[1].coloresteps;
            pin1.style.backgroundImage = `url(${inputtour[1].immagine_pin})`;
            pin2.style.backgroundImage = `url(${inputtour[1].immagine_pin})`;
            pin3.style.backgroundImage = `url(${inputtour[1].immagine_pin})`;
            pin4.style.backgroundImage = `url(${inputtour[1].immagine_pin})`;
            pin5.style.backgroundImage = `url(${inputtour[1].immagine_pin})`;
            pin6.style.backgroundImage = `url(${inputtour[1].immagine_pin})`;
            if (tourSteps_colors.Extra !== "undefined") {
                pin7.style.backgroundImage = `url(${inputtour[1].immagine_pinstar})`;
            }
            else {
                pin7.style.backgroundImage = `url(${inputtour[1].immagine_pin})`;
            }
            map.src = inputtour[1].immagine_map;
            console.log(categorycounts);
            console.log(categoriaConMassimoConteggio);
            stamp();
            back();
        }
        if (categoriaConMassimoConteggio == "newidentities") {
            t2.innerHTML = inputtour[2].t2;
            t3.innerHTML = inputtour[2].t3;
            t2.style.color = inputtour[2].coloret2;
            step1.innerHTML = tourSteps_newidentities.Step1;
            step2.innerHTML = tourSteps_newidentities.Step2;
            step3.innerHTML = tourSteps_newidentities.Step3;
            step4.innerHTML = tourSteps_newidentities.Step4;
            step5.innerHTML = tourSteps_newidentities.Step5;
            step1.style.color = inputtour[2].coloresteps;
            step2.style.color = inputtour[2].coloresteps;
            step3.style.color = inputtour[2].coloresteps;
            step4.style.color = inputtour[2].coloresteps;
            step5.style.color = inputtour[2].coloresteps;
            pin1.style.backgroundImage = `url(${inputtour[2].immagine_pin})`;
            pin2.style.backgroundImage = `url(${inputtour[2].immagine_pin})`;
            pin3.style.backgroundImage = `url(${inputtour[2].immagine_pin})`;
            pin4.style.backgroundImage = `url(${inputtour[2].immagine_pin})`;
            pin5.style.backgroundImage = `url(${inputtour[2].immagine_pin})`;
            map.src = inputtour[2].immagine_map;
            console.log(categorycounts);
            console.log(categoriaConMassimoConteggio);
            stamp();
            back();
        }
        if (categoriaConMassimoConteggio == "nights") {
            t2.innerHTML = inputtour[3].t2;
            t3.innerHTML = inputtour[3].t3;
            t2.style.color = inputtour[3].coloret2;
            step1.innerHTML = tourSteps_nights.Step1;
            step2.innerHTML = tourSteps_nights.Step2;
            step3.innerHTML = tourSteps_nights.Step3;
            step4.innerHTML = tourSteps_nights.Step4;
            step5.innerHTML = tourSteps_nights.Step5;
            step1.style.color = inputtour[3].coloresteps;
            step2.style.color = inputtour[3].coloresteps;
            step3.style.color = inputtour[3].coloresteps;
            step4.style.color = inputtour[3].coloresteps;
            step5.style.color = inputtour[3].coloresteps;
            pin1.style.backgroundImage = `url(${inputtour[3].immagine_pin})`;
            pin2.style.backgroundImage = `url(${inputtour[3].immagine_pin})`;
            pin3.style.backgroundImage = `url(${inputtour[3].immagine_pin})`;
            pin4.style.backgroundImage = `url(${inputtour[3].immagine_pin})`;
            pin5.style.backgroundImage = `url(${inputtour[3].immagine_pin})`;
            map.src = inputtour[3].immagine_map;
            console.log(categorycounts);
            console.log(categoriaConMassimoConteggio);
            stamp();
            back();
        }
        if (categoriaConMassimoConteggio == "digital") {
            t2.innerHTML = inputtour[4].t2;
            t3.innerHTML = inputtour[4].t3;
            t2.style.color = inputtour[4].coloret2;
            step1.innerHTML = tourSteps_digital.Step1;
            step2.innerHTML = tourSteps_digital.Step2;
            step3.innerHTML = tourSteps_digital.Step3;
            step4.innerHTML = tourSteps_digital.Step4;
            step5.innerHTML = tourSteps_digital.Step5;
            step1.style.color = inputtour[4].coloresteps;
            step2.style.color = inputtour[4].coloresteps;
            step3.style.color = inputtour[4].coloresteps;
            step4.style.color = inputtour[4].coloresteps;
            step5.style.color = inputtour[4].coloresteps;
            pin1.style.backgroundImage = `url(${inputtour[4].immagine_pin})`;
            pin2.style.backgroundImage = `url(${inputtour[4].immagine_pin})`;
            pin3.style.backgroundImage = `url(${inputtour[4].immagine_pin})`;
            pin4.style.backgroundImage = `url(${inputtour[4].immagine_pin})`;
            pin5.style.backgroundImage = `url(${inputtour[4].immagine_pin})`;
            map.src = inputtour[4].immagine_map;
            console.log(categorycounts);
            console.log(categoriaConMassimoConteggio);
            stamp();
            back();
        }
        if (categoriaConMassimoConteggio == "comfort") {
            t2.innerHTML = inputtour[5].t2;
            t3.innerHTML = inputtour[5].t3;
            t2.style.color = inputtour[5].coloret2;
            step1.innerHTML = tourSteps_comfort.Step1;
            step2.innerHTML = tourSteps_comfort.Step2;
            step3.innerHTML = tourSteps_comfort.Step3;
            step4.innerHTML = tourSteps_comfort.Step4;
            step1.style.color = inputtour[5].coloresteps;
            step2.style.color = inputtour[5].coloresteps;
            step3.style.color = inputtour[5].coloresteps;
            step4.style.color = inputtour[5].coloresteps;
            pin1.style.backgroundImage = `url(${inputtour[5].immagine_pin})`;
            pin2.style.backgroundImage = `url(${inputtour[5].immagine_pin})`;
            pin3.style.backgroundImage = `url(${inputtour[5].immagine_pin})`;
            pin4.style.backgroundImage = `url(${inputtour[5].immagine_pin})`;
            map.src = inputtour[5].immagine_map;
            console.log(categorycounts);
            console.log(categoriaConMassimoConteggio);
            stamp();
            back();
        }
        if (categoriaConMassimoConteggio  == "must") {
            t2.innerHTML = inputtour[6].t2;
            t3.innerHTML = inputtour[6].t3;
            t2.style.color = inputtour[6].coloret2;
            step1.innerHTML = tourSteps_must.Step1;
            step2.innerHTML = tourSteps_must.Step2;
            step3.innerHTML = tourSteps_must.Step3;
            step4.innerHTML = tourSteps_must.Step4;
            step5.innerHTML = tourSteps_must.Step5;
            step6.innerHTML = tourSteps_must.Step6;
            step7.innerHTML = tourSteps_must.Extra;
            step1.style.color = inputtour[6].coloresteps;
            step2.style.color = inputtour[6].coloresteps;
            step3.style.color = inputtour[6].coloresteps;
            step4.style.color = inputtour[6].coloresteps;
            step5.style.color = inputtour[6].coloresteps;
            step6.style.color = inputtour[6].coloresteps;
            step7.style.color = inputtour[6].coloresteps;
            pin1.style.backgroundImage = `url(${inputtour[6].immagine_pin})`;
            pin2.style.backgroundImage = `url(${inputtour[6].immagine_pin})`;
            pin3.style.backgroundImage = `url(${inputtour[6].immagine_pin})`;
            pin4.style.backgroundImage = `url(${inputtour[6].immagine_pin})`;
            pin5.style.backgroundImage = `url(${inputtour[6].immagine_pin})`;
            pin6.style.backgroundImage = `url(${inputtour[6].immagine_pin})`;
            if (tourSteps_colors.Extra !== "undefined") {
                pin7.style.backgroundImage = `url(${inputtour[6].immagine_pinstar})`;
            }
            else {
                pin7.style.backgroundImage = `url(${inputtour[6].immagine_pin})`;
            }
            map.src = inputtour[6].immagine_map;
            console.log(categorycounts);
            console.log(categoriaConMassimoConteggio);
            stamp();
            back();
        }
    }
}
;
function count() {
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            console.log("rispostequiz[i]:", rispostequiz[i]);
            console.log("categorycounts[j].keyword:", categorycounts[j].keyword);
            if (rispostequiz[i] == categorycounts[j].keyword) {
                categorycounts[j].valore += 1;
                if (categorycounts[j].valore > massimoConteggio) {
                    massimoConteggio = categorycounts[j].valore;
                    indiceValoreMassimo = j;
                    categoriaConMassimoConteggio=categorycounts[indiceValoreMassimo].keyword;
                    console.log(indiceValoreMassimo);
                }
                ;
            }
            ;
        }
        ;
    }
    ;
}
;
risposta1?.addEventListener("click", () => next_question(domandequiz[index].risposte[0]));
risposta2?.addEventListener("click", () => next_question(domandequiz[index].risposte[1]));
risposta3?.addEventListener("click", () => next_question(domandequiz[index].risposte[2]));
risposta4?.addEventListener("click", () => next_question(domandequiz[index].risposte[3]));
risposta5?.addEventListener("click", () => next_question(domandequiz[index].risposte[4]));
risposta6?.addEventListener("click", () => next_question(domandequiz[index].risposte[5]));
risposta7?.addEventListener("click", () => next_question(domandequiz[index].risposte[6]));
