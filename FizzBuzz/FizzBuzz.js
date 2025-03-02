//using line 44 as a base for the while loop
//plus the ${i} from line 61 changed to ${count}

let count = 1;
while (count <= 100) {
	//if-else to prioritize things that need to be replaced, then using "else" to count upwards otherwise
	if (count < 10) {
		console.log("nonono");
	} else {
		console.log(`${count}`);
	}
  count++;
}


//trying out a version of this where only numbers 5-15 are replaced, i think it'll take a little more work than I thought
let count = 1;
while (count <= 100) {
	if (count < 5) {
		console.log(`${count}`);
	} else if (count > 15) {
		console.log(`${count}`);
	} else {
		console.log("cora is so smart and computers are so dumb")
	}
  count++;
}