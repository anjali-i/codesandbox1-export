import React from "react";
import Itemcart from "./Itemcart";
import data from "./data";

const Home = () => {
  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products`)
  //     .then((response) => response.json())
  //     .then((actualData) => console.log(actualData));
  // }, []);
  return (
    <>
      <h1 className="text-center mt-3">All Items</h1>
      <section className="container py-4">
        <div className="row justify-content-center">
          {data.productData.map((items) => {
            return (
              <Itemcart
                key={items.id}
                Title={items.title}
                desc={items.description}
                img={items.image}
                price={items.price}
                item={items}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
