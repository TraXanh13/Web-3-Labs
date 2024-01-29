"use strict";
const per1 = {
    name: "Picasso",
    birth: 1881,
    death: 1973
};
const per2 = {
    name: "Raphael",
    birth: 1483,
    death: 1520
};
function lifeLength(a) {
    return a.death - a.birth + 1;
}
const outputperson = (a) => {
    console.log("person = " + a.name);
};
console.log(lifeLength(per1));
outputperson(per2);
