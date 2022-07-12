import React from "react";
import classes from './Drink.module.css';
import Ingredient from './Ingredient/Ingredient';


const drink = (props) => {
    const ingredients = [];
    for(const key in props.drink) {
        let ingredient = null;
        let measure = null
        let count = null;
        if(key.startsWith('strIngredient') && props.drink[key]) {
            ingredient = props.drink[key];
            count = key.substring(13);
        }
        if(count) {
            measure = props.drink['strMeasure' + count];
            ingredients.push({
                ingredient: ingredient,
                measure: measure
            })
        }

    }
    const ingredientsObjects = ingredients.map(ingredient => {
        return <Ingredient ingredient={ingredient} key={ingredient.ingredient + '-' + ingredient.measure}/>
    })
    return(
        <div className={classes.Drink}>
            <div className={classes.Image}>
                <img alt="text" src={props.drink.strDrinkThumb}/>
            </div>
            <div className={classes.Description}>
                <h4>{props.drink.strDrink}</h4>
                <span>{props.drink.strInstructions}</span>
                {ingredientsObjects}
            </div>
        </div>
    )
}

export default drink;