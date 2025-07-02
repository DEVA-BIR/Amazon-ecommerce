import React from 'react'
import classes from './category.module.css'
import {Link} from 'react-router-dom';
function CategoryCard({data}) {
  console.log(data) *16 ; {title: 'Jewelery'; imgLink: 'https://fakestoreapi.com/img/71YpWzhdJNLL._AC_UL640_QL65_ML3_.jpg'}
  return (
    <div className={classes.category}>
        <Link to={`/category/${data.title}`}>
            <span>
                <h2>{data?.title}</h2>
            </span>
            <img src={data?.imgLink} alt="" />
            <p>shop now</p>
        </Link>
    </div>
  )
}

export default CategoryCard;
