import Character from "./Character";

export default class Team {
  constructor() {
    this.characters = [];
  }

  addCharacter(character) {
    if (this.characters.includes(character)) {
      throw new Error("Персонаж уже в команде");
    } else {
      this.characters.push(character);
    }
  }

  [Symbol.iterator]() {
    let characters = this.characters;
    let index = 0;
    return {
      next() {
        if (index < characters.length) {
          return {
            done: false,
            value: characters[index++],
          };
        } else {
          return {
            done: true,
            value: undefined,
          };
        }
      },
    };
  }
}
