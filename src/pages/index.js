import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/layout/Layout";
import About from "@/components/about";
import HomePage from "@/components/HomePage";
import Services from "@/components/service";

import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Layout title={"home"} description={"this is home page"}>
        <div className="block">
          <HomePage home={true} />
          <About />
          <Services />
          <Contact />
        </div>
      </Layout>
    </>
  );
}
