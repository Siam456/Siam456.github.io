import Layout from "@/layout/Layout";
import React from "react";
import Services from "@/components/service";

export default function ServicesPage() {
  return (
    <>
      <Layout title={"about"} description={"this is my personal info"}>
        <Services />
      </Layout>
    </>
  );
}
