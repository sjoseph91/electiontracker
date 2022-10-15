import React from 'react'
import {useContext, useEffect, useState} from 'react';
import CandidateContext from "./CandidateContext"
import USAMap from "react-usa-map";


function ByState(props){
    
    const {candidate} = useContext(CandidateContext);
    const candidateId = candidate === "biden" ? "P80000722" : "P80001571"
    const key = "3fliVTZJiWlXYaXNOrwNbstJg3oe57UU7shZ166B"
    const baseUrl = "https://api.open.fec.gov/v1/presidential/contributions/by_state/"

    
    const [selectedState, setSelectedState] = useState(null);
    const [stateData, setStateData] = useState(null)
    const [total, setTotal] = useState(null)

    const mapHandler = (e) =>{
        setSelectedState(e.target.dataset.name)
        let targetObj = stateData.filter(obj => obj.contribution_state ===e.target.dataset.name)
        if(targetObj[0]){
            setTotal(targetObj[0].contribution_receipt_amount)
        }
        else{
            setTotal(null)
        }
        


        
    }
    const formatter = new Intl.NumberFormat('en-US', {style:"currency", currency: "USD"})

    useEffect(() => {
        fetch(baseUrl + "?" + "api_key=" + key + "&candidate_id=" + candidateId + "&per_page=51" )
        .then(res =>res.json())
        .then(res => {
            setStateData(res.results)
            
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <main className={`${candidate}-theme`}>
            <h2>Total spent in {selectedState} : {formatter.format(total)} </h2>
            <USAMap 
              onClick={mapHandler}
              defaultFill="rgb(129,129,130)"
             />
        </main>
    )
}

export default ByState