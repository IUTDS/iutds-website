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
        <div className="text-xl font-black">{props.tournament}</div>
        <div className="mx-4 flex-grow border-t border-iutdsred mr-4"></div>
        <div className="text-lg font-bold">{props.date}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-lg font-bold">{props.position}</div>
      </div>
      <div className="flex">
        {" "}
        {/* Flex container for team and members */}
        {/* <div className="mr-2 font-medium">{props.team}</div> */}
        <div className="font-light">{props.members}</div>
      </div>
      <div className="text-sm font-light">{props.info}</div>
    </div>
  );
};

export default AchievementLine;
