import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center my-10">EC Panel</h1>
      {/* President */}
      <h2 className="head_text text-center">President</h2>
      <div className="flex justify-center items-center mt-2">
        <div className="horizontal-line"></div>
      </div>
      <div className="flex-center mt-4">
        <img
          className="center-image"
          width={300}
          height={250}
          src="/EC-Panel/19_1.jpeg"
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
          <img
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/19_2.jpeg"
            alt="Vice-president(Admin), IUTDS"
          />
          <br />
        </div>
        <div>
          <img
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/19_3.jpeg"
            alt="Vice-president(Operations), IUTDS"
          />
          <br />
        </div>
        <div>
          <img
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/19_4.jpeg"
            alt="Vice-president(Operations), IUTDS"
          />
          <br />
        </div>
        <div>
          <img
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/19_5.jpeg"
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
          <img
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/19_6.jpeg"
            alt="Director(Administration), IUTDS"
          />
          <br />
        </div>
        <div>
          <img
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/19_7.jpeg"
            alt="Director(Creative), IUTDS"
          />
          <br />
        </div>
        <div>
          <img
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/19_8.jpeg"
            alt="Director(Logistics), IUTDS"
          />
          <br />
        </div>
        <div>
          <img
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/19_9.jpeg"
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
          <img
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/19_10.jpeg"
            alt="Head (Debate & Workshop), IUTDS"
          />
          <br />
        </div>
        <div>
          <img
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/19_11.jpeg"
            alt="Head (Branding), IUTDS"
          />
          <br />
        </div>
        <div>
          <img
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/19_12.jpeg"
            alt="Head (Communication), IUTDS"
          />
          <br />
        </div>
        <div>
          <img
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/19_13.jpeg"
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
          <img
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/19_14.jpeg"
            alt="Strategic Head of Creative , IUTDS"
          />
          <br />
        </div>
        <div>
          <img
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/19_15.jpeg"
            alt="Strategic Head of Events , IUTDS"
          />
          <br />
        </div>
        <div>
          <img
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/19_16.jpeg"
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
          <img
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/19_17.jpeg"
            alt="Strategic Head of Liaison , IUTDS"
          />
          <br />
        </div>
        <div>
          <img
            className="center-image"
            width={300}
            height={250}
            src="/EC-Panel/19_18.jpeg"
            alt="Strategic Head of Liaison , IUTDS"
          />
          <br />
          <br />
        </div>
      </div>

      <div className="flex items-center justify-center pb-4">
      <ul className="flex flex-row items-center gap-[4vw] gap-8">
            <li>
              <Link
                href="/panel"
                className="hover:text-red-500 text-xl"
              >
                <span className="border-b-2 border-red-500">
                  <b>1</b>
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/panel/batch-20"
                className="hover:text-red-500 text-xl"
              >
                <b>2</b>
              </Link>
            </li>
            <li>
              <Link
                href="/programs"
                className="hover:text-red-500 text-xl"
              >
                <b>3</b>
              </Link>
            </li>
        </ul>
      </div>
        

    </section>

  );
};

export default Page;
