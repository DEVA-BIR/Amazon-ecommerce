import React, { useState,useEffect } from 'react'
import Layout from '../../Component/Layout/Layout.jsx'
import {useParams } from 'react-router-dom'
import axios from 'axios';
import { productUrl} from '../../API/Endpoints.jsx'
import classes from './Results.module.css'


function Results() {
  
    const [results,setResults] = useState([]);
    const {categoryName} = useParams();
    useEffect(() =>{
    axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res) => {
        setResults(res.data);
        console.log(res.data)
    }).catch((err)=> {
        console.log(err);
    })
    }, [])
    return(
<Layout>
    <section>
      <h1 style={{ padding: "30px"}}>Results</h1>
      <p style={{ padding: "30px"}}>Category / {categoryName}</p>
      <hr />
        <div className={classes.products_container}>
            {results?.map((product) =>(
            <ProductCard 
            key={product.id}
            product={product}
            renderDesc={true}
            renderAdd={true}   
            />
           ))}
        </div>
     </section>
</Layout>
  )
}

export default Results
