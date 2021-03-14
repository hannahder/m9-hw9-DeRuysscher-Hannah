
class Desserts {
  constructor(type, calories) {
    this.type = type;
    this.calories = calories;
    // console.log('yummy');
  }
}

class Icecream extends Desserts {
  constructor(type, calories, flavor, scoop) {
    super(type, calories);
    this.flavor = flavor;
    this.scoop = scoop;
  }

  includeSpoon() {
      console.log('Here is your spoon');
    }
  }

const yummyFood = new Icecream;

yummyFood.includeSpoon();


//New instance


const vanillaIcecream = new Icecream('Ice Cream', 340, 'Vanilla', 3);

console.log(vanillaIcecream);
