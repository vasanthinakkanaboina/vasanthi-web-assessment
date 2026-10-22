// Problem-solving test: Photo Dimension
// Run with Node.js: node problem-solving.js < input.txt

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim();

if (input.length === 0) {
  process.exit(0);
}

const values = input.split(/\s+/).map(Number);

const L = values[0];
const N = values[1];

for (let i = 0; i < N; i++) {
  const W = values[2 + i * 2];
  const H = values[3 + i * 2];

  if (W < L || H < L) {
    console.log("UPLOAD ANOTHER");
  } else if (W === H) {
    console.log("ACCEPTED");
  } else {
    console.log("CROP IT");
  }
}
