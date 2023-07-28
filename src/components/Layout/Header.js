import React from "react";
import HeaderCartButton from './HeaderCartButton';
import mealBaner from '../../assets/banner2.jpg';

export const Header = ({toggleCart}) =>{
    return(
        <>
            <header className="header">
                <h1 className="primary-color">ReactMeals</h1>
                <HeaderCartButton toggleCart={toggleCart}/>
            </header>
            <div className="banner">
                <img className="header-img" src={mealBaner} alt="a table full of organic food"/>
            </div>
        </>
    );
}

export default Header;