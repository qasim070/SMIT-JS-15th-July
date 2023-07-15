let clrArray = ["red" , "green","cyan","yellow"];
document.write(clrArray);

    function del(){
        clrArray.pop("cyan","yellow");
        alert(clrArray);
        document.write(clrArray);
    }