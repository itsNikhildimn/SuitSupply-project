//<<<<<<<<<<<----------HEADER JS FUNCTIONS---------------->>>>>>>>>>>>>>>>>>

// TEXT SLIDER
const textSlide = document.querySelector(".text-slide");
const text = textSlide.querySelectorAll("a");

let counter = 1;
const size = text[0].clientWidth;

//to set the slide one as the first slide instead of the clone
textSlide.style.transform = `translateX(-${size * counter}px)`;

//looping the slider every 7s
setInterval(()=>{
  if(counter >= text.length -1) return;
  
  textSlide.style.transition = `transform 0.8s ease`;
  counter++;
  textSlide.style.transform = `translateX(-${size * counter}px)`; 
  
}, 7000);

textSlide.addEventListener('transitionend', () => {
  if(text[counter].id === 'lastClone'){
    textSlide.style.transition = `none`;
    counter = text.length - 2;
    textSlide.style.transform = `translateX(-${size * counter}px)`;
  }
  
  if(text[counter].id === 'firstClone'){
    textSlide.style.transition = `none`;
    counter = text.length - counter;
    textSlide.style.transform = `translateX(-${size * counter}px)`;
  }  
});

// TEXT SLIDER



// HEADER OFF-SET FUNCTION
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
// //HEADER OFF-SET FUNCTION 


// FOR HAMBUGER MENU //
const menuBar = document.querySelector("#menuBar");
const slide = document.querySelector(".header-nav");
const body =document.querySelector("body");

menuBar.addEventListener('click',()=>{
    slide.classList.add('active');
    body.classList.add("active");
});
// FOR TOGGLING HAMBUGER MENU //

// FOR OPENING SUB-MENU SLIDE //
const arrow = document.querySelectorAll("#arrow");
arrow.forEach(element => {
    element.addEventListener("click",function(){
        arrow.forEach(arr=>arr.classList.remove("active"))
        this.classList.add("active")
    })
});
// FOR OPENING SUB-MENU SLIDE //


// FOR OPENING SUB-MENU INNER-SLIDE //
const arrow2 = document.querySelectorAll("#arrow2");
arrow2.forEach(element => {
    element.addEventListener("click",function(){
        arrow2.forEach(arr=>arr.classList.remove("active"))
        this.classList.add("active")
    })
});
// FOR OPENING SUB-MENU INNER-SLIDE //

// CLICK EVENT ON BACK ARROW TO CLOSE CURRENT SUB-MENU INNER-SLIDE
const close2 = document.querySelectorAll(".header-search");
 
close2.forEach(element => {
    element.addEventListener("click",function(){
        arrow2.forEach(arr=>arr.classList.remove("active"))
        this.classList.add("active")
    })
});
// CLICK EVENT ON BACK ARROW TO CLOSE CURRENT SUB-MENU INNER-SLIDE


// CLICK EVENT ON BACK ARROW TO CLOSE CURRENT SUB-MENU SLIDE
const close = document.querySelectorAll(".header-nav-search");
 
close.forEach(element => {
    element.addEventListener("click",function(){
        arrow.forEach(arr=>arr.classList.remove("active"))
        this.classList.add("active")
    })
});
// CLICK EVENT ON BACK ARROW TO CLOSE CURRENT SUB-MENU SLIDE



// when click on OVERLAY then remove main slider
const main = document.querySelector(".header-overlay");

main.addEventListener('click',()=>{
    slide.classList.remove('active');
    body.classList.remove("active");
});
// when click on OVERLAY then remove main slider

// REMOVE SUB MENU SLIDE WHEN CLICK ON HEADER OVERLAY //
const main2 = document.querySelector(".header-overlay");
main2.addEventListener("click", ()=>{
    arrow.forEach(arr=>arr.classList.remove("active"))
    this.classList.add("active");
    
})
// REMOVE SUB MENU SLIDE WHEN CLICK ON HEADER OVERLAY //

//<<<<<<<<<<<----------HEADER JS FUNCTIONS ENDS---------------->>>>>>>>>>>>>>>>>>



//<<<<<<<<<<<----------MAIN SECTION JS FUNCTIONS---------------->>>>>>>>>>>>>

// --------------ExpandView-animation-section3
const details =document.querySelector(".productdetails");
window.addEventListener("scroll",()=>{
    if (window.pageYOffset>150){
        details.classList.add("fixed")
    }   
});
 // --------------//ExpandView-animation-section3

//<<<<<<<<<<<----------MAIN SECTION JS FUNCTIONS EDNS---------------->>>>>>>>>>>>>
 



//<<<<<<<<<<<----------FOOTER JS FUNCTIONS---------------->>>>>>>>>>>>>>>>>>

// ACCORDION FOR FOOTER SECTION
const accordion = document.getElementsByClassName('contentBx');
for(i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click',function(){
    this.classList.toggle('active')
    });
}
// ACCORDION FOR FOOTER SECTION
// ACCORDION FOR FOOTER SECTION
const accordionProduct = document.getElementsByClassName('contentbox');
for(i=0; i<accordionProduct.length; i++){
    accordionProduct[i].addEventListener('click',function(){ 
    this.classList.toggle('active');
    });
}
// ACCORDION FOR FOOTER SECTION





const toClick = document.querySelector('.left-arrow');
const mask = document.querySelector('.mask')
toClick.addEventListener("click", () =>{
    mask.classList.add('active')
});


const toClickright = document.querySelector('.right-arrow');
 toClickright.addEventListener('click',()=>{
        mask.classList.remove('active')
    })
 





// FOR POP-UP CHATBOX
// const openChatBox = document.querySelector(".faq-icon")
// const chatBox = document.querySelector(".pop-up");
// openChatBox.addEventListener("click",()=>{
//     chatBox.classList.toggle('active')
//     openChatBox.classList.toggle('active')
// });
// /FOR POP-UP CHATBOX

//<<<<<<<<<<<----------FOOTER JS FUNCTIONS ENDS---------------->>>>>>>>>>>>>>>>>>

