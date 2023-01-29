import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setproducts] = useState([]);
  // const res = await fetch("http://localhost:5000/products");
  // const data = await res.json();

  // if (data.length) {
  //   setproducts(data);
  // }
  useEffect(() => {
    fetch("https://drive-and-drive-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  return [products];
};

export default useProducts;
