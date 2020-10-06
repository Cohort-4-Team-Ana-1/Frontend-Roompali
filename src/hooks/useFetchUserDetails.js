import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchUserDetails = () => {
  const roomId = sessionStorage.getItem("roomId");

  const [state, setState] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://backend-roompali.vercel.app/api/rooms/${roomId}`,
    })
      .then(function (response) {
        const data = response.data.body;
        const user_data = response.data.body.owner;
        setState(data);
        setUserData(user_data);
      })
      .catch(function (error) {
        // console.log(error);
      });
  }, []);

  return [state, userData];
};
