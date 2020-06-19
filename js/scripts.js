function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.price = function() {
  const numberOfToppings = this.toppings.length;
  let price = numberOfToppings * 0.5;
  if (size === "small") {
    price = price + 14.15 ;
  } else if (size === "medium") {
    price = price + 16.75;
  } else if (size === "large") {
    price = price + 19.45;
  } 
  return price;
}