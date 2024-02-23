class Item {
    constructor(design, size, image, itemcode, price) {
      this.design = design;
      this.size = size;
      this.image = image;
      this.itemcode = itemcode;
      this.price = price
    }

    formatPrice() {
      return `£${this.price}`
     }
  }
  
  export default Item;
  

