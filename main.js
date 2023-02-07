const view =document.querySelector(".expandview");
window.addEventListener("scroll",()=>{
    if (window.pageYOffset>1350){
        view.classList.add("active")
    }
       
})