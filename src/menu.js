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

    const velourSteak = document.createElement("div");
    velourSteak.classList.add("menu-item");

    const velourImg = document.createElement("img");
    velourImg.src = velourImgSrc;
    velourImg.alt = "Charcoal-seared cut with truffle butter and smoked reduction.";


    const velourName = document.createElement("span");
    velourName.classList.add("dish");
    velourName.textContent = "Velour Steak";

    const velourPrice = document.createElement("span");
    velourPrice.classList.add("price");
    velourPrice.textContent = "$48";

    const velourSubtitle = document.createElement("span");
    velourSubtitle.classList.add("description");
    velourSubtitle.textContent = "Charcoal-seared cut with truffle butter and smoked reduction.";

    velourSteak.appendChild(velourImg);
    velourSteak.appendChild(velourName);
    velourSteak.appendChild(velourPrice);
    velourSteak.appendChild(velourSubtitle);

    menuTab1.appendChild(menuTab1Header);
    menuTab1.appendChild(velourSteak);

    container.appendChild(menuTab1);
}

export { loadMenu };