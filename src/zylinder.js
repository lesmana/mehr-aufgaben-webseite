// mehr aufgaben webseite
// Copyright 2017 Lesmana Zimmer
// Licensed under GNU AGPL version 3 or later
// https://www.gnu.org/licenses/agpl.html

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
  var volumen = Math.PI * radius * radius * hoehe
  volumen = Math.round(volumen * 100) / 100
  var volumen_elem = document.getElementById("volumen");
  volumen_elem.innerHTML = volumen;
}

function zeigmirdieloesung() {
  var loesung_elem = document.getElementById("loesung");
  loesung_elem.style.visibility = "visible";
}

function rand(min, max) {			
  var randval = Math.floor(Math.random() * (max - min + 1)) + min;
  return randval;
} 

