import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CustomEase } from "gsap/dist/CustomEase";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(CustomEase);

export default function useAnimation<ElementType = HTMLDivElement>() {
  const element = useRef<ElementType>(null);

  const { contextSafe } = useGSAP({
    scope: element,
  });

  return {
    element,
    gsap,
    useGSAP,
    contextSafe,
  };
}
