import Layout from "@/layout/Layout";
import React from "react";
import About from "@/components/about";

export default function AboutPage() {
  return (
    <>
      <Layout title={"about"} description={"this is my personal info"}>
        <About />
      </Layout>
    </>
  );
}
