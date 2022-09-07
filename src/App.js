
import { Link } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">

      <section className='homeSection'>

        <article className='homeArticle'>
          <img src="./images/allBeers.png" alt="" />
          <Link to='/all_beers'>All Beers</Link>
        </article>
        
        <article className='homeDescription'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis.</p>
        </article>
      
      </section>

      <section className='homeSection'>

        <article className='homeArticle'>
            <img src="./images/allBeers.png" alt="" />
            <Link to='/beer_details/random'>Random Beer</Link>
        </article>
          
        <article className='homeDescription'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis.</p>
        </article>

      </section>
    </div>
  )
}

export default App;
