// animation-section3
const view =document.querySelector(".expandview");
window.addEventListener("scroll",()=>{
    if (window.pageYOffset>1350){
        view.classList.add("active")
    }
       
})
// //animation-section3


const cta = document.querySelectorAll(".categories");
const items = document.querySelector(".foot-Links");
for(i=0;i<cta.length;i++){
    cta[i].addEventListener("click",()=>{
    this.classList.toggle("active");
    });
}


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

})

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

// const searchbar = document.querySelector(".srch");
// const divactive = document.querySelector(".search-bar");
// searchbar.addEventListener('click',()=>{
//     divactive.classList.add('active');
// })
// side menu //