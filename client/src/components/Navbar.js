import React from "react";
import logo from '../images/logo.png'

function Navbar(){
    return(
        <div className="navbar">
            <div className="logoParent">
            <img className="logo" src={logo} alt="ttt"/>
            </div>
            <div className="dashParent">
                <div className="dash"></div>
            </div>
            <div className="stories">STORIES</div>
            <div className="coursesParent">
                <button className="courses">Courses</button>
                </div>
            
        </div>
)
}

export default Navbar