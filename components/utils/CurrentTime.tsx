import { useEffect, useState } from "react";

interface Props {
  timeZone?: "America/Denver";
  options?: Intl.DateTimeFormatOptions;
}

export default function CurrentTime({
  timeZone = "America/Denver",
  options,
}: Props) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeString = currentTime.toLocaleTimeString("en-US", {
    timeZone,
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    ...options,
  });

  return timeString;
}
