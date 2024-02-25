"use strict";
class ArtProduction {
    title;
    year;
    constructor(t, y) {
        this.title = t;
        this.year = y;
    }
    toJson() {
        return JSON.stringify(this);
    }
}
class Movie extends ArtProduction {
    runtime;
    constructor(t, y, r) {
        super(t, y);
        this.runtime = r;
    }
    getInfo() {
        return `${this.title} [${this.year} – ${this.getRuntimeReadable()}]`;
    }
    getRuntimeReadable() {
        let hours = Math.floor(this.runtime / 60);
        let minutes = this.runtime - (hours * 60);
        return `${hours}hr ${minutes}min`;
    }
    getTitle() {
        return this.title;
    }
    toJson() {
        return JSON.stringify(this);
    }
}
class Play extends ArtProduction {
    author;
    constructor(t, a, y) {
        super(t, y);
        this.author = a;
    }
    toJson() {
        return JSON.stringify(this);
    }
}
function apiOutput(obj) {
    console.log([obj.toJson()]);
}
let play1 = new Play('Hamlet', 'Shakespeare', 1601);
let mov1 = new Movie("Juno", 2007, 96);
let mov2 = new Movie("Cloud Atlas", 2012, 172);
// mov2.title = "TypeScript Atlas";
let temp = mov2.getTitle();
console.log(mov1.getInfo());
console.log(mov2.getInfo());
// let play2 = new ArtProduction('Macbeth',1601); - Cannot create an instance of an abstract method
apiOutput(play1);
apiOutput(mov1);
