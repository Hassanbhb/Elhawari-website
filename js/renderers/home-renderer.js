import Highway from "@dogstudio/highway";
import gsap from "gsap";

class HomeRenderer extends Highway.Renderer {
  onEnter() {
    gsap.fromTo(
      ".default-animation",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.8 }
    );
  }
}

export default HomeRenderer;
