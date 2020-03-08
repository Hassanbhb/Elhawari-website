import Highway from "@dogstudio/highway";
import gsap from "gsap";

class MenuRenderer extends Highway.Renderer {
  onEnterCompleted() {
    // menu btns
    const menu_menu_btns = document.querySelectorAll(".menu_menu > button");
    const menu_sections = document.querySelectorAll(
      ".menu-presentation > section"
    );
    menu_menu_btns.forEach(btn => {
      btn.addEventListener("click", e => {
        const clicked_btn = e.target;
        const active_btn = document.querySelector(".active_btn");
        const sections_arr = Array.from(menu_sections); //transform nodeList to array
        // get the section that matches the clicked button
        const matched_section = sections_arr.find(
          element =>
            element.classList[0] === clicked_btn.innerHTML.toLowerCase()
        );

        // animations
        gsap.fromTo(
          `.${active_btn.innerHTML.toLowerCase()}`,
          { opacity: 1, display: "block" },
          {
            opacity: 0,
            display: "none",
            duration: 0.5,
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
            duration: 0.5,
            delay: 0.5
          }
        );
      });
    });
  }
}

export default MenuRenderer;
