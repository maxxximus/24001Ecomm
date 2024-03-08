class Item {
    constructor(design, size, image, itemcode, price, itemname) {
      this.design = design;
      this.size = size;
      this.image = image;
      this.itemcode = itemcode;
      this.price = price
      this.itemname = itemname
    }

    formatPrice() {
      return `£${this.price}`
     }
  }
  
  export default Item;
  

