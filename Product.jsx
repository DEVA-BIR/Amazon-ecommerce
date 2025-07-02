import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './Product.module.css'; 
import ProductCard from './ProductCard';
import Loader from '../Loader/Loader';

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://fakestoreapi.com/products') // ✅ Corrected
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products.map((singleProduct) => (
            <ProductCard 
              renderAdd={true}
              product={singleProduct} 
              key={singleProduct.id} 
            />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;
