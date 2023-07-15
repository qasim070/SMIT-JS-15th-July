let word = "The quick brown fox jumps over the lazy dog";
word.toLowerCase();
let split = word.split(" ");
// alert(split)
// split.toLowerCase();


let counter = 0;

for (let i = 0; i < split.length; i++) {
    if (split[i].toLowerCase() === "the"){
        counter++;
    }
}
alert("The found " + counter + " times.")