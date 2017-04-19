'use strict';

function nocheineaufgabe() {
  var loesung_elem = document.getElementById("loesung");
  loesung_elem.style.visibility = "hidden";
  var radius = rand(1, 30);
  var hoehe = rand(10, 50);
  var radius_elem = document.getElementById("radius");
  var hoehe_elem = document.getElementById("hoehe");
  radius_elem.innerHTML = radius;
  hoehe_elem.innerHTML = hoehe;
  var grundflaeche = Math.PI * radius * radius
  var umfang = Math.PI * 2 * radius
  var mantel = umfang * hoehe
  var oberflaeche = 2 * grundflaeche + mantel
  oberflaeche = Math.round(oberflaeche * 100) / 100
  var oberflaeche_elem = document.getElementById("oberflaeche");
  oberflaeche_elem.innerHTML = oberflaeche;
}

function zeigmirdieloesung() {
  var loesung_elem = document.getElementById("loesung");
  loesung_elem.style.visibility = "visible";
}

function rand(min, max) {			
  var randval = Math.floor(Math.random() * (max - min + 1)) + min;
  return randval;
} 

