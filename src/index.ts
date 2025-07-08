// Définition de l'interface Vehicle
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Implémentation de la classe Car
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
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