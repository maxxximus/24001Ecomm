const v = [
  {
    design: "Bristol",
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
];

function itemcode(code) {
  return function (element) {
    return element.itemcode === code;
  };
}

// const isLargeNumber = (element) => element.itemcode == "00000" ;
function updateQuantity(code1) {
  const zz = v.findIndex(itemcode(code1));
  v[zz].quantity += 1;
  console.log(v);
}
updateQuantity("00006")
updateQuantity("00006")