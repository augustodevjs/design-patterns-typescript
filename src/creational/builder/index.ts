import { MainDishBuilder } from "./classes/main-dish-builder";
import { MealBox } from "./classes/meal-box";
import { Beans, Meat, Rice } from "./classes/meals";
import { UserBuilder } from "./classes/user-builder";
import { User } from "./interfaces/user-builder-protocol";

// usando o composite

const rice = new Rice('Arroz', 5);
const beans = new Beans('Feijão', 10);
const meat = new Meat('Carne', 20);

const mealBox = new MealBox();
mealBox.add(rice, beans, meat);

// usando o padrão de projeto "Builder"

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert().makeBeverage();
console.log(mainDishBuilder.getMeals());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();
const meal2 = mainDishBuilder.makeBeverage().getMeals();
console.log(meal2);

// outro exemplo utilizando o builder

const userWithName: User = new UserBuilder()
  .name("John")
  .build();

console.log(userWithName);