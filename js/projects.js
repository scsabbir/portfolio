/*==================================================
    Sabbir Portfolio Pro
    File : projects.js
==================================================*/


// ===============================
// Project Filter
// ===============================


const filterButtons =
document.querySelectorAll(
".project-filter button"
);



const projectCards =
document.querySelectorAll(
".project-card"
);





filterButtons.forEach(button=>{


button.addEventListener("click",()=>{



// Remove Active Class

filterButtons.forEach(btn=>{

btn.classList.remove("active");

});



// Add Active Class

button.classList.add("active");





let filterValue =
button.textContent
.toLowerCase();





projectCards.forEach(card=>{



let category =
card.querySelector("span")
.textContent
.toLowerCase();





if(
filterValue==="all" ||
category.includes(filterValue)
){


card.style.display="block";


setTimeout(()=>{


card.style.opacity="1";

card.style.transform=
"translateY(0)";


},100);



}

else{


card.style.opacity="0";


card.style.transform=
"translateY(30px)";



setTimeout(()=>{


card.style.display="none";


},300);



}




});



});



});









// ===============================
// Project Hover Animation
// ===============================


projectCards.forEach(card=>{


card.addEventListener(
"mouseenter",
()=>{


card.style.transition=
".35s ease";


}
);



});









// ===============================
// Load Projects From JSON
// ===============================


async function loadProjects(){


const projectContainer =
document.querySelector(
".projects-grid"
);



if(!projectContainer)
return;



try{


const response =
await fetch(
"data/projects.json"
);



const projects =
await response.json();





projects.forEach(project=>{



let card =
document.createElement(
"div"
);



card.className=
"project-card";





card.innerHTML=`

<div class="project-image">

<img src="${project.image}"
alt="${project.title}">

</div>


<div class="project-content">


<span>
${project.category}
</span>


<h3>
${project.title}
</h3>


<p>
${project.description}
</p>



<div class="project-buttons">


<a href="${project.live}"
class="btn primary-btn"
target="_blank">

Live Demo

</a>



<a href="${project.github}"
class="btn secondary-btn"
target="_blank">

Github

</a>


</div>


</div>

`;





projectContainer.appendChild(card);



});



}

catch(error){


console.log(
"Project Loading Error:",
error
);



}



}





loadProjects();








// ===============================
// Contact Form Validation
// ===============================


const contactForm =
document.querySelector(
".contact-form form"
);



if(contactForm){



contactForm.addEventListener(
"submit",
(e)=>{


e.preventDefault();



alert(
"Thank you! Your message has been received."
);



contactForm.reset();



});



}
