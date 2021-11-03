var express = require('express');
var router = express.Router();

let price = 0.00;



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/results', function(req, res) {
  console.log(req.body.description);
  console.log(req.body.agree);
  console.log(req.body.iceCream);
  console.log(req.body.iceCreamOther);
  res.render('index');
});
module.exports = router;
router.post('/order', function(req,res) {
  let body = req.body;
  let order = getOrder(body);
  res.render('order', {
    order: order,
    price: price
  });
})

function getOrder(formData){
  if (formData.order === "one"){
    price = 10.00;
    return giveOrder1(formData);
  } else if (formData.order === "two"){
    price = 2.00;
    return giveOrder2(formData);
  } else if (formData.order === "king"){
    price = 11.00;
    return giveOrder3(formData);
  } else {
    return giveOrder4();
  }
}

let toppingOrder = [];
function areThereToppings(formData){
  if(formData.free1 === checked){
    toppingOrder.push("pepperoni");
  }
  if(formData.free2 === checked){
    toppingOrder.push("pineapple");
  }
  if(formData.free3 === checked){
    toppingOrder.push("bacon");
  }
  if(formData.free4 === checked){
    toppingOrder.push("olives");
  }
  if(formData.free5 === checked){
    toppingOrder.push("garlic");
  }
  if(formData.topping1 != null){
    price += 1.00;
    toppingOrder.push(`${formData.topping1}`);
  }
  if(formData.topping2 != null){
    price += 0.50;
    toppingOrder.push(`${formData.topping2}`);
  }
  if(formData.toppings != null){
    price += 0.50;
    toppingOrder.push(`${formData.toppings}`);
  }
};
function reverseArray(array){
  let oppoArray = [];
  for(let i=(array.length);i--;i>0){
    let item = array.pop();
    oppoArray.push(item);
  }
  return oppoArray;
}
function getItem(array){
  let nextTopping = array.pop();
  return nextTopping;
}
function search(top){
  if(top.length > 0){
    return " with ";
  }else{
    return "";
  }
}
function giveOrder1(formData){
  // let toppingOrderCopy = toppingOrder;
  // let array = reverseArray(toppingOrderCopy);
  // let toppingText = ``;
  // let areThereToppings = search(array);
  // let firstTopping = array.pop();
  // for(let i = toppingOrder.length; i--; i > 1){
  //   let nextTopping = array.pop();
  //   toppingText += `, ${nextTopping}`;
  // }
  // return `One ${formData.pizza} pizza  ${areThereToppings}${toppingText}`;
  return toppingOrder;
  }

function giveOrder2(formData){
  return `One ${formData.drink}`;
}
function giveOrder3(formData){
  return `and one $formData.drink}`;
}
function giveOrder4(){
  return "Try Again";
}