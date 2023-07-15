let items = ["cake", "apple pie", "cookie", "chips", "patties"];
let search = prompt("What you want to search?").toLowerCase();

for (let i = 0; i <= items.length; i++) {
    if( items[i] === search){
        alert(items[i] + " found at Counter Number " + items[i].length )
    }
}
