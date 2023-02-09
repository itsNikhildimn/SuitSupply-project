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
            
            curDirection = 2;
        }
        else {
            
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



// --------------ExpandView-animation-section3
const view =document.querySelector(".expandview");
window.addEventListener("scroll",()=>{
    if (window.pageYOffset>1200){
        view.classList.add("active")
    }
       
});
 // --------------//ExpandView-animation-section3


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
const body =document.querySelector("body");

menuBar.addEventListener('click',()=>{
    slide.classList.add('active');
    body.classList.add("active");
});

// when click on body then remove main slider

const main = document.querySelector(".header-overlay");

main.addEventListener('click',()=>{
    slide.classList.remove('active');
    body.classList.remove("active");
});
// when click on body then remove main slider

// Hamburger menu //




// side menu //
const arrow = document.querySelectorAll("#arrow");
arrow.forEach(element => {
    element.addEventListener("click",function(){
        arrow.forEach(arr=>arr.classList.remove("active"))
        this.classList.add("active")
    })
});
// side menu //




// CLICK EVENT ON BACK ARROW TO CLOSE CURRENT SUB-MENU SLIDE
const close = document.querySelectorAll(".header-nav-search");
 
close.forEach(element => {
    element.addEventListener("click",function(){
        arrow.forEach(arr=>arr.classList.remove("active"))
        this.classList.add("active")
    })
});
// CLICK EVENT ON BACK ARROW TO CLOSE CURRENT SUB-MENU SLIDE


// REMOVE SUB MENU SLIDE WHEN CLICK ON HEADER OVERLAY //
const main2 = document.querySelector(".header-overlay");
main2.addEventListener("click", ()=>{
    arrow.forEach(arr=>arr.classList.remove("active"))
    this.classList.add("active");
    
})
// REMOVE SUB MENU SLIDE WHEN CLICK ON HEADER OVERLAY //
 
