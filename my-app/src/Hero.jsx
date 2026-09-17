import { Link } from 'react-router-dom'
import dish from './assets/dish.png'

function Hero(){
    return(
        <section className="hero">
        <div className="headline">
          <Headline />
          <Link to="/booking">
            <button>Reserve your table </button>
          </Link>
        </div>
  
        <img className="dish" src={dish} alt="A dish" />
      </section>
       

    );

}


function Headline() {
    return (
        <>
        <h1>Little Lemon</h1>
        <div className='p1'>
         <p>Chicago</p>
        </div>
        <p>Fresh Mediterranean flavors, delicious homemade dishes, and a warm atmosphere. Join us at Little Lemon for a memorable dining experience made with fresh ingredients and a touch of tradition.
            </p>
    
        </>
    )       
}

export default Hero
