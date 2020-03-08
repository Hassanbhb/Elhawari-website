import Highway from "@dogstudio/highway";
import Fade from "./transition";
import HomeRenderer from "./renderers/home-renderer";
import MenuRenderer from "./renderers/menu-renderer";

const links = document.querySelectorAll("nav a");

const H = new Highway.Core({
  renderers: {
    home: HomeRenderer,
    location: HomeRenderer,
    menu: MenuRenderer
  },
  transitions: {
    default: Fade
  }
});

H.on("NAVIGATE_IN", ({ to, location }) => {
  //chack active link
  links.forEach(link => {
    //clean class
    link.classList.remove("is-active");

    //active link
    if (link.href === location.href) {
      link.classList.add("is-active");
    }
  });
});
