import React from "react";
import Image from "next/image";
import IUTDS_Group_Photo from "public/assets/images/IUTDS_Group_Photo.jpg";

const Overview = () => {
  return (
    <div className="flex flex-row items-center py-10 container mx-auto min-w-4/5">
      <div className="w-1/2 py-16 px-10">
        <h1 className="text-3xl font-bold text-black relative inline-block">
          Overview
          <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-iutdsred transform translate-y-1"></div>
        </h1>
        <p className="mt-6 text-xl font-light text-slate-800">
          IUTDS is the pillar of igniting intellect in a symphony of discourse.
          Empowering voices in Bangladesh, IUTDS envisions a vibrant platform
          for constructive dialogue. Uniting youth from all walks of life, we
          empower minds to articulate, empathize, ignite intellectual curiosity,
          foster open-mindedness, and lead them to become the "Pioneers of
          Excellence''. IUTDS aims to become Bangladesh's top debate
          organization by shaping a harmonious future where ideas flourish and
          positive change resonates nationwide, then ends up destined for
          success.
        </p>
      </div>
      <div className="w-1/2 py-10 px-10 flex">
        <Image
          className="rounded-3xl h-auto object-cover"
          src={IUTDS_Group_Photo}
          alt="IUTDS Group Photo"
        />
      </div>
    </div>
  );
};

export default Overview;
