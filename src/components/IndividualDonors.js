import React from 'react'
import {useContext, useState} from 'react';
import CandidateContext from "./CandidateContext"

function IndividualDonors(props){
    const {candidate} = useContext(CandidateContext);
    const committeeId = candidate === "biden" ? "C00703975" : "C00580100"
    const key = "3fliVTZJiWlXYaXNOrwNbstJg3oe57UU7shZ166B"
    const baseUrl = "https://api.open.fec.gov/v1/schedules/schedule_a/"
    const [donorData, setDonorData] = useState(null)
    const [loading, setLoading] = useState(false);

    function handleSubmit(e){
        e.preventDefault()
        setLoading(true);
       const {name, state} = e.target
       
       fetch(`${baseUrl}?api_key=${key}&committee_id=${committeeId}&contributor_name=${name.value}&two_year_transaction_period=2020&sort_hide_null=true&contributor_state=${state.value}&is_individual=true&contributor_type=individual&cycle=2020&per_page=10`)
       .then(res => res.json())
       .then(res => {
        console.log(res);
        const finalForm = res.results.map(obj => {
            return {
                    amount: obj.contribution_receipt_amount,
                    city:obj.contributor_city,
                    state: obj.contributor_state,
                    fName: obj.contributor_first_name,
                    lName: obj.contributor_last_name
                    }
        })
        setDonorData(finalForm)
        setLoading(false);
       })
       .catch(err => console.log(err))
    }
    
    const mappedResults = !donorData ? 
    <h1>{!loading ? "Enter data to serach for indivdual donors": "Loading..."}</h1>  
    : donorData.map(donor => (
        <div key={Math.random()* 1000}className="donor">
            <p>{`${donor.fName} ${donor.lName}`}</p>
            <p>{donor.city} , {donor.state}</p>
            <p>Amount: {donor.amount}</p>

        </div>
    ))
    return (
        <main className={`${candidate}-theme`}>
            <form name="form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name"></input>
                <label htmlFor="state">State: </label>
                <input type="option" name="state" id="state" required></input>
                <button type="submit">Submit</button>
            </form>
            <div className="individuals">
                {mappedResults}
            </div>
        </main>
    )
}

export default IndividualDonors