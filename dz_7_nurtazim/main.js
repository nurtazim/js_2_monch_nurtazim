class Transport {
    constructor(name, sila, engine) {
        this.name = name
        this.sila = sila
        this.engine = engine
    }

    startEngine() {
        console.log("not start")
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
        console.log("start")
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
        console.log("start")

    }
}


const lodca = new Lodca("VikaVika", 55, 2.5, 25000)
console.log(lodca)
lodca.startEngine()

