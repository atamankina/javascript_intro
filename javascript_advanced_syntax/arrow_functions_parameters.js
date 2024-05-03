function getGreeting(name) {
    return 'Hello, ' + name;
}

const getGreeting = (name) => { return 'Hello,' + name };
//Wenn eine Pfeilfunktion nur einen Parameter hat, kann man den Parameter ohne () eingeben
const getGreeting = name => { return 'Hello,' + name };
//Wenn eine Pfeilfunktion nur aus einer Zeile Code besteht, kann man die Funktion ohne {} und return definieren
const getGreeting = name => 'Hello,' + name;

console.log(getGreeting('Galina'));

// Eine Pfeilfunktion mit mehreren Eingabeparametern und mit mehreren Zeilen Code
const getDiscountedPrice = (price=10, discount=0.1) => {
    let discountedPrice = price - price * discount;
    return discountedPrice;
}

console.log(getDiscountedPrice(100, 0.25));
console.log(getDiscountedPrice(200));
console.log(getDiscountedPrice());

