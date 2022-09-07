import DetailsButton from '../components/DetailsButton'

const BeerContainer =  (props) => {
    console.log('BeerContainer')
    
    console.log(props.id)

    let producer = props.producer

    producer = producer.slice(0,producer.search('<'))
    

    return(
        
        <>
        <article className="beerArticle">
            <div className='containerImage'>
                <img src={props.image} alt="" />
            </div>

            <div className='containerDescription'>
                <p className="beerName">{props.name}</p>
                <p className="beerSlogan">{props.slogan}</p>
                <p className="producer">Created by :{producer}</p>

                < DetailsButton id={props.id}/>
            </div>
        </article>
        </>
    )
}
export default BeerContainer