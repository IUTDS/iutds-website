import React from "react";
import Link from "next/link";
import InfoLine from "./InfoLine";
import { AiOutlineArrowRight } from "react-icons/ai";

const Achivements = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center pt-10 container mx-auto">
      <div className="w-full md:px-10 md:flex-row">
        <img
          className="rounded-3xl w-full h-auto md:h-auto object-fill md:object-cover"
          src="/achievements/PXL_20230708_150018239.jpg"
          alt="Krabi Australs 2023"
        />
        <p className="mt-4 text-center text-gray-500 md:text-base text-sm">
          Evan, Tamim & Tanmoy holding the Bangladesh flag high and proud,
          <i> Krabi Australs 2023</i>
        </p>
      </div>
      <div className="md:w-3/4 md:py-10 md:px-10">
        <h1 className="head_text relative inline-block">
          <Link href="/achievements">Achievements</Link>
          <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-iutdsred transform translate-y-1"></div>
        </h1>
        <div className="pt-5"></div>
        <InfoLine
          name="Krabi Australs 2023"
          title="EFL Champions"
          date="July 2023"
          subtitle="IUT ET - Tanzim Noor Tanmoy, Tamim Ahmed, Evan Ashfaque"
          subsubtitle="EFL Speaker Breaks - Tanmoy (7th), Tamim (8th), Debater of the Final (Tamim)"
        />
        <InfoLine
          name="AUW Debate Championship 2023"
          title="Open Finalist (IUT ET), Novice Champion (IUT IT)"
          date="July 2023"
          subtitle="IUT ET - Tamim & Evan, IUT IT - Ishraq & Taimum"
          subsubtitle="Open Speaker Breaks - Evan (DoT), Tamim (3rd)"
        />
        <InfoLine
          name="11th BUETDC Nationals 2023"
          title="Open Finalist"
          date="July 2023"
          subtitle="IUT ET - Tamim Ahmed & Evan Ashfaque"
          subsubtitle=""
        />
        <InfoLine
          name="Malaysia UADC 2023"
          title="EFL Runner-up"
          date="June 2023"
          subtitle="IUT ET - Tanzim Noor Tanmoy, Tamim Ahmed, Evan Ashfaque"
          subsubtitle=""
        />
        <div className="mt-5 flex justify-end">
          <div className="flex items-center uppercase tracking-widest text-black md:text-xl text-sm font-light border-b-2 transition duration-300 border-transparent hover:border-iutdsred">
            <Link href="/achievements">...And So Much More</Link>
            <AiOutlineArrowRight className="ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
