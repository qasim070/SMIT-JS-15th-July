function checkPalindrome() {
    let str = prompt("Enter the word to check it is Palendrome or not");

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i] ) {
            alert("true") 
        }else{ 
            alert("false")
            alert(str[len - 1 - i]);
        } 
    }

}