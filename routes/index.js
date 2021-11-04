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
router.post('/order', function(req,res) {
  price = 0.00;
  let body = req.body;
  let order = getOrder(body);
  res.render('order', {
    order: order,
    price: price
  });
})
module.exports = router;

function getOrder(formData){
  if (formData.order === "one"){
    price += 10.00;
    return giveOrder1(formData);
  } else if (formData.order === "two"){
    price += 2.00;
    return giveOrder2(formData);
  } else if (formData.order === "king"){
    price += 11.00;
    return giveOrder3(formData);
  } else {
    return giveOrder4();
  }
}

function areThereToppings(formData){
  let toppingOrder = [];
  if(formData.free1 === "checked"){
    toppingOrder.push('pepperoni');
  }
  if(formData.free2 === "checked"){
    toppingOrder.push('pineapple');
  }
  if(formData.free3 === "checked"){
    toppingOrder.push('bacon');
  }
  if(formData.free4 === "checked"){
    toppingOrder.push("olives");
  }
  if(formData.free5 === "checked"){
    toppingOrder.push("garlic");
  }
  if(formData.topping1 != ``){
    price += 1.00;
    toppingOrder.push(`${formData.topping1}`);
  }
  if(formData.topping2 != ``){
    price += 0.50;
    toppingOrder.push(`${formData.topping2}`);
  }
  if(formData.toppings != ``){
    price += 0.50;
    toppingOrder.push(`${formData.toppings}`);
  }
  return toppingOrder;
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
function addText(array){
  let text = ``;
  for(let i = array.length; i--; i > 1){
    let nextTopping = array.pop();
    let anyMore;
    if(nextTopping != null){
      text += `, ${nextTopping}`;
    }
  }
  return text;
};
function giveOrder1(formData){
  let toppingOrder = areThereToppings(formData);
  let toppingOrderCopy = toppingOrder;
  let array = reverseArray(toppingOrderCopy);
   let toppingText = ``;
   let firstTopping = array.pop();
   let anyToppings;
   if(firstTopping != null){
     anyToppings = true;
   }else{
     anyToppings = false
   }
   let text = addText(array);
   if(anyToppings === true){
     toppingText += `with ${firstTopping}${text}`;
   }


  return `One ${formData.pizza} pizza ${toppingText}`;
}
// ${areThereToppings}${toppingText}`
function giveOrder2(formData){
  return `One ${formData.drink}`;
}
function giveOrder3(formData){
  let pizza = giveOrder1(formData);
  return `${pizza} and one ${formData.drink}`;
}
function giveOrder4(){
  return "Try Again";
}