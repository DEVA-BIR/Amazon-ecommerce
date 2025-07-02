import React from 'react'
import Layout from '../../Component/Layout/Layout.jsx'
import { DataContext} from '../../Component/DataProvider/DataProvider.jsx'
import ProductCard from '../../Component/Product/ProductCard.jsx'
import { Link } from 'react-router-dom'
import classes from './Cart.module.css'
import {} from '../../Utility/action.jsx'
import { useContext } from 'react';
import CurrencyFormat from '../../Component/CurrencyFormat/CurrencyFormat.jsx'; // ✅ adjust path as needed
//import {IoIoArrowUp} from 'react-icons/io'
//import {IoIoArrowDown} from 'react-icons/io'
function Cart() {
  const { state: { basket, user }, dispatch } = useContext(DataContext);

  //const [{basket, user}, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount,item)=>{
    return item.price * item.amount + amount;
  },0)
  const increment = (item) => {
    dispatch({
      type: 'Type.ADD_TO_BASKET',
      item: item
    });
  }
    const decrement = (id) => {
            dispatch({
      type: 'Type.REMOVE_FROM_BASKET',
      id

      

  })
}


  return (
    <Layout>
      <section className= {classes.container}>
      <div className= {classes.cart__container}>
        <h2>Hello </h2>
        <h2>Your Shopping basket</h2>
        <hr />
     
      {
        basket?.length == 0?(<p>Opps ! No item in your cart</p>):(basket?.map((item,i) => {
          return <section className= {classes.cart_product}>
            <ProductCard
          product={item}
          renderDesc={true}
          renderAdd = {false}
          flex= {true}
          
          />
          <div className= {classes.btn_container}>
            <button className= {classes.btn} onClick={()=>increment}>
             +
            </button>
            <span>
              {item.amount}
            </span>
            <button className= {classes.btn} onclick={()=>decrement(item.id)}>
             -
              </button>
          </div>
          </section>
        })
        )
    }
     </div>
      
   {basket?.length !==0&&
    <div className={classes.subtotal}>
      <div>
        <p>Subtotal ((basket?.length) items)</p>
        <CurrencyFormat amount={total} />
    </div>
    <span>
      <input type="Checkbox"  />
      <small>This order contains a gift</small>
    </span>
 <Link to="/payment"> Continue to checkout</Link>

      </div>



   }
  </section>
  </Layout>
  )
}

export default Cart
