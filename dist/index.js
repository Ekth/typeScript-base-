"use strict";
// Implémentation de la classe Car
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log('Moteur de voiture démarré');
    }
}
// Création d'une instance et test
const myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();
// Point d'entrée principal du projet TypeScript
function main() {
    console.log('Hello TypeScript!');
}
main();
