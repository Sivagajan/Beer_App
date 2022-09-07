
import BackButton from "../components/BackButton"
import Nav from "../components/Nav"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

const BeerDetails = (props) => {

    const params = useParams()
    const [beer, setBeer] = useState({})

    useEffect(() =>{
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
            .then(res => res.json())
            .then(beers => setBeer(beers))
    },[])

    console.log(params.beerId)

    return(
        <section>

        <p>BEER Details</p>

        <img src={beer.image_url} alt="" />

        {params.beerId != 'random'? <BackButton id={props.id}/>:null} {/* der button wird nicht mehr im random angezeigt */}

        <Nav />
        </section>
    )
}
export default BeerDetails