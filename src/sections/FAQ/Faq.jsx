import React, { useState } from "react";
import SingleQuestion from "../../componants/singleQuestion/SingleQuestion";
import questinData from "../../db.js";
import styles from "./Faq.module.css";

const Faq = () => {
  const [questins, setQuestions] = useState(questinData);
  return (
    <div className={styles.faqBox}>
      <h2>FAQ</h2>
      <div>
        {questins.map((question) => (
          <SingleQuestion key={question.id} {...question} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
