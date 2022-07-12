import React from "react";
import Drink from "./Drink/Drink";
import classes from './Drinks.module.css'

const drinks = (props) => {
    const drinks = props.drinks.map(drink => {
        return(
            <Drink 
                key={drink.idDrink}
                drink={drink}
            />
        )
    })

    return(
        <ul className={classes.Drinks}>
            {drinks}
        </ul>
    )
}

export default drinks;