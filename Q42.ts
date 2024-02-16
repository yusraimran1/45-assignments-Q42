// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Define the array of magicians

type Magician = string;
const magicians: Magician[] = ["David Copperfield", "Harry Houdini", "Criss Angel"];

function showwMagicians(magicians: Magician[]): void {
 console.log(magicians.join("\n"));
}
function makeGrreat(magicians: Magician[]): Magician[] {
 return magicians.map((magician) => `${magician} the Great`);
}
console.log("Original magicians:");
showwMagicians(magicians);
const greatMaagicians = makeGrreat(magicians)
console.log("\nModified list:");
showwMagicians(greatMaagicians);