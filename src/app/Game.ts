import { Die } from "./Die"

class Game {

    dice: Die[];
    constructor(numberOfDice = 3) {
        if(numberOfDice <= 0) {
            throw new Error("The number of dice must be positive");
        }

        this.dice = [];

        for(let i = 0; i < numberOfDice; i++) {
            this.dice.push(new Die());
        }
    }

    rollDice(): void {
        this.dice.forEach(die => die.rollDie());
    }

    get total(): number {
        let sum = 0;
        for(let die of this.dice) {
            sum += die.side;
        }

        return sum;
    }

    get numberOfDice(): number {
        return this.dice.length;
    }

    get sides(): number[] {
        let data = [];
        for(let die of this.dice) {
            data.push(die.side);
        }

        return data;
    }

    set sides(data) {
        this.dice = []
        data.forEach(side => this.dice.push(new Die(side)));
    }
}

export { Game }