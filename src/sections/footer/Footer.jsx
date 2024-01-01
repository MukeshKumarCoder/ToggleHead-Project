import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaQuora,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={styles.footerBox}>
      <div className={styles.box}>
        <h2>Contact Us</h2>
        <p>Address: Siwan Bihar</p>
        <a className={styles.contact} href="mailto:mg328790@gmail.com">
         Email: mg328790@gmail.com
        </a>
        <a className={styles.contact} href="tel:+91 8292196144">
         Call: +91 8292196144
        </a>
      </div>
      <div className={styles.box}>
        <h2>Follow Us</h2>
        <div className={styles.socialMedia}>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
          <a href="#">
            <FaQuora />
          </a>
        </div>
      </div>
      <div className={styles.box}>
        <h2>Head Office</h2>
        <div className={styles.location}>
        <FaLocationDot />
        LoremText can generate
        </div>
        <div className={styles.location}>
        <FaLocationDot />
        LoremText can generate
        </div>
        <div className={styles.location}>
        <FaLocationDot />
        LoremText can generate
        </div>
      </div>
    </div>
  );
};

export default Footer;
