import React from "react";
import './Faq.css'
import {Link} from "react-router-dom";
function FaqButton () {
    return (
        <nav className="faq_buttons">
        <Link to='/faq' className="faq_btn">FAQ</Link>
        <Link to='/list' className="faq_like">List</Link>
        </nav>
    )
}

export default FaqButton