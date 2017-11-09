// const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart: function(car) {
    this.cart.push(car);
    this.total += car.price;
  },

  removeFromCart: function(id, price) {
    this.cart = this.cart.filter(e=>e.id!==id)
    this.total = this.total -= price
  },
  
  checkout: function() {
    this.cart = []
    this.total = 0
  }
};