// This function calculates the total cost based on the cost per liter and the number of liters purchased
function calculateTotal() {
    // Get the value of "costPerLiter" input field and convert it to a float number
    const costPerLiter = parseFloat(document.getElementById("costPerLiter").value);
  
    // Get the value of "liters" input field and convert it to a float number
    const liters = parseFloat(document.getElementById("liters").value);
  
    // Multiply cost per liter with the number of liters to get the total cost
    const total = costPerLiter * liters;
  
    // Update the "totalCost" element to display the calculated total cost
    document.getElementById("totalCost").textContent = `Total Cost: £${total.toFixed(2)}`;
}
