var express = require('express');
var router = express.Router();

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
  // console.log(req.body.order);
  // console.log(req.body.drink);
  // console.log(req.body.pizza);
  // console.log(req.body.free1);
  // console.log(req.body.free1);
  // console.log(req.body.free2);
  // console.log(req.body.free3);
  // console.log(req.body.free4);
  // console.log(req.body.free5);
  // console.log(req.body.topping1);
  // console.log(req.body.topping2);
  // console.log(req.body.toppings);
  let body = req.body;
  let order = getOrder(body);
  res.render('order', {
    order: order
  });
})

function getOrder(formData){
  var choice;
  if (formData.order === "one"){
    return giveOrder1(formData);
  } else if (formData.order === "two"){
    return giveOrder2(formData);
  } else if (formData.order === "king"){
    return giveOrder3(formData);
  } else {
    message = "try again";
    res.render('index');
  }
}
function giveOrder1(formData){
  return ``;
}
function giveOrder2(formData){
  return `One ${formData.drink}`;
}
function giveOrder3(formData){
  return '';
}