import { NavLink, useNavigate } from "react-router-dom";

import image from '../../assets/images/overtime_image1.jpg';

export default function MainNavigation() {

    const navigate = useNavigate();

    return (
        <div className="main-navigation">
            <div className="main-navigation-left">
                <img src={image} alt="logo" onClick={() => navigate("/")} className="nav-logo" />
            </div>

            <div className="main-navigation-right">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link link-active" : "nav-link"}>Home</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link link-active" : "nav-link"}>Contact</NavLink>
            </div>
        </div>
    );
}