const firstSlide = document.querySelector('#first');
const secondSlide = document.querySelector('#second');

secondSlide.style.display = 'none';

function handleScroll(event) {
    event.preventDefault();
    if (event.deltaY > 0) {
        applyChanges();
    }
}

function applyChanges() {
    if (isFirstPageRendered) {
        firstSlide.classList.add('slid-out');

        setTimeout(() => {
            firstSlide.style.display = 'none';
            secondSlide.style.display = 'inline';

            continueButton.setAttribute('style', 'display: none;');
        }, 500);
    }
}

firstSlide.onwheel = handleScroll;