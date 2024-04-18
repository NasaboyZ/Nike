const slider = document.querySelector(".slider");
const sections = gsap.utils.toArray(".slider section");
const mask = document.querySelector(".inner");

gsap.registerPlugin(ScrollTrigger); // Das ScrollTrigger-Plugin muss registriert werden, um es verwenden zu können

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: slider,
    pin: true,
    scrub: 1,
    end: "+=3000",
    snap: {
      snapTo: 1 / (sections.length - 1),
      duration: 0.1,
      delay: 0.1,
      ease: "power3.inOut",
    },
  },
});

// Animation für jeden Abschnitt

sections.forEach((section) => {
  let h1 = section.querySelector("h1");
  let para = section.querySelector("p");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top center",
      end: "right middle",
      markers: false,
    },
  });

  tl.from(h1, {
    yPercent: 135,
  });
  tl.from(para, {
    yPercent: 50,
    opacity: 0,
  });
});

// smooth scroll

function raf(time) {
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
