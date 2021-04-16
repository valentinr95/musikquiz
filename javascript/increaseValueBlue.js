function increaseValueBlue() {
  var blueValue = document.getElementById("blue-value").innerHTML;
  blueValue = parseInt(blueValue, 10) + 1;
  document.getElementById("blue-value").innerHTML = blueValue;
  confetti({
    particleCount: 150,
    spread: 180,
  });
}