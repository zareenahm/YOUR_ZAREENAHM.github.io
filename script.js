/* .js files add interaction to your website */

var factList = [
"3.5 million Afghan children are out of school!", 
"85% of children who don’t attend school are girls!", 
"37% of adolescent Afghan girls are literate compared to 66% of boys!", 
"About 30% of schools lack safe drinking water!", 
"About 60% of schools lack toilets and bathroom facilities!", 
"The adult male literacy rate is 55.48% and the adult female literacy rate is 29.81%!", 
"27% of 5-11 year olds are forced to work rather than go to school to keep their families afloat!", 
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("factButton");
var count = 0;

factButton.addEventListener("click", displayFact);

function displayFact() {
  fact.innerHTML = factList [count];
  count++;
if (count == factList.length) {
  count = 0; }
}
