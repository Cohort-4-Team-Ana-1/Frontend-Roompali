import React from "react";
import userPhoto from "../assets/2.jpg";
import emailIcon from "../assets/email-icon.svg";
import wpIcon from "../assets/wp-icon.svg";

import { BiMap } from "react-icons/bi";
import { FaParking, FaBath, FaTemperatureHigh } from "react-icons/fa";
import { AiFillCar, AiOutlineWifi } from "react-icons/ai";
import { CgSmartHomeWashMachine, CgGym } from "react-icons/cg";
import { IoIosSnow } from "react-icons/io";
import { ImSpoonKnife, ImDisplay } from "react-icons/im";
import { MdKitchen } from "react-icons/md";
import { GrElevator } from "react-icons/gr";

export const UserDetails = () => {
  const iconSize = "2em";
  return (
    <div>
      <section className="user__details">
        <div className="user__address">
          <BiMap size="2em" className="icon-address" />
          <p>Carrera 25 # 25 - 25 , Bogota, Colombia</p>
        </div>
        <div className="user-contact">
          <img className="user-photo" src={userPhoto} alt="" />
          <div className="user-rrss">
            <img src={emailIcon} alt="" />
            <img src={wpIcon} alt="" />
          </div>
          <p>Samantha</p>
        </div>
      </section>
      <section className="room__details">
        <h3>Detalles del cuarto</h3>
        <p>
          Morbi ac tristique augue. Sed in velit ac ligula fringilla suscipit.
          Nulla ut lectus sed neque mollis porta in vel ante. Etiam pellentesque
          purus quis odio consequat, et suscipit magna sodales. Nam ullamcorper
          nisl eget neque rhoncus, id imperdiet ligula egestas. Aenean in dolor
          massa. Suspendisse lectus turpis, rutrum ut.
        </p>
      </section>
      <section className="room__services">
        <h3>Servicios</h3>
        <div className="services-icons">
          <AiOutlineWifi size={iconSize} />
          <FaParking size={iconSize} />
          <FaBath size={iconSize} />
          <FaTemperatureHigh size={iconSize} />
          <AiFillCar size={iconSize} />
          <CgGym size={iconSize} />
          <CgSmartHomeWashMachine size={iconSize} />
          <IoIosSnow size={iconSize} />
          <ImDisplay size={iconSize} />
          <ImSpoonKnife size={iconSize} />
          <MdKitchen size={iconSize} />
          <GrElevator size={iconSize} />
        </div>
      </section>
      <section className="room__user-info">
        <h3>Detalles del cuarto</h3>
        <p>
          Morbi ac tristique augue. Sed in velit ac ligula fringilla suscipit.
          Nulla ut lectus sed neque mollis porta in vel ante. Etiam pellentesque
          purus quis odio consequat, et suscipit magna sodales. Nam ullamcorper
          nisl eget neque rhoncus, id imperdiet ligula egestas. Aenean in dolor
          massa. Suspendisse lectus turpis, rutrum ut.
        </p>
      </section>
    </div>
  );
};
