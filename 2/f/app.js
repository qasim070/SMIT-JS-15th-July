let clrArray = ["Red" , "Green", "Orange"];
let pos = +prompt("At which index do you want to add color");
let clr = prompt("Enter the name of color that you want to add");
        clrArray.splice(pos, 0, clr);
        alert(clrArray);