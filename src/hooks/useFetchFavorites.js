import axios from "axios";
import React, { useEffect, useState } from "react";

export const useFetchFavorites = (roomId) => {
  const userId = sessionStorage.getItem("user-id");

  const [favorites, setFavorites] = useState();

  const data = JSON.stringify({ userId: `${userId}`, roomId: `${roomId}` });

  useEffect(() => {
    const config = {
      method: "POST",
      url: "/favorite-rooms/add",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setFavorites(response.data);
        alert("Agregado a favoritos");
      })
      .catch(function (error) {
        // console.log(error);
      });
  }, [roomId]);

  return favorites;
};
