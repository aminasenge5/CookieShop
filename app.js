var PioneerSquare = {

    name: "Living Room",
    min: 17,
    max: 18,
    avg: 5.2,
    loc: "tr1",
}

var PortlandAirport = {

    name: "Fly",
    min: 6,
    max: 24,
    avg: 1.2,
    loc: "tr2",
}

var WashingtonSquare = {

    name:"Mall",
    min: 11,
    max: 38,
    avg: 1.9,
    loc: "tr3",
}

var Sellwood = {

    name: "Drift",
    min: 20,
    max: 48,
    avg: 3.3,
    loc: "tr4",

}

var PearlDistrict = {

    name: "Oyster",
    min: 3,
    max: 24,
    avg: 2.6,
    loc: "tr5",
}

function makeShop(shop) {

       var row = document.getElementById(shop.loc);

       row.innerHTML = "<td>"+shop.name+"</td><td>yo</td><td>Here it is</td><td>Hi!</td><td></td><td>Here it is</td>";
}

makeShop(PioneerSquare);
makeShop(PortlandAirport);
makeShop(WashingtonSquare);
makeShop(Sellwood);
makeShop(PearlDistrict);
