import React from "react";
import classes from './Ingredient.module.css'

const ingredient = (props) => {
    return(
        <li className={classes.Ingredient}>
            {props.ingredient.ingredient} - {props.ingredient.measure}
        </li>
    )
}

export default ingredient;