import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useFetchSearch } from "../hooks/useFetchSearch";
import void_heart from "../assets/void_heart.svg";
import { RoomListed } from "./RoomListed";
import { useFetchFavorites } from "../hooks/useFetchFavorites";

export const HomeHero = () => {
  const city = JSON.parse(localStorage.getItem("city"));

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data.search);
    localStorage.setItem("city", JSON.stringify(data.search));
    // window.location.href = `/rooms/${city}`
  };
  //   console.log(errors);

  const search = useFetchSearch(city);
  
  const [fav, setFav] = useState()
console.log(fav)
const  favorites = useFetchFavorites(fav)
console.log(favorites)


  console.log(search);

  console.log("hol");

  return (

    <>
        


      <section className="heroHome">
        <div className="hero__banner">
          <img
            src="https://cdn.pixabay.com/photo/2016/03/09/09/42/buildings-1245953_1280.jpg"
            alt=""
          />
          <div className="hero__input">
            <h1>¡Encuentra tu roomie ideal!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="search"
                placeholder="¿En qué ciudad quieres vivir?"
                name="search"
                ref={register}
                autoComplete="off"
              />
              <button type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </section>

    {
        !city ? <RoomListed/>
        : 
            <>
            <h2>Habitaciones disponibles en {city}</h2>
        <section className="cards__container">
          {search !== undefined &&
            search.map((item) => (
                <div className="card" key={`${item._id}`}>
                <img className="card__roomImage" src={item.main_image} alt="" />
                <p className="card__price">
                  {new Intl.NumberFormat("es-CO").format(item.price)} COP
                </p>
                <img src={void_heart} className="card__heart" alt="" onClick = {()=>{
                  
                  //  handleFavorites
                  !sessionStorage.getItem('user-id')? alert('debes tener una cuenta para agregar a favoritos')
                  :localStorage.setItem('favRoom', item._id) && alert('agregado')
                  setFav(localStorage.getItem('favRoom'))
                }
                }/>
                <div className="card__info">
                  <Link onClick = {()=>{
                sessionStorage.setItem('roomId', `${item._id}`)
              }}
              
              
              to = {`/room-details/${item._id}`} className="card__address">{item.address}</Link>
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
  </>




    }


      

    
    </>
  );
};
