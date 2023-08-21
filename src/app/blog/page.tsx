import React from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineBook } from "react-icons/ai";

const page = () => {
  return (
    <section className="container mx-auto py-6">
      <h1 className="head_text text-center red_gradient my-10">Our Blogs</h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-14 mb-8">
        <div className="shadow-xl rounded-xl">
          <Image
            className="rounded center-image"
            width={385}
            height={300}
            src="/blog-images/artOfSpeaking.jpeg"
            alt="art of speaking blog pic"
          />

          <h3 className="ml-4 mr-10 my-4 font-semibold">
            Mastering the Art of Speaking to captivate and conquer
          </h3>

          <div className="horizontal-line my-4 ml-4"></div>

          <p className="ml-4 mr-10 my-4">
            Speaking is a skill that one must hone to ease through most of their
            life, be it in a professional setting or personal matters. There are
            two aspects to speaking...
          </p>

          <div className="ml-4 mr-10 my-4 flex flex-row">
            <AiOutlineBook size={24} />
            <h3 className="text-gray-500 ml-0.5">Sajid Chowdhury</h3>
            <Link href="/blog/art-of-speaking">
              <button className="ml-20 bg-black text-white py-1 px-2 rounded shadow hover:bg-gray-700 transition duration-300">
                Read more
              </button>
            </Link>
          </div>
        </div>

        <div className="shadow-xl rounded-xl">
          <Image
            className="rounded center-image"
            width={385}
            height={300}
            src="/blog-images/artPersuation.png"
            alt="art of persuation blog pic"
          />

          <h3 className="ml-4 mr-10 my-4 font-semibold">
            The Art of Persuasion
          </h3>

          <div className="horizontal-line my-4 ml-4"></div>

          <p className="ml-4 mr-10 my-4">
            In a world where ideas clash and opinions collide, the art of
            persuasion emerges as a potent force. It is capable of shaping
            narratives, influencing decisions, and bringing about meaning...
          </p>

          <div className="ml-4 mr-10 my-4 flex flex-row">
            <AiOutlineBook size={24} />
            <h3 className="text-gray-500 ml-0.5">Safrina Kabir</h3>
            <Link href="/blog/art-of-persuation">
              <button className="ml-20 bg-black text-white py-1 px-2 rounded shadow hover:bg-gray-700 transition duration-300">
                Read more
              </button>
            </Link>
          </div>
        </div>

        <div className="shadow-xl rounded-xl">
          <Image
            className="rounded center-image"
            width={385}
            height={300}
            src="/blog-images/listen.png"
            alt="power of listening blog pic"
          />

          <h3 className="ml-4 mr-10 my-4 font-semibold">
            The Power of Listening
          </h3>

          <div className="horizontal-line my-4 ml-4"></div>

          <p className="ml-4 mr-10 my-4">
            A recent article by Elle Kaplan defined effective listening as
            “giving your complete, intentional focus to what someone says,
            rather than what...
          </p>

          <div className="ml-4 mr-10 my-4 flex flex-row">
            <AiOutlineBook size={24} />
            <h3 className="text-gray-500 ml-0.5">Tasmia Rimi</h3>
            <Link href="/blog/power-of-listening">
              <button className="ml-20 bg-black text-white py-1 px-2 rounded shadow hover:bg-gray-700 transition duration-300">
                Read more
              </button>
            </Link>
          </div>
        </div>

        <div className="shadow-xl rounded-xl">
          <Image
            className="rounded center-image"
            width={385}
            height={300}
            src="/blog-images/freedomOfSpeech.png"
            alt="freedom of speech blog pic"
          />

          <h3 className="ml-4 mr-10 my-4 font-semibold">
            The Enduring Power of Freedom of Speech and Debating in Democracy
          </h3>

          <div className="horizontal-line my-4 ml-4"></div>

          <p className="ml-4 mr-10 my-4">
            The constant pursuit of free speech and the art of debate are
            entwined with the development of modern democracy. These two pillars
            have...
          </p>

          <div className="ml-4 mr-10 my-4 flex flex-row">
            <AiOutlineBook size={24} />
            <h3 className="text-gray-500 ml-0.5">Jubayer Fayej</h3>
            <Link href="/blog/freedom-of-speech">
              <button className="ml-20 bg-black text-white py-1 px-2 rounded shadow hover:bg-gray-700 transition duration-300">
                Read more
              </button>
            </Link>
          </div>
        </div>

        <div className="shadow-xl rounded-xl">
          <Image
            className="rounded center-image"
            width={385}
            height={300}
            src="/blog-images/winLose.png"
            alt="win lose blog pic"
          />

          <h3 className="ml-4 mr-10 my-4 font-semibold">
            Beyond Winning and Losing
          </h3>

          <div className="horizontal-line my-4 ml-4"></div>

          <p className="ml-4 mr-10 my-4">
            “The real victory is in your hands once you can get over your
            limitations” — winning, losing, or the end does not matter when one
            has already enriched his abilities. One...
          </p>

          <div className="ml-4 mr-10 my-4 flex flex-row">
            <AiOutlineBook size={24} />
            <h3 className="text-gray-500 ml-0.5">Mansura Islam</h3>
            <Link href="/blog/beyond-winning">
              <button className="ml-20 bg-black text-white py-1 px-2 rounded shadow hover:bg-gray-700 transition duration-300">
                Read more
              </button>
            </Link>
          </div>
        </div>

        <div className="shadow-xl rounded-xl">
          <Image
            className="rounded center-image"
            width={385}
            height={300}
            src="/blog-images/democracy.png"
            alt="democracy tool of debating"
          />

          <h3 className="ml-4 mr-10 my-4 font-semibold">
            Debating - Tool for democracy
          </h3>

          <div className="horizontal-line my-4 ml-4"></div>

          <p className="ml-4 mr-10 my-4">
            Let’s fasten our seatbelt and indulge ourselves into interesting
            world of debating. Debating-the word that whispers into our mind as
            argumentation and acceptance regarding a...
          </p>

          <div className="ml-4 mr-10 my-4 flex flex-row">
            <AiOutlineBook size={24} />
            <h3 className="text-gray-500 ml-0.5">Shahnila Anan</h3>
            <Link href="/blog/democracy-tool">
              <button className="ml-20 bg-black text-white py-1 px-2 rounded shadow hover:bg-gray-700 transition duration-300">
                Read more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
