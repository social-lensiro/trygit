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

      {/* JIKA JUMLAH > 0 → tampilkan tombol kurang/jumlah/tambah */}
      {jumlah > 0 && (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button onClick={kurang}>-</button>
          <span>{jumlah}</span>
          <button onClick={tambah}>+</button>
        </div>
      )}

      {/* JIKA JUMLAH = 0 → tampilkan tombol Add to Cart */}
      {jumlah === 0 && (
        <button
          onClick={tambah}
          style={{
            marginTop: "10px",
            padding: "8px 15px",
            borderRadius: "8px",
            background: "orange",
            color: "white",
          }}
        >
          + Add to Cart
        </button>
      )}

      {/* JIKA JUMLAH > 0 → tombol Update Keranjang */}
      {jumlah > 0 && (
        <button
          style={{
            marginTop: "10px",
            padding: "8px 15px",
            borderRadius: "8px",
            background: "green",
            color: "white",
          }}
        >
          🛒 Update Keranjang
        </button>
      )}
    </div>
  );
};

export default ProductMobile;
