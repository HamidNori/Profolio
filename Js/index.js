console.clear(); // Start with a clean console on refesh
let cards = document.querySelectorAll(".card");
const stagger = 1;
const scaleMax = gsap.utils.mapRange(1, cards.length - 1, 0.8, 1);


//--------------------------------//
// Setup the cards loaction  
//--------------------------------//
gsap.set(".card", {
  transformStyle: "preserve-3d",
  transformPerspective: 1920,
  transformOrigin: "center top",
  y: (index) => {
    return 30 * index;
  }
});
// END Setup the cards loaction  --------------//


//--------------------------------//
// The aniatmion 
//--------------------------------//
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
    rotationX: -20,
    opacity: 0.9,
    scale: (index) => {
      return scaleMax(index);
    },
    stagger: {
      each: stagger
    }
  },
  stagger
);
// END The aniatmion --------------//
