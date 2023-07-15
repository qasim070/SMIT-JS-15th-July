
let subEng =  +prompt("Enter  marks you got in English");
let subMaths = +prompt("Enter  marks you got in Maths");
let subPhy =  +prompt("Enter  marks you got in Physics");
let subIsl =  +prompt("Enter  marks you got in Islamiat");

let total = subEng + subIsl + subMaths + subPhy;
let result = Math.round(total/400 * 100)  ;
alert(result);
document.write("Congratulations you got " +result+ "% overall");
