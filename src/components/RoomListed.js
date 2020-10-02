import React, { useEffect, useState } from "react";
import axios from "axios";
import void_heart from "../assets/void_heart.svg";

export const RoomListed = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    axios({
      url: "/rooms",
      method: "GET",
    })
      .then((response) => {
        console.log(response);
        setstate(response.data.body);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className="cards__container">
      {state.map((item) => (
        <div className="card" key={`${item._id}`}>
          <img className="card__roomImage" src={item.main_image} alt="" />
          <p className="card__price">
            {new Intl.NumberFormat("es-CO").format(item.price)} COP
          </p>
          <img src={void_heart} className="card__heart" alt="" />
          <div className="card__info">
            <p className="card__address">{item.address}</p>
          </div>
          <img
            className="card__userimage"
            src={item.owner.user_picture}
            alt=""
          />
          <p className="card__username">{item.owner.first_name}</p>
        </div>
      ))}
    </section>
  );
};
