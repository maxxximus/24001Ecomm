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
    price: 22.64,
    image:
      "https://spikeleisurewear.co.uk/wp-content/uploads/2020/08/SL211.jpg",
  },
  {
    design: "london",
    size: ["S", "M", "L"],
    quantity: 1,
    itemcode: "00001",
    price: 22.67,
    image:
      "https://spikeleisurewear.co.uk/wp-content/uploads/2020/08/SL211.jpg",
  },

  {
    design: "BOSS",
    size: ["S", "M", "L"],
    quantity: 1,
    itemcode: "00010",
    price: 2.67,
    image:
      "https://spikeleisurewear.co.uk/wp-content/uploads/2020/08/SL211.jpg",
  },
  {
    design: "Superdry",
    size: ["S", "M", "L"],
    quantity: 1,
    itemcode: "000012",
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

// function splitToNChunks(array, n) {
//   let result = [];
//   for (let i = n; i > 0; i--) {
//       result.push(array.splice(0, Math.ceil(array.length / i)));
//   }
//   return result;
// }

// const removeFromCart = (array, itemcode) =>{

// const rr =  array.filter((el) => {return el.itemcode !== itemcode})
// console.log("remove", rr);

// }
// // const cc = splitToNChunks(v, 4)
// // console.log(cc[2])

//  removeFromCart(v, "00004")

// const randomDisplay = (array) =>{
//   let result = []

//   for (let i = 3; i > 0; i--) {
//     var item = Math.floor(Math.random()*array.length)
//    result.push(array[item])

//   }
//   return result
//   }

//  console.log(randomDisplay(v));

// function filterarray(el){
//   let result = []
//  result.push(el.itemcode)
//  return result

//  }
// console.log(v.map((el)=> {
// let t = el.design

// }));

// function  sortArray(array, term){
//   result = [];
//   array.map((option, index) => {
//     if (option.design === term) {
//       result.push(option);
//     }
  
//   });

//   return result;
// };

// // const letters = new Set(result)

// // console.log(letters);

// // let unique_values = [...new Set(result)];
// console.log(sortArray(v, "manchester"));


function itemcode(code) {
  return function (element) {
    return element.itemcode === code;
  };
}

const findItem = (a) => {
  const zz = v.findIndex(itemcode(a));

  if (zz !== -1) {
   return v[zz]

  }else{
    console.log("not");
  }
};

console.log(findItem("00010"));
