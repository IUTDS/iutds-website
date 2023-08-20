import React from "react";
import Overview from "@/components/Overview";
import Achivements from "@/components/Achivements";
import TopBanner from "@/components/TopBanner";
import Events from "@/components/Events";

export default function Home() {
  return (
    <section className="mx-auto flex-center flex-col">
      <TopBanner />
      <div className="mx-auto px-5">
        <Overview />
        <Achivements />
        <Events />
      </div>
    </section>
  );
}
