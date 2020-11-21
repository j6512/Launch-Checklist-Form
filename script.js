window.addEventListener("load", function() {
   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
      const pilotName = document.querySelector("input[name=pilotName]");
      const copilotName = document.querySelector("input[name=copilotName]");
      const fuelLevel = document.querySelector("input[name=fuelLevel]");
      const cargoMass = document.querySelector("input[name=cargoMass]");
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      
      // sets faultyItem div to be visible after initial submit
      faultyItems.style.visibility = "visible";

      // checks if there are values inputed into the text box
      if (!(pilotName.value) || !(copilotName.value) || !(fuelLevel.value) || !(cargoMass.value)) {
         alert("All fields are required.");
            event.preventDefault();
      }

      // checks if names are strings
      if (!(isNaN(pilotName.value)) || !(isNaN(copilotName.value))) {
         alert("Please enter a string value for Pilot/Copilot Names.");
         event.preventDefault();
      } else {
         // correctly capitalizes the co/pilot's names
         pilotStatus.innerHTML = `Pilot ${pilotName.value.charAt(0).toUpperCase() + pilotName.value.toLowerCase().slice(1)} is ready.`;
         copilotStatus.innerHTML = `Copilot ${copilotName.value.charAt(0).toUpperCase() + copilotName.value.toLowerCase().slice(1)} is ready.`;
      }

      // checks if the values are numbers
      if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Please enter a number value for Fuel Level/Cargo Mass.");
         event.preventDefault();
      } 
      
      // conditions set to change the values of launchStatus/fuelStatus/cargoStatus
      if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         fuelStatus.innerHTML = "There is not enough fuel for the journey.";
         cargoStatus.innerHTML = "There is too much mass for the shuttle to takeoff.";
         event.preventDefault();
      } else if (fuelLevel.value < 10000) {
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         fuelStatus.innerHTML = "There is not enough fuel for the journey.";
         if (cargoMass.value <= 10000) {
            cargoStatus.innerHTML = "Cargo mass low enough for launch.";
         }
         event.preventDefault();
      } else if (cargoMass.value > 10000) {
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         cargoStatus.innerHTML = "There is too much mass for the shuttle to takeoff.";
         if (fuelLevel.value >= 10000) {
            fuelStatus.innerHTML = "Fuel level high enough for launch.";
         }
         event.preventDefault();
      } else {
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Shuttle is ready for launch.";
         fuelStatus.innerHTML = "Fuel level high enough for launch.";
         cargoStatus.innerHTML = "Cargo mass low enough for launch.";
         event.preventDefault();
      }
   });

   // fetches the planets api
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         let missionTarget = document.getElementById("missionTarget");
         let random = Math.floor(Math.random() * 6);
         missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[random].name}</li>
               <li>Diameter: ${json[random].diameter}</li>
               <li>Star: ${json[random].star}</li>
               <li>Distance from Earth: ${json[random].distance}</li>
               <li>Number of Moons: ${json[random].moons}</li>
            </ol>
            <img src="${json[random].image}">
         `;
      });
   });
});
