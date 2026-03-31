//content.js
import luxuryImgSrc from "../luxury-diner.png"

const container = document.querySelector("#content");

const headline = document.createElement("h1");
headline.textContent = "Black Swan";
container.appendChild(headline);

const tagline = document.createElement("h3");
tagline.textContent = " Rare. Refined. Unforgettable. ";
container.appendChild(tagline);

const luxuryImg = document.createElement("img");
luxuryImg.src = luxuryImgSrc;
luxuryImg.alt = "Elegant fine dining interior";
container.appendChild(luxuryImg);

export {container, headline, tagline, luxuryImg}