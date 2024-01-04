class Key {
    private signature: number;
    constructor() {
        this.signature = Math.floor(Math.random() * 9000) + 1000;
}
    getSignature() {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {
        this.key = key; 
    }
    getKey() {
        return this.key;
    }
}

abstract class House {
    public door: boolean;
    public tenants: object[] = [];

    constructor(public key: Key) {
        this.key = key;   }

    comeIn(person: Person): void {}

    openDoor(keyPerson: Key): void {}
}

class MyHouse extends House{
    constructor(public key: Key) {
        super(key)
        this.key = key;
    }

    openDoor(key: Key): void {
        key === this.key ? this.door = true : this.door = false;
    }
    
    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person)
        }
        return console.log(`Welcome`, person);
        
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {Key, Person, MyHouse};