import React, {useState} from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/Logo.png";
import { FaSearch, FaAngleDown, FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../../componants/button/Button";

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);

  function handleMenu() {
    setMenuBar(!menuBar);
  }

  return (
    <>
      <nav>
        <div className={styles.logo}>
          <img src={logo} alt={logo} />
        </div>
        <div className={menuBar ? styles.navListfterClick : styles.nav_list}>
          <ul>
            <li onClick={()=> setMenuBar(false)}>
              Qualifications
              <FaAngleDown />
            </li>
            <li onClick={()=> setMenuBar(false)}>
              Organizations
              <FaAngleDown />
            </li>
            <li onClick={()=> setMenuBar(false)}>
              Research & Analysis
              <FaAngleDown />
            </li>
            <li onClick={()=> setMenuBar(false)}>
              Lorem ipsum
              <FaAngleDown />
            </li>
            <li onClick={()=> setMenuBar(false)}>
              <FaSearch />
            </li>
            <Button className={styles.enrolmentbtn}>Enrolment</Button>        
          </ul>       
        </div> 
          {menuBar ? (
            <button className={styles.hamburgur} onClick={handleMenu}>
              <FaTimes />
            </button>
          ) : (
            <button className={styles.hamburgur} onClick={handleMenu}>
              <RxHamburgerMenu />
            </button>
          )}
      </nav>
    </>
  );
};

export default Navbar;
