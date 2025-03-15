import { Layout } from "../../shared/layout/Layout";
import cls from "./HomePage.module.scss";
import { useState } from "react";

import { Hero } from "../../components/homePage/hero/Hero";
import { WhyChooseUs } from "../../components/homePage/whyChooseUs/WhyChooseUs";
import { Program } from "../../components/homePage/program/program";
import { About } from "../../components/homePage/about/About";

export const HomePage = ({ toggleIsOpenForm }) => {
  return (
    <>
      <div className={cls.background}>
        <Layout clsCustom={cls.background}>
          <Hero toggleIsOpenForm={toggleIsOpenForm} />
        </Layout>
      </div>
      <Layout>
        <WhyChooseUs />
      </Layout>
      <div className={cls.background}>
        <Layout clsCustom={cls.background}>
          <Program toggleIsOpenForm={toggleIsOpenForm}/>
        </Layout>
      </div>
      <Layout>
        <About toggleIsOpenForm={toggleIsOpenForm}/>
      </Layout>
    </>
  );
};
