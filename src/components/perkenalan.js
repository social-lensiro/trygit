import react from "react";
const Perkenalan = (props) => {
  return (
    <div>
      <h1>Halo, nama saya {props.nama}</h1>
      <h2>Saya seorang {props.pekerjaan}</h2>
    </div>
  );
};
const App = (props) => {
  return (
    <div>
      <Perkenalan nama="Mohamad Sandi" pekerjaan="Mahasiswa" />
    </div>
  );
};
export default Perkenalan;
