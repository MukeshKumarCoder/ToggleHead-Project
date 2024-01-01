import React from 'react'
import styles from "./Button.module.css"

const Button = ({children, className}) => {
  return (
    <div>
      <button className={className}>{children}</button>
    </div>
  )
}

export default Button
