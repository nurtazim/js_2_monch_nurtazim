class Transport {
    constructor(name, sila, engine) {
        this.name = name
        this.sila = sila
        this.engine = engine
    }

    startEngine() {
        console.log(this.engine)
    }
}

const red = new Transport("mashina", 350, 1)
console.log(red)
red.startEngine()


class Car extends Transport {
    constructor(name, sila, engine, mass) {
        super(name, sila, mass);
        this.mass = mass
    }

    startEngine() {
        console.log(this.engine)
    }
}

const car = new Car("камри", 350, 2.5, 25)
console.log(car)
car.startEngine()


class Lodca extends Transport {
    constructor(name, sila, engine, cach) {
        super(name, sila, engine);
        this.cach = cach
    }

    startEngine() {
        console.log(this.engine)
    }
}


const lodca = new Lodca("момент", 55, 2.5, 25)
console.log(lodca)
lodca.startEngine()