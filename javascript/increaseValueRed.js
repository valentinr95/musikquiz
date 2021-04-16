function increaseValueRed() {
  var redValue = document.getElementById("red-value").innerHTML;
  redValue = parseInt(redValue, 10) + 1;
  document.getElementById("red-value").innerHTML = redValue;
  confetti({
    particleCount: 150,
    spread: 180,
  });
}