import React, { useState } from "react";
import "../App.css";

const ProductMobile = (props) => {
  const [jumlah, setJumlah] = useState(0);

  const tambah = () => {
    setJumlah(jumlah + 1);
  };

  const kurang = () => {
    if (jumlah > 0) setJumlah(jumlah - 1);
  };

  return (
    <div className="card">
      <img src={props.gambar} alt={props.nama} />

      <h4>
        <b>{props.nama}</b>
      </h4>
      <p>{props.desc}</p>

      {/* Add to Cart saat jumlah = 0 */}
      {jumlah === 0 && (
        <button onClick={tambah} className="smooth">
          + Add to Cart
        </button>
      )}

      {/* Tombol - jumlah + */}
      {jumlah > 0 && (
        <div className="jumlah-wrapper smooth">
          <button onClick={kurang}>-</button>
          <span className="jumlah">{jumlah}</span>
          <button onClick={tambah}>+</button>
        </div>
      )}
    </div>
  );
};

export default ProductMobile;
