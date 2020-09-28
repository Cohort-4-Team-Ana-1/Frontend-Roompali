import React from 'react';
import { useForm } from 'react-hook-form';




export const FormCreateRoom = () => {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      


       <label>Precio del alquiler COP <input type="number" placeholder="price" name="price" required="required" ref={register({required: true})} /></label><br/>
       <label>Dirección <input type="text" placeholder="address" name="address" required="required" ref={register({required: true})} /></label><br/>
       <label>Área del cuarto (mts2) <input type="number" placeholder="square_meters" required="required" name="square_meters" ref={register({required: true})} /></label><br/>
       <label>Cama <input type="checkbox" placeholder="bed" name="bed" ref={register} /></label><br/>
       <label>Escritorio <input type="checkbox" placeholder="desk" name="desk" ref={register} /></label><br/>
       <label>Armario <input type="checkbox" placeholder="closet" name="closet" ref={register} /></label><br/>
       <label>Silla <input type="checkbox" placeholder="chair" name="chair" ref={register} /></label><br/>
       <label>Sofá <input type="checkbox" placeholder="couch" name="couch" ref={register} /></label><br/>
       <label>Cocina <input type="checkbox" placeholder="kitchen" name="kitchen" ref={register} /></label><br/>
       <label>Visitas <input type="checkbox" placeholder="visits" name="visits" ref={register} /></label><br/>
       <label>Internet <input type="checkbox" placeholder="wifi" name="wifi" ref={register} /></label><br/>
       <label>Parqueadero <input type="checkbox" placeholder="parking" name="parking" ref={register} /></label><br/>
       <label>Lavadora <input type="checkbox" placeholder="washing_machine" name="washing_machine" ref={register} /></label><br/>
       <label>Televisión <input type="checkbox" placeholder="television" name="television" ref={register} /></label><br/>
       <label>Calefacción <input type="checkbox" placeholder="heating" name="heating" ref={register} /></label><br/>
       <label>Baño privado <input type="checkbox" placeholder="private_bathroom" name="private_bathroom" ref={register} /></label><br/>
       <label>Gimnasio <input type="checkbox" placeholder="gymnasium" name="gymnasium" ref={register} /></label><br/>
       <label>Aire acondicionado <input type="checkbox" placeholder="air_conditioner" name="air_conditioner" ref={register} /></label><br/>
       <label>Descripción del cuarto <textarea name="room_description" ref={register} /></label><br/>

       <input type="submit" />
      
    </form>
  );
}