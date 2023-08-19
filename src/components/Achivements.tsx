import React from "react";
import Image from "next/image";
import Link from "next/link";
import Australs_Photo from "public/achievements/PXL_20230708_150018239.jpg";
import AchievementLine from "./AchievementLine";

const Achivements = () => {
  return (
    <div className="flex flex-col md:flex-row items-center py-10 container mx-auto">
      <div className="w-full py-10 md:px-10 md:flex">
        <Image
          className="rounded-3xl w-full h-auto md:h-auto object-fill md:object-cover"
          src={Australs_Photo}
          alt="Krabi Australs 2023"
        />
      </div>
      <div className="md:w-3/4 md:py-10 md:px-10">
        <h1 className="head_text relative inline-block">
          Achivements
          <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-iutdsred transform translate-y-1"></div>
        </h1>
        <div className="pt-5"></div>
        <AchievementLine
          tournament="Krabi Australs 2023"
          position="EFL Champions"
          date="July 2023"
          members="IUT ET - Tanzim Noor Tanmoy, Tamim Ahmed, Evan Ashfaque"
          info="EFL Speaker Breaks - Tanmoy (7th), Tamim (8th), Debater of the Final (Tamim)"
        />
        <AchievementLine
          tournament="AUW Debate Championship 2023"
          position="Open Finalist (IUT ET), Novice Champion (IUT IT)"
          date="July 2023"
          members="IUT ET - Tamim & Evan, IUT IT - Ishraq & Taimum"
          info="Open Speaker Breaks - Evan (DoT), Tamim (3rd)"
        />
        <AchievementLine
          tournament="11th BUETDC Nationals 2023"
          position="Open Finalist"
          date="July 2023"
          members="IUT ET - Tamim Ahmed & Evan Ashfaque"
          info=""
        />
        <AchievementLine
          tournament="Malaysia UADC 2023"
          position="EFL Runner-up"
          date="June 2023"
          members="IUT ET - Tanzim Noor Tanmoy, Tamim Ahmed, Evan Ashfaque"
          info=""
        />
        <div className="mt-5 flex justify-end">
          <Link
            href="/achievements"
            className="uppercase tracking-widest text-black md:text-xl text-sm font-light border-b-2 transition duration-300 border-transparent hover:border-iutdsred"
          >
            ...And Much More
          </Link>
        </div>
        {/* <p className="body_text">
          IUTDS is the pillar of igniting intellect in a symphony of discourse.
          Empowering voices in Bangladesh, IUTDS envisions a vibrant platform
          for constructive dialogue. Uniting youth from all walks of life, we
          empower minds to articulate, empathize, ignite intellectual curiosity,
          foster open-mindedness, and lead them to become the "Pioneers of
          Excellence''. IUTDS aims to become Bangladesh's top debate
          organization by shaping a harmonious future where ideas flourish and
          positive change resonates nationwide, then ends up destined for
          success.
        </p> */}
      </div>
    </div>
  );
};

export default Achivements;
