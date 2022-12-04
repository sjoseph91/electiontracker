import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <div className="link-button">
                <Link to="/">Home</Link>
            </div>
        </nav>
    )
}

export default Header
