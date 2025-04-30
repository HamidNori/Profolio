console.clear(); 
gsap.registerPlugin(ScrollTrigger);
let cards = document.querySelectorAll(".card");
const stagger = 1;
const scaleMax = gsap.utils.mapRange(0.001, cards.length - 1, 0.9, 1);
const secoundCard = document.getElementById("second-card");

gsap.set(".card", {
  transformStyle: "preserve-3d",
  transformPerspective: window.innerWidth * 2,
  transformOrigin: "top center",
  y: (index) => {
    return 30 * index;
  }
});

const tl = gsap.timeline({});

tl.from(".card", {
  scale: 1,
  y: () => window.innerHeight,
  stagger: {
    each: 1
  }
});

tl.to(
  ".card",
  {
    rotationX: 0,
    opacity: 1,
    scale: (index) => {
      return scaleMax(index);
    },
    stagger: {
      each: stagger
    }
  },
  stagger
);


gsap.to(".scroll-container", {
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "top top",
    end: "+=400", 
    scrub: true, 
    markers: false 
  },
  opacity: 0,
  y: -50,
  ease: "none"
});

const openBnt = document.getElementById("Open-navbar");
const closeBnt = document.getElementById("Close-navbar");
const navbar = document.getElementById("navbar");

openBnt.addEventListener("click", () => {
  navbar.classList.add("open");
});

closeBnt.addEventListener("click", () =>{
  navbar.classList.remove("open");
});

let isExpanded = false;

secoundCard.addEventListener("click", () => {
  // Växla tillståndet för isExpanded
  isExpanded = !isExpanded;

  if (isExpanded) {
    // Expandera kortet
    gsap.to(secoundCard, {
      clearProps: "transform", // Ta bort transform-egenskapen
      width: "100vw",
      height: "100vh",
      padding: 0,
      margin: 0,
      top: 0,
      left: 0,
      position: "fixed",
      zIndex: 1001,
      duration: 0.5,
      ease: "power2.out",
      borderRadius: 0,
      onStart: () => {
        document.body.style.overflow = "hidden"; // Förhindra scroll
      }
    });
  } else {
    // Återställ kortet
    gsap.to(secoundCard, {
      width: "80%",
      height: "60svh",
      margin: "3.5rem",
      position: "sticky",
      top: "10%",
      zIndex: 1000,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        document.body.style.overflow = ""; // Återställ scroll
      }
    });

    // Återställ transform-egenskapen
    gsap.set(secoundCard, {
      transformStyle: "preserve-3d",
      transformPerspective: window.innerWidth * 2,
      transformOrigin: "top center",
      y: 30 // Återställ y-position
    });
  }
});



