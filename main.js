const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const sliderSlides = document.querySelector('.slider-slides');
const img = document.querySelectorAll("img");

sliderSlides.style.width = img.length * 100 + '%';

let transformRate = 0;
let counter = 0;

function navRight() {

    transformRate -= 310;
    counter++;
    if (counter < img.length) {
        sliderSlides.style.transform = `translate(${transformRate}px)`;
    } else {
        sliderSlides.style.transform = 'translate(0px)';
        counter = 0;
        transformRate = 0;
    }
}

function navLeft() {

    transformRate += 310;
    if (counter > 0) {

        sliderSlides.style.transform = `translate(${transformRate}px)`;
        counter--;
    } else if (counter <= 0) {
        sliderSlides.style.transform = `translate(${-transformRate * (img.length - 1)}px)`;
        counter = img.length-1;
        transformRate = -transformRate * (img.length - 1);
    }
}

btn1.addEventListener('click', () => {
    navLeft();
});


btn2.addEventListener('click', () => {
    navRight();
});


