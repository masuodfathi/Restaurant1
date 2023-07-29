import React from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem';
const Meals = [
    {
        id:"m1",
        name:"Barbecue Burger",
        description:"American, raw, meaty",
        price:12.91
    },
    {
        id:"m2",
        name:"Sushi",
        description:"Chinees, fish, Sea food",
        price:22.99
    },
    {
        id:"m3",
        name:"Schinitzel",
        description:"A German speciality",
        price:18.990
    },
    {
        id:"m4",
        name:"Ghorme Sabzi",
        description:"Iranian Teraditional Meal with rice",
        price:19.9
    }
]

const AvailableMeals = () => {
    const mealList = Meals.map((meal)=>{
        return(
            <MealItem {...meal} key={meal.id}/>
        )
    })
  return (
    <section>
        <Card>
        <ul>
            {mealList}
        </ul>
        </Card>
    </section>
  )
}

export default AvailableMeals