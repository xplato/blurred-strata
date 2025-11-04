import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

interface Options {
  year?: "numeric" | "2-digit";
  month?: "short" | "long" | "numeric" | "2-digit";
  day?: "numeric" | "2-digit";
}

export const formatDate = (dateString: string, options?: Options) => {
  const [year, month, day] = dateString.split("-");
  const localDate = new Date(Number(year), Number(month) - 1, Number(day));
  return localDate.toLocaleString("en-US", {
    year: options?.year ?? "numeric",
    month: options?.month ?? "short",
    day: options?.day ?? "numeric",
  });
};

export const formatRelativeDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-");
  const date = dayjs(`${year}-${month}-${day}`);
  return date.fromNow();
};
