import { createContext } from 'react'

type CandidateContextType = {
    candidate: string,
    changeCandidate: (newCandidate: string) => void
}

const contextObj: CandidateContextType = {
    candidate: 'biden',
    changeCandidate: (newCandidate) => {
        contextObj.candidate = newCandidate
    },
}
const CandidateContext = createContext(contextObj)

export default CandidateContext
