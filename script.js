window.addEventListener("load", function() {

   // validation to ensure user submits a value for each textbox along with correct value type
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
      
      if (!(pilotName.value) || !(copilotName.value) || !(fuelLevel.value) || !(cargoMass.value)) {
         if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
            alert("Please enter a number value for Fuel Level/Cargo Mass.");
            event.preventDefault();
         } else {
            alert("All fields are required.");
         }
         event.preventDefault();
      } else {
         faultyItems.style.visibility = "visible";
      }
      
      if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
         pilotStatus.innerHTML = `Pilot ${pilotName.value.charAt(0).toUpperCase() + pilotName.value.slice(1)} is ready.`;
         copilotStatus.innerHTML = `Copilot ${copilotName.value.charAt(0).toUpperCase() + copilotName.value.slice(1)} is ready.`;
         faultyItems.style.visibility = "visible";
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         fuelStatus.innerHTML = "There is not enough fuel for the journey.";
         cargoStatus.innerHTML = "There is too much mass for the shuttle to takeoff.";
      } else if (fuelLevel.value < 10000) {
         pilotStatus.innerHTML = `Pilot ${pilotName.value.charAt(0).toUpperCase() + pilotName.value.slice(1)} is ready.`;
         copilotStatus.innerHTML = `Copilot ${copilotName.value.charAt(0).toUpperCase() + copilotName.value.slice(1)} is ready.`;
         faultyItems.style.visibility = "visible";
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         fuelStatus.innerHTML = "There is not enough fuel for the journey.";
         event.preventDefault();
      } else if (cargoMass.value > 10000) {
         pilotStatus.innerHTML = `Pilot ${pilotName.value.charAt(0).toUpperCase() + pilotName.value.slice(1)} is ready.`;
         copilotStatus.innerHTML = `Copilot ${copilotName.value.charAt(0).toUpperCase() + copilotName.value.slice(1)} is ready.`;
         faultyItems.style.visibility = "visible";
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         cargoStatus.innerHTML = "There is too much mass for the shuttle to takeoff.";
         event.preventDefault();
      } else {
         pilotStatus.innerHTML = `Pilot ${pilotName.value.charAt(0).toUpperCase() + pilotName.value.slice(1)} is ready.`;
         copilotStatus.innerHTML = `Copilot ${copilotName.value.charAt(0).toUpperCase() + copilotName.value.slice(1)} is ready.`;
         faultyItems.style.visibility = "visible";
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Shuttle is ready for launch."
         event.preventDefault();
      }

   });
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
         `
      })
   })
});