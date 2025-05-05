import { NavLink, Link} from "react-router-dom";

import"./Header.css"
const Header = ({name}) => {
    return (
        <header>
            <div className="logo">
                <Link to="/">
                <h2>{name}</h2>
                </Link>
            </div>
            <nav>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Books</NavLink>
                    <NavLink to="/">Add new book</NavLink>
                    <NavLink to="/">About</NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;