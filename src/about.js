function loadAbout() {
    const container = document.querySelector("#content");
    
    container.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.classList.add("about-wrapper");

    const hero = document.createElement("h1");
    hero.classList.add("about-hero");
    hero.textContent = "Where the night reveals its finest secrets.";

    const para1 = document.createElement("p");
    para1.textContent = "At Black Swan Nocturne, dining is not an act — it is a ritual. Each plate is composed with intention, where precision meets quiet indulgence, and every detail exists to elevate the moment beyond the ordinary.";

    const para2 = document.createElement("p");
    para2.textContent = "Beneath dimmed lights and whispered conversations, the atmosphere unfolds — intimate, elusive, and timeless. Here, the night lingers just a little longer, and every experience is meant to be remembered, not rushed.";

    const signature = document.createElement("p");
    signature.classList.add("about-signature");
    signature.textContent = "Curated under the vision of Chef Alaric Noire.";

    wrapper.appendChild(hero);
    wrapper.appendChild(para1);
    wrapper.appendChild(para2);
    wrapper.appendChild(signature);

    container.appendChild(wrapper);
}

export { loadAbout };