import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import HeaderLink from "../components/HeaderLink";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LinkdIn-Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-around items-center py-4">
        <div className="relative w-36 h-10">
          <Image
            src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.png"
            alt="logo"
            width={90}
            height={50}
          />
        </div>
        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            <HeaderLink text="Discover" feed={""} />
            <HeaderLink text="Pepole" feed={""} />
            <HeaderLink text="Learning" feed={""} />
            <HeaderLink text="Jobs" feed={""} />
          </div>
        </div>
        <div className="pl-4">
          <button className="text-cyan-400 font-semibold rounded-full border border-cyan-600 px-5 py-1.5 transition-all duration-75 ease-out hover:border-2 hover:scale-90">
            Sign In
          </button>
        </div>
      </header>
    </>
  );
};

export default Home;
