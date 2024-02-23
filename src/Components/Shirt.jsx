import '../css/Shirt.css'
function Shirt(props) {

    // parent - App.js
    
    // class Item {
    //   constructor(design, size, image, itemcode, price) {
    //     this.design = design;
    //     this.size = size;
    //     this.image = image;
    //     this.itemcode = itemcode;
    //     this.price = price
    //   }
    // }
    
    // export default Item;
    
  
  


    return (
      <div className="main">
   
          
          <div className="image"><img src={props.label.image} /> <p> Sizes: {props.ind}</p></div>
          <div className="profile"> <h3>{props.label.design}</h3>
          <p className='price'>{props.format}</p>
             
              <button onClick={() => props.action( [...props.cart, props.label]) }>Buy</button></div>
  
         
          
      
      </div>
    );





    
 
      
    }
    
    export default Shirt;