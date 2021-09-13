function Converter() {
  alert("Conversion start");
  var amount = document.getElementById("amount").value;
  console.log(`Enter the amount :  ${amount}`);
  var transactionCost;
  var from = document.getElementById("country1").value;
  console.log(`from : ${from}`);
  var to = document.getElementById("country2").value;
  console.log(`to : ${to}`);

  if (from == to) {
    console.log("The Conversion is not possible");
    document.getElementById("result").innerHTML =
      "The Conversion is not possible";
  } else {
    if (from == "INR") {
      console.log("The Conversion is possible");
      if (to == "USD") {
        transactionCost = amount * 0.014;
      } else if (to == "GBP") {
        transactionCost = amount * 0.1;
      } else if (to == "LKR") {
        transactionCost = amount * 2.74;
      } else if (to == "EUR") {
        transactionCost = amount * 0.012;
      }
    } else if (from == "USD") {
      if (to == "INR") {
        transactionCost = amount / 0.014;
      } else if (to == "LKR") {
        transactionCost = amount * 200.02;
      } else if (to == "GBP") {
        transactionCost = amount * 0.73;
      } else if (to == "EUR") {
        transactionCost = amount * 0.85;
      }
    } else if (from == "GBP") {
      if (to == "INR") {
        transactionCost = amount * 100.48;
      } else if (to == "EUR") {
        transactionCost = amount * 1.17;
      } else if (to == "LKR") {
        transactionCost = amount * 275.2;
      } else if (to == "USD") {
        transactionCost = amount * 1.38;
      }
    } else if (from == "LKR") {
      if (to == "INR") {
        transactionCost = amount * 0.37;
      } else if (to == "EUR") {
        transactionCost = amount * 0.0042;
      } else if (to == "GBP") {
        transactionCost = amount * 0.0036;
      } else if (to == "USD") {
        transactionCost = amount * 0.005;
      }
    } else if (from == "EUR") {
      if (to == "INR") {
        transactionCost = amount * 86.27;
      } else if (to == "GBP") {
        transactionCost = amount * 0.86;
      } else if (to == "LKR") {
        transactionCost = amount * 236.21;
      } else if (to == "USD") {
        transactionCost = amount * 1.18;
      }
    }

    //   if((from=="INR") && (to=="USD")) {
    //     transactionCost=amount*0.014;
    //   }
    //   else if((from=="USD") &&(to=="INR") ) {
    //     transactionCost=amount/0.014;
    //   }
    //   else {
    //     document.getElementById("result").innerHTML="The Conversion is not possible"
    //   }
    document.getElementById(
      "result"
    ).innerHTML = `${amount} ${from} = ${transactionCost} ${to}`;
    console.log(`${amount} ${from} = ${transactionCost} ${to}`);
  }
  return false;
}
