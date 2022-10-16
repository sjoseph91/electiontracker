import React from 'react'
import { useContext, useEffect } from 'react'
import CandidateContext from './CandidateContext'

function LargestDonors(props) {
    const { candidate } = useContext(CandidateContext)
    const committeeId = candidate === 'biden' ? 'C00703975' : 'C00580100'
    const key = '3fliVTZJiWlXYaXNOrwNbstJg3oe57UU7shZ166B'
    const baseUrl = 'https://api.open.fec.gov/v1/schedules/schedule_a/'
    const [donorData, setDonorData] = React.useState(null)

    useEffect(() => {
        fetch(
            `${baseUrl}?api_key=${key}&committee_id=${committeeId}&two_year_transaction_period=2020&sort=-contribution_receipt_amount&sort_hide_null=true&is_individual=true&contributor_type=individual&cycle=2020&per_page=10`
        )
            .then((res) => res.json())
            .then((res) => {
                const finalForm = res.results.map((obj) => {
                    return {
                        amount: obj.contribution_receipt_amount,
                        city: obj.contributor_city,
                        state: obj.contributor_state,
                        fName: obj.contributor_first_name,
                        lName: obj.contributor_last_name,
                    }
                })
                setDonorData(finalForm)
            })
            .catch((err) => console.log(err))
    }, [])

    const mappedResults = !donorData
        ? 'loading'
        : donorData.map((donor) => (
              <div key={Math.random() * 1000} className="donor">
                  <p>{`${donor.fName} ${donor.lName}`}</p>
                  <p>
                      {donor.city} , {donor.state}
                  </p>
                  <p>Amount: {donor.amount}</p>
              </div>
          ))
    return (
        <main className={`${candidate}-theme`}>
            <h3>
                Below are the largest invididual single donations by individuals
                for 2020.(multiple donations by the same individual were not
                counted)
            </h3>
            {mappedResults}
        </main>
    )
}

export default LargestDonors
