import React from 'react'
import styles from '../page.module.css'
import Sliding from './swiper'

const Slider = () => {
  return (
   <>
   <div className={styles.c4}>
   <div className={styles.heading}>
            <h1>Transforming lives-Financially!</h1>
            </div>
    <div className="slide">
        <Sliding></Sliding>
        </div>        
   </div>
   </>
  )
}

export default Slider