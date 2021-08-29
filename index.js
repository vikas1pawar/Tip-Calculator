

function discount1(){
  billTotal=document.getElementsByClassName("form-control")[0].value;
  numberOfPeople=document.getElementsByClassName("form-control")[1].value;
  var discountValue=(billTotal*0.05)/numberOfPeople;
  var totalValue=(billTotal/numberOfPeople)+discountValue;
  document.getElementsByClassName("price1")[0].innerText ="$"+discountValue.toFixed(2);
  document.getElementsByClassName("price2")[0].innerText ="$"+(totalValue).toFixed(2);

}
function discount2(){
  billTotal=document.getElementsByClassName("form-control")[0].value;
  numberOfPeople=document.getElementsByClassName("form-control")[1].value;
  var discountValue=(billTotal*0.1)/numberOfPeople;
  var totalValue=(billTotal/numberOfPeople)+discountValue;
  document.getElementsByClassName("price1")[0].innerText ="$"+discountValue.toFixed(2);
  document.getElementsByClassName("price2")[0].innerText ="$"+(totalValue).toFixed(2);
}
function discount3(){
  billTotal=document.getElementsByClassName("form-control")[0].value;
  numberOfPeople=document.getElementsByClassName("form-control")[1].value;
  var discountValue=(billTotal*0.15)/numberOfPeople;
  var totalValue=(billTotal/numberOfPeople)+discountValue;
  document.getElementsByClassName("price1")[0].innerText ="$"+discountValue.toFixed(2);
  document.getElementsByClassName("price2")[0].innerText ="$"+(totalValue).toFixed(2);
}
function discount4(){
  billTotal=document.getElementsByClassName("form-control")[0].value;
  numberOfPeople=document.getElementsByClassName("form-control")[1].value;
  var discountValue=(billTotal*0.25)/numberOfPeople;
  var totalValue=(billTotal/numberOfPeople)+discountValue;
  document.getElementsByClassName("price1")[0].innerText ="$"+discountValue.toFixed(2);
  document.getElementsByClassName("price2")[0].innerText ="$"+(totalValue).toFixed(2);
}
function discount5(){
  billTotal=document.getElementsByClassName("form-control")[0].value;
  numberOfPeople=document.getElementsByClassName("form-control")[1].value;
  var discountValue=(billTotal*0.5)/numberOfPeople;
  var totalValue=(billTotal/numberOfPeople)+discountValue;
  document.getElementsByClassName("price1")[0].innerText ="$"+discountValue.toFixed(2);
  document.getElementsByClassName("price2")[0].innerText ="$"+(totalValue).toFixed(2);
}
function resetFunction(){
  document.getElementById("myForm").reset();
  document.getElementsByClassName("price1")[0].innerText ="$0.0";
  document.getElementsByClassName("price2")[0].innerText ="$0.0";
}




// function discount6(){
//   billTotal=document.getElementsByClassName("form-control")[0].value;
//   var discountValue=billTotal*0.05;
//   console.log(discountValue);
// }
