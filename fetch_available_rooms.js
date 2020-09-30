import React, { useState } from 'react'
import axios from 'axios'


export const App = () => {

const [state, setstate] = useState([])
  
  axios({
    url:'https://backend-roompali.vercel.app/api/rooms',
    method:'GET',
  }).then((response) => {
      setstate(response.data.body)
  }).catch((err) => {
      console.error(err)
  })

  return (
    <section className='cards-container'>
      {
        state.map((index) => (
          
          <div className='card' key={`${index._id}`}>
                <p>{index.price}</p>
                <img className= 'roomimage' src={index.main_image} alt='' style={{ width: 250}} />
                <div className="card__info">
                    <p className="info">{index.address}</p>
                </div>
                <img className = 'userimage' src={index.owner.user_picture} alt="" style={{ width: 100}}/>
                <p className="name">{index.owner.first_name}</p>
          </div>

        ))
      }
    </section>
  )
}
