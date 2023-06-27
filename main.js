const pad = document.querySelector('.pad');

let newDiv = [];
let newKbd = [];
let newSpan = [];
function createPad() {
    for (let i = 0; i < 8; i++) {
        newDiv[i] = document.createElement('div');
        newDiv[i].classList.add('key');
        pad.appendChild(newDiv[i]);

        newKbd[i] = document.createElement('kbd');
        newDiv[i].appendChild(newKbd[i]);

        newSpan[i] = document.createElement('span');
        newSpan[i].classList.add('sound');
        newDiv[i].appendChild(newSpan[i]);
    }
};
createPad();

newDiv[0].dataset.key = 90;
newKbd[0].innerHTML = 'Z';
newSpan[0].innerHTML = 'HIHAT';
newDiv[1].dataset.key = 69;
newKbd[1].innerHTML = 'E';
newSpan[1].innerHTML = 'KICK';
newDiv[2].dataset.key = 81;
newKbd[2].innerHTML = 'Q';
newSpan[2].innerHTML = 'OPENHAT';
newDiv[3].dataset.key = 83;
newKbd[3].innerHTML = 'S';
newSpan[3].innerHTML = 'BOOM';
newDiv[4].dataset.key = 68;
newKbd[4].innerHTML = 'D';
newSpan[4].innerHTML = 'RIDE';
newDiv[5].dataset.key = 87;
newKbd[5].innerHTML = 'W';
newSpan[5].innerHTML = 'SNARE';
newDiv[6].dataset.key = 88;
newKbd[6].innerHTML = 'X';
newSpan[6].innerHTML = 'TOM';
newDiv[7].dataset.key = 67;
newKbd[7].innerHTML = 'C';
newSpan[7].innerHTML = 'TINK';

// let startTime = new Date();
// let endTime = 0;
// let timePassed = [];
// window.addEventListener('keypress', (event) => {
//     endTime = new Date();
//     timePassed.push(endTime - startTime);
//     console.log(timePassed);
//     playSound(event);
// });

window.addEventListener('keypress', playSound);

let keys = document.querySelectorAll('div.pad > div')
let audios = document.querySelectorAll('audio');
let musics = [];

function playSound(event) {

    let keyCode = event.keyCode;
    let audio = document.querySelector(`audio[data-key='${keyCode}']`);
    let key = document.querySelector(`.key[data-key='${keyCode}']`);

    musics.push(keyCode);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

    // switch (event.keyCode) {
    //     case 65:
    //         audios[0].play();
    //         keys[0].classList.add('playing');
    //         setTimeout(removeTransition, 200); 
    //         break;
    //     case 90:
    //         audios[1].play();
    //         keys[1].classList.add('playing');
    //         break;
    //     case 69:
    //         audios[2].play();
    //         keys[2].classList.add('playing');
    //         break;
    //     case 81:
    //         audios[3].play();
    //         keys[3].classList.add('playing');
    //         break;
    //     case 83:
    //         audios[4].play();
    //         keys[4].classList.add('playing');
    //         break;
    //     case 68:
    //         audios[5].play();
    //         keys[5].classList.add('playing');
    //         break;
    //     case 87:
    //         audios[6].play();
    //         keys[6].classList.add('playing');
    //         break;
    //     case 88:
    //         audios[7].play();
    //         keys[7].classList.add('playing');
    //         break;
    //     case 67:
    //         audios[8].play();
    //         keys[8].classList.add('playing');
    //         break;
    //     default:
    //         break;
    // };
};

function removeTransition() {
    keys.forEach(key => {
        if (key.classList.contains('playing')) {
            key.classList.remove('playing');
        };
    });
};

keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
});

// function playMusic() {
//     musics.forEach(music => {
//         timePassed.forEach(time => {
//             setTimeout(() => {
//                 audio = document.querySelector(`audio[data-key='${music}']`);
//                 audio.play();
//             }, time);
//         });
//     });
//     for (let i = 0; i < musics.length; i++) 
// };

// console.log(timePassed);

// window.addEventListener('contextmenu', playMusic);

// function beatBox() {
//     simulateKey() {

//     };
//     playBeat() {

//     };
// };

// window.addEventListener('keydown', (event) => {
//     if (event.key === 'K') {
//         beatBox();
//     };
// });

