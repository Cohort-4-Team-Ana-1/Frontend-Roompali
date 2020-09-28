import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const UploadUserImage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    console.log(data);
    formData.append("image", data.picture[0]);

    axios({
      url: "/images",
      method: "POST",
      data: formData,
    })
      .then((response) => {
        console.log(response);

        localStorage.setItem("user_picture", response.data.image_url);
        response.data.success === false &&
          alert(
            "Asegurate de que tu archivo sea una imagen con extension .JPG o PNG"
          );
      })
      .catch((err) => {
        console.error(err);
        console.log(err);
      });
  };

  const [profileImage, setprofileImage] = useState({
    profileImg:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co254y.jpg",
  });

  const { profileImg } = profileImage;

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      reader.readyState === 2 && setprofileImage({ profileImg: reader.result });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <h1> UPLOAD SINGLE IMAGE </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          ref={register}
          type="file"
          name="picture"
          onChange={imageHandler}
          required="required"
        />
        <img
          src={profileImg}
          accept="image/*"
          style={{ width: `100px` }}
          alt=""
        />
        <button>Submit</button>
      </form>
    </>
  );
};
