let homeCount= document.getElementById("home-count");
let guestCount= document.getElementById("guest-count")
let home= document.getElementById("home");
let guest = document.getElementById("guest");



let firstCount= 0;
let secondCount=0;


homeCount.textContent = firstCount;
guestCount.textContent = secondCount;

// FIRST SCOREBOARD

function addOneHome(){
    firstCount+=1;
    homeCount.textContent = firstCount;
    
}

function addTwoHome(){
    firstCount+=2;
    homeCount.textContent = firstCount;
}

function addThreeHome(){
    firstCount+=3;
    homeCount.textContent = firstCount;
}



// SECOND SCORE BOARD

function addOneGuest(){
    secondCount+=1;
    guestCount.textContent = secondCount;
    
}

function addTwoGuest(){
    secondCount+=2;
    guestCount.textContent = secondCount;
}

function addThreeGuest(){
    secondCount+=3;
    guestCount.textContent = secondCount;
}



function resetScore(){
   firstCount=0;
     homeCount.textContent = firstCount;
     
     secondCount=0;
    guestCount.textContent = secondCount;
}

