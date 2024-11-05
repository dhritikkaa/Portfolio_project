function myMenuFunction(){
var menuBth=document.getElementById("myNavMenu");
if(menuBth.className === 'nav-mnu'){
    menuBth.className += 'responsive';

}else{
    menuBth.className="nav-menu"
}
}


// dark mode

const body=document.querySelector("body");
const toggleSwitch=document.getElementById("toggle-switch");
toggleSwitch.addEventListener("click",()=>{
    body.classList.toggle("dark");
});

//////////////
// var typingEffect =new Typed(".typedText", {
//     strings:["Designer", "Developer"],
//     loop:true,
//     typeSpeed:100,
//     backSpeed:80,
//     backDelay:2000,
// })
var typed = new Typed(".typedText", {
    strings: ["Web Designer.", " Web Developer"],
    typeSpeed: 50,
  });


const sr= ScrollReveal({
    origin:"top",
    distance:"80px",
    duration:2000,
    reset:true,
})
sr.reveal(".featured-name",{delay:100});
sr.reveal(".text-info",{delay:200});
sr.reveal(".text-btn",{delay:200});
sr.reveal(".socical-icons",{delay:200});
sr.reveal(".featured-image",{delay:320});
sr.reset(".education",{interval:200});
sr.reveal(".top-header",{});
const srLeft=ScrollReveal({
    origin:"left",
    distance:"80px",
    duration:2000,
    reset:true,
})
srLeft.reveal(".about-info",{delay:100})
srLeft.reveal(".contact-info",{delay:100})
