import React from "react";
import Image from "next/image";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <section className="mt-2 mx-auto py-8 px-4 flex-center flex-col">
      <h1 className="head_text text-center uppercase">
        Welcome to IUT Debating Society
      </h1>
      <h2 className="sub-head_text text-center">
        Where logic meets rhetoric and prudence meets eloquence
      </h2>
      <Overview />
      <h1 className="mt-10 head_text text-center">More About Us</h1>
      <p className="mt-5 text-center text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, amet
        tenetur. Unde, eaque vitae voluptates voluptas ex quam eligendi
        accusamus sapiente quis, labore maiores magnam provident.
      </p>
    </section>
  );
}
