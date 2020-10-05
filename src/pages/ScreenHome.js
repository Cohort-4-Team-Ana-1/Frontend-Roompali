import React from "react";
import { HomeHero } from "../components/HomeHero";

export const ScreenHome = () => {
  const city = localStorage.getItem("city");
  console.log(city);
  return (
    <main>
      <HomeHero />
    </main>
  );
};
