import { default as NextLink, LinkProps } from "next/link";
import { HTMLAttributes, PropsWithChildren } from "react";

interface Props extends LinkProps, HTMLAttributes<HTMLAnchorElement> {
  className?: string;
}

export default function BaseLink({
  href,
  children,
  ...props
}: PropsWithChildren<Props>) {
  if (typeof href !== "string") {
    return (
      <div className="h-8 w-8 bg-red-500">Error. Href must be string.</div>
    );
  }

  const isInternalLink = href.startsWith("/");

  if (isInternalLink) {
    return (
      <NextLink href={href} scroll={false} tabIndex={0} {...props}>
        {children}
      </NextLink>
    );
  } else {
    return (
      <a
        href={href}
        tabIndex={0}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }
}
