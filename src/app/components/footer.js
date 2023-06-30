import React from 'react'
import styles from '../page.module.css'
import Image from 'next/image'
import pic7 from "../images/ambg.png"
import pic8 from "../images/ptm.png"
import pic9 from "../images/tp.png"
import pic10 from "../images/ms.png"
import pic11 from "../images/hs.png"

const Footer = () => {
  return (
   <>
   <div className={styles.cc5}>
   <div class={styles.flexcontainer}>
  <div className={styles.m}>
    <p>Trusted By <br></br> Clients from <br></br> 50+ Companies</p>
  </div>
  <div className={styles.m}><p className={styles.hl}>|</p></div>
  <div className={styles.m}>
  <Image style={styles.im1}
      src={pic7}
      width={200}
      height={70}
      alt="Picture of the author"
    />
  </div>
  <div className={styles.m}>  <Image style={styles.im1}
      src={pic8}
      width={200}
      height={80}
      alt="Picture of the author"
    /></div>
  <div className={styles.m}>
  <Image style={styles.im1}
      src={pic9}
      width={200}
      height={50}
      alt="Picture of the author"
    /></div> 
  <div className={styles.m}>
  <Image style={styles.im1}
      src={pic10}
      width={250}
      height={100}
      alt="Picture of the author"
    /></div>  
  <div className={styles.m}><Image style={styles.im1}
      src={pic11}
      width={180}
      height={70}
      alt="Picture of the author"
    /></div>  
</div>
   </div>
   </>
  )
}

export default Footer