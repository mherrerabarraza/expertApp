import React from "react";
export const GifGridItem = ({ title, url }) => {
  return (
    <div className='animate__fateIn card animate__animated animate__heartBeat'>
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};
