let fillTimeout;
let dischargeTimeout;

document.getElementById("fillButton").addEventListener("click", function () {
  const liquid = document.querySelector(".liquid");
  liquid.classList.remove("reverse-flowing");
  liquid.classList.add("flowing");

  const tankLiquid = document.getElementById("tankLiquid");
  tankLiquid.style.height = "100%";

  const ledLight = document.getElementById("ledLight");
  fillTimeout = setTimeout(function () {
    ledLight.style.backgroundColor = "red";
    // Start discharging when full
    document.getElementById("dischargePipe").style.display = "block";
    document.getElementById("liquidDischarge").classList.add("discharging");
    dischargeTimeout = setTimeout(function () {
      document.getElementById("subTankLiquid").style.height = "100%";
      document.getElementById("subTank").style.display = "block";
      document.getElementById("drainButton").style.display = "block";
    }, 4000); // Wait 4 seconds for the discharge to fill the sub-tank
  }, 8000); // Change color when the tank is full after 8 seconds
});

document.getElementById("dischargeButton").addEventListener("click", function () {
  const liquid = document.querySelector(".liquid");
  liquid.classList.remove("flowing");
  liquid.classList.add("reverse-flowing");

  const tankLiquid = document.getElementById("tankLiquid");
  tankLiquid.style.height = "0";

  const ledLight = document.getElementById("ledLight");
  ledLight.style.backgroundColor = "green";

  clearTimeout(fillTimeout); // Reset LED color change
});

document.getElementById("stopButton").addEventListener("click", function () {
  const liquid = document.querySelector(".liquid");
  liquid.classList.remove("flowing");
  liquid.classList.remove("reverse-flowing");

  const tankLiquid = document.getElementById("tankLiquid");
  tankLiquid.style.height = getComputedStyle(tankLiquid).height;

  clearTimeout(fillTimeout); // Stop filling process and LED color change
  clearTimeout(dischargeTimeout); // Stop discharge process
});

document.getElementById("drainButton").addEventListener("click", function () {
  const subTankLiquid = document.getElementById("subTankLiquid");
  subTankLiquid.style.height = "0";
  document.getElementById("drainButton").style.display = "none";
});
