import React from "react";
import { Link } from "react-router-dom";
import UndrawBooks from "../assets/Undraw_Books.svg"

const Landing = ()=>{
    return(
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1> Best library </h1>
                        <h2>Find you dream book wioth <span className="purple"> libray </span> </h2>
                        <Link to="#features">
                            <button className="btn">Browse books</button>
                        </Link>
                    </div>
                    <figure className="header__img--warapper">
                        <img src={UndrawBooks} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    )
}

export default Landing