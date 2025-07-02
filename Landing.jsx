import React from 'react'
import Layout from '../../Component/Layout/Layout.jsx'
import Carousel from '../../Component/Carousel/CarouselEffect.jsx'
import Category from '../../Component/Category/Category.jsx'
import Product from '../../Component/Product/Product.jsx'


function Landing() {
  return (
<Layout>
    <div> 
        <Carousel />
        <Category />
        <Product />
   

   </div>
</Layout>
  )
}

export default Landing
