// const BTN_LEFT = document.querySelector('#btn-left');
// const BTN_RIGHT = document.querySelector('#btn-right');
// const CAROUSEL = document.querySelector('#carousel');
// const TRANSITION_LEFT_CLASS = 'transition-left';
// const TRANSITION_RIGHT_CLASS = 'transition-right';
// const ITEM_LEFT = document.querySelector('#item-left');
// const ITEM_RIGHT = document.querySelector('#item-right');

// const moveLeft = () => { 
//     CAROUSEL.classList.add(TRANSITION_LEFT_CLASS);
//     BTN_LEFT.removeEventListener('click', moveLeft);
//     BTN_RIGHT.removeEventListener('click', moveRight);
// };
// const moveRight = () => { 
//     CAROUSEL.classList.add(TRANSITION_RIGHT_CLASS);
//     BTN_RIGHT.removeEventListener('click', moveRight);
//     BTN_LEFT.removeEventListener('click', moveLeft);
// };

// BTN_LEFT.addEventListener('click', moveLeft);

// BTN_RIGHT.addEventListener('click', moveRight);

// CAROUSEL.addEventListener('animationend', (animationEvent) => {
//     const a = 0
    
    
    
    
    
//     if (animationEvent.animationName === "move-left") {
//         CAROUSEL.classList.remove(TRANSITION_LEFT_CLASS);
//         const leftItems = ITEM_LEFT.innerHTML;
        
//         document.querySelector('#item-active').innerHTML = leftItems;

//         const card1 = document.createElement('div');
//         card1.classList.add('card');
//         card1.innerText = Math.floor(Math.random() * 8);

//         const card2 = document.createElement('div');
//         card2.classList.add('card');
//         card2.innerText = Math.floor(Math.random() * 8);

//         const card3 = document.createElement('div');
//         card3.classList.add('card');
//         card3.innerText = Math.floor(Math.random() * 8);

//         ITEM_LEFT.innerHTML = '';
//         ITEM_LEFT.appendChild(card1);
//         ITEM_LEFT.appendChild(card2);
//         ITEM_LEFT.appendChild(card3);
        

//     } else {
//         CAROUSEL.classList.remove(TRANSITION_RIGHT_CLASS);
//         const rightItems = ITEM_RIGHT.innerHTML;
//         document.querySelector('#item-active').innerHTML = rightItems;
//     };
    
//     CAROUSEL.classList.remove(TRANSITION_LEFT_CLASS);
//     CAROUSEL.classList.remove(TRANSITION_RIGHT_CLASS);
//     BTN_LEFT.addEventListener('click', moveLeft);
//     BTN_RIGHT.addEventListener('click', moveRight);
// });

document.addEventListener('DOMContentLoaded', () => {

const BTN1_LEFT = document.querySelector('#button-left');
const BTN1_RIGHT = document.querySelector('#button-right');
const CAROUSEL1 = document.querySelector('#pets-carousel');
const TRANSITION1_LEFT_CLASS = 'transition1-left';
const TRANSITION1_RIGHT_CLASS = 'transition1-right';
const ITEM1_LEFT = document.querySelector('#pets-left');
const ITEM1_RIGHT = document.querySelector('#pets-right');
let arrayPets = [1, 2, 3, 4, 5, 6, 7, 8];
let fullArrayPets = [];

for (let i = 0; i < 8; i++ ) {

    
};

const petsMoveLeft = () => { 
    CAROUSEL1.classList.add(TRANSITION1_LEFT_CLASS);
    BTN1_LEFT.removeEventListener('click', petsMoveLeft);
    BTN1_RIGHT.removeEventListener('click', petsMoveRight);
};
const petsMoveRight = () => { 
    CAROUSEL1.classList.add(TRANSITION1_RIGHT_CLASS);
    BTN1_RIGHT.removeEventListener('click', petsMoveRight);
    BTN1_LEFT.removeEventListener('click', petsMoveLeft);
};

BTN1_LEFT.addEventListener('click', petsMoveLeft);
BTN1_RIGHT.addEventListener('click', petsMoveRight);

    CAROUSEL1.addEventListener('animationend', (animationEvent) => {

        CAROUSEL1.classList.remove(TRANSITION1_LEFT_CLASS);
        CAROUSEL1.classList.remove(TRANSITION1_RIGHT_CLASS);
        BTN1_LEFT.addEventListener('click', petsMoveLeft);
        BTN1_RIGHT.addEventListener('click', petsMoveRight);
        if (animationEvent.animationName === "pets-move-left") {
                    CAROUSEL1.classList.remove(TRANSITION1_LEFT_CLASS);
                    const leftItems = ITEM1_LEFT.innerHTML;
                    
                    document.querySelector('#pets-active').innerHTML = leftItems;
            
                    const card1 = document.createElement('div');
                    card1.classList.add('card');
                    card1.innerText = Math.floor(Math.random() * 8);
            
                    const card2 = document.createElement('div');
                    card2.classList.add('card');
                    card2.innerText = Math.floor(Math.random() * 8);
            
                    const card3 = document.createElement('div');
                    card3.classList.add('card');
                    card3.innerText = Math.floor(Math.random() * 8);
            
                    ITEM1_LEFT.innerHTML = '';
                    ITEM1_LEFT.appendChild(card1);
                    ITEM1_LEFT.appendChild(card2);
                    ITEM1_LEFT.appendChild(card3);
                    
            
                } else {
                    CAROUSEL1.classList.remove(TRANSITION1_RIGHT_CLASS);
                    const rightItems = ITEM1_RIGHT.innerHTML;
                    document.querySelector('#pets-active').innerHTML = rightItems;
                };
    });

console.log('priehali');


});