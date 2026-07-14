/*==================================================
    Sabbir Portfolio Pro
    File : theme.js
==================================================*/


// ===============================
// Theme Toggle
// ===============================


const themeToggle =
document.getElementById("theme-toggle");



const body =
document.body;



const themeIcon =
themeToggle.querySelector("i");




// Load Saved Theme


const savedTheme =
localStorage.getItem("theme");



if(savedTheme==="light"){


body.classList.add("light");


themeIcon.classList.remove(
"fa-moon"
);


themeIcon.classList.add(
"fa-sun"
);


}





// Toggle Theme


themeToggle.addEventListener("click",()=>{


body.classList.toggle("light");



if(body.classList.contains("light")){


localStorage.setItem(
"theme",
"light"
);



themeIcon.classList.remove(
"fa-moon"
);


themeIcon.classList.add(
"fa-sun"
);



}

else{


localStorage.setItem(
"theme",
"dark"
);



themeIcon.classList.remove(
"fa-sun"
);


themeIcon.classList.add(
"fa-moon"
);



}



});
