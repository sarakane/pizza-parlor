//Business Logic
function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.price = function() {
  const numberOfToppings = this.toppings.length;
  let price = numberOfToppings * 0.5;
  if (this.size === "small") {
    price = price + 14.15 ;
  } else if (this.size === "medium") {
    price = price + 16.75;
  } else if (this.size === "large") {
    price = price + 19.45;
  } 
  return price;
}


//UI Logic
$(document).ready(function(){
  $("#order-section").hide();
  $("#start-button").click(function(event){
    $("#welcome-section").hide();
    $("#order-section").css("display", "flex");
  });

  $("form#pizzaForm").submit(function(event){
    event.preventDefault();
    const pizzaSizeInput = $("input:radio[name=pizzaSize]:checked").val();
    const toppingsInput = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      const myTopping = $(this).val();
      toppingsInput.push(myTopping);
    });
    const pizza = new Pizza(toppingsInput, pizzaSizeInput);
    $("#add-to-cart").hide();
    $(".order").show();
    $(".order ul").empty();
    $(".order ul").append("<li>Pizza size: "+pizzaSizeInput+"</li>");
    for (const top of toppingsInput) {
      let returnTop = top.replace(/([a-z])([A-Z])/g, '$1 $2');
      returnTop = returnTop[0].toUpperCase() + returnTop.slice(1);
      $(".order ul").append("<li>Topping: "+returnTop+"</li>");
    }
    $("#total").text("$"+pizza.price());
  });

  $("#edit").click(function() {
    $("#add-to-cart").show();
    $(".order").hide();
  });
  $("#confirm").click(function() {
    $("#pizzaForm").trigger("reset");
    $("#order-section").hide();
    $("#confirmation").show();
  });
  $("#new-order").click(function() {
    $("#confirmation").hide();
    $("#welcome-section").show();
  });
});