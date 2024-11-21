"use strict";
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        return `${this.title} - ${this.price} eur`;
    }
}
class Pizza extends MenuItem {
    constructor(title, price) {
        super(title, price);
        this.base = 'classic';
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t != topping);
    }
    selectBase(b) {
        this.base = b;
    }
    format() {
        let formatted = this.details + '\n';
        //base
        formatted += `Pizza on a ${this.base} base `;
        //toppings
        if (this.toppings.length < 1) {
            formatted += 'with no toppings';
        }
        if (this.toppings.length > 0) {
            formatted += `with ${this.toppings.join(', ')}`;
        }
        return formatted;
    }
}
const pizza = new Pizza('Domino special', 15);
pizza.addTopping('mushrooms');
pizza.addTopping('pepperoni');
pizza.addTopping('olives');
pizza.addTopping('jalapeno');
pizza.removeTopping('mushrooms');
pizza.selectBase('thin');
console.log(pizza);
const pizza2 = new Pizza('Dodo special', 14);
function addMushroomsToPizzas(pizzas) {
    for (const p of pizzas) {
        p.addTopping('mushrooms');
    }
}
function printMenuItem(item) {
    console.log(item.details);
}
function printFormated(value) {
    console.log(value.format());
}
addMushroomsToPizzas([pizza, pizza2]);
pizza2.addTopping('cheeze');
console.log(pizza2);
printMenuItem(pizza);
printFormated(pizza);
