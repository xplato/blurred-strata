import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";

const LoadingShades = dynamic(() => import("~/components/root/LoadingShades"), {
  ssr: false,
});

export default function WithPageTransition({ children }: PropsWithChildren) {
  return (
    <>
      <LoadingShades />

      {/* Add a static element which Framer Motion/GSAP can ref to call insertBefore */}
      <div />
      {children}
    </>
  );
}
