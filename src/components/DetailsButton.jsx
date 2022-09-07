import { Link } from "react-router-dom"

const DetailsButton = (props) => {


    return(
        <div className="detailsBtn">
            <Link key={props.id} to={`/beer_details/${props.id}`}><button>Details</button></Link>
        </div>
    )
}
export default DetailsButton