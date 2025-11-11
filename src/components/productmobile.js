import React from "react";
import "../App.css";

const ProductMobile = (props) => {
  return (
    <div className="card">
      <img
        style={{
          width: "100%",
          height: "200px",
          borderRadius: "10px 10px 0px 0px",
        }}
        src={props.gambar}
        alt={props.nama}
      />
      <h4>
        <b>{props.nama}</b>
      </h4>
      <p>{props.desc}</p>
    </div>
  );
};

export default ProductMobile;
