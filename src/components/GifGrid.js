import React, { Component } from "react";
import { useFetchGifs } from "./hooks/useFetchGifs";
// import React, { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";
// import { getGifs } from "./helpers/GetGifs";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  const { loading, data } = useFetchGifs(category);

  //const api_key = "UhW120WopevpLdlsnSymxyM4uWcCBKZI";

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading</p>  }
      <div className="card-grid">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
