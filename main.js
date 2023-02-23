//<<<<<<<<<<<----------HEADER JS FUNCTIONS---------------->>>>>>>>>>>>>>>>>>

// TEXT SLIDER
const textSlide = document.querySelector(".text-slide");
const text = textSlide.querySelectorAll("a");

let counter = 1;
const size = text[0].clientWidth;

//to set the slide one as the first slide instead of the clone
textSlide.style.transform = `translateX(-${size * counter}px)`;

//looping the slider every 7s
setInterval(() => {
    if (counter >= text.length - 1) return;

    textSlide.style.transition = `transform 0.8s ease`;
    counter++;
    textSlide.style.transform = `translateX(-${size * counter}px)`;

}, 7000);

textSlide.addEventListener('transitionend', () => {
    if (text[counter].id === 'lastClone') {
        textSlide.style.transition = `none`;
        counter = text.length - 2;
        textSlide.style.transform = `translateX(-${size * counter}px)`;
    }

    if (text[counter].id === 'firstClone') {
        textSlide.style.transition = `none`;
        counter = text.length - counter;
        textSlide.style.transform = `translateX(-${size * counter}px)`;
    }
});

// TEXT SLIDER



// HEADER OFF-SET FUNCTION
(function () {

    var doc = document.documentElement;
    var w = window;
    var curScroll;
    var prevScroll = w.scrollY || doc.scrollTop;
    var curDirection = 0;
    var prevDirection = 0;


    var header = document.querySelector('.header-container');
    var toggled;
    var threshold = 200;

    var checkScroll = function () {
        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) {

            curDirection = 2;
        }
        else {

            curDirection = 1;
        }

        if (curDirection !== prevDirection) {
            toggled = toggleHeader();
        }

        prevScroll = curScroll;
        if (toggled) {
            prevDirection = curDirection;
        }
    };

    var toggleHeader = function () {
        toggled = true;
        if (curDirection === 2 && curScroll > threshold) {
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

// FOR TOGGLING MOBILE HAMBUGER MENU //
const mobileMenuIcon = document.querySelector("#mobileMenuIcon");
const slide = document.querySelector(".header-nav");
const body = document.querySelector("body");
mobileMenuIcon.addEventListener('click', () => {
    slide.classList.add('active');
    body.classList.add("active");
});
// FOR TOGGLING MOBILE HAMBUGER MENU //

// FOR OPENING SUB-MENU SLIDE //
const arrow = document.querySelectorAll("#arrow");
arrow.forEach(element => {
    element.addEventListener("click", function () {
        arrow.forEach(arr => arr.classList.remove("active"))
        this.classList.add("active")
    })
});
// FOR OPENING SUB-MENU SLIDE //


// FOR OPENING SUB-MENU INNER-SLIDE //
const arrow2 = document.querySelectorAll("#arrow2");
arrow2.forEach(element => {
    element.addEventListener("click", function () {
        arrow2.forEach(arr => arr.classList.remove("active"))
        this.classList.add("active")
    })
});
// FOR OPENING SUB-MENU INNER-SLIDE //


// CLICK EVENT ON BACK ARROW TO CLOSE CURRENT SUB-MENU INNER-SLIDE
const close2 = document.querySelectorAll(".header-search");

close2.forEach(element => {
    element.addEventListener("click", function () {
        arrow2.forEach(arr => arr.classList.remove("active"))
        this.classList.add("active")
    })
});
// CLICK EVENT ON BACK ARROW TO CLOSE CURRENT SUB-MENU INNER-SLIDE


// CLICK EVENT ON BACK ARROW TO CLOSE CURRENT SUB-MENU SLIDE
const close = document.querySelectorAll(".header-nav-search");

close.forEach(element => {
    element.addEventListener("click", function () {
        arrow.forEach(arr => arr.classList.remove("active"))
        this.classList.add("active")
    })
});
// CLICK EVENT ON BACK ARROW TO CLOSE CURRENT SUB-MENU SLIDE




// when click on OVERLAY then remove main slider
const main = document.querySelector(".header-overlay");

main.addEventListener('click', () => {
    slide.classList.remove('active');
    body.classList.remove("active");
});
// when click on OVERLAY then remove main slider


// REMOVE SUB MENU SLIDE WHEN CLICK ON HEADER OVERLAY //
const main2 = document.querySelector(".header-overlay");
main2.addEventListener("click", () => {
    arrow.forEach(arr => arr.classList.remove("active"))
    this.classList.add("active");
    
})
// REMOVE SUB MENU SLIDE WHEN CLICK ON HEADER OVERLAY //


// FOR TOGGLING add to cart MENU //
const cartIcon = document.querySelector("#CartIcon");
const addToCart = document.querySelector(".AddtoCart");

cartIcon.addEventListener('click', () => {
    addToCart.classList.add('active');
    body.classList.add("active");
});
// FOR TOGGLING add to cart MENU //

// when click on overlay add to cart section removes from active
const overlay2 = document.querySelector(".header-overlay2");

overlay2.addEventListener('click', () => {
    addToCart.classList.remove('active');
    body.classList.remove("active");
});
// when click on overlay add to cart section removes from active

//<<<<<<<<<<<----------HEADER JS FUNCTIONS ENDS---------------->>>>>>>>>>>>>>>>>>


// new in page text read more & read less funtionality //
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
// new in page text read more & read less  funtionality //





//<<<<<<<<<<<----------FOOTER JS FUNCTIONS---------------->>>>>>>>>>>>>>>>>>


// ACCORDION FOR FOOTER SECTION
const accordion = document.getElementsByClassName('contentBx');
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    });
}
// ACCORDION FOR FOOTER SECTION

// SLIDER IMAGES -->
let slideIndex = 0;
showSlides();

function showSlides() {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";  
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}    
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
setTimeout(showSlides, 5000); // Change image every 5 seconds
}
// SLIDER IMAGES -->

// FOR POP-UP CHATBOX
// const openChatBox = document.querySelector(".faq-icon")
// const chatBox = document.querySelector(".pop-up");
// openChatBox.addEventListener("click", () => {
//     chatBox.classList.toggle('active')
//     openChatBox.classList.toggle('active')
// });


// // Close popup from left angle arrow in mobile design
// const closePopup = document.querySelector("#popUp-close");

// closePopup.addEventListener("click",()=>{
// chatBox.classList.remove("active")
// openChatBox.classList.remove("active")
// })

// Close popup from left angle arrow in mobile design
// /FOR POP-UP CHATBOX

 
//<<<<<<<<<<<----------FOOTER JS FUNCTIONS ENDS---------------->>>>>>>>>>>>>>>>>>




