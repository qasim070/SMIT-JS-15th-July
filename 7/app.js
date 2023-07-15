function checkPalindrome() {
    let val = prompt("Enter any Word to check is it Palindrome or not");
    let reverseInLoop = "";
    for (let i = val.length - 1; i >= 0; i--) {
      reverseInLoop += val[i];
    }

    reverseInLoop.toLowerCase() === val.toLowerCase() ?  
    alert(val + " is a Palindrome word") :  
    alert(val + " is not a Palindrome word") ;
  }