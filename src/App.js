import ProductMobile from "./components/productmobile";

function App() {
  return (
    <>
      <header
        style={{
          padding: "10px",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <h2>Toko Mobil Online</h2>
      </header>

      <div className="cards">
        <ProductMobile
          nama="Ford"
          desc="Mobil Ford adalah merek terkenal di dunia."
          gambar="https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMyMzE1OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        />
        <ProductMobile
          nama="Honda"
          desc="Honda dikenal karena mesin yang irit dan handal."
          gambar="https://images.unsplash.com/photo-1621135802920-133df287f89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NjA0MjYyNw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        />
        <ProductMobile
          nama="Honda"
          desc="Honda dikenal karena mesin yang irit dan handal."
          gambar="https://images.unsplash.com/photo-1559416523-140ddc3d238c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0MjIxNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        />
        <ProductMobile
          nama="Honda"
          desc="Honda dikenal karena mesin yang irit dan handal."
          gambar="https://images.unsplash.com/photo-1551830820-330a71b99659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQ2MDgwOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=10800"
        />
      </div>
    </>
  );
}

export default App;
