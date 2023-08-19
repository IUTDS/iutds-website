import React from "react";

type AchievementLineProps = {
  tournament: string;
  position: string;
  members: string;
  date: string;
  info: string;
};

const AchievementLine = (props: AchievementLineProps) => {
  return (
    <div className="py-2">
      <div className="flex items-center justify-between">
        <div className="tracking-wide leading-[1.15] text-black md:text-xl text-base font-bold">
          {props.tournament}
        </div>
        <div className="mx-4 flex-grow border-t border-iutdsred mr-4"></div>
        <div className="body_text">{props.date}</div>
      </div>
      <div className="flex justify-between">
        <div className="md:text-xl text-sm font-semibold text-slate-800">
          {props.position}
        </div>
      </div>
      <div className="flex">
        {" "}
        {/* Flex container for team and members */}
        {/* <div className="mr-2 font-medium">{props.team}</div> */}
        <div className="md:text-base text-sm font-light">{props.members}</div>
      </div>
      <div className="md:text-sm text-xs font-light">{props.info}</div>
    </div>
  );
};

export default AchievementLine;
