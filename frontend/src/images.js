const imagens = [
    "images/IMG-20260802-WA0007.jpg",
    "images/IMG-20260802-WA0008.jpg",
    "images/IMG-20260802-WA0009.jpg",
    "images/IMG-20260802-WA0010.jpg",
    "images/IMG-20260802-WA0011.jpg",
    "images/IMG-20260802-WA0012.jpg",
    "images/IMG-20260802-WA0014.jpg"
];

const slide = document.getElementById("slide");

let indice = 0;

setInterval(() => {

    slide.style.opacity = 0;

    setTimeout(() => {
        indice = (indice + 1) % imagens.length;
        slide.src = imagens[indice];
        slide.style.opacity = 1;
    }, 800);

}, 5000);

export default imagens;
