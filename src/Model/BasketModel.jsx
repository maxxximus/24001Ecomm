
/**
 * Represents an item in basket - same itemcode plus same size is one item so adds to quantity
 * same itemcode plus differnt size is creates new item
 * @constructor
 * @param {string} design - The brand name
 * @param {array} size - array of  up to 5 sizes available ['S', 'M', 'L','XL', 'XXL']

 * @param {string} itemcode - string of numbers/letters for unique itemcode
 * @param {integer} price - price to 2 decimal paces
 * @param {string} quantity - quantity in basket 
 * @param {string} image - image url
 */
class BasketModel {
 
  constructor(design, size, itemcode, price, quantity, image) {
    this.design = design;
    this.size = size;
    this.quantity = quantity;
    this.itemcode = itemcode;
    this.price = price;
    this.image = image;

    
  }

  totalPrice() {
    return Number((this.price * this.quantity).toFixed(2))
  }


}

export default BasketModel;
