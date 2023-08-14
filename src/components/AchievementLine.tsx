import React from "react";

type AchievementLineProps = {
  tournament: string;
  position: string;
  year: number;
};

const AchievementLine = (props: AchievementLineProps) => {
  return (
    <div className="py-2">
      {" "}
      <div className="flex items-center justify-between">
        <div className="flex-grow border-t border-iutdsred mr-4"></div>
        <div className="text-xl font-bold">{props.year}</div>
      </div>
      <div className="flex justify-between mt-2">
        <div className="text-2xl font-black">{props.tournament}</div>
        <div className="text-lg font-light">{props.position}</div>
      </div>
    </div>
  );
};

export default AchievementLine;
