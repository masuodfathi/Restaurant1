import React from 'react'
import MealItemForm from './MealItemForm';

const MealItem = ({id,name,description,price}) => {
    console.log('meal item '+ id)
    const priceformat = `$${price.toFixed(2)}`;
    return (
    <>
    <li className='meal-item ' key={id}>
        <section>
            <h3>{name}</h3>
            <p className='description'>{description}</p>
            <p className='price primary-color'>{priceformat}</p>
        </section>
        <section>
            <MealItemForm id={id}/>
        </section>
    </li>
    </>
  )
}

export default MealItem