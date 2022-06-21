const entryBlockHeight = document.querySelector('.introduction').offsetHeight;
const scrollBtn = document.querySelector('.main__scroll-top-btn');


window.onscroll = () => {
    if (window.scrollY > entryBlockHeight) {
        scrollBtn.classList.add('_active');
    } else if (window.scrollY < entryBlockHeight) {
        scrollBtn.classList.remove('_active');
    }
}

function scrollToTop() {
    scrollBtn.addEventListener('click', () => {
        window.scrollTo(0, 0);
    })
}
scrollToTop();
