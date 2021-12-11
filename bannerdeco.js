var boxes = document.querySelectorAll('.content');
const delay = millisFromSeconds(4.2);

var vh = window.innerHeight / 100;
var vw = window.innerWidth / 100;

var paddingScale = 6;
var topPadding = paddingScale * boxes.length;
log(`topPadding = ${topPadding}`);

boxes.forEach(box => {
    box.classList.add('hidden')
    box.setAttribute('style', `padding-top: ${topPadding}vh;`);
    log(`topPadding = ${topPadding}`);
    topPadding -= paddingScale;
});

function log(msg) {
    console.log(msg);
}

setTimeout(function () {
    for (let i = 0; i < boxes.length; i++) {
        setTimeout(() => {
            boxes[i].classList.remove('hidden');
        }, i * (delay / 10))
    }
}, delay);

function millisFromSeconds(seconds) {
    return seconds * 1000;
}