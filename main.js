gsap.from(".rtright", {
  opacity: 0,
  x: 300,
  duration: 1.2,
});
gsap.from(".rbottom", {
  opacity: 0,
  y: 300,
  duration: 1.2,
});

gsap.from(".lbottom", {
  opacity: 0,
  scale: 0.1,
  duration: 0.8,
});
gsap.from(".ltop", {
  opacity: 0,
  y: -100,
  duration: 0.8,
});

let mm = gsap.matchMedia();

mm.add("(min-width: 601px)", () => {
  gsap.from(".rtleft", {
    opacity: 0,
    y: -300,
    duration: 1.2,
  });
});

mm.add("(max-width: 600px)", () => {
  gsap.from(".rtleft", {
    opacity: 0,
    x: -300,
    duration: 1.2,
  });
});
