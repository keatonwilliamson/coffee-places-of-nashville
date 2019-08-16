
  var coffeeArray = ["The Jam","The Well","Red Bicycle","Crema","Frothy Monkey","8th &amp; Roast","Bongo Java","Flatrock","Fido","Steadfast Coffee","Dose Coffee","Sam &amp; Zoes","Slow Hand Coffee","The Horn"];
  
  function pushCoffeePlaces()
  {
      var inputText = document.getElementById('inputText').value;
      
      coffeeArray.push(inputText);
      
      var coffeeList = "";
      
      for(i = 0; i < coffeeArray.length; i++)
      {
        coffeeList = coffeeList + '<section class="shop">' + coffeeArray[i] + '</section>' + "<br/>";
      }
      

      if ((coffeeArray.length % 3) === 1) {
        document.getElementById('output-coffee-places').innerHTML = coffeeList + '<section id="fillOne" class="shop">' + "fill1" + '</section>' + "<br/>" + '<section id="fillTwo"class="shop">' + "fill2" + '</section>' + "<br/>";
        }
      else if((coffeeArray.length % 3) === 2) {
        document.getElementById('output-coffee-places').innerHTML = coffeeList + '<section id="fillThree"class="shop">' + "fill3" + '</section>' + "<br/>";
        }
      else if((coffeeArray.length % 3) === 0) {
            document.getElementById('output-coffee-places').innerHTML = coffeeList;
        }
     

      // display array data
      document.getElementById('remainderCounter').innerHTML = "Remainder: " + coffeeArray.length % 3;
  }
