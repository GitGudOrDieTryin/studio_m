'use strict';

let selectors = document.querySelectorAll('.selector');
let slider = document.querySelector('.slider');

let selectionIndex = 0;
let swipeStartX = 0;
let swipeEndX = 0;

selectors[0].classList.toggle('active');

generateImages();
eventsInicialization();

function eventsInicialization() {

    for (let i = 0; i < selectors.length; i++){
        selectors[i].addEventListener('click', () => {
            selectionIndex = i;
            for (let j = 0; j < selectors.length; j++){
                selectors[j].classList.remove('active');
            }
            selectors[i].classList.add('active');
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

function generateImages(){
    let bigImage1 = document.createElement("img");
    bigImage1.src = '../images/featuredListing1-1.jpg';
    bigImage1.classList.add('sliderBigImage');
    document.getElementById("bigImage").appendChild(bigImage1);

    let smallImagesHolder1 = document.createElement("div");
    smallImagesHolder1.classList.add('smallImagesHolder1');
    document.getElementById("smallImage").appendChild(smallImagesHolder1);

    let smallImage1 = document.createElement("img");
    smallImage1.src = '../images/featuredListing1-2.jpg';
    smallImage1.classList.add('sliderSmallImage');
    document.querySelector(".smallImagesHolder1").appendChild(smallImage1);

    let smallImage2 = document.createElement("img");
    smallImage2.src = '../images/featuredListing1-3.jpg';
    smallImage2.classList.add('sliderSmallImage');
    document.querySelector(".smallImagesHolder1").appendChild(smallImage2);

    let smallImage3 = document.createElement("img");
    smallImage3.src = '../images/featuredListing1-4.jpg';
    smallImage3.classList.add('sliderSmallImage');
    document.querySelector(".smallImagesHolder1").appendChild(smallImage3);

    //

    let bigImage2 = document.createElement("img");
    bigImage2.src = '../images/featuredListing1-5.jpg';
    bigImage2.classList.add('sliderBigImage');
    document.getElementById("bigImage").appendChild(bigImage2);

    let smallImagesHolder2 = document.createElement("div");
    smallImagesHolder2.classList.add('smallImagesHolder2');
    document.getElementById("smallImage").appendChild(smallImagesHolder2);

    let smallImage4 = document.createElement("img");
    smallImage4.src = '../images/featuredListing1-6.jpg';
    smallImage4.classList.add('sliderSmallImage');
    document.querySelector(".smallImagesHolder2").appendChild(smallImage4);

    let smallImage5 = document.createElement("img");
    smallImage5.src = '../images/featuredListing1-7.jpg';
    smallImage5.classList.add('sliderSmallImage');
    document.querySelector(".smallImagesHolder2").appendChild(smallImage5);

    let smallImage6 = document.createElement("img");
    smallImage6.src = '../images/featuredListing1-8.jpg';
    smallImage6.classList.add('sliderSmallImage');
    document.querySelector(".smallImagesHolder2").appendChild(smallImage6);
    
    //

    let bigImage3 = document.createElement("img");
    bigImage3.src = '../images/featuredListing1-9.jpg';
    bigImage3.classList.add('sliderBigImage');
    document.getElementById("bigImage").appendChild(bigImage3);

    let smallImagesHolder3 = document.createElement("div");
    smallImagesHolder3.classList.add('smallImagesHolder3');
    document.getElementById("smallImage").appendChild(smallImagesHolder3);

    let smallImage7 = document.createElement("img");
    smallImage7.src = '../images/featuredListing1-10.jpg';
    smallImage7.classList.add('sliderSmallImage');
    document.querySelector(".smallImagesHolder3").appendChild(smallImage7);

    let smallImage8 = document.createElement("img");
    smallImage8.src = '../images/featuredListing1-11.jpg';
    smallImage8.classList.add('sliderSmallImage');
    document.querySelector(".smallImagesHolder3").appendChild(smallImage8);

    let smallImage9 = document.createElement("img");
    smallImage9.src = '../images/featuredListing1-12.jpg';
    smallImage9.classList.add('sliderSmallImage');
    document.querySelector(".smallImagesHolder3").appendChild(smallImage9);
}

//All of this crap below was used for testing

let button = document.getElementById('test');

//window.addEventListener('resize', e => console.log(e.target.innerWidth));


button.addEventListener('click', () => {
    console.log( selectionIndex ) 
    console.log( swipeStartX ) 
    console.log( swipeEndX ) 

});