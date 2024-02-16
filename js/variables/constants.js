const bird = { species: "kestrel" };
console.log(bird.species); // "kestrel"

bird.species = "Striated Caracara";
console.log(bird.species); // "Striated Caracara"

/*
bird = { species: "some-species" };
console.log(bird.species);
*/ // Throws an error; assignment to constant variable


// The following throws an error; bird already initalized.
/*
const bird = { species: "low-platypus" };
console.log(bird.species);
*/
