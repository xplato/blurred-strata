import { PropsWithChildren, MouseEventHandler } from "react";

import BaseLink from "~/components/utils/BaseLink";

import { cn } from "lib/utils";

export interface BaseActionProps {
  id?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
}

export default function BaseAction({
  href,
  onClick,
  disabled,
  className,
  children,
  ...props
}: PropsWithChildren<BaseActionProps>) {
  if (typeof href === "string") {
    return (
      <BaseLink
        href={href}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </BaseLink>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn("cursor-pointer", className)}
      tabIndex={0}
      {...props}
    >
      {children}
    </button>
  );
}
