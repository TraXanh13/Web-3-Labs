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

type PersonContainer = (a: Person, className?: string) => string;

const personDiv: PersonContainer = function (a, b) { 
    if (typeof b !== 'undefined')
        return `<div class="${b}">${a.name}</div>`;
    else
        return `<div>${a.name}</div>`;
} 
console.log( personDiv(per1,"w-24 h-24") );
console.log( personDiv(per2) );


const personSpan: PersonContainer = (a) => { 
    return `<span>${a.name}</span>`; 
} 
console.log( personSpan(per2) );

// overload signatures
function makeNested(parent: string, child: string, content: string): string;
function makeNested(parent: string, child: string, content: string[]): string;
function makeNested(parent: string, child: string, content: unknown): string {
    let tag = `<${parent}>`;

    if (Array.isArray(content)) {
        content.forEach( c => {
            tag += `<${child}>${c}</${child}>`
        });
    } else if (typeof content === 'string') {
        tag += `<${child}>${content}</${child}>`;
    } else
        throw new Error('content not string or array');

    tag += `</${parent}>`;
    return tag;
}

    console.log( makeNested("p","strong","This is the way") );
    console.log( makeNested("select","option", ["Arsenal","Liverpool","Chelsea"]) );