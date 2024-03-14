import BasketModel from './Model/BasketModel'

const cartLocalStorage = JSON.parse(localStorage.getItem("basket") || "[]")

let resultcart =[]

function getFromLocalStorage() {
cartLocalStorage.map((el) => {
let x = new BasketModel(el.design, el.size, el.itemcode, el.price,el.quantity,el.image)
resultcart.push(x)

})}
getFromLocalStorage()
export {resultcart}