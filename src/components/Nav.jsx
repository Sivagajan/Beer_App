import { Link } from "react-router-dom"
const Nav = () => {

    return(
        <nav className="navBar">
            <div>
                <Link to='/'> <img src="../images/Logo.png" alt="beer_icon" /></Link>
            </div>
        </nav>
    )

}
export default Nav