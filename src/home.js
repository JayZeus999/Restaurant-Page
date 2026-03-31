//home.js

function loadHome() {
    const container = document.querySelector("#content");

    const headline = document.createElement("h1");
    headline.classList.add("logo");
    headline.textContent = "Black Swan Nocturne";
    container.appendChild(headline);

    const tagline = document.createElement("h3");
    tagline.classList.add("classy-text")
    tagline.textContent = " Rare Obsidian Luxury ";
    container.appendChild(tagline);

    const reserveBtn = document.createElement("button")
    reserveBtn.classList.add("reserveBtn");
    reserveBtn.textContent = "Reserve Your Table";
    container.appendChild(reserveBtn);
}

export { loadHome };