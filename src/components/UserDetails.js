import React from "react";

import emailIcon from "../assets/email-icon.svg";
import wpIcon from "../assets/wp-icon.svg";

import { BiMap } from "react-icons/bi";
import { FaParking, FaBath, FaTemperatureHigh } from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";
import { CgSmartHomeWashMachine, CgGym } from "react-icons/cg";
import { IoIosSnow } from "react-icons/io";
import { ImSpoonKnife, ImDisplay } from "react-icons/im";

import { TiInputChecked } from "react-icons/ti";
import { GiThreeFriends } from "react-icons/gi";

import { useFetchUserDetails } from "../hooks/useFetchUserDetails";

export const UserDetails = () => {
  const data = useFetchUserDetails();
  const roomData = data[0];
  const userData = data[1];
  const iconSize = "2em";
  return (
    <div>
      <section className="user__details">
        <div className="user__address">
          <BiMap size="2em" className="icon-address" />
          <p>
            {roomData.address}, {roomData.city}
          </p>
        </div>
        <div className="user-contact">
          <img
            className="user-photo"
            src={userData.user_picture}
            alt="user picture"
          />
          <div className="user-rrss">
            <a href={`mailto:${userData.contact_email}`}>
              <img src={emailIcon} alt="email contact icon" />
            </a>
            <a
              href={`https://wa.me/${userData.whatsapp}?text=Me%20encanto%20tu%20cuarto!!%20Quisiera%20poder%20hablar%20contigo.`}
            >
              <img src={wpIcon} alt="whatsapp contact icon" />
            </a>
          </div>
          <p>{userData.first_name}</p>
        </div>
      </section>
      <section className="room__details">
        <h3>Mobiliario del cuarto</h3>
        <p>
          El cuarto cuenta con un área de {roomData.square_meters} mts
          <sup>2</sup>, y el siguiente mobiliario dentro del cuarto:
        </p>
        <div className="room__furnitue__prueba">
          {roomData.bed === true && (
            <div className="room__furniture">
              <TiInputChecked size={iconSize} />
              <p>Cama</p>
            </div>
          )}
          {roomData.closet === true && (
            <div className="room__furniture">
              <TiInputChecked size={iconSize} />
              <p>Armario</p>
            </div>
          )}
          {roomData.desk === true && (
            <div className="room__furniture">
              <TiInputChecked size={iconSize} />
              <p>Escritorio</p>
            </div>
          )}
          {roomData.chair === true && (
            <div className="room__furniture">
              <TiInputChecked size={iconSize} />
              <p>Silla</p>
            </div>
          )}
          {roomData.couch === true && (
            <div className="room__furniture">
              <TiInputChecked size={iconSize} />
              <p>Sofa</p>
            </div>
          )}
        </div>
      </section>
      <section className="room__services">
        <h3>Servicios</h3>
        <div className="services-icons">
          {roomData.wifi === true && <AiOutlineWifi size={iconSize} />}
          {roomData.parking === true && <FaParking size={iconSize} />}
          {roomData.private_bathroom === true && <FaBath size={iconSize} />}
          {roomData.heating === true && <FaTemperatureHigh size={iconSize} />}
          {roomData.visits === true && <GiThreeFriends size={iconSize} />}
          {roomData.gymnasium === true && <CgGym size={iconSize} />}
          {roomData.washing_machine === true && (
            <CgSmartHomeWashMachine size={iconSize} />
          )}
          {roomData.air_conditioner === true && <IoIosSnow size={iconSize} />}
          {roomData.television === true && <ImDisplay size={iconSize} />}
          {roomData.kitchen === true && <ImSpoonKnife size={iconSize} />}
        </div>
      </section>
      <section className="room__user-info">
        <h3>Información adicional</h3>
        <p>{roomData.room_description}</p>
      </section>
    </div>
  );
};
