new WOW().init();


const scrollBtn =document.querySelector(".scroll-to-top");
const refreshButtonVisibility = () => {
    if(document.documentElement.scrollTop <= 950) {
        scrollBtn.style.display = "none";
      }
   
      else {
       scrollBtn.style.display = "block";
      }
};

refreshButtonVisibility();


scrollBtn.addEventListener("click", ()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

});


document.addEventListener("scroll" ,(e) => {
    refreshButtonVisibility(); 
});



//====================================Gsap======================================//

var text = gsap.timeline({
    paused:false
});

text.from(".intro img",1,{
    rotation:360,
    repeat:-1,   
    ease:"easeInOut",
});

text.to(".intro img",1,{
    opacity:0,
    ease:"easeInOut",
    y:-50,
    delay:0.5,
    onComplete: function(){
        TweenLite.delayedCall(1, MyFunction);
    }
});


function MyFunction () {
    var body = document.querySelector("body");
    body.style.overflow="auto";

}

text.to(".container1",1,{
    y:"-100%",
    ease:"power4.out", 
})

//==============================================END===================================//



//=====================================change icon===============================//


const hamburger_menu = document.querySelector(".humburger-menu");
const navbar = document.querySelector("nav");
const links = document.querySelectorAll(".nav-item a");


function closeMenu() {
    navbar.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
  }


  hamburger_menu.addEventListener("click", () => {
    if (!navbar.classList.contains("open")) {
      navbar.classList.add("open");
      document.body.classList.add("stop-scrolling");
    } else {
      closeMenu();
    }
  });

  links.forEach((link) => link.addEventListener("click", () => closeMenu()));





