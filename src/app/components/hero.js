import React from 'react'
import styles from '../page.module.css'
import Image from 'next/image'
import pic from "../images/level.png"
import pic2 from "../images/rr.png"


const Hero = () => {
  return (
    <>
 

    <div className={styles.container} >
        <div className={styles.heading}>
            <h1>Backed by the best</h1>
            <p>Wealthup is backed and supported by</p>
        </div>
        <div className={styles.c2}>
      
        <Image style={styles.im1}
      src={pic2}
      width={250}
      height={80}
      alt="Picture of the author"
    />
     </div>
     <div className={styles.c3}>
       <Image style={styles.im}
      src={pic}
      width={250}
      height={80}
      alt="Picture of the author"
    />
    </div>
       
       
    </div>
    </>
  )
}

export default Hero