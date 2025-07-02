import React, { useContext } from 'react';
import './Header.css'; 
import classes from "./Header.module.css"; 
import { Link } from 'react-router-dom';
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from './LowerHeader.jsx';
import { BiCart } from "react-icons/bi";
import { DataContext } from '../DataProvider/DataProvider.jsx'; 
import {auth} from "../../Utility/firebase.jsx"




//
const Header = () => {


const { state, dispatch } = useContext(DataContext); // ✅
const { basket,user } = state; // ✅
const totalItem = basket?.reduce((amount,item) =>{
  return item.amount + amount;
}, 0)
/**/ 



  return (
    <section className={classes.fixed}>
    <section>
      <div className= {classes.header__container}>
         <div className={classes.logo__container}>
            <Link to="/">
            <img
        src ="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo"  />
            </Link>
            <div className= {classes.delivery }>
            <span>
              <SlLocationPin />
          </span>
            <div>
                <p>Deliver to</p>
               <span>Ethiopia</span>
            </div>
        </div>
        </div>
            <div className={classes.search}>
              <select name="" id="" >
                <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="Search Product" />
            <BsSearch size={25} />
                </div>
            <div className = {classes.order__container}>
                    <a href="" className= {classes.language}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png" alt="" />
                    
                    <select name="" id="">
                        <option value="">EN</option>
                        </select>
                    </a>
                <Link to={!user && "/auth"}> 
                <div>
                  {
                   user?(
                    <>
                    <p>Hello {user.email?.split("@")[0]} </p>
                    <span onClick={()=>auth.signOut()}>SignOut</span>
                    </>
                  
                   ):(

                    <>
                    <p>Hello Sign In</p>
                    <span> Account & Lists</span>
                    </>
                   )
                  }
                  

                </div>
               
                
              </Link>
                <Link to="/orders">
                    <p>returns</p>
                    <span> & Orders</span>
                    </Link>
                <Link to="/cart" className={classes.cart}> 
                <BiCart size={35} />
                <span>{totalItem}</span>
                </Link>
            </div>
        </div>
    </section>
    


 <LowerHeader/>
 </section>
  )
}

export default Header
