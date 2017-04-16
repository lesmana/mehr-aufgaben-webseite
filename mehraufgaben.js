'use strict';

function nocheineaufgabe() {
  var volumen_elem = document.getElementById("volumen");
  volumen_elem.innerHTML = "??";
  var radius = rand(1, 10);
  var hoehe = rand(1, 20);
  var radius_elem = document.getElementById("radius");
  var hoehe_elem = document.getElementById("hoehe");
  radius_elem.innerHTML = radius;
  hoehe_elem.innerHTML = hoehe;
  var volumen = Math.PI * radius * radius * hoehe
  sessionStorage.setItem("volumen", volumen)
}

function zeigmirdieloesung() {
  var volumen = sessionStorage.getItem("volumen");
  var volumen_elem = document.getElementById("volumen");
  volumen_elem.innerHTML = volumen;
}

function rand(min, max) {			
  var randval = Math.floor(Math.random() * (max - min + 1)) + min;
  return randval;
} 

