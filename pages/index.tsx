import Image from "next/image";
import WithPageTransition from "~/components/root/WithPageTransition";

import BackgroundImage from "public/images/bg-1.jpg";

const BAR_COUNT = 24;

export default function Home() {
  return (
    <WithPageTransition>
      <section className="w-full h-screen relative flex flex-col items-start justify-start">
        <div className="relative grow w-full h-full flex items-center justify-center flex-col overflow-hidden">
          <div className="absolute z-10 size-full inset-0 flex items-center justify-center">
            <Image src={BackgroundImage} alt="" />
          </div>

          <div className="absolute z-20 size-full inset-0 flex flex-row">
            {Array.from({ length: BAR_COUNT }).map((_, index) => (
              <div
                key={index}
                className="h-full backdrop-blur-2xl bg-black/10"
                style={{
                  width: `calc(100vw / ${BAR_COUNT})`,
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
