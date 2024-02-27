import '../css/Shirt.css'
import BasketModel from '../Model/BasketModel'
import gg from '../tshirt.png'


function Fullinfo(props) {


  


    return (




   
      <>
        {props.index > -1 ? // initial startup article is not rendered 
    //     <>
    //       <img className='full-image' src={props.label.image} /> <p>{props.index}</p>
    //       <div className="shirt-info"> <p>{props.label.design}</p>
    //       <p>{props.label.formatPrice()}</p>
    //       <button onClick={() => props.action( [...props.cart, new BasketModel(props.label.design, props.label.size, props.label.itemcode, props.label.price, 1, props.label.image)]) }>Add to cart</button>
    //         {/* <button onClick={() => props.back(-1) }>Back</button>   */}
  
         
          
      
    //   </div>
    // </>


<div class="container">
<div><img className='full-image' src={props.label.image} /></div>
<div className='full-cart'>
  <button onClick={() => props.action( new BasketModel(props.label.design, props.label.size, props.label.itemcode, props.label.price, 1, props.label.image)) }>Add to cart</button>

  <p className='full-price'>{props.label.formatPrice()}</p>
  <button onClick={() => props.actiontoggle(false)  }>   Open basket</button>
<p>{props.index}</p>
<p>{props.label.itemcode}</p>

  </div>
  </div>
      :   // welcome screen
      <div><h4>Welcome to Mr.Tee</h4><img style={{height:'500px'}}src={gg} /></div>
    }
      </>
    );
    
}

export default Fullinfo













