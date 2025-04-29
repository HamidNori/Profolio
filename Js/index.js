console.clear(); 
gsap.registerPlugin(ScrollTrigger);
let cards = document.querySelectorAll(".card");
const stagger = 1;
const scaleMax = gsap.utils.mapRange(0.001, cards.length - 1, 0.9, 1);

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

// Öppna kort som popup
cards.forEach((card) => {
  card.addEventListener("click", function (e) {
    // Förhindra att klick på stängknappen triggar öppning igen
    if (e.target.classList.contains("close-btn")) return;

    cards.forEach(c => c.classList.remove("open")); // Stäng andra kort
    card.classList.add("open");
  });
});

// Stäng popup när man klickar på stängknappen
document.querySelectorAll(".close-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation(); // Förhindra bubbling
    this.closest(".card").classList.remove("open");
  });
});
