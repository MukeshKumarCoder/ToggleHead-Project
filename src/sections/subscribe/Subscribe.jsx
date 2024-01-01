import React from 'react'
import styles from "./Subscribe.module.css"
import Button from "../../componants/button/Button"
import { FaCaretRight } from "react-icons/fa";
import img6 from "../../assets/img6.svg"

const Subscribe = () => {
  return (
    <div className={styles.subscribeBox}>
      <div className={styles.subscribeLeft}>
        <h2>Subscribe</h2>
        <p>Get risk-intelligent with our sector-wide resources. Subscribe to our #RiskFlash, global Enterprise Risk magazine, events, and more.</p>
        <div className={styles.inputBox}>
            <input type='text' placeholder='Enter Your Email' />
            <Button className={styles.subscribeBtn}>Subscribe Now <FaCaretRight /> </Button>
        </div>
      </div>
      <div className={styles.subscribeRight}>
        <img src={img6} />
      </div>
    </div>
  )
}

export default Subscribe
