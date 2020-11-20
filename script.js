// Write your JavaScript code here!
window.addEventListener("load", function() {

   // validation to ensure user submits a value for each textbox along with correct value type
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.getElementById("pilotName");
      let copilotName = document.getElementById("copilotName");
      let fuelLevel = document.getElementById("fuelLevel");
      let cargoMass = document.getElementById("cargoMass");
      
      if (pilotName.value === "" || copilotName.value === "" || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("All fields are required.");
         event.preventDefault();
      }
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
