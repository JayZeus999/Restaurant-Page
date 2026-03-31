// src/index.js

import "./styles.css";

import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js"

const homeBtn = document.querySelector(".home-btn");
homeBtn.addEventListener("click",() => {
    loadHome();
});

const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click",() => {
    loadMenu();
});