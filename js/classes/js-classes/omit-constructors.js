/*
 * If one doesn't need to do any special initialization,
 * one can omit the constructor,
 * and a default constructor will be generated for you:
 */
class Animal {
	sleep() {
		console.log("zzzzzzzzzzzzz");
	}
}

const spot = new Animal();
spot.sleep(); // 'zzzzzzzzzzzzzzz'
