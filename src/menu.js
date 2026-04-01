// src/menu.js

import velourImgSrc from "../images/velour-steak.webp"

function loadMenu() {

    const container = document.querySelector("#content");

    container.innerHTML = "";

    const menuTab1 = document.createElement("section");
    menuTab1.classList.add("signature");

    const menuTab1Header = document.createElement("h2");
    menuTab1Header.classList.add("sign-header");
    menuTab1Header.textContent = "Signature Selections";


    function createMenuItem(name, price, desc, ImgSrc) {

        const item = document.createElement("div");
        item.classList.add("menu-item");

        const img = document.createElement("img");
        img.src = ImgSrc;

        const title = document.createElement("h3");
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


    const velourSteak = createMenuItem("Velour Steak", "$48", 
        "Charcoal-seared cut with truffle butter and smoked reduction.", velourImgSrc)


    menuTab1.appendChild(menuTab1Header);
    menuTab1.appendChild(velourSteak);

    container.appendChild(menuTab1);
}

export { loadMenu };