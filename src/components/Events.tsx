import React from "react";
import Image from "next/image";
import Link from "next/link";
import Cafe_Debate_Photo from "public/event-images/img12.png";
import InfoLine from "./InfoLine";
import { AiOutlineArrowRight } from "react-icons/ai";

const Events = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row-reverse items-center py-5 container mx-auto">
      <div className="w-full py-10 md:px-10 md:flex-row">
        <Image
          className="rounded-3xl h-auto md:h-auto object-fill md:object-cover"
          src={Cafe_Debate_Photo}
          alt="Cafe Debate"
        />
        <p className="mt-4 text-center text-gray-500 md:text-base text-sm">
          Lively discussions over a cup of coffee at <i>Cafe Debate</i>
        </p>
      </div>
      <div className="md:w-3/4 md:py-10 md:px-10">
        <h1 className="head_text relative inline-block">
          <Link href="/programs">Events</Link>
          <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-iutdsred transform translate-y-1"></div>
        </h1>
        <div className="pt-5"></div>
        <InfoLine
          name="IUT IV"
          title="Intervarsity BP Tournament"
          date=""
          subtitle="IUTDS' flagsip event, featuring brilliant minds from universities across the country"
          subsubtitle=""
        />
        <InfoLine
          name="IUT Professionals"
          title="Invite-only BP Tournament"
          date=""
          subtitle="Exclusive debate aimed at gathering the finest debaters, attended by the best in Bangladesh"
          subsubtitle=""
        />
        <InfoLine
          name="Greatness Express"
          title="Intra-IUT Novice BP Tournament"
          date=""
          subtitle="Dedicated for the freshmen to ease them into the world of debating, 
          preceded by a series of friendly debate sessions"
          subsubtitle=""
        />
        <InfoLine
          name="Cafe Debate"
          title="Club Day Show-Debate"
          date=""
          subtitle="Fun, informal and passionate debate, by the alumni and current members. 
          And lest we mention, donuts for all"
          subsubtitle=""
        />
        <div className="mt-5 flex justify-end">
          <div className="flex items-center uppercase tracking-widest text-black md:text-xl text-sm font-light border-b-2 transition duration-300 border-transparent hover:border-iutdsred">
            <Link href="/programs">More Details</Link>
            <AiOutlineArrowRight className="ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
