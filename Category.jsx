import React from 'react'
import {categoryInfos } from './CategoryFullinfos.jsx'
import CategoryCard from './CategoryCard'
import classes from './category.module.css'

function Category() {
  return (
    <section className={classes.category__container}>
      {
        categoryInfos.map((infos, index) => (
          <CategoryCard key={infos.id || index} data={infos} />
        ))
      }
    </section>
  )
}

export default Category
