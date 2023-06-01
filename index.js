// .........Problem:1 radianToDegree............

function radianToDegree(radian) {

let Degree = radian * (180 / Math.PI);

return Degree.toFixed(2);
}

let radianValue = 10;
let degreeValue = radianToDegree(radianValue);
// console.log(degreeValue);



//.........Problem:2 isJavaScriptFile..........


function isJavaScriptFile(filename) {
    let extension = filename.split(".").pop();
    return extension === "js";
}

let filename1 = "index.js";
let filename2 = "style.css";

// console.log(isJavaScriptFile(filename1));
// console.log(isJavaScriptFile(filename2));



//.............Problem 3: oilPrice .............


function oilPrice(dieselLiters, petrolLiters, octaneLiters) {
    let dieselPrice = dieselLiters * 114;
    let petrolPrice = petrolLiters * 130;
    let octanePrice = octaneLiters * 135;
  
    let totalPrice = dieselPrice + petrolPrice + octanePrice;

    return totalPrice;
}

let dieselLiters = 30;
let petrolLiters = 20;
let octaneLiters = 10;

totalCost = oilPrice(dieselLiters, petrolLiters, octaneLiters);

// console.log(totalCost);



//........Problem 4: publicBusFare.....


function publicBusFare(passengerCount) {
    let busCapacity = 50;
    let microbusCapacity = 11;
    let ticketPrice = 250;
  
    let busCount = Math.floor(passengerCount / busCapacity);
    let remainingPassengers = passengerCount % busCapacity;
    let microbusCount = Math.ceil(remainingPassengers / microbusCapacity);
    let extraPassengers = remainingPassengers % microbusCapacity;
  
    let totalFare = (busCount * busCapacity + microbusCount * microbusCapacity + extraPassengers) * ticketPrice;
    return totalFare;
  }
  
  let passengerCount = 235;
  let fare = publicBusFare(passengerCount);
  // console.log(fare);
  

  //.............Problem 5: isBestFriend...........

  function isBestFriend(abul) {
    if (abul.bestFriend === true) {
      return true;
    } else {
      return false;
    }
  }
  
  let abul = {
    bestFriend: true
  };
  
  let babul = {
    bestFriend: false
  };
  
 // console.log(isBestFriend(abul)); // true
// console.log(isBestFriend(babul)); // false
  

  

