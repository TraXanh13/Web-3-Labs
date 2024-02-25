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
const personDiv = function (a, b) {
    if (typeof b !== 'undefined')
        return `<div class="${b}">${a.name}</div>`;
    else
        return `<div>${a.name}</div>`;
};
console.log(personDiv(per1, "w-24 h-24"));
console.log(personDiv(per2));
const personSpan = (a) => {
    return `<span>${a.name}</span>`;
};
console.log(personSpan(per2));
function makeNested(parent, child, content) {
    let tag = `<${parent}>`;
    if (Array.isArray(content)) {
        content.forEach(c => {
            tag += `<${child}>${c}</${child}>`;
        });
    }
    else if (typeof content === 'string') {
        tag += `<${child}>${content}</${child}>`;
    }
    else
        throw new Error('content not string or array');
    tag += `</${parent}>`;
    return tag;
}
console.log(makeNested("p", "strong", "This is the way"));
console.log(makeNested("select", "option", ["Arsenal", "Liverpool", "Chelsea"]));
