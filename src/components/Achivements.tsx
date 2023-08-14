import React from "react";
import Image from "next/image";
import IUTDS_Group_Photo from "public/assets/images/IUTDS_Group_Photo.jpg";
import AchievementLine from "./AchievementLine";

const Achivements = () => {
  return (
    <div className="flex flex-col md:flex-row items-center py-10 container mx-auto">
      <div className="w-full py-10 md:px-10 md:flex">
        <Image
          className="rounded-3xl w-full h-auto md:h-auto object-fill md:object-cover"
          src={IUTDS_Group_Photo}
          alt="IUTDS Group Photo"
        />
      </div>
      <div className="md:w-3/4 md:py-10 md:px-10">
        <h1 className="head_text relative inline-block">Achivements</h1>
        <AchievementLine
          tournament="Krabi Australs"
          position="Champions"
          year={2023}
        />
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
