import React, { lazy, Suspense } from "react";
import { FaDivide } from "react-icons/fa";
import { HomeHero } from "../components/HomeHero";
import { RoomListed } from "../components/RoomListed";


// import { RoomListed } from "../components/RoomListed";

// const Camaloo = lazy(()=>import("../components/RoomListed"))


export const ScreenHome = () => {
  const city = localStorage.getItem('city')
  console.log(city)
  return (
    <main>
      <HomeHero/>
      {/* <RoomListed/> */}
        
        

      

{/* <Suspense fallback = {<p>Hola</p>}>

      <Camaloo/>

      </Suspense> */}
    </main>
  );
};
