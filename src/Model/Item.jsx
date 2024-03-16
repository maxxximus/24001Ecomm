/**
 * Represents a book.
 * @constructor
 * @param {string} design - The brand name
 * @param {array} size - array of  up to 5 sizes available ['S', 'M', 'L','XL', 'XXL']
 * @param {string} image - item url
 * @param {string} itemcode - string of numbers/letters for unique itemcode
 * @param {integer} price - price to 2 decimal paces
 * @param {string} itemname - unique item name
 * @param {string} deatils - details about item
 */
class Item {
    constructor(design, size, image, itemcode, price, itemname, details) {
      this.design = design;
      this.size = size;
      this.image = image;
      this.itemcode = itemcode;
      this.price = price
      this.itemname = itemname
      this.details = details
    }

    formatPrice() {
      return `£${this.price}`
     }
  }
  
  export default Item;
  

