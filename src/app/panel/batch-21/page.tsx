import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center my-10">EC Panel</h1>
      {/* President */}
      <h2 className="head_text text-center">Teams</h2>
      <div className="flex justify-center items-center mt-2">
        <div className="horizontal-line"></div>
      </div>
      <div className="flex-center mt-4 mx-2">
        <img
          className="center-image"
          width={600}
          height={250}
          src="/EC-Panel/batch21/21-1.jpeg"
          alt="President, IUTDS"
        />
        <br />
      </div>

      <div className="flex-center mt-4 mx-2">
        <img
          className="center-image"
          width={600}
          height={250}
          src="/EC-Panel/batch21/21-2.jpeg"
          alt="President, IUTDS"
        />
        <br />
      </div>

      <div className="flex-center mt-4 mx-2">
        <img
          className="center-image"
          width={600}
          height={250}
          src="/EC-Panel/batch21/21-3.jpeg"
          alt="President, IUTDS"
        />
        <br />
      </div>

      <div className="flex-center mt-4 mx-2">
        <img
          className="center-image"
          width={600}
          height={250}
          src="/EC-Panel/batch21/21-4.jpeg"
          alt="President, IUTDS"
        />
        <br />
      </div>

      <div className="flex-center mt-4 mx-2">
        <img
          className="center-image"
          width={600}
          height={250}
          src="/EC-Panel/batch21/21-5.jpeg"
          alt="President, IUTDS"
        />
        <br />
      </div>

      <div className="flex-center mt-4 mx-2">
        <img
          className="center-image"
          width={600}
          height={250}
          src="/EC-Panel/batch21/21-6.jpeg"
          alt="President, IUTDS"
        />
        <br />
      </div>

      <div className="flex-center mt-4 mx-2">
        <img
          className="center-image"
          width={600}
          height={250}
          src="/EC-Panel/batch21/21-7.jpeg"
          alt="President, IUTDS"
        />
        <br />
      </div>

      <div className="flex-center mt-4 mx-2">
        <img
          className="center-image"
          width={600}
          height={250}
          src="/EC-Panel/batch21/21-8.jpeg"
          alt="President, IUTDS"
        />
        <br />
      </div>

      <div className="flex-center mt-4 mx-2">
        <img
          className="center-image"
          width={600}
          height={250}
          src="/EC-Panel/batch21/21-9.jpeg"
          alt="President, IUTDS"
        />
        <br />
      </div>

      <div className="flex-center mt-4 mx-2">
        <img
          className="center-image"
          width={600}
          height={250}
          src="/EC-Panel/batch21/21-10.jpeg"
          alt="President, IUTDS"
        />
        <br />
      </div>

      <div className="flex items-center justify-center pb-4">
      <ul className="flex flex-row  items-center gap-[4vw] gap-8">
            <li>
              <Link
                href="/panel"
                className="hover:text-red-500 text-xl"
              >
                  <b>1</b>
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
                href="/panel/batch-21"
                className="hover:text-red-500 text-xl"
              >
                <span className="border-b-2 border-red-500">
                <b>3</b>
                </span>
              </Link>
            </li>
        </ul>
      </div>
        

    </section>

  );
};

export default Page;
