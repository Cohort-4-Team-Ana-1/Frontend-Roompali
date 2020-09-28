import React from "react";
import { useForm } from "react-hook-form";
import { UploadMainImages } from "../components/UploadMainImages";
import axios from 'axios'

export const ScreenCreateHostRol = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        
        (!localStorage.getItem('picture'))&& (localStorage.setItem('picture', 
        'https://roompali-bucket-s3.s3.us-west-1.amazonaws.com/user-3331256_1280-1601277188321.png'))
        
        
      //   console.log(data);
      const user_picture = localStorage.getItem('picture')
       

      console.log(errors);
      const newData = {...data, user_picture}
      console.table(newData)
      axios({
          url: "/roles",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: newData,
        })
          .then((response) => {
            console.log(response)
            // window.location.href="/create-host-rol";
          })
          .catch((err) => {
            console.error(err);
          });
    }

    

  return (
    <div>
      <UploadMainImages />

      

      <form onSubmit={handleSubmit(onSubmit)}>
        <br />
        <input
          type="text"
          placeholder="first_name"
          name="first_name"
          required = 'required'
          ref={register({ min: 3 })}
        />
        <br />
        <input
          type="text"
          placeholder="last_name"
          name="last_name"
          required = 'required'
          ref={register({   min: 3 })}
        />
        <br />
        <input
          type="email"
          placeholder="contact_email"
          name="contact_email"
          required = 'required'
          ref={register}
        />
        <br />

        <input
          type="number"
          placeholder="whatsapp"
          name="whatsapp"
          required = 'required'
          ref={register({  min: 100000000 })}
        />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};
