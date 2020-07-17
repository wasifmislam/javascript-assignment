//feetToMile
function feetToMile (feet) {
    var mile = feet / 5280;
    return mile;
}

var result = feetToMile (30);
console.log(result);

//woodCalculator
function woodCalculator (chair, table, bed ) {
    var chairWood = chair * 1 ;
    var tableWood = table * 3 ;
    var bedWood = bed * 5 ;
    var totalWood = chairWood + tableWood + bedWood ;
    return totalWood;
}
var woodresult = woodCalculator ( 6, 5, 9);
console.log(woodresult);

//brickCalculator
// t is used for stairs count
function brickCalculator(t) {
    if (t <= 10) {
      return t*15*1000;
    } else if (t <= 20) {
      return 10*15*1000+(t-10)*12*1000;
    } else { 
      return  10*15*1000+ 10*12*1000 + (t-20)*10*1000;
    }
  
  }
var totalBricks = brickCalculator(35);
console.log(totalBricks);

//tinyFriend

function tinyFriend (names) {
    var shotestName = names[0];
    for ( var i =0; i<names.length; i++) {
        var currentName = names[i];
        if(currentName < shortestName) {
           shortestName = currentName;
        }
    }
    return smallName;
}
