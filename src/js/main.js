function calculate(dist,time) {
  return Math.round(dist/time) + " miles per hour";
}

function myFunction() {
  document.getElementById("demo").innerHTML = calculate(55,3.5);
}
