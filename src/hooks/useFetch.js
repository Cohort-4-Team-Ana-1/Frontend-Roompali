import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = () => {
  const roomId = sessionStorage.getItem("roomId");

  const [state, setState] = useState([]);
  const [secondaryImages, setSecondaryImages] = useState([])

  useEffect(() => {
    axios({
      method: "get",
      url:
        `https://backend-roompali.vercel.app/api/rooms`,
    })
      .then(function (response) {
        const secondary_images_data = response.data.body.secondary_images
        const price_data = response.data.body.price
        setState(price_data)
        setSecondaryImages(secondary_images_data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return [state, secondaryImages];
};
