// ===============================
// Dark / Light Mode
// ===============================

const themeBtn = document.getElementById("themeBtn");

let darkMode = false;

themeBtn.addEventListener("click", () => {

    darkMode = !darkMode;

    if(darkMode){

        document.body.style.background="#0F172A";
        document.body.style.color="#ffffff";

        document.querySelector("header").style.background="#111827";

        themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

    else{

        document.body.style.background="#ffffff";
        document.body.style.color="#111827";

        document.querySelector("header").style.background="#ffffff";

        themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

});

// ===============================
// Smooth Fade Animation
// ===============================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="1s";

observer.observe(section);

});

// ===============================
// Active Navbar
// ===============================

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ===============================
// Scroll To Top Button
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#2563EB";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 10px 20px rgba(0,0,0,.2)";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ===============================
// Hero Typing Effect
// ===============================

const title=document.querySelector(".hero-left h2");

const words=[
"AI & Machine Learning Engineer",
"Python Developer",
"AI Enthusiast",
"Future ML Engineer"
];

let wordIndex=0;
let charIndex=0;
let typing=true;

function typeEffect(){

let currentWord=words[wordIndex];

if(typing){

title.textContent=currentWord.substring(0,charIndex++);

if(charIndex>currentWord.length){

typing=false;

setTimeout(typeEffect,1500);

return;

}

}

else{

title.textContent=currentWord.substring(0,charIndex--);

if(charIndex===0){

typing=true;

wordIndex=(wordIndex+1)%words.length;

}

}

setTimeout(typeEffect,80);

}

typeEffect();

// ===============================
// Console Message
// ===============================

console.log("Welcome to Dhayanithi's Portfolio 🚀");