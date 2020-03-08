import Highway from "@dogstudio/highway";
import Tween from "gsap";

class Fade extends Highway.Transition {
  in({ from, to, done }) {
    Tween.fromTo(
      to,
      0.3,
      { opacity: 0 },
      {
        opacity: 1,
        onComplete: () => {
          done();
        }
      }
    );
    Tween.fromTo(
      from,
      0.3,
      { opacity: 1 },
      {
        opacity: 0,
        onComplete: () => {
          from.remove();
          done();
        }
      }
    );
  }

  out({ from, done }) {
    done();
  }
}

export default Fade;
