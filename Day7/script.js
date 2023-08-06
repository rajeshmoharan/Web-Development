'use strict';

let  home = document.querySelector('.home');
let contact = document.querySelector('.contact');
let closeBtn = document.querySelector('.close1-modal');
let closeBtn2 = document.querySelector('.close2-modal');
let closeBtn3 = document.querySelector('.close3-modal');
let carrier = document.querySelector('.carrier');

let hom = home.innerHTML;
let con = contact.innerHTML;
let carr = contact.innerHTML;

// home
let hideen = document.querySelector('.hidden');
let overlay = document.querySelector('.overlay');


// contact
let contactDiv = document.querySelector('.contactDiv');
let contactOver = document.querySelector('.contactOverlay');

// carrier
let carrierDiv = document.querySelector('.carrierDiv');
let carrierOver = document.querySelector('.carrierOverlay');

home.addEventListener('click',() => {
    hideen.classList.remove('hidden');
    overlay.classList.remove('hidden');
})

contact.addEventListener('click',() =>{
    contactDiv.classList.remove('hidden');
    contactOver.classList.remove('hidden');
})


// carrier
carrier.addEventListener('click',() => {
    carrierDiv.classList.remove('hidden');
    carrierOver.classList.remove('hidden');
})

closeBtn.addEventListener('click',closebutton);

function closebutton(){
    hideen.classList.add('hidden');
    overlay.classList.add('hidden');
}

overlay.addEventListener('click',closebutton);

closeBtn2.addEventListener('click',closebutton2);

function closebutton2(){
    contactDiv.classList.add('hidden');
    contactOver.classList.add('hidden');
}

contactOver.addEventListener('click',closebutton2);



closeBtn3.addEventListener('click',closebutton3);


function closebutton3(){
    carrierDiv.classList.add('hidden');
    carrierOver.classList.add('hidden');
}

carrierOver.addEventListener('click',closebutton3);