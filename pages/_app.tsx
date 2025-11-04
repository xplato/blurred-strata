import type { AppProps } from "next/app";
import ReactLenis from "lenis/react";
import { AnimatePresence } from "motion/react";

import { fontClassNames } from "~/lib/fonts";

import "styles/styles.css";
import "styles/main.scss";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ReactLenis
      root
      options={{
        easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.5,
      }}
    >
      <div className={fontClassNames}>
        <AnimatePresence mode="wait" initial={false}>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
        {/*<Cursor />*/}
      </div>
    </ReactLenis>
  );
}
