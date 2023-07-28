import React from 'react'
import Input from '../UI/Input'

const MealItemForm = ({id}) => {
    console.log('meal item form ' + id);
  return (
    <>
    <form>
        <Input 
        Input={
            {
                id:id,
                type:"number",
                min:'0',
                max:'5',
                step:'1',
                defaultValue:'0',
                label:"Amount"
            }
        }
        />
        <button type='button'>+ Add</button>
    </form>
    </>
  )
}

export default MealItemForm