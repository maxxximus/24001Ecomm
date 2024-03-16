import BasketModel from './Model/BasketModel'

const cartLocalStorage = JSON.parse(localStorage.getItem("basket") || "[]")


  /**
   *  if local storage has items map over array and push to new array using 
   * Basketmodel
   *
   */


const resultcart = cartLocalStorage
            .map((el) => new BasketModel(el.design, el.size, el.itemcode, el.price,el.quantity,el.image));

export {resultcart}