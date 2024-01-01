import React from "react";
import styles from "./NumberCard.module.css";
import NumberCount from "number-counter";

const NumberCard = () => {
  return (
    <div className={styles.numberCardBox}>
      <div className={styles.numberCard}>
        <h3>Lorem ipsum</h3>
        <h2>
          <NumberCount end={123} start={90} delay={2} postFix="+" />
        </h2>
        <h3>Lorem ipsum</h3>
        <p>
          LoremText can generate <br /> both random or fixed lorem ipsum text
          using sublime text 2 as a plugin. More than 1000 plugins
        </p>
      </div>
      <div className={styles.numberCard}>
        <h3>Lorem ipsum</h3>
        <h2>
          <NumberCount end={12} start={0} delay={1} postFix="+" />
        </h2>
        <h3>Lorem ipsum</h3>
        <p>
          LoremText can generate <br /> both random or fixed lorem ipsum text
          using sublime text 2 as a plugin. More than 1000 plugins
        </p>
      </div>
      <div className={styles.numberCard}>
        <h3>Lorem ipsum</h3>
        <h2>
          <NumberCount end={12} start={0} delay={1} postFix="+" />
        </h2>
        <h3>Lorem ipsum</h3>
        <p>
          LoremText can generate <br /> both random or fixed lorem ipsum text
          using sublime text 2 as a plugin. More than 1000 plugins
        </p>
      </div>
      <div className={styles.numberCard}>
        <h3>Lorem ipsum</h3>
        <h2>
          <NumberCount end={123} start={90} delay={2} postFix="+" />
        </h2>
        <h3>Lorem ipsum</h3>
        <p>
          LoremText can generate <br /> both random or fixed lorem ipsum text
          using sublime text 2 as a plugin. More than 1000 plugins
        </p>
      </div>
    </div>
  );
};

export default NumberCard;
