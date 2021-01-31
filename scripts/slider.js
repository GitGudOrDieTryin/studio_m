'use strict';

let selectors = document.querySelectorAll('.selector');
let sliderImage = document.querySelector('.big-image');
let button = document.getElementById('test')

let selectionIndex = 0;
let swipeStartX = 0;
let swipeEndX = 0;

eventsInicialization();

button.addEventListener('click', () => console.log( selectionIndex ) )

function eventsInicialization() {

    for (let i = 0; i < selectors.length; i++){
        selectors[i].addEventListener('click', () => {
            selectionIndex = i;
            slideChange();
        });
    }
    
    sliderImage.addEventListener('touchstart', (event) => {
        event.preventDefault();
        swipeStartX = event.changedTouches[0].clientX; 
    });
    
    sliderImage.addEventListener('touchend', (event) => {
        event.preventDefault();
        swipeEndX = event.changedTouches[0].clientX;
        swipe();
        slideChange();
    });

}

function swipe(){
    if(swipeStartX - swipeEndX > 0 && selectionIndex < 2){
        selectionIndex++;
        return 'right';
    } else if (swipeStartX - swipeEndX < 0 && selectionIndex > 0) {
        selectionIndex--;
    }
}


function slideChange() {
    switch(selectionIndex) {
        case 0:
            sliderImage.classList.add('selector-1');
            sliderImage.classList.remove('selector-2');
            sliderImage.classList.remove('selector-3');
        break;
        case 1:
            sliderImage.classList.remove('selector-1');
            sliderImage.classList.add('selector-2');
            sliderImage.classList.remove('selector-3');
        break;
        case 2:
            sliderImage.classList.remove('selector-1');
            sliderImage.classList.remove('selector-2');
            sliderImage.classList.add('selector-3');
        break;

    }
}

/*

function selectionChange (index) {
    if (index === 1){
        sliderImage.classList.add('selector-1')
        sliderImage.classList.remove('selector-2')
        sliderImage.classList.remove('selector-3')
    } else if (index === 2){
        sliderImage.classList.remove('selector-1')
        sliderImage.classList.add('selector-2')
        sliderImage.classList.remove('selector-3')
    } else {
        sliderImage.classList.remove('selector-1')
        sliderImage.classList.remove('selector-2')
        sliderImage.classList.add('selector-3')
    }
}



sliderImage.addEventListener('touchstart', (event) => {
    let kek = event.changedTouches[0].clientX;
    console.log( kek );
});

sliderImage.addEventListener('touchend', (event) => {
    event.preventDefault();
    let kek = event.changedTouches[0].clientX;
    console.log( kek );
});
*/

// функция считывает ивенты 
// Функция которая расчитывает индекс
// функция которая меняет картинку в ззависимости от индекса 
