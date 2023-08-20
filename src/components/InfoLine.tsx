import React from "react";

type InfoLineProps = {
  name: string;
  title: string;
  subtitle: string;
  date: string;
  subsubtitle: string;
};

const InfoLine = (props: InfoLineProps) => {
  return (
    <div className="py-2">
      <div className="flex items-center justify-between">
        <div className="tracking-wide leading-[1.15] text-black md:text-2xl text-base font-bold">
          {props.name}
        </div>
        <div className="mx-4 flex-grow border-t border-iutdsred mr-4"></div>
        <div className="body_text">{props.date}</div>
      </div>
      <div className="flex justify-between">
        <div className="md:text-xl text-sm font-semibold text-slate-800">
          {props.title}
        </div>
      </div>
      <div className="flex">
        {" "}
        {/* Flex container for team and subtitle */}
        {/* <div className="mr-2 font-medium">{props.team}</div> */}
        <div className="md:text-base text-sm font-light">{props.subtitle}</div>
      </div>
      <div className="md:text-sm text-xs font-light">{props.subsubtitle}</div>
    </div>
  );
};

export default InfoLine;
