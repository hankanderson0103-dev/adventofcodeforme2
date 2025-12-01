const arr = [-68, -30, 48, -5, 60, -55, -1, -99, 14, -82];
let position = 50;
let password = 0;
for (let x = 0; x < arr.length; x++) {
  position += arr[x];
  position = ((position % 100) + 100) % 100;

  if (position === 0) {
    password++;
  }

  console.log(position);
}

console.log("final is " + password);