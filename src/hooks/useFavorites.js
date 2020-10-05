import axios from "axios";
import { useEffect, useState } from "react";

export const useFavorites = () => {
  const [state, setState] = useState();

  const config = {
    method: "get",
    url: `/users/${sessionStorage.getItem("user-id")}`,
    headers: {},
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        setState(response.data.body.favorite_rooms);
      })
      .catch(function (error) {
        // console.log(error);
      });
  }, []);

  return state;
};
