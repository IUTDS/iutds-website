import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center my-4">EC Panel</h1>
      {/* President */}
      <h2 className="head_text text-center">President</h2>
      <div className="flex justify-center items-center mt-2">
        <div className="horizontal-line"></div>
      </div>
      <div className="flex-center mt-4">
        <Image
          className="center-image"
          width={300}
          height={250}
          src="/EC-Panel/President_Sakif.jpg"
          alt="President, IUTDS"
        />
        <br />
      </div>
      {/* Vice-President */}
      <h2 className="head_text text-center ">Vice President</h2>
      <div className="flex justify-center items-center mt-2">
        <div className="horizontal-line"></div>
      </div>
      <br />
      <div className="md:flex md:justify-evenly sm:grid sm:grid-rows-1">
        <div>
          <Image
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/VP_Alif.jpg"
            alt="Vice-president(Admin), IUTDS"
          />
          <br />
        </div>
        <div>
          <Image
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/VP_Arif.jpg"
            alt="Vice-president(Operations), IUTDS"
          />
          <br />
        </div>
        <div>
          <Image
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/VP_Tanvir.jpg"
            alt="Vice-president(Operations), IUTDS"
          />
          <br />
        </div>
        <div>
          <Image
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/VP_Sajid.jpg"
            alt="Vice-president(Debate and Workshop), IUTDS"
          />
          <br />
        </div>
      </div>
      {/* Directors */}
      <br />
      <h2 className="head_text text-center ">Directors</h2>
      <div className="flex justify-center items-center mt-2">
        <div className="horizontal-line"></div>
      </div>
      <br />
      <div className="md:flex md:justify-evenly sm:grid sm:grid-rows-1">
        <div>
          <Image
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/Dir_zaarin.jpg"
            alt="Director(Administration), IUTDS"
          />
          <br />
        </div>
        <div>
          <Image
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/Dir_Reaz.jpg"
            alt="Director(Creative), IUTDS"
          />
          <br />
        </div>
        <div>
          <Image
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/Dir_Lorin.jpg"
            alt="Director(Logistics), IUTDS"
          />
          <br />
        </div>
        <div>
          <Image
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/Dir_Arifin.jpg"
            alt="Director(Publication), IUTDS"
          />
          <br />
        </div>
      </div>

      {/* Heads */}
      <br />
      <h2 className="head_text text-center ">Head of Departments</h2>
      <div className="flex justify-center items-center mt-2">
        <div className="horizontal-line"></div>
      </div>
      <br />
      <div className="md:flex md:justify-evenly sm:grid sm:grid-rows-1">
        <div>
          <Image
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/Head_Arpi.jpg"
            alt="Head (Debate & Workshop), IUTDS"
          />
          <br />
        </div>
        <div>
          <Image
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/Head_Annesha.jpg"
            alt="Head (Branding), IUTDS"
          />
          <br />
        </div>
        <div>
          <Image
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/Head_Abrar.jpg"
            alt="Head (Communication), IUTDS"
          />
          <br />
        </div>
        <div>
          <Image
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/Head_Muti.jpg"
            alt="Head (Content), IUTDS"
          />
          <br />
        </div>
      </div>
      {/* Strategic Heads */}
      <br />
      <h2 className="head_text text-center ">Strategic Heads</h2>
      <div className="flex justify-center items-center mt-2">
        <div className="horizontal-line"></div>
      </div>
      <br />
      <div className="md:flex md:justify-evenly sm:grid sm:grid-rows-1">
        <div>
          <Image
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/SH_Ihfaz.jpg"
            alt="Strategic Head of Creative , IUTDS"
          />
          <br />
        </div>
        <div>
          <Image
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/SH_Ali.jpg"
            alt="Strategic Head of Events , IUTDS"
          />
          <br />
        </div>
        <div>
          <Image
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/SH_Ghazanfar.jpg"
            alt="Strategic Head of Liaison , IUTDS"
          />
          <br />
        </div>
      </div>

      <div
        className="md:flex md:justify-evenly sm:grid sm:grid-rows-1"
        style={{ marginTop: "20px" }}
      >
        <div>
          <Image
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/SH_Agni.jpg"
            alt="Strategic Head of Liaison , IUTDS"
          />
          <br />
        </div>
        <div>
          <Image
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/SH_Nafisa.jpg"
            alt="Strategic Head of Liaison , IUTDS"
          />
          <br />
          <br />
        </div>
      </div>
    </section>
  );
};

export default Page;
