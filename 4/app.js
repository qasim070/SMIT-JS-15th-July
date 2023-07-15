// let rows = +prompt("Enter the length of matrix ");

for (let row = 1; row <= 5; row++) {
    for (let col = 0; col < row; col++) {
      document.write("&nbsp;");
      document.write(" *");
    }
    document.write("<br>");
    // document.write("0");
  }
  document.write("<br>");
  document.write("<br>");
  
  for (let row = 1; row <= 5; row++) {
    for (let col = 1; col <=5-row+1; col++) {
      document.write("&nbsp;");
  
      document.write(" *");
    }
    document.write("<br>");
    // document.write("0");
  }
  document.write("<br>");
  document.write("<br>");
  
  for (let row = 1; row <= 5; row++) {
    for (let col = 1; col <= row; col++) {
      document.write("&nbsp;");
  
      document.write(col);
    }
    document.write("<br>");
    // document.write("0");
  }
  document.write("<br>");
  document.write("<br>");
  
  for (let row = 1; row <= 5; row++) {
    for (let col = 1; col <=5-row+1; col++) {
      document.write("&nbsp;");
  
      document.write(col);
    }
    document.write("<br>");
    // document.write("0");
  }