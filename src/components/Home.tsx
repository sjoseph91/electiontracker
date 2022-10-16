import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CandidateContext from './CandidateContext'
function Home(props) {
    const { changeCandidate } = useContext(CandidateContext)

    const handleClick = (person) => changeCandidate(person)

    return (
        <main>
            <h1> 2020 Presidential Election Financing Tracker </h1>
            <h2>The most expensive presidential race in history</h2>
            <h4>
                Click a candidate to explore their political contribution data
            </h4>
            <div className="images">
                <Link to="/options" onClick={() => handleClick('trump')}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/220px-Donald_Trump_official_portrait.jpg"
                        width="200px"
                        alt="trump"
                    ></img>
                </Link>
                <Link to="/options" onClick={() => handleClick('biden')}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Joe_Biden_official_portrait_2013_cropped.jpg/220px-Joe_Biden_official_portrait_2013_cropped.jpg"
                        width="200px"
                        alt="biden"
                    ></img>
                </Link>
            </div>
        </main>
    )
}

export default Home
