// header off=set function
(function(){

    var doc = document.documentElement;
    var w   = window;
    var curScroll;
    var prevScroll = w.scrollY || doc.scrollTop;
    var curDirection = 0;
    var prevDirection = 0;

    
    var header = document.querySelector('.header-container');
    var toggled;
    var threshold = 200;

    var checkScroll = function() {
        curScroll = w.scrollY || doc.scrollTop;
        if(curScroll > prevScroll) {
            // scrolled down
            curDirection = 2;
        }
        else {
            //scrolled up
            curDirection = 1;
        }

        if(curDirection !== prevDirection) {
            toggled = toggleHeader();
        }

        prevScroll = curScroll;
        if(toggled) {
            prevDirection = curDirection;
        }
    };

    var toggleHeader = function() { 
        toggled = true;
        if(curDirection === 2 && curScroll > threshold) {
            header.classList.add('hide');
        }
        else if (curDirection === 1) {
            header.classList.remove('hide');
        }
        else {
            toggled = false;
        }
        return toggled;
    };

    window.addEventListener('scroll', checkScroll);

})();
// header off=set function



// animation-section3
const view =document.querySelector(".expandview");
window.addEventListener("scroll",()=>{
    if (window.pageYOffset>1200){
        view.classList.add("active")
    }
       
});
// //animation-section3


// ACCORDION
const accordion = document.getElementsByClassName('contentBx');
for(i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click',function(){
    this.classList.toggle('active')
    });
}
// ACCORDION



// FOR CHATBOX
const openChatBox = document.querySelector(".faq-icon")
const chatBox = document.querySelector(".pop-up");
openChatBox.addEventListener("click",()=>{
chatBox.classList.toggle('active')
openChatBox.classList.toggle('active')
});



// Hamburger menu //
const menuBar = document.querySelector(".icon-container");
const slide = document.querySelector(".header-nav");

menuBar.addEventListener('click',()=>{
    slide.classList.add('active');
});

const main = document.querySelector("main")

main.addEventListener('click',()=>{
    slide.classList.remove('active');
});
// Hamburger menu //


// side menu //
const arrow = document.querySelector("#arrow");
const rightslide = document.querySelector(".right-slider")
arrow.addEventListener('click',()=>{
    rightslide.classList.add('active');

});


const arrow2 = document.querySelector("#shoes");
const rightslide2 = document.querySelector(".right-slider.shoes");
arrow2.addEventListener('click',()=>{
    rightslide2.classList.add('active');

})

const arrow3 = document.querySelector("#accessories");
const rightslide3 = document.querySelector(".right-slider.accessories");
arrow3.addEventListener('click',()=>{
    rightslide3.classList.add('active');

})

const searchbar = document.querySelector("#srch");
const divactive = document.querySelector(".search-bar");
searchbar.addEventListener('click',()=>{
    divactive.classList.add('active');
})
// side menu //