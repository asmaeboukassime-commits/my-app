import dish from './assets/dish.png'
function Promotion(){
    return(
        <section className="hero1">
        <div className="headline">
          <Headline />
          <button>Reserve your table </button>
        </div>
  
        <img className="dish12" src={dish} alt="A dish" />
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
       
    );

}
export default Promotion