import React from 'react'
import { CarouselRoomDetails } from '../components/CarouselRoomDetails'
import { UserDetails } from '../components/UserDetails'

export const ScreenRoomDetails = () => {
    return (
        <>
            <h1>Room Details Screen </h1>
            
            <CarouselRoomDetails />
            <UserDetails/>
            

        </>
    )
}
