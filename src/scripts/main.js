console.log("We're learning about objects!");

const car = {
    make: "Ford",
    model: "Mustang",
    year: 2015,
    color: "red"
};

const animals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];

const cassie = {
    food: "Salad",
    color: "Purple"
};

const ken = {
    food: "Pizza",
    color: "Grey"
};

const peach = {
    food: "Tuna",
    color: "Grey and white"
};

const ginger = {
    food: "Peanut butter",
    color: "Gold"
}

const familyMembers = [ken, cassie, peach, ginger];

console.log("family members", familyMembers)

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(`${wardrobe.height}, ${wardrobe.manufacturer}, ${wardrobe.contents}, ${wardrobe.contents}, ${wardrobe.depth}, ${wardrobe.width}`)

wardrobe.material = "Cedar"

console.log(wardrobe)

