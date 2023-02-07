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