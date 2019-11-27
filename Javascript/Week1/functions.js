function vehicleType(color, code) {
    if (code === 1) {
      code = "car"
    } else {
      code = "motorbike"
    }
    console.log("a " + color + " " + code)
    }
  vehicleType("red", 2);
  
  
  
  
  function vehicle(colored, aged, which)  {
   
    if (aged < 2) {
      aged = "new"
    } else {
      aged = "used"
    } 
    console.log("a " + colored + " " + aged + " " + vehicles[which]);
  }
  
  let vehicles = ["motorbike", "caravan", "bike", "truck"];
  
  
  vehicle("red", "3", 3);
  