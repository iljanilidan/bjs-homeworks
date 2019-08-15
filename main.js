
class Weapon {
  constructor (name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
  }
  takeDamage(damage) {
    this.durability = (this.durability - damage)
    if (this.durability <= 0) {
      return 'Оружие сломано';
    } else {
      return this.durability;
    }
  }
  getDamage(durability) {
    if (this.durability >= (this.durability * 0.3)) {
      return this.attack;
    } else {
      return (this.attack / 2);
    }
  }
  isBroken(durability) {
    if (this.durability > 0) {
      return false;
    } else {
      return true;
    }
  }
}

const hammer = new Weapon('Правосудие', 200, 100, 10);
const hand = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);

const longBow = new Weapon('Длинный лук', 15, bow.durability, 4);
const axe = new Weapon('Секира', 27, 800, sword.range);
const stormStaff = new Weapon('Посох бури', 10, staff.durability, 3);

// *******************************************************

class Bow extends Weapon {
  constructor () {
    super();
    this.name = 'Лук';
    this.attack = 10;
    this.durability = 200;
    this.range = 3;
  }
}
class Hand extends Weapon {
  constructor () {
    super();
    this.name = 'Рука';
    this.attack = 1;
    this.durability = Infinity;
    this.range = 1;
  }
}
class Sword extends Weapon {
  constructor () {
    super();
    this.name = 'Меч';
    this.attack = 25;
    this.durability = 500;
    this.range = 1;
  }
}
class Knife extends Weapon {
  constructor () {
    super();
    this.name = 'Нож';
    this.attack = 5;
    this.durability = 300;
    this.range = 1;
  }
}
class Staff extends Weapon {
  constructor () {
    super();
    this.name = 'Посох';
    this.attack = 8;
    this.durability = 300;
    this.range = 2;
  }
}

// const test = new Staff();
// console.log(test.takeDamage(100));