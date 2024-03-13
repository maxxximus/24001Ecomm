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
  

