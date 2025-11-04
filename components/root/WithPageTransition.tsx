import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";

const LoadingShades = dynamic(() => import("~/components/root/LoadingShades"), {
  ssr: false,
});

export default function WithPageTransition({ children }: PropsWithChildren) {
  return (
    <>
      <LoadingShades />
      {children}
    </>
  );
}
