let header = document.querySelector(".header"),
  menu = document.querySelector(".nav-menu"),
  close = document.querySelector("#nav-close"),
  toggle = document.querySelector(".nav-toggle i"),
  links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }
});
toggle.addEventListener("click", () => {
  menu.classList.add("show");
});
close.addEventListener("click", () => {
  menu.classList.remove("show");
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});

// swiper js
const swiper = new Swiper(".discover-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
});

// video player
let playBtn = document.querySelector(".button-play"),
  video = document.getElementById("video-file"),
  icon = document.getElementById("icon");

function videoPlayer() {
  if (video.paused) {
    // Play video
    video.play();
    // We change the icon
    icon.classList.add("bx-pause");
    icon.classList.remove("bx-play");
  } else {
    // Pause video
    video.pause();
    // We change the icon
    icon.classList.remove("bx-pause");
    icon.classList.add("bx-play");
  }
}
playBtn.addEventListener("click", videoPlayer);

function endVideo() {
  icon.classList.remove("bx-pause");
  icon.classList.add("bx-play");
}
video.addEventListener("ended", endVideo);

// scroll up button
const toTop = document.querySelector(".scrollUp");
window.onscroll = function () {
  if (scrollY > 300) {
    toTop.classList.add("show");
  } else {
    toTop.classList.remove("show");
  }
};

// scroll active link

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}
// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  // reset: true,
});

// scroll reval
sr.reveal(
  `.home-data, .home-social-link, .home-info,
         .discover-container,
         .experience-data, .experience-overlay,
         .place-card,
         .sponsor-container,
         .footer-data, .footer-rights`,
  {
    origin: "top",
    interval: 100,
  }
);

sr.reveal(
  `.about-data,
         .video-desc,
         .newsletter-desc`,
  {
    origin: "left",
  }
);

sr.reveal(
  `.about-img-overlay,
         .video-vid,
         .newsletter-container form`,
  {
    origin: "right",
    interval: 100,
  }
);
