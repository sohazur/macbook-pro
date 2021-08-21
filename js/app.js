// Memory function
function memoryCostCalc(memoryVariant) {
  document.getElementById(memoryVariant).addEventListener("click", () => {
    if (memoryVariant == "memory8Gb") {
      document.getElementById("memoryCost").innerText = 0;
    } else {
      document.getElementById("memoryCost").innerText = 180;
    }

    // Update total Cost and total Cost after promo field
    totalCostCalc("totalCost");
    totalCostCalc("totalCostAfterPromo");
  });
}

// Storage function
function storageCostCalc(storageVariant) {
  document.getElementById(storageVariant).addEventListener("click", () => {
    if (storageVariant == "storage256Gb") {
      document.getElementById("storageCost").innerText = 0;
    } else if (storageVariant == "storage512Gb") {
      document.getElementById("storageCost").innerText = 100;
    } else {
      document.getElementById("storageCost").innerText = 180;
    }
    // Update total Cost and total Cost after promo field
    totalCostCalc("totalCost");
    totalCostCalc("totalCostAfterPromo");
  });
}

// Delivery function
function deliveryCostCalc(deliveryOption) {
  document.getElementById(deliveryOption).addEventListener("click", () => {
    if (deliveryOption == "deliveryNormal") {
      document.getElementById("deliveryCost").innerText = 0;
    } else {
      document.getElementById("deliveryCost").innerText = 20;
    }
    // Update total Cost and total Cost after promo field
    totalCostCalc("totalCost");
    totalCostCalc("totalCostAfterPromo");
  });
}

// Total Cost function
function totalCostCalc(totalCost) {
  const totalCostFeild = document.getElementById(totalCost);
  const baseCost = 1299;
  const memoryCost = parseInt(document.getElementById("memoryCost").innerText);
  const storageCost = parseInt(
    document.getElementById("storageCost").innerText
  );
  const deliveryCost = parseInt(
    document.getElementById("deliveryCost").innerText
  );

  totalCostFeild.innerText = baseCost + memoryCost + storageCost + deliveryCost;
}

// Promo Code application and Total Cost after promo
let promoCode = "";
document.getElementById("promoInput").addEventListener("keyup", (event) => {
  promoCode = event.target.value;
});
const totalCostAfterPromo = document.getElementById("totalCostAfterPromo");
document.getElementById("promoBtn").addEventListener("click", () => {
  if (promoCode == "stevekaku") {
    // Total cost after promo, 20% discount
    totalCostAfterPromo.innerText =
      parseFloat(totalCostAfterPromo.innerText) * 0.8;
  }
});

// Function Calls
memoryCostCalc("memory8Gb");
memoryCostCalc("memory16Gb");

storageCostCalc("storage256Gb");
storageCostCalc("storage512Gb");
storageCostCalc("storage1Tb");

deliveryCostCalc("deliveryNormal");
deliveryCostCalc("deliveryExpress");
