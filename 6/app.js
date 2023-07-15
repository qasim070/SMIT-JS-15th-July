function  checkpalendrome(){
    let val = prompt("Enter the word to check it is Palendrome or not");
    let lower = val.toLowerCase();
    let str = lower.split("") ;
    let finalVal = str.reverse().join("");

    // if else  condition 
    lower === finalVal ? 
    alert("It is a Palendrome Word") : 
    alert("It is not a Palendrome word");
}