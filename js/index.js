import gsap from "gsap";

const nav_links = document.querySelectorAll(".nav-links");
nav_links.forEach(link => {
  link.addEventListener("click", e => {
    const current_active = document.querySelector(".is-active");
    if (Array.from(link.classList).includes("is-active")) {
      link.classList.remove("is-active");
    }
    current_active.classList.remove("is-active");
    link.classList.add("is-active");
    transition(link);
  });
});

function transition(active_section) {
  // animations that run on transition
  gsap.fromTo(
    ".default-animation",
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 0.8 }
  );
  // if page is location page hide the other two same logic for the other two pages
  if (Array.from(active_section.classList).includes("location_link")) {
    gsap.fromTo(
      ".location",
      { opacity: 0, visibility: "hidden" },
      { opacity: 1, visibility: "visible" }
    );
    gsap.fromTo(
      ".home, .menu",
      { opacity: 1, visibility: "visible" },
      { opacity: 0, visibility: "hidden" }
    );
  } else if (Array.from(active_section.classList).includes("home_link")) {
    gsap.fromTo(
      ".home",
      { opacity: 0, visibility: "hidden" },
      { opacity: 1, visibility: "visible" }
    );
    gsap.fromTo(
      ".location, .menu",
      { opacity: 1, visibility: "visible" },
      { opacity: 0, visibility: "hidden" }
    );
  } else if (Array.from(active_section.classList).includes("menu_link")) {
    gsap.fromTo(
      ".menu",
      { opacity: 0, visibility: "hidden" },
      { opacity: 1, visibility: "visible" }
    );
    gsap.fromTo(
      ".location, .home",
      { opacity: 1, visibility: "visible" },
      { opacity: 0, visibility: "hidden" }
    );
  }
}

// menu btns
const menu_menu_btns = document.querySelectorAll(".menu_menu > button");
const menu_sections = document.querySelectorAll(".menu-presentation > section");
menu_menu_btns.forEach(btn => {
  btn.addEventListener("click", e => {
    const clicked_btn = e.target;
    const active_btn = document.querySelector(".active_btn");
    const sections_arr = Array.from(menu_sections); //transform nodeList to array
    // get the section that matches the clicked button
    const matched_section = sections_arr.find(
      element => element.classList[0] === clicked_btn.innerHTML.toLowerCase()
    );

    // animations
    gsap.fromTo(
      `.${active_btn.innerHTML.toLowerCase()}`,
      { opacity: 1, display: "block" },
      {
        opacity: 0,
        display: "none",
        duration: 0.2,
        onStart: () => {
          active_btn.classList.remove("active_btn");
          clicked_btn.classList.add("active_btn");
        }
      }
    );

    gsap.fromTo(
      `.${matched_section.className}`,
      { opacity: 0, display: "none" },
      {
        opacity: 1,
        display: "block",
        duration: 0.2,
        delay: 0.3
      }
    );
  });
});
