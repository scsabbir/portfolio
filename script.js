// =========================================
// Portfolio JavaScript
// Part 1
// =========================================

// ---------- Loader ----------

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

    loader.style.transition = "0.6s";

});

// ---------- Typing Effect ----------

const typing = document.getElementById("typing");

const words = [

    "Full Stack Developer",

    "Frontend Developer",

    "Backend Developer",

    "JavaScript Developer",

    "Web Designer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);
        
        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 45 : 100);

}

typeEffect();

// ---------- Dark / Light Theme ----------

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

});

// ---------- Scroll To Top ----------

const topBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ---------- Active Navigation ----------

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
// =========================================
// Portfolio JavaScript
// Part 2
// =========================================

// ---------- Save Theme ----------

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    const icon = document.querySelector("#theme-btn i");

    if (icon) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }

}

const themeButton = document.getElementById("theme-btn");

if (themeButton) {

    themeButton.addEventListener("click", () => {

        if (document.body.classList.contains("light")) {

            localStorage.setItem("theme", "light");

        } else {

            localStorage.setItem("theme", "dark");

        }

    });

}

// ---------- Navbar Background ----------

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(15,23,42,.92)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(15,23,42,.65)";
        header.style.boxShadow = "none";

    }

});

// ---------- Reveal Animation ----------

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll(".section").forEach(section => {

    observer.observe(section);

});

// ---------- Counter Animation ----------

const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter => {

    const text = counter.innerText;

    const number = parseInt(text);

    const suffix = text.replace(number, "");

    let current = 0;

    const timer = setInterval(() => {

        current++;

        counter.innerText = current + suffix;

        if (current >= number) {

            counter.innerText = number + suffix;

            clearInterval(timer);

        }

    }, 40);

});

// ---------- Contact Form ----------

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        form.reset();

    });

}

// ---------- Hover Tilt ----------

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - .5) * 12;

        const rotateX = (rect.height / 2 - y) / 12;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0)";

    });

});

// ---------- Console Message ----------

console.log("%cWelcome to Sabbir's Portfolio",
"color:#06b6d4;font-size:20px;font-weight:bold;");

console.log("%cDeveloped by Md. Sabbir Chowdury",
"color:#4f46e5;font-size:14px;");