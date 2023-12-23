// navigation
function nav() {
  document.querySelector(".nav-icon").classList.toggle("active-icon");
  document.querySelector(".nav-container").classList.toggle("active-nav");
}
// gsap animation
var tl1 = gsap.timeline();
tl1.to(".sec1 .title", {
  duration: 0.3,
  scale: 2,
  opacity: 1,
});

// scroll trigger
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec2",
    // markers: true,
    scrub: 0,
    start: "top center",
    end: "center center",
  },
});

tl2
  .from(".sec2 .title", {
    y: 100,
    opacity: 0,
  })
  .from(".sec2 .col1", {
    y: 100,
    opacity: 0,
  })
  .from(".sec2 .col2", {
    y: 100,
    opacity: 0,
  })
  .from(".sec2 .col3", {
    y: 100,
    opacity: 0,
  });

// scroll trigger
let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec3",
    // markers: true,
    scrub: 0,
    start: "top center",
    end: "center center",
  },
});

tl3
  .from(".sec3 .col1", {
    y: 100,
    opacity: 0,
  })
  .from(".sec3 .col2", {
    y: 100,
    opacity: 0,
  });
