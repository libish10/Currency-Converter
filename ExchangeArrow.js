function ExchangeArrow() {
  alert("Exchanging");
  var to = document.getElementById("country2").value;

  var from = document.getElementById("country1").value;
  console.log(`From : ${from}`);
  console.log(`To : ${to}`);
  var temp;
  temp = from;
  from = to;
  to = temp;
  // document.getElementById("country2").value=from;
  alert(from);
  //document.getElementById("country1").value=to;
  alert(to);
  console.log(from, to);
  console.log(`From : ${from}`);
  console.log(`To : ${to}`);
  var country1Sel = "#country1 #" + from;
  var country2Sel = "#country2 #" + to;
  document.querySelector(country1Sel).selected = "selected";
  document.querySelector(country2Sel).selected = "selected";
}
