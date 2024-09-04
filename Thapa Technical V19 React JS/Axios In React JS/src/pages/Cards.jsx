import axios from "axios";
import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";

export default function Cards() {
  const [Products, SetProducts] = useState([]);

  const API = "https://fakestoreapi.com/products";

  async function fetchAPI() {
    try {
      const res = await axios.get(API);
      SetProducts(res.data);
      console.log(res.data);
      for (let i = 0; i < res.data.length; i++) {
        console.log(res.data[i].price);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row ">
          {Products.map((item) => (
            <CardComponent key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
