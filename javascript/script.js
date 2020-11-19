let counter1 = 0;
let counter2 = 1;
let bool = true;

const sections = document.querySelectorAll("section");
const progress = document.querySelector(".progress h2");
const circles = document.querySelectorAll(".circle");
const section1wrapper = document.querySelector(".section-1-wrapper");
const section5wrapper = document.querySelector(".section-5-wrapper");

section1wrapper.style.transform = "scale(1)";

const progressCounter = () => {
    progress.textContent = `${counter2}/${sections.length}`;

    Array.from(circles).forEach((circle) => {
        circle.style.backgroundColor = "transparent";
    });
    document.querySelector(`.circle-${counter2}`).style.backgroundColor = "white";
};

const pageController = () => {
    bool = true;
    if (counter1 === 5) {
        Array.from(sections).forEach((section) => {
            section.style.left = "0";
        });
        counter1 = 0;
        counter2 = 1;
        section1wrapper.style.transform = "scale(1)";
        section5wrapper.style.transform = "scale(1.2)";
        progressCounter();
        bool = false;
    }

    if (counter1 === -1) {
        Array.from(sections).forEach((section) => {
            if (section.classList[0] === "section-5") {
                return;
            }
            section.style.left = "-100vw";
        });
        counter1 = 4;
        counter2 = 5;
        section1wrapper.style.transform = "scale(1.2)";
        section5wrapper.style.transform = "scale(1)";
        progressCounter();
        bool = false;
    }
    progressCounter();
    return bool;
};

document.querySelector(".left-btn").addEventListener("click", () => {
    counter1--;
    counter2--;
    pageController() &&
        (document.querySelector(`.section-${counter2}`).style.left = "0");

    if (bool) {
        document.querySelector(`.section-${counter2}-wrapper`).style.transform =
            "scale(1)";
        document.querySelector(`.section-${counter2 + 1}-wrapper`).style.transform =
            "scale(1.2)";
    }
});

document.querySelector(".right-btn").addEventListener("click", () => {
    counter1++;
    counter2++;
    pageController() &&
        (document.querySelector(`.section-${counter1}`).style.left = "-100vw");

    if (bool) {
        document.querySelector(`.section-${counter2}-wrapper`).style.transform =
            "scale(1)";
        document.querySelector(`.section-${counter1}-wrapper`).style.transform =
            "scale(1.2)";
    }
});

var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disppear");
}