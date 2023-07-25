import React from "react";
import HeaderCartButton from './HeaderCartButton';
import mealBaner from '../../assets/baner1.jpg';

export const Header = props =>{
    return(
        <>
            <header className="header">
                <h1 className="primary-color">ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className="banner">
                <img className="header-img" src={mealBaner} alt="a table full of organic food"/>
            </div>
        </>
    );
}

export default Header;