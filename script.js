function calculateEnergy() {
  const area = document.getElementById("area").value;
  const houses = Number(document.getElementById("houses").value);
  const units = Number(document.getElementById("units").value);

  if (!area || houses <= 0 || units <= 0) {
    alert("Please enter valid values for all fields!");
    return;
  }

  const totalEnergy = houses * units;

  document.getElementById("result").innerHTML = `
    <strong>Estimated Monthly Energy Consumption in ${area}:</strong> ${totalEnergy} kWh
    <br><br>
    <strong>AI Suggestion:</strong> Use smart meters, LED lighting, and solar rooftops to reduce energy usage by 15–25%.
  `;
}
