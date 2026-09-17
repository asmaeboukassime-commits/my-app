import dish from './assets/dish.png'
function Specials() {
    return (
        <section className="layout">

         <section className="specials">
            
            <p className="p2">Specials</p>  
            <button className="button2">Online menu</button>
         </section>

         <section className="cards">
            <Card/>
            <Card/>
            <Card/>


         </section>
        </section>

    )
}
export default Specials

function Card () {
    return(
        <section className='card'>
        <img  className="dish2" src={dish} alt='dish'></img>
    
        <section className="dishname">
            <p>Pizza</p>
            <p className='price'>23.98$</p>

        </section>

        <section className='descreption'>
            <p>Crispy golden crust topped with rich tomato sauce, melted mozzarella, and fresh herbs. A delicious classic baked to perfection.
            </p>
            <button className='button3'>Order Now</button>
        </section>
    
        </section>
    )
}

