import React from 'react'
import styles from "./button.module.css"

const MyButton = ({children,...props}) => {
  return (
    <div>
        <button {...props} className={styles.myButton} >
            {children}
        </button>
    </div>
  )
}
export default MyButton
