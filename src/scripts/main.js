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

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(`Stories: ${empireStateBuilding.stories}`)
console.log(`Height: ${empireStateBuilding.height}`)
console.log(`Square Feet: ${empireStateBuilding.squareFeet}`)
console.log(`East West Length: ${empireStateBuilding.eastWestLength}`)
console.log(`North South Length: ${empireStateBuilding.northSouthLength}`)


// Read all the instructions, maybe?
console.log(`Construction Date: ${empireStateBuilding["constructionDate"]}`)
console.log(`Address: ${empireStateBuilding["address"]}`)
console.log(`Owner: ${empireStateBuilding["owner"]}`)
console.log(`Architect: ${empireStateBuilding["architect"]}`)
console.log(`Cost: ${empireStateBuilding["cost"]}`)