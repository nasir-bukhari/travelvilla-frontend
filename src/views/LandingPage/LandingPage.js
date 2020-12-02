import React from "react";
import Header from "../../components/Header/Header";
import IdeasSection from "./IdeasSection/IdeasSection";
import ExploreSection from "./ExploreSection/ExploreSection";
import Footer from "../../components/Footer/Footer";
import Layout from "../../hoc/Layout";
export default function LandingPage() {
  return (
    <Layout>
      <Header />
      <IdeasSection />
      <ExploreSection />
      <br></br>
      <Footer />
    </Layout>
  );
}
