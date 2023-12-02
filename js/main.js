/* start navbar scrol */
window.addEventListener("scroll", (e) => {
  let navbar = document.querySelector("nav");
  let aboutSection = document.querySelector("#about");
  if (window.scrollY >= aboutSection.offsetTop) {
    console.log("done");
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
/* end navbar scrol */

/* start navbar links */
let sections = document.querySelectorAll("section");
sections = Array.from(sections);
sections.push(document.querySelector("header"));
let navLinks = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        console.log(navLinks);
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
/* end navbar links */

/* start header animated text */
var typed = new Typed("#animated-text", {
  strings: ["Larry Daniels", "Developer", "Designer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  loopCount: Infinity,
});
/* end header animated text */

/* start progress bar  */
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const bars = document.querySelectorAll(".progress-inner");

document.addEventListener(
  "scroll",
  function () {
    bars.forEach((el) => {
      if (isInViewport(el)) {
        el.style.width = el.getAttribute("data-value");
      }
    });
  },
  {
    passive: true,
  }
);
/* end progress bar  */

/* number section */
let section_counter = document.querySelector(".numbers");
let counters = document.querySelectorAll(".number-value");
let speed = 200;
let started = false;

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= section_counter.offsetTop - 200) {
    if (!started) {
      counters.forEach((counter) => {
        function UpdateCounter() {
          const targetNumber = +counter.getAttribute("data-value");
          const initialNumber = +counter.innerText;
          const incPerCount = targetNumber / speed;
          if (initialNumber < targetNumber) {
            counter.innerText = Math.ceil(initialNumber + incPerCount);
            setTimeout(UpdateCounter, 20);
          } else {
            counter.innerText = targetNumber;
          }
        }
        UpdateCounter();
      });
    }
    started = true;
  }
});
