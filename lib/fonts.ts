import { Inter, Poppins, Sora } from "next/font/google";
import { cn } from "./utils";

const inter = Inter({
  subsets: ["latin", "greek"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

export const fontClassNames = cn(
  inter.variable,
  poppins.variable,
  sora.variable,
);
