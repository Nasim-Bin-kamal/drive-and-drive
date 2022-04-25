import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch("https://pure-mesa-24596.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setproducts(data));
    }, []);

    return [products];

};

export default useProducts;