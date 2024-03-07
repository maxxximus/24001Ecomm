const v = [
  {
    design: "manchester",
    size: ["S", "M", "L"],
    quantity: 1,
    itemcode: "00006",
    price: 22.67,
    image:
      "https://spikeleisurewear.co.uk/wp-content/uploads/2020/08/SL211.jpg",
  },
  {
    design: "Bristol",
    size: ["S", "M", "L"],
    quantity: 1,
    itemcode: "00004",
    price: 22.67,
    image:
      "https://spikeleisurewear.co.uk/wp-content/uploads/2020/08/SL211.jpg",
  },

  {
    design: "london",
    size: ["S", "M", "L"],
    quantity: 1,
    itemcode: "00008",
    price: 22.67,
    image:
      "https://spikeleisurewear.co.uk/wp-content/uploads/2020/08/SL211.jpg",
  },
  {
    design: "london",
    size: ["S", "M", "L"],
    quantity: 1,
    itemcode: "00000",
    price: 22.67,
    image:
      "https://spikeleisurewear.co.uk/wp-content/uploads/2020/08/SL211.jpg",
  },
];

// function itemcode(code) {
//   return function (element) {
//     return element.itemcode === code;
//   };
// }

// // const isLargeNumber = (element) => element.itemcode == "00000" ;
// function updateQuantity(code1) {
//   const zz = v.findIndex(itemcode(code1));
//   v[zz].quantity += 1;
//   console.log(v);
// }
// updateQuantity("00006")
// updateQuantity("00006")

  
// Array of objects
 

// const groupedObjects = v.reduce((result, obj, index) => {
//   (result[obj.design] = result[obj.design] || []).push(obj);
//   return result;
// }, {});
 
// // Output
// console.log(groupedObjects.london);

function splitToNChunks(array, n) {
  let result = [];
  for (let i = n; i > 0; i--) {
      result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}

const cc = splitToNChunks(v, 4)
console.log(cc[2])