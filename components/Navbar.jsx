import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* //first itemcontainer in the navbar// */}
   <div className={styles.item}>
   <div className={styles.callbutton}>
    <Image src="/Image/phone.png" alt="" width="27" height="23"/>
   </div>
   <div className={styles.text}>
   <div className={styles.text}>ORDER NOW</div>
   <div className={styles.text}>+234983245654</div>
   </div>
   </div>

      {/* //second itemcontainer in the navbar// */}
   <div className={styles.item}>
    <ul className={styles.list}>
    <li className={styles.listitem}>Homepage</li>
    <li className={styles.listitem}>product</li>
    <li className={styles.listitem}>Menu</li>
    <Image src="/Image/logo.png" alt="" width="30px" height="30px"/>
    <li className={styles.listitem}>Events</li>
    <li className={styles.listitem}>Blog</li>
    <li className={styles.listitem}>Contact</li>
    </ul>
   </div>


      {/* //third itemcontainer in the navbar// */}
   <div className={styles.item}>
    <div className={styles.cart}>
    <Image src="/Image/cart.png" alt="" width="40px" height="40px" />
    </div>
    <div className={styles.counter}>
      2
      </div>
   </div>
    </div>
  )
}

export default Navbar