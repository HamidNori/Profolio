console.clear(); 
gsap.registerPlugin(ScrollTrigger);
let cards = document.querySelectorAll(".card");
const stagger = 0.8;
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
    end: "-=100", 
    scrub: true, 
    markers: false 
  },
  opacity: 0,
  ease: "none"
});

