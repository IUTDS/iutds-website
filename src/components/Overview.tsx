import React from "react";
import Image from "next/image";
import IUTDS_Group_Photo from "public/assets/images/IUTDS_Group_Photo.jpg";

const Overview = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:py-10 container mx-auto">
      <div className="md:w-3/4 md:py-10 md:px-10">
        <h1 className="head_text relative inline-block">
          Overview
          <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-iutdsred transform translate-y-1"></div>
        </h1>
        <p className="body_text mt-6">
          IUTDS is the pillar of igniting intellect in a symphony of discourse.
          Empowering voices in Bangladesh, IUTDS envisions a vibrant platform
          for constructive dialogue. Uniting youth from all walks of life, we
          empower minds to articulate, empathize, ignite intellectual curiosity,
          foster open-mindedness, and lead them to become pioneers of
          excellence. IUTDS aims to shape a harmonious future where ideas
          flourish and positive change resonates nationwide.
        </p>
      </div>
      <div className="w-full py-10 md:px-10 flex-row">
        <Image
          className="rounded-3xl w-full h-auto md:h-auto object-fill md:object-cover"
          src={IUTDS_Group_Photo}
          alt="IUTDS Group Photo"
        />
        <p className="mt-4 text-center text-gray-500 md:text-base text-sm">
          The past, present and future of IUTDS, at Batch &apos;17s farewell,
          2022
        </p>
      </div>
    </div>
  );
};

export default Overview;
