const anchor = document.querySelector(".anchor");
const mobileNav = document.querySelector(".mobile-nav");

const MOBILE_WIDTH = 768;

anchor.addEventListener("click", (e) => {
  if (window.innerWidth <= MOBILE_WIDTH) {
    e.preventDefault();
    mobileNav.classList.toggle("open");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > MOBILE_WIDTH) {
    mobileNav.classList.remove("open");
  }
});


const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".job-card");

let index = 0;
const visible = 3;
const total = cards.length;

setInterval(() => {

    index++;

    if (index > total - visible) {
        index = 0;
    }

    const cardWidth = cards[0].offsetWidth + 20;

    track.style.transform = `translateX(-${index * cardWidth}px)`;

}, 2000);

const viewAllBtn = document.getElementById("viewAllBtn");
const allJobsSection = document.getElementById("allJobsSection");

viewAllBtn.addEventListener("click", function(e) {

    e.preventDefault();

    if (allJobsSection.style.display === "block") {

        allJobsSection.style.display = "none";
        viewAllBtn.textContent = "View All Jobs →";

    } else {

        allJobsSection.style.display = "block";
        viewAllBtn.textContent = "Hide Jobs ↑";

        allJobsSection.scrollIntoView({
            behavior: "smooth"
        });

    }

});

