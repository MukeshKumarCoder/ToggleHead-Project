import React, { useState } from 'react'
import styles from "./SingleQuestion.module.css"
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const SingleQuestion = ({question, answer}) => {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div className={styles.questionBox}>
      <div className={styles.qBox}>
        <div className={styles.answerBox}>
        <h3>{question}</h3>
        <button className={styles.btn} onClick={()=> setShowAnswer(!showAnswer)}>
          {
            showAnswer ? <FaMinusCircle/> : <FaPlusCircle/>
          }
        </button>
        </div>
      {
        showAnswer && <p className={styles.ans}>{answer}</p>
      }
      </div>
    </div>
  )
}

export default SingleQuestion
