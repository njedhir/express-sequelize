class Car {
    constructor(name, color, category, wheel, engine) {
        this.name = name
        this.color = color
        this.category = category
        this.wheel = wheel
        this.engine = engine
    }
    turnLeft() {
        console.log(this.name, 'is turning to the left')
    }
    turnRight() {
        console.log(this.name, 'is turning to the right')
    }
}


const avanza = new Car('avanza', 'Black', 'MPV', 4, 1500)
const innova = new Car('innova', 'Red', 'MPV', 4, 2100)
const hilux = new Car('hilux', 'White', 'Carrier4WD', 4, 3000)

avanza.turnLeft()