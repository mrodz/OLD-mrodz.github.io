const aboutMeItems = document.querySelectorAll('.about-items');
const navBar = document.querySelector('.top-nav');
var isActive = false;

console.log(aboutMeItems);

window.onscroll = function () { workHeader() };

function workHeader() {
    console.log(window.scrollY)
    if (window.scrollY > aboutMeItems[0].getBoundingClientRect().top && !isActive) {
        isActive = true;
        // console.log(`${window.scrollY} > ${aboutMeItems[0].getBoundingClientRect().top}`);
        navBar.classList.add('visible-header', 'nav-fade-in');
        navBar.classList.remove('hidden-header', 'nav-fade-out');
    } else if (window.scrollY < aboutMeItems[0].getBoundingClientRect().top && isActive) {
        navBar.classList.remove('visible-header', 'nav-fade-in');
        navBar.classList.add('hidden-header', 'nav-fade-out');
        isActive = false;
    }
}