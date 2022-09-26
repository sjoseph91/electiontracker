import React from 'react';
import {useContext} from 'react';
import CandidateContext from "./CandidateContext"
import {Link} from "react-router-dom";

function Options(props){
    const context = useContext(CandidateContext);
    
    return (
        <main className={`${context.candidate}-theme`}>
            <h1>{context.candidate === "biden"? "Joseph R Biden" : "Donald J Trump"}</h1>
            <div className="options-container">
                <div className="options">
                    <Link to="/byState">Contributions by State</Link>
                </div>
                <div className="options">
                    <Link to="/largestDonors">Largest Donors</Link>
                </div>
                <div className="options">
                    <Link to="/individualDonors">Search Individual Donors</Link>
                </div>

            </div>

        </main>
    )

}

export default Options