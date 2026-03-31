//content.js
// import luxuryImgSrc from "../luxury-diner.png"

const container = document.querySelector("#content");

const headline = document.createElement("h1");
headline.classList.add("logo");
headline.textContent = "Black Swan Nocturne";
container.appendChild(headline);

const tagline = document.createElement("h3");
tagline.classList.add("classy-text")
tagline.textContent = " Rare Obsidian Luxury ";
container.appendChild(tagline);

const description = document.createElement("p");
description.classList.add("description")
description.textContent = "An intimate evening of rare flavors and obsidian elegance overlooking the city.";
container.appendChild(description);

// const luxuryImg = document.createElement("img");
// luxuryImg.src = luxuryImgSrc;
// luxuryImg.alt = "Elegant fine dining interior";
// container.appendChild(luxuryImg);

const reserveBtn = document.createElement("button")
reserveBtn.classList.add("reserveBtn");
reserveBtn.textContent = "Book Your Experience";
// container.appendChild(reserveBtn);

export {container, headline, tagline}
export {description, reserveBtn}