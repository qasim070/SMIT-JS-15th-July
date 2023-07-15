let clrArray = ["Red" , "Green", "Orange", "Blue", "White", "Purple"];
let pos = +prompt("At which index do you want to Delete Color");
let del = +prompt("How many colors do you want to Delete?");
        clrArray.splice(pos, del);

        alert(clrArray);