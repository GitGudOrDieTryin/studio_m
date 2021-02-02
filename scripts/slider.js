'use strict';

let selectors = document.querySelectorAll('.selector');
let slider = document.querySelector('.slider');
let button = document.getElementById('test');

let selectionIndex = 0;
let swipeStartX = 0;
let swipeEndX = 0;

let bigImage1 = document.createElement("img");
bigImage1.src = '../images/featuredListing1-1.jpg';
bigImage1.classList.add('sliderBigImage');
document.getElementById("bigImage").appendChild(bigImage1);

let bigImage2 = document.createElement("img");
bigImage2.src = '../images/featuredListing1-5.jpg';
bigImage2.classList.add('sliderBigImage');
document.getElementById("bigImage").appendChild(bigImage2);

let bigImage3 = document.createElement("img");
bigImage3.src = '../images/featuredListing1-9.jpg';
bigImage3.classList.add('sliderBigImage');
document.getElementById("bigImage").appendChild(bigImage3);

eventsInicialization();


button.addEventListener('click', () => {
    console.log( selectionIndex ) 
    console.log( swipeStartX ) 
    console.log( swipeEndX ) 

});
window.addEventListener('resize', e => console.log(e.target.innerWidth));



function eventsInicialization() {

    for (let i = 0; i < selectors.length; i++){
        selectors[i].addEventListener('click', () => {
            selectionIndex = i;
            slideChange();
        });
    }
    
    slider.addEventListener('touchstart', (event) => {
        event.preventDefault();
        swipeStartX = event.changedTouches[0].clientX; 
    });
    
    slider.addEventListener('touchend', (event) => {
        event.preventDefault();
        swipeEndX = event.changedTouches[0].clientX;
        swipe();
        slideChange();
    });

}

function swipe(){
    if(swipeStartX - swipeEndX > 0 && selectionIndex < 2){
        selectionIndex++;
    } else if (swipeStartX - swipeEndX < 0 && selectionIndex > 0) {
        selectionIndex--;
    }
}

function slideChange() {
    switch(selectionIndex) {
        case 0:
            slider.classList.remove('position-2');
            slider.classList.remove('position-3');
            slider.classList.add('position-1');
        break;

        case 1:
            slider.classList.remove('position-1');
            slider.classList.remove('position-3');
            slider.classList.add('position-2');
        break;

        case 2:
            slider.classList.remove('position-1');
            slider.classList.remove('position-2');
            slider.classList.add('position-3');
        break;

    }
}
