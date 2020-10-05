import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchSearch = (city) => {
  const [search, setSearch] = useState();

  const config = {
    method: "GET",
    url: `/rooms-search?city=${city}`,
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        setSearch(response.data.body);
      })
      .catch(function (error) {
        // console.log(error);
      });
  }, [city]);

  return search;
};
