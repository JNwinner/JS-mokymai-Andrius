type Base = 'classic' | 'thick' | 'thin' | 'garlic'

interface HasFormatter {
    format(): string
}

 abstract class MenuItem implements HasFormatter {
    constructor(private title: string, private price:number) {}

    get details(): string{
        return `${this.title} - ${this.price} eur`
    }

    abstract format():string
}

class Pizza extends MenuItem {
    constructor(title: string, price:number) {
        super(title, price)
    }
    private base: Base = 'classic'
    private toppings: string[] = []

    addTopping(topping: string): void {
        this.toppings.push(topping)
    }

    removeTopping(topping: string): void {
        this.toppings = this.toppings.filter((t) => t != topping)
    }

    selectBase(b: Base): void {
        this.base = b
    }

    format():string {
        let formatted = this.details + '\n'
        //base
        formatted += `Pizza on a ${this.base} base `
        //toppings
        if(this.toppings.length < 1) {
            formatted += 'with no toppings'
        }
        if(this.toppings.length > 0) {
            formatted += `with ${this.toppings.join(', ')}`
        }
        return formatted
    }
}

const pizza  = new Pizza('Domino special', 15)

pizza.addTopping('mushrooms')
pizza.addTopping('pepperoni')
pizza.addTopping('olives')
pizza.addTopping('jalapeno')
pizza.removeTopping('mushrooms')
pizza.selectBase('thin')
console.log(pizza)

const pizza2 = new Pizza('Dodo special', 14)

function addMushroomsToPizzas(pizzas: Pizza[]): void {
    for(const p of pizzas) {
        p.addTopping('mushrooms')
    }
}

function printMenuItem(item: MenuItem):void {
    console.log(item.details)
}
function printFormated(value: HasFormatter): void {
    console.log(value.format())
}
addMushroomsToPizzas([pizza, pizza2])

pizza2.addTopping('cheeze')
console.log(pizza2)
printMenuItem(pizza)
printFormated(pizza)

