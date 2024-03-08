import Basket from "./Basket"
import '../css/App.css'
import Shirt from "./Shirt";
import { Pagination } from "react-bootstrap";
import tshirt from '../tshirts.webp'




function Leftpanel(props){



let active = props.multipage;
let pagein = props.page1
let lengthdata = props.sizeDataSet
const pages = Math.ceil( lengthdata/ pagein)
console.log("wwwwwwwww", pages);

let items = [];
for (let number = 1 ; number <= pages; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}  onClick={() => {
      props.next(number);
    }}>
      {number}
    </Pagination.Item>,
  );
}






    return(
      < div className="nav-container">
 
        <img style={{opacity: "1", zIndex: "-1",  filter: 'contrast(25%)', position: "relative"}} src={tshirt} />
        <span class="type">
  <span>
    <span>BARBOUR</span>
    <span>SUPERDRY</span>
    <span>BOSS   </span>
  </span>
</span>
      <div className="nav-pagin"><Pagination>{items}</Pagination>
      
{/* <select onChange={(e) => {props.page(e.target.value)}} name="page" id="page" form="pageform">
<option value="">Items per page</option>

  <option value="5">5</option>
  <option value="10">10</option>
  <option value="20">20</option>
</select> */}
</div> 
        <div className="left-items">
        
        {props.slicedata.map((option, index) => {
          return (
            <Shirt
              label={option}
              key={option.itemcode}
              ind={index}
              action={props.callback}
            />
          
          );
        })}

     
      </div>


  
    
  </ div>
    )
  
  
  
  
  }

  export default Leftpanel