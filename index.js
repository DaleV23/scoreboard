let homescore = document.getElementById("H-score")
let guestscore = document.getElementById("G-score")

let homecount = 0;
let guestcount = 0;


function one(){
    homecount+=1
    homescore.textContent = homecount
}
function two(){
    homecount+=2
    homescore.textContent = homecount
}
function three(){
    homecount+=3
    homescore.textContent = homecount
}

function deduct(){
    homecount-=1
    homescore.textContent = homecount
}

function reset(){
    homecount = 0
    homescore.textContent = homecount
}

function oneG(){
    guestcount+=1
    guestscore.textContent = guestcount
}
function twoG(){
    guestcount+=2
    guestscore.textContent = guestcount
}
function threeG(){
    guestcount+=3
    guestscore.textContent = guestcount
}
function deductG(){
    guestcount-=1
    guestscore.textContent = guestcount
}
function resetG(){
    guestcount = 0
    guestscore.textContent = guestcount
}