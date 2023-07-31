import Image from "next/image";
import LandingPageHeader from "@/public/LandingPage/LandingPageHeader.jpg";
import { DMSerifDisplayFontClass } from "@/pages/_app";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Image
          src={LandingPageHeader}
          alt="Landing Page Header"
          className="rounded-bl-[18.2rem]"
        />
        <div className="absolute top-[63%] left-[18.75%]">
          <p
            className={`${DMSerifDisplayFontClass} text-primary_two font-display01 font-normal leading-[125%] `}
          >
            Let Your Home Be Unique
          </p>
        </div>
      </div>
    </div>
  );
}
