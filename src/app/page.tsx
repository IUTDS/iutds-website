import React from "react";
import Image from "next/image";
import Overview from "@/components/Overview";
import Achivements from "@/components/Achivements";
import TopBanner from "@/components/TopBanner";

export default function Home() {
  return (
    <section className="mx-auto flex-center flex-col">
      <TopBanner />
      <div className="mx-auto px-5">
        <Overview />
        <Achivements />
      </div>
    </section>
  );
}
