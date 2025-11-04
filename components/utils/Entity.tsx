import { motion, Transition, Variants } from "motion/react";
import { PropsWithChildren } from "react";

export interface EntityProps extends React.ComponentProps<typeof motion.div> {
  variants: Variants;
  transition?: Transition;
  noExit?: boolean;
  className?: string;
}

export default function Entity({
  variants,
  transition,
  noExit,
  children,
  ...props
}: PropsWithChildren<EntityProps>) {
  return (
    <motion.div
      {...props}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit={!noExit ? (variants?.exit ? "exit" : "hidden") : undefined}
      transition={
        transition ?? {
          type: "spring",
          duration: 1,
        }
      }
    >
      {children}
    </motion.div>
  );
}
