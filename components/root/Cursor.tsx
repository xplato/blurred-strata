import { useEffect, useLayoutEffect, useRef } from "react";
import MouseFollower from "mouse-follower";

import useAnimation from "~/lib/hooks/useAnimation";
import { usePathname } from "next/navigation";

export default function Cursor() {
  const cursor = useRef<MouseFollower | null>(null);

  const { gsap } = useAnimation();
  const pathname = usePathname();

  useLayoutEffect(() => {
    MouseFollower.registerGSAP(gsap);
    cursor.current = new MouseFollower({
      container: document.body,
      className: "mf-cursor -exclusion print:hidden",
      stateDetection: {
        "-pointer": "a,button",
        "-full-pointer": ".full-pointer",
        "-hidden": "iframe",
      },
    });

    const skewButtons = document.querySelectorAll("[data-cursor-skew]");

    if (skewButtons) {
      skewButtons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
          cursor.current?.setSkewing(3);
        });

        button.addEventListener("mouseleave", () => {
          cursor.current?.removeSkewing();
        });
      });
    }

    return () => cursor.current?.destroy();
  }, [gsap]);

  useEffect(() => {
    if (!cursor.current) return;
    cursor.current.removeText();
    cursor.current.removeState("-pointer");
  }, [pathname]);

  return null;
}
