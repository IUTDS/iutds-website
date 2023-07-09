import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="container mx-auto py-8 px-4 flex-center flex-col">
      <h1 className="mt-10 head_text text-center uppercase">
        Welcome to IUT Debating Society
      </h1>
      <h2 className="sub-head_text text-center">
        Where logic meets rhetoric and prudence meets eloquence
      </h2>
      <div className="mt-10 flex justify-center">
        <Image
          src="/assets/images/IUTDS_IV_Poster.png"
          alt="IUTDS IV Poster"
          width={1920}
          height={700}
        />
      </div>
      <h1 className="mt-10 head_text text-center">Brief Overview</h1>
      <div className="mt-5 flex justify-center">
        <Image
          src="/assets/images/IUTDS_Group_Photo.jpg"
          alt="IUTDS Group Photo"
          width={720}
          height={395}
        />
      </div>
      <p className="mt-5 text-center text-gray-600">
        IUT Debating Society (IUTDS) is one of the most prominent debate clubs
        in Bangladesh.
      </p>
      <h1 className="mt-10 head_text text-center">More About Us</h1>
      <p className="mt-5 text-center text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, amet
        tenetur. Unde, eaque vitae voluptates voluptas ex quam eligendi
        accusamus sapiente quis, labore maiores magnam provident.
      </p>
    </section>
  );
}
