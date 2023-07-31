import React from "react";
import { JostFontClass } from "@/pages/_app";
import Image from "next/image";
import RightArrow from "@/public/Buttons/RightArrow.png";
import RightArrowBlack from "@/public/Buttons/RightArrowBlack.png";

type Props = { title: string; onClick: () => void };

export const DefaultButton = (props: Props) => {
  return (
    <button
      onClick={() => {
        props.onClick();
      }}
      type="button"
      className={`flex gap-[9px] ${JostFontClass} py-[1.625rem] px-[3.375rem] rounded-[1.125rem] drop-shadow-[0px_10px_20px_0px_#C0C0C059] bg-primary_two font-heading06 font-semibold text-center tracking-[0.02em]`}
    >
      <span className="text-white">{props.title}</span>
      <Image src={RightArrow} alt="right arrow" />
    </button>
  );
};

export const LargeButton = (props: Props) => {
  return (
    <button
      type="button"
      className={`flex gap-[9px] ${JostFontClass} py-[1.625rem] px-[3.375rem] rounded-[1.125rem] drop-shadow-[0px_10px_20px_0px_#C0C0C059] bg-primary_two font-heading06 font-semibold text-center tracking-[0.02em]`}
    >
      <span className="text-white">{props.title}</span>
      <Image src={RightArrow} alt="right arrow" />
    </button>
  );
};

export const PrimaryButton = (props: Props) => {
  return (
    <button
      type="button"
      className={`flex gap-[9px] ${JostFontClass} py-[1.625rem] px-[3.375rem] rounded-[1.125rem] drop-shadow-[0px_10px_20px_0px_#C0C0C059] bg-primary_one font-heading06 font-semibold text-center tracking-[0.02em]`}
    >
      <span className="text-white">{props.title}</span>
      <Image src={RightArrowBlack} alt="right arrow" />
    </button>
  );
};
