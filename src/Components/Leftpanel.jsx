
import "../css/App.css";
import Shirt from "./Shirt";
import { Pagination, Form } from "react-bootstrap";
import tshirt from "../tshirts.webp";

function Leftpanel(props) {
  // props page={callbackpage}
  //       shirts={shirts}
  //       sizeDataSet={lenDataSet}
  //       callback={callback}
  //       next={next}
  //       multipage={multipage}
  //       slicedata={slicedata}
  //       page1={paginationSize}/>

  let active = props.multipage;
  let pagein = props.page1;
  let lengthdata = props.sizeDataSet;

  const pages = Math.ceil(lengthdata / pagein);

  let items = [];
  for (let number = 1; number <= pages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          props.next(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  /**
   *  generates array of unique design/brand fields of recordset -used by sorting drop down
   *
   */

  let result = props.shirts.map((option, index) =>  option.design);

  let unique_values = [...new Set(result)];

  return (
    <div className="nav-container">
      <img
        style={{
          opacity: "1",
          zIndex: "-1",
          filter: "contrast(25%)",
          position: "relative",
        }}
        alt={"Mr Tee"}
        src={tshirt}
      />
      <span className="type">
        <span>
          <span>Welcome to Mr.Tee...</span>
          <span>BARBOUR, DIESEL</span>
          <span>SUPERDRY & BOSS</span>
        </span>
      </span>
      <div className="nav-pagin">
        <Pagination>{items}</Pagination>

        <Form.Select
          onChange={(e) => {
            props.setSorting(e.target.value);
          }}
          size="sm"
          style={{ width: "200px", borderRadius: "5px", height: "38px" }}
          aria-label="Please select a brand"
        >
          <option value={""}>All brands</option>
          {unique_values.map((el) => {
            return <option key={el} value={el}>{el}</option>;
          })}
        </Form.Select>
      </div>
      <div id="home" className="left-items">
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
    </div>
  );
}

export default Leftpanel;
