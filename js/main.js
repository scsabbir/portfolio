/*==================================================
    Sabbir Portfolio Pro
    File : main.js
==================================================*/


// ===============================
// Page Loader
// ===============================


window.addEventListener("load",()=>{


    const loader=document.getElementById("loader");


    setTimeout(()=>{

        loader.style.opacity="0";

        loader.style.visibility="hidden";


    },1000);


});








// ===============================
// Header Scroll Effect
// ===============================


const header=document.getElementById("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY>50){

        header.classList.add("active");

    }

    else{

        header.classList.remove("active");

    }


});








// ===============================
// Mobile Menu
// ===============================


const menuBtn=document.querySelector(".menu-btn");

const navLinks=document.querySelector(".nav-links");



menuBtn.addEventListener("click",()=>{


    navLinks.classList.toggle("active");


    menuBtn.innerHTML=
    navLinks.classList.contains("active")

    ?
    '<i class="fa-solid fa-xmark"></i>'

    :
    '<i class="fa-solid fa-bars"></i>';


});







// Close menu after click


document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.classList.remove("active");


        menuBtn.innerHTML=
        '<i class="fa-solid fa-bars"></i>';


    });


});









// ===============================
// Scroll Progress Bar
// ===============================


const progressBar=document.getElementById("progress-bar");


window.addEventListener("scroll",()=>{


let scrollTop=document.documentElement.scrollTop;


let height=
document.documentElement.scrollHeight -
document.documentElement.clientHeight;


let progress=
(scrollTop/height)*100;



progressBar.style.width=
progress+"%";


});









// ===============================
// Back To Top
// ===============================


const backToTop=
document.getElementById("backToTop");



window.addEventListener("scroll",()=>{


if(window.scrollY>400){


backToTop.classList.add("show");


}

else{


backToTop.classList.remove("show");


}



});






backToTop.addEventListener("click",(e)=>{


e.preventDefault();


window.scrollTo({

top:0,

behavior:"smooth"

});


});









// ===============================
// Custom Cursor
// ===============================


const cursor=
document.querySelector(".cursor");


const cursorDot=
document.querySelector(".cursor-dot");




document.addEventListener("mousemove",(e)=>{


cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";



cursorDot.style.left=e.clientX+"px";

cursorDot.style.top=e.clientY+"px";



});









// ===============================
// Typing Effect
// ===============================


const typingElement=
document.getElementById("typing");



const words=[

"Web Developer",

"Frontend Developer",

"Graphics Designer",

"Digital Marketer"

];



let wordIndex=0;

let charIndex=0;

let deleting=false;






function typing(){



let currentWord=
words[wordIndex];



if(!deleting){


typingElement.textContent=
currentWord.substring(
0,
charIndex++
);


}

else{


typingElement.textContent=
currentWord.substring(
0,
charIndex--
);


}







if(!deleting && charIndex===currentWord.length+1){


deleting=true;


setTimeout(typing,1000);


return;


}






if(deleting && charIndex===0){


deleting=false;


wordIndex++;


if(wordIndex===words.length){

wordIndex=0;

}


}





setTimeout(
typing,
deleting ? 60 : 120
);



}



if(typingElement){

typing();

}









// ===============================
// Smooth Scroll
// ===============================


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


anchor.addEventListener("click",function(e){


let target=
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}



});


});








// ===============================
// Scroll Reveal
// ===============================


const revealElements=
document.querySelectorAll(".reveal");



window.addEventListener("scroll",()=>{


revealElements.forEach(el=>{


let windowHeight=
window.innerHeight;


let top=
el.getBoundingClientRect().top;



if(top < windowHeight-100){


el.classList.add("active");


}



});


});








// ===============================
// AOS Initialize
// ===============================


if(typeof AOS !== "undefined"){


AOS.init({

duration:1000,

once:true

});


}
