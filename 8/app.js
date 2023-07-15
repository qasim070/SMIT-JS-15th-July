let paragraph = "react was released first in 2013, and since then, since it has become one of the most popular JavaScript libraries for building user interfaces. It was developed by Jordan Walke, a software engineer at Facebook, and was initially released as an open-source project on GitHub." ;

alert(paragraph.toLowerCase());


function replace() {

  let oldString = prompt("Which word or substring you want to replace from previos paragraph?").toLowerCase();
  let newString = prompt("to which new word or substring to replace?").toLowerCase();
  let confirmation = confirm("Do you want to replace all " + newString);

  if (oldString && newString) {
    if (confirmation === true) {
      paragraph = paragraph.replaceAll(oldString, newString);
    } else {
      paragraph = paragraph.replace(oldString, newString);
    }
  } 
  alert("Updated paragraph: " + paragraph);
  document.write("Updated paragraph: " + paragraph);
}
replace()