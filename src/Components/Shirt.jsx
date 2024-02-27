import '../css/Shirt.css'
import BasketModel from '../Model/BasketModel';


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
      <div className="shirt"    onClick={()=>{props.action(props.ind)}} >
   
          
          <div className="image"><img src={props.label.image} /> <p>{props.ind}</p></div>
           <div className="shirt-info"> {/*<p>{props.label.design}</p> */}
          {/* <p>{props.label.itemcode}</p> */}
          <p>{props.label.formatPrice()}</p>
          {props.label.size.map((option, index) => {
         
         return <div className='size-options'>{option}</div>
          })}
  
        
          
          {/* <button onClick={() => props.action( [...props.cart, new BasketModel(props.label.design, props.label.size, props.label.itemcode, props.label.price, 1)]) }>Buy</button> */}
              </div>
  
         
          
      
      </div>
    );





    // return (
    //   <div className="main">
   
    //       <div>
    //       <div id="image"><img src={profile.picture.large} /><p> Age: {profile.dob.age}</p></div>
    //       <div id="profile"> <h2>{profile.name.first} {profile.name.last}{false  && (<div id="smily"></div>)}
    //           </h2><p> Location: {profile.location.city}, {profile.location.country}</p><p>{}</p>
    //           <button onClick={() => {props.action(  [...props.friends,  new Profile(profile.name.first+" "+ profile.name.last, 65, "image", "london")] )}}>Friend Request</button></div>
  
         
    //       </div>
      
    //   </div>
    // );



















    
 
      
    }
    
    export default Shirt;