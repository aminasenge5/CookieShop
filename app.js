// object constructor

var Shop = function (name, min, max, avg, loc) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.loc = loc;
}

//instance of the object constructor
var PioneerSquare = new Shop("Living Room", 17, 18, 5.2, "tr1");
var PortlandAirport = new Shop("Fly", 6, 24, 1.2, "tr2");
var WashingtonSquare = new Shop("Mall", 11, 38, 1.9, "tr3");
var Sellwood = new Shop("Drift", 20, 48, 3.3, "tr4");
var PearlDistrict = new Shop("Oyster", 3, 24, 2.6, "tr5");


function makeShop(param) {

       var row = document.getElementById(param.loc);

       row.innerHTML = "<td>"+param.name+"</td><td>yo</td><td>"+randomNum(param.min, param.max)+"</td><td>I</td><td>Want</td><td>Numbers</td><td>Here</td><td>But</td><td>Not</td><td>Sure</td><td>How</td><td>Yet</td><td>Need</td><td>help</td>";
}


function randomNum(small, big) {

	//return Math.random();
	return Math.floor(Math.random() * (big - small + 1)) + small;

}


makeShop(PioneerSquare);
makeShop(PortlandAirport);
makeShop(WashingtonSquare);
makeShop(Sellwood);
makeShop(PearlDistrict);
