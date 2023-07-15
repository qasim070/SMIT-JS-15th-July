const size = prompt("Enter the size of the identity matrix: ");
const n = parseInt(size);

// Create a 2D array for the identity matrix
const identityMatrix = [];

// Populate the matrix with 1's on the diagonal and 0's elsewhere
for (let i = 0; i < n; i++) {
  const row = [];
  for (let j = 0; j < n; j++) {
    if (i === j) {
      row.push(1);
    } else {
      row.push(0);
    }
  }
  identityMatrix.push(row);
}

// Print the identity matrix
for (let i = 0; i < n; i++) {
  document.write(identityMatrix[i].join(" "));
  document.write("<br>");

}
// alert(row)
