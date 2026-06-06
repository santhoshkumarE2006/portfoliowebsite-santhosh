const text = [
    "Cloud Computing Student",
    "Aspiring Cloud Engineer",
    "Web Developer"
];

let index = 0;
let charIndex = 0;

function type() {

    document.getElementById("typing").textContent =
        text[index].substring(0, charIndex);

    charIndex++;

    if(charIndex > text[index].length){
        charIndex = 0;
        index = (index + 1) % text.length;
    }

    setTimeout(type, 150);
}

type();