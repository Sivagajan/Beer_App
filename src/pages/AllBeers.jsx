import { useEffect, useState } from "react"
import Nav from "../components/Nav"
import BeerContainer from '../components/BeerContainer'

const AllBeers =()=>{

    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => res.json())
            .then(beers => setProducts(beers))
    }, [])

    console.log(products)

    return(
        <section>
            <h1>All Beers</h1>
            
            {products.map((item) =>{

                console.log(item._id)
                
                return <BeerContainer key={item._id} id={item._id} image={item.image_url} name={item.name} slogan={item.tagline} producer={item.contributed_by} />
            })}
            
        
        <Nav />
        </section>
    )
}
export default AllBeers