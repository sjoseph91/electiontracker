import React from 'react'

const contextObj = {
    candidate: 'biden',
    changeCandidate: (newCandidate) => {
        contextObj.candidate = newCandidate
    },
}
const CandidateContext = React.createContext(contextObj)

export default CandidateContext
