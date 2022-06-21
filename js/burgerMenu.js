document.querySelector('.menu__icon').onclick = (event) => {
    if (event.target.className === 'menu__icon' || event.target.className === 'menu__body._active') {
        const target = event.target;
        target.classList.toggle('_active');
        document.querySelector('.menu__body').classList.toggle('_active');
    } else if (event.target.tagName == 'SPAN') {
        event.target.parentElement.classList.toggle('_active');
        document.querySelector('.menu__body').classList.toggle('_active');
    }
}

