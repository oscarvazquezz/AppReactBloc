import React from 'react';
import './TodoAlerta.css';
import photo from "./img/bloc.png";
import photos from "./img/word.png";
import photoError from "./img/error.png";

function TodoAlerta({msg,img}){
   
   let id = 0
   let image;
   if(photo.indexOf(img) !=-1){
       image = photo;
       id = 0;
   }

   if(photos.indexOf(img) !=-1){
      image = photos;
      id = 1;
   }

   if(photoError.indexOf(img) !=-1){
       image = photoError;
       id = 2;
    }


   img = image
    return (
        <div className="Containers">
            <h5>{msg}</h5>
            <img id={id} src={img}/>
        </div>
    )
}

export{TodoAlerta}
