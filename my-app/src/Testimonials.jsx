import image from './assets/OIP.webp'
function Testimonials() {
    return (
        <section className='all'>
            <p className='headline1'>Testimonials</p>
<section className="display">
            

            <Container/>
            <Container/>
            <Container/>
            <Container/>
            </section>
        </section>
       
     

        
    )
}

export default Testimonials
 function Container(){
    return (
        <section className='testcard'>
          <section className="profile">
            <img src={image}  className='image'alt='profile'></img>
            <p className='customer'>Salim</p>
          </section>
          <p className="comment">I liked the dishes so much !!!</p>
    </section>
    )
    
 }