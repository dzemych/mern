import React from 'react'
import ReactDOM from 'react-dom'
import classes from './ErrorPop.module.sass'


const ErrorPop = (props) => {

    const confirmHandler = e => {
       e.preventDefault()
       props.onConfirm()
    }

    const errorEl =
       <div className={classes.container}>
         <div className={classes.wrapper}>
            <h2 className={classes.title}>Error!</h2>
            <span className={classes.text}>
               {props.error.message}
            </span>
            <button
               className={classes.btn}
               onClick={confirmHandler}
            >
               Ok
            </button>
         </div>
       </div>

    return(
       ReactDOM.createPortal(errorEl, document.getElementById('root'))
    )
}

export default ErrorPop