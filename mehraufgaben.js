//'use strict';

function nocheineaufgabe() {
  var radius = rand(1, 10);
  var hoehe = rand(1, 20);
  var radius_elem = document.getElementById("radius");
  var hoehe_elem = document.getElementById("hoehe");
  radius_elem.innerHTML = radius;
  hoehe_elem.innerHTML = hoehe;
}

function rand(min, max) {			
  var randval = Math.floor(Math.random() * (max - min + 1)) + min;
  return randval;
} 

