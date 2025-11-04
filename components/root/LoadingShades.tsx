import { Transition } from "motion";
import Entity from "~/components/utils/Entity";

const ANIMATION_MULTIPLIER = 0.05;

const squareTransition: Transition = {
  type: "tween",
  // delay: 1.7,
  duration: 0.4,
  ease: [0.17, 0.67, 0.37, 1.01],
};

export default function LoadingShades() {
  return (
    <div className="w-screen h-screen fixed inset-0 z-50 bg-transparent text-white pointer-events-none">
      <div className="absolute z-10 size-full inset-0 overflow-hidden">
        {Array.from({ length: 10 }, (_, i) => i).map((_, index) => (
          <div key={index} className="w-full overflow-hidden h-[10vh]">
            <Entity
              key={index}
              custom={index}
              variants={{
                hidden: {
                  y: "0%",
                },
                visible: {
                  y: "-101%",
                  transition: {
                    ...squareTransition,
                    delay: index * ANIMATION_MULTIPLIER,
                  },
                },
                exit: (index) => ({
                  y: "0%",
                  transition: {
                    ...squareTransition,
                    delay: index * ANIMATION_MULTIPLIER,
                  },
                }),
              }}
              transition={squareTransition}
              className="size-full bg-black"
            ></Entity>
          </div>
        ))}
      </div>
    </div>
  );
}
