let menubar= document.querySelector(".icon");
let menu= document.querySelector(".toggle");
menubar.addEventListener("click", function(e){
    if(menu.style.display=== "none"){
        menu.style.display="block";
        menubar.classList.remove("im", "im-menu");
        menubar.classList.add("im", "im-x-mark");
    }
    else{
        menubar.classList.remove("im", "im-x-mark");
        menubar.classList.add("im", "im-menu");
        menu.style.display="none";
    }
})
menu.addEventListener("click", function(e){
    menu.style.display="none";
    menubar.classList.remove("im", "im-x-mark");
    menubar.classList.add("im", "im-menu");
})