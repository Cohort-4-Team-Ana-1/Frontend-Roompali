import React from 'react'
import { Link } from 'react-router-dom'
import { useFavorites } from '../hooks/useFavorites'


export const FavoritesList = () => {

    const favList = useFavorites()
    console.log(favList)

    return (
        <section className="cards__container">
    
    
    
          { favList &&
          
          
          favList.map((item) => (
            <div className="card" key={`${item._id}`}>
              <img className="card__roomImage" src={item.main_image} alt="" />
              <p className="card__price">
                {new Intl.NumberFormat("es-CO").format(item.price)} COP
              </p>

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
      );
}
