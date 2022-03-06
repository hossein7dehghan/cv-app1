import Head from "next/head";

import Navbar from "../components/Navbar";

import Info from "../components/Info";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Workhistory from "../components/Workhistory";
import ContactMe from "../components/ContactMe";

export default function Home() {
  return (
    <div className="bg-[#131516] ">
      <Head>
        <title>Hossein Dehghan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navbar />
      <main className="">
        <Info />
        <Skills />
        <Portfolio />
        <Workhistory />
        <ContactMe />
      </main>
    </div>
  );
}