interface IJson {
    toJson(): string
}

interface IInfo {
    getInfo(): string
}

abstract class ArtProduction implements IJson {
    title: string;
    year: number;

    constructor(t: string, y: number) {
        this.title = t;
        this.year = y;
    }

    toJson(): string {
        return JSON.stringify(this);
    }
}

class Movie extends ArtProduction implements IJson, IInfo {
    runtime: number;

    constructor(t: string, y: number, r: number) {
        super(t, y)
        this.runtime = r;
    }

    getInfo(): string {
        return `${this.title} [${this.year} – ${this.getRuntimeReadable()}]`;
    }

    getRuntimeReadable(): string {
        let hours = Math.floor(this.runtime / 60);
        let minutes = this.runtime - (hours*60);
        return `${hours}hr ${minutes}min`;
    }

    getTitle(): string {
        return this.title;
    }

    toJson(): string {
        return JSON.stringify(this);
    }
}

class Play extends ArtProduction {
    author: string;

    constructor(t: string, a: string, y: number) {
        super(t, y)
        this.author = a;
    }
    
    toJson(): string {
        return JSON.stringify(this);
    }
}

function apiOutput(obj: IJson) {
    console.log([obj.toJson()]);
}

let play1 = new Play('Hamlet','Shakespeare',1601);
let mov1 = new Movie("Juno",2007,96);
let mov2 = new Movie("Cloud Atlas",2012,172);
// mov2.title = "TypeScript Atlas";
let temp = mov2.getTitle();
console.log(mov1.getInfo());
console.log(mov2.getInfo());

// let play2 = new ArtProduction('Macbeth',1601); - Cannot create an instance of an abstract method

apiOutput(play1);
apiOutput(mov1);
