import Image from "next/image";
import WithPageTransition from "~/components/root/WithPageTransition";

import BackgroundImage from "public/images/bg-1.jpg";
import useAnimation from "~/lib/hooks/useAnimation";

const BAR_COUNT = 25;
const DELAY_MULTIPLIER = 0.2;

export default function Home() {
  const { gsap, useGSAP, element } = useAnimation();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element.current,
        start: "top top",
        end: "+=2000",
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    for (let barIndex = 0; barIndex < BAR_COUNT; barIndex++) {
      const middle = (BAR_COUNT - 1) / 2;
      const distance = Math.abs(barIndex - middle);
      const delay = distance * DELAY_MULTIPLIER;

      tl.to(
        `#bar-${barIndex}`,
        {
          y: barIndex % 2 === 0 ? "100%" : "-100%",
          delay,
        },
        0,
      );
    }

    tl.to(
      "#hero-image",
      {
        scale: 1.2,
        duration: (BAR_COUNT + 3) * DELAY_MULTIPLIER,
      },
      0,
    );
  });

  return (
    <WithPageTransition>
      <section
        ref={element}
        className="w-full h-screen relative flex flex-col items-start justify-start"
      >
        <div className="relative grow w-full h-full flex items-center justify-center flex-col overflow-hidden">
          <div className="absolute z-10 size-full inset-0 flex items-center justify-center">
            <div
              id="hero-image"
              className="size-full flex items-center justify-center"
            >
              <Image src={BackgroundImage} alt="" />
            </div>
          </div>

          <div className="absolute z-20 size-full inset-0 flex flex-row overflow-hidden">
            {Array.from({ length: BAR_COUNT }).map((_, index) => (
              <div
                key={index}
                id={`bar-${index}`}
                className="h-full backdrop-blur-2xl bg-black/10"
                style={{
                  width: `calc((100vw / ${BAR_COUNT}) + 1px)`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="w-full p-8 shrink flex">
          <h1 className="text-[16.25rem] font-bold uppercase leading-none">
            Blurred Strata
          </h1>
        </div>
      </section>
    </WithPageTransition>
  );
}
