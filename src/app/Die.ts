class Die {
    #side: number;

    constructor(side = 1) {
        this.#side = side;
    }

    rollDie() {
        this.#side = Math.floor(1 + 6 * Math.random());
    }

    get side() {
        return this.#side
    }

    set side(side) {
        this.#side = side;
    }
}

export { Die }

