// ================= TYPING EFFECT =================


const roles = [

    "Full Stack Web Developer",

    "Frontend Developer",

    "JavaScript Developer",

    "Node.js Developer",

    "Python Programmer"

];


let roleIndex = 0;

let charIndex = 0;

let deleting = false;


const typing = document.getElementById("typing");



function typeEffect(){


    const current = roles[roleIndex];


    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

    }

    else{

        typing.textContent = current.substring(0,charIndex--);

    }



    let speed = deleting ? 50 : 100;



    if(!deleting && charIndex === current.length + 1){

        deleting = true;

        speed = 1500;

    }



    if(deleting && charIndex === 0){

        deleting = false;

        roleIndex++;

        if(roleIndex >= roles.length){

            roleIndex = 0;

        }

    }



    setTimeout(typeEffect,speed);

}



typeEffect();





// ================= GITHUB PROJECT LOAD =================



const username = "scsabbir";


const projectContainer = document.getElementById("project-container");



fetch(`https://api.github.com/users/${username}/repos`)


.then(response => response.json())


.then(repos => {



    repos.slice(0,6).forEach(repo => {



        projectContainer.innerHTML += `


        <div class="project-card">


        <h3>

        ${repo.name}

        </h3>


        <p>

        ${repo.description || "My GitHub Project"}

        </p>



        <a href="${repo.html_url}" target="_blank">

        View Code

        </a>



        </div>


        `;



    });



})


.catch(error=>{


console.log("GitHub Error:",error);


projectContainer.innerHTML =

"<p>Projects could not be loaded.</p>";

});





// ================= REMOVE LOADER =================



window.addEventListener("load",()=>{


    const loader = document.querySelector(".loader");


    if(loader){

        loader.style.display="none";

    }


});





// ================= SCROLL ANIMATION =================



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add("show");


    }


});


});



document.querySelectorAll(".hidden").forEach(section=>{


    observer.observe(section);


});