import foods from "./foods";
import { choice, remove } from "./helpers";

let food = choice(foods);

console.log(`I'd like one ${food}, please`);
console.log(`Here you go: ${food}`);
console.log("Delicious! May I have another?");

let leftOver = remove(food, foods);

console.log(`I'm sorry, we're all out. We have ${leftOver} left.`)