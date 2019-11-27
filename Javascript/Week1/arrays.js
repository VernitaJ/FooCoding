let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, "meerkat");
console.log(favoriteAnimals);

console.log("Has a length of:",favoriteAnimals.length);

favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);

console.log("The index of meerkat is ",favoriteAnimals.indexOf('meerkat'));