import React from "react";
import { CarouselRoomDetails } from "../components/CarouselRoomDetails";
import { UserDetails } from "../components/UserDetails";
import { useFetchUserDetails } from "../hooks/useFetchUserDetails";

export const ScreenRoomDetails = () => {
  const data = useFetchUserDetails();
  const roomData = data[0];
  return (
    <>
      <h3>{roomData.room_name} </h3>

      <CarouselRoomDetails />
      <UserDetails />
    </>
  );
};
