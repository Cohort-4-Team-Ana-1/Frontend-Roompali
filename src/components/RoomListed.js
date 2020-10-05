import React, { useEffect, useState } from "react";
import axios from "axios";
import void_heart from "../assets/void_heart.svg";
import { Link } from "react-router-dom";
import { useFetchFavorites } from "../hooks/useFetchFavorites";

export const RoomListed = () => {
  const city = localStorage.getItem("city");
  const [state, setstate] = useState([]);

  useEffect(() => {
    axios({
      url: "/rooms/number/20",
      method: "GET",
    })
      .then((response) => {
        setstate(response.data.body);
      })
      .catch((err) => {
        // console.error(err);
      });
  }, []);

  const [fav, setFav] = useState();
  const favorites = useFetchFavorites(fav);

  return (
    <section className="cards__container">
      {!city &&
        state.map((item) => (
          <div className="card" key={`${item._id}`}>
            <img className="card__roomImage" src={item.main_image} alt="room main image" />
            <p className="card__price">
              {new Intl.NumberFormat("es-CO").format(item.price)} COP
            </p>
            <img
              src={void_heart}
              className="card__heart"
              alt="favorites image"
              onClick={() => {
                !sessionStorage.getItem("user-id")
                  ? alert("debes tener una cuenta para agregar a favoritos")
                  : localStorage.setItem("favRoom", item._id) &&
                    setFav(localStorage.getItem("favRoom"));
              }}
            />
            <div className="card__info">
              <Link
                onClick={() => {
                  sessionStorage.setItem("roomId", `${item._id}`);
                }}
                to={`/room-details/${item._id}`}
                className="card__address"
              >
                {item.address}
              </Link>
            </div>
            <img
              className="card__userimage"
              src={item.owner.user_picture}
              alt="user picture"
            />
            <p className="card__username">{item.owner.first_name}</p>
          </div>
        ))}
    </section>
  );
};
