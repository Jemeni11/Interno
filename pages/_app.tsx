import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import { DM_Serif_Display, Jost } from "next/font/google";

const DMSerifDisplayFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});
export const DMSerifDisplayFontClass = DMSerifDisplayFont.className;

const JostFont = Jost({ subsets: ["latin"], weight: ["400"] });
export const JostFontClass = JostFont.className;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${DMSerifDisplayFontClass}`}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
