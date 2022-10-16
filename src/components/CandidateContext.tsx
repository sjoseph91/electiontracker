import { createContext } from 'react'

const contextObj = {
    candidate: 'biden',
    changeCandidate: (newCandidate) => {
        contextObj.candidate = newCandidate
    },
}
const CandidateContext = createContext(contextObj)

export default CandidateContext
