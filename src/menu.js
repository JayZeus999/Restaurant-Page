// src/menu.js

import velourImgSrc from "../images/velour-steak.webp"
import pastaImgSrc from "../images/black-truffle-pasta.webp"
import margauxImgSrc from "../images/château-margaux.jpg"

import oysterImgSrc from "../images/oyster-elegance.jpg"
import burrataImgSrc from "../images/golden-burrata.webp"

import filetImgSrc from "../images/obsidian-filet.jpeg"
import lambImgSrc from "../images/lamb-nocturne.webp"

import velvetImgSrc from "../images/midnight-velvet.jpg"
import vanillaImgSrc from "../images/lamb-nocturne.webp"

import crimsonImgSrc from "../images/crimson-bloom.webp"
import noirImgSrc from "../images/noir-espresso.jpg"


function loadMenu() {

    const container = document.querySelector("#content");

    container.innerHTML = "";

    // Signature Selections
    const menuTab1 = document.createElement("section");
    menuTab1.classList.add("heading");

    const menuTab1Header = document.createElement("h1");
    menuTab1Header.classList.add("sign-header");
    menuTab1Header.textContent = "Signature Selections";

    // Starters
    const menuTab2 = document.createElement("section");
    menuTab2.classList.add("heading");

    const starters = document.createElement("h1");
    starters.classList.add("sign-header");
    starters.textContent = "Starters";

    // Main Courses
    const menuTab3 = document.createElement("section");
    menuTab3.classList.add("heading");

    const mainCourses = document.createElement("h1");
    mainCourses.classList.add("sign-header");
    mainCourses.textContent = "Main Courses";

    // Desserts
    const menuTab4 = document.createElement("section");
    menuTab4.classList.add("heading");

    const desserts = document.createElement("h1");
    desserts.classList.add("sign-header");
    desserts.textContent = "Desserts";

    // Drinks
    const menuTab5 = document.createElement("section");
    menuTab5.classList.add("heading");

    const drinks = document.createElement("h1");
    drinks.classList.add("sign-header");
    drinks.textContent = "Drinks";


    function createMenuItem(name, price, desc, ImgSrc) {

        const item = document.createElement("div");
        item.classList.add("menu-item");

        const img = document.createElement("img");
        img.src = ImgSrc;

        const title = document.createElement("h2");
        title.textContent = name;

        const priceEl = document.createElement("span");
        priceEl.textContent = price;

        const description = document.createElement("p");
        description.textContent = desc;

        item.appendChild(title);
        item.appendChild(priceEl);
        item.appendChild(description);
        item.appendChild(img);

        return item;
    }

    // Signature Selections
    const item1 = createMenuItem("Velour Steak", "$48", 
        "Charcoal-seared cut with truffle butter and smoked reduction.", velourImgSrc);

    const item2 = createMenuItem("Black Truffle Pasta ", "$36", 
        "Handmade pasta finished with aged parmesan and shaved truffle.", pastaImgSrc);

    const item3 = createMenuItem("Château Margaux", "$120", 
        "A bold, refined red with deep oak and dark fruit notes.", margauxImgSrc);


    //Starters
    const item4 = createMenuItem("Oyster Elegance ", "$18", 
        "Fresh oysters with citrus foam and sea salt mist.", oysterImgSrc);

    const item5 = createMenuItem("Golden Burrata", "$16", 
        "Creamy burrata with heirloom tomatoes and basil oil.", burrataImgSrc);

    // Main Courses
    const item6 = createMenuItem("Obsidian Filet", "$52", 
        "Premium beef filet with red wine jus and roasted shallots.", filetImgSrc);

    const item7 = createMenuItem("Lamb Nocturne", "$46", 
        "Slow-roasted lamb with herb crust and velvet glaze.", lambImgSrc);

    // Desserts
    const item8 = createMenuItem("Midnight Velvet", "$14", 
        "Dark Chocolate Crémeux Bar with Cocoa Soil & Gold Leaf.", velvetImgSrc);

    const item9 = createMenuItem("Vanilla Eclipse", "$12", 
        "Silky vanilla bean panna cotta with berry reduction.", vanillaImgSrc);

    // Drinks
    const item10 = createMenuItem("Crimson Bloom", "$14", 
        "Signature cocktail with berry infusion and floral notes.", crimsonImgSrc);

    const item11 = createMenuItem("Noir Espresso", "$12", 
        "Rich espresso with subtle dark chocolate finish.", noirImgSrc);

    
    menuTab1.appendChild(menuTab1Header);
    menuTab2.appendChild(starters);
    menuTab3.appendChild(mainCourses);
    menuTab4.appendChild(desserts);
    menuTab5.appendChild(drinks);

    menuTab1.appendChild(item1);
    menuTab1.appendChild(item2);
    menuTab1.appendChild(item3);

    menuTab2.appendChild(item4);
    menuTab2.appendChild(item5);

    menuTab3.appendChild(item6);
    menuTab3.appendChild(item7);

    menuTab4.appendChild(item8);
    menuTab4.appendChild(item9);

    menuTab5.appendChild(item10);
    menuTab5.appendChild(item11);

    container.appendChild(menuTab1);
    container.appendChild(menuTab2);
    container.appendChild(menuTab3);
    container.appendChild(menuTab4);
    container.appendChild(menuTab5);
}

export { loadMenu };