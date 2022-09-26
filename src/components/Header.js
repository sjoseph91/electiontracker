import React from 'react';
import {Link} from "react-router-dom";

function Header(props){
    return (
        <nav>
            <div className="link-button">
                <Link to="/">Home</Link>
            </div>
        </nav>
    )
}

export default Header;