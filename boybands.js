console.log("working")

var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = bands.length;

var vegTextToPrint = ""
var bandTextToPrint = ""

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var i = 0; i < bands.length; i++) {
// Keep track of which band we're on in the loop
  bandTextToPrint += `<li>${bands[i]}</li>`;
// Add the band names into the correct <div>
  bandElement.innerHTML = bandTextToPrint;

// Keep track of which veggie we're on in the loop
  vegTextToPrint += `<li>${vegetables[i]}</li>`;
// Add the veggie names into the correct <div>
  veggieElement.innerHTML = vegTextToPrint;
}