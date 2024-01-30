interface Person {  
    name: string, 
    birth: number, 
    death: number 
} 

const per1: Person = { 
    name: "Picasso", 
    birth: 1881, 
    death: 1973 
};

const per2: Person = { 
    name: "Raphael", 
    birth: 1483, 
    death: 1520 
};

function lifeLength(a: Person): number { 
    return a.death - a.birth + 1;    
} 

const outputperson = (a: Person): void => { 
    console.log("person = " + a.name); 
} 
console.log(lifeLength(per1)); 
outputperson(per2); 

type PersonContainer = (a: Person) => string;

const personDiv: PersonContainer = function (a) { 
    return `<div>${a.name}</div>`; 
} 
console.log( personDiv(per1) ); 

const personSpan: PersonContainer = (a) => { 
    return `<span>${a.name}</span>`; 
} 
console.log( personSpan(per2) );