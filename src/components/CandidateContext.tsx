import { createContext } from 'react'

const contextObj = {
    candidate: 'biden',
    changeCandidate: (newCandidate: string) => {
        contextObj.candidate = newCandidate
    },
}
const CandidateContext = createContext(contextObj)

export default CandidateContext
