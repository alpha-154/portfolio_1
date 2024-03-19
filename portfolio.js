/* ============= SHOW MENU ============ */

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/* ============= MENU SHOW ============ */

/*     Validate if constant exists      */
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu");
    })
}


/* ============= MENU HIDDEN ============ */

/*     Validate if constant exists      */
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu");
    })
}


/* === REMOVE THE MOBILE MENU AFTER CLICKING ON A LINK ELEMENT ========= */
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    //after clicking on the each nav-link , the menu div will be removed from the viewport
    navMenu.classList.remove("show-menu");
}
navLink.forEach( (link) => {link.addEventListener("click",linkAction)});


/*  =============  SWIPER PROJECTS ============= */

let swiperProjects = new Swiper(".projects__container", {
    loop:false,
    spaceBetween: 25,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
       
      },
    mousewheel: true,
    keyboard: true,
  });


/* ==================   SWIPER TESTIMONIAL ==========  */

let swiperTestimonial = new Swiper(".testimonial__container", {
  //grabCursor: true, //(this also serve the same purpose but it's not working here)
  mousewheel: true, 
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


/* ====================   EMAIL JS  ======================*/

////////confusion and flawed

const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactProject = document.getElementById("contact-project");
const contactMessage = document.getElementById("contact-message");


const sendEmail = (e) => {
    e.preventDefault();
    
    //check if the field has a value
    if(contactName.value === "" || contactEmail.value === "" || contactProject.value === ""){
      contactMessage.classList.remove("color-blue");
      contactMessage.classList.add("color-red");

      //show message
      contactMessage.textContent = "You must have to fill all the input fields";
    }
    else{
      //serviceID - templateID - #Form - publicKey
      emailjs.sendForm("mrh07","template_5b6w19p","contact-form","yajRG8tjAuypyE9pq")
       .then(() =>{
        //Show message and add color
        contactMessage.classList.add("color-blue");
        contactMessage.textContent = "Message Sent!!!";

        //Remove message after five seconds
        setTimeout(() =>{
          contactMessage.textContent = "";
        },5000)

       }, (error) =>{
          alert('OOPS! SOMETHING WENT WRONG....', error);
       })

       //To clear the input field
       contactName.value = "";
       contactEmail.value = "";
       contactProject.value = "";

    }
    

}

contactForm.addEventListener("submit",sendEmail);

/* ===============  SCROLL SECTIONS ACTIVE LINK ======== */

////////confusion

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {

    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionsClass.classList.add("active-link");
    }else{
      sectionsClass.classList.remove("active-link");
    }   
    
  });

}

window.addEventListener("scroll" , scrollActive);


/* =================   SHOW  SCROLL  UP    ============ */

const scrollUpActivate = () => {

  const scrollUp = document.getElementById("scroll-up");

  //when the scroll is higher than 350 viewport height , add the show-scroll
  //class to the tag with scroll-up

  // console.log(this.scrollY);
  this.scrollY >= 350 ? scrollUp.classList.add("show-scroll"):scrollUp.classList.remove("show-scroll");

} 

window.addEventListener("scroll" , scrollUpActivate);


/* ==================   DARK LIGHT THEME   ============= */

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

//Previously selected topic (if user selected)

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

//We validate if the user previously chose a topic
if(selectedTheme){
  //if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the the dark theme
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme);

}

//Activate / Deactivate the theme manually with the button
themeButton.addEventListener("click", () => {

  //Add or Remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  
  //We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());


})



/* ===============  CHANGE BACKGROUND HEADER  ======== */

const scrollHeader = () => {
  const header = document.getElementById("header");

  //when the scroll is greater than 50 viewport height, add teh scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add("bg-header") : header.classList.remove("bg-header");
}

window.addEventListener("scroll", scrollHeader);




/*  ========== ANIMATION FIXING  ============= */






const skillsContent= document.querySelectorAll(".skills_content");
const qualificationContent = document.querySelectorAll(".qualification__content");
const servicesContainer = document.querySelector(".services__container");
const projectsContainer = document.querySelector(".projects__container");
const testimonialContainer = document.querySelectorAll(".testimonial__container");
const contactContainer = document.querySelectorAll(".contact__container");
const footerContainer = document.querySelector(".footer__container");
  

const animeActivate = () => {



  if(this.scrollY >= 520){
    skillsContent[0].classList.remove("hideAnime");
    skillsContent[1].classList.remove("hideAnime");
  }
  if(this.scrollY >= 1400){
    qualificationContent[0].classList.remove("hideAnime");
    qualificationContent[1].classList.remove("hideAnime");
  }
  if(this.scrollY >= 2350){
    servicesContainer.classList.remove("hideAnime");
  }
  if(this.scrollY >= 3000){
    projectsContainer.classList.remove("hideAnime");
  }
  if(this.scrollY >= 3700){
    testimonialContainer[0].classList.remove("hideAnime");
  }
  if(this.scrollY >= 4200){
    contactContainer[0].classList.remove("hideAnime");

  }
  //problem ...
  // if(this.scrollY >= 4400){
  //   footerContainer.classList.remove("hideAnime");

  // }
  

} 

window.addEventListener("scroll" , animeActivate);