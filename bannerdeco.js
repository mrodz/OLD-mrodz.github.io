const boxes = document.querySelectorAll('.box');
const componentsToFadeIn = document.querySelectorAll('.offset-fade');
const delay = millisFromSeconds(4.2);

console.log(`There are ${boxes.length} boxes`);

var vh = window.innerHeight / 100;
var vw = window.innerWidth / 100;

var paddingScale = 3;
var topPadding = paddingScale * componentsToFadeIn.length;

var opacity = 0.75
var colors = [`rgba(${0xbf}, ${0x5d}, ${0x56}, ${opacity})`, `rgba(${0x5a}, ${0x9f}, ${0xa6}, ${opacity})`];

for (let i = 0; i < boxes.length; i++) {
    boxes[i].setAttribute('style', `border: solid ${colors[i]} 10px;${(i % 2 == 0 ? 'margin-top: 10vh;}' : '')}`);
    console.log(`Setting box #${i} to color: ${colors[i]}`);
}

componentsToFadeIn.forEach(box => {
    box.classList.add('hidden')
    box.setAttribute('style', `padding-top: ${topPadding}vh;`);
    topPadding -= paddingScale;
});

setTimeout(() => {
    for (let i = 0; i < componentsToFadeIn.length; i++) {
        setTimeout(() => {
            componentsToFadeIn[i].classList.remove('hidden');
        }, i * (delay / 10))
    }
}, delay);

function millisFromSeconds(seconds) {
    return seconds * 1000;
}