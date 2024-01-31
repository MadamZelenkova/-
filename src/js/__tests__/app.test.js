import Team from "../team";
import Character from "../Character";

let bowman;
let magician;
let team;
let expectedTeam;

beforeEach(() => {
  bowman = new Character("Лучник", "Bowman", 40, 10);
  magician = new Character("Маг", "Magician", 10, 40);
  team = new Team();
  team.addCharacter(bowman);
  team.addCharacter(magician);
  expectedTeam = [
    {
      name: "Лучник",
      type: "Bowman",
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: "Маг",
      type: "Magician",
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ];
});

test("Character should be add", () => {
  expect(team.characters).toEqual(expectedTeam);
});

test("the same character souldn't be add", () => {
  expect(() => team.addCharacter(bowman)).toThrow("Персонаж уже в команде");
});

test("testing of iterator", () => {
  const arr = [];

  for (const character of team) {
    arr.push(character);
  }

  expect(arr).toEqual(expectedTeam);
});
