const sliderLine = document.querySelector('.works__items');
let allWorks = document.querySelectorAll('.works__row');
let elemWidth = document.querySelector('.works__row').offsetWidth;
let worksWidth = elemWidth * allWorks.length;
let count = 0;
let sliderWidth;

function init() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * allWorks.length + 'px';
    allWorks.forEach(item => {
        item.style.width = sliderWidth + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider__btn_prev').addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = allWorks.length - 1;
    }
    rollSlider();
});

document.querySelector('.slider__btn_next').addEventListener('click', () => {
    count++;
    if (count >= allWorks.length) {
        count = 0;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * sliderWidth + 'px)';
}