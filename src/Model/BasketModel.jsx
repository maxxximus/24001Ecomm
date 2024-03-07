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
