let playerName;
let age;
let team;
let country;
let gender;
let ifInUnder13;
let ifInUnder19;
let isInT20;
let isInODI;
let teamTeam;
let totalTestMatch;
let totalTestInnings;
function getPlayerData() {
  playerName = prompt("Enter the Name of player");
  age = +prompt("Enter the age of player");
  team = prompt("In which team player is ?");
  country = prompt("For which country player is playing?");
  gender = prompt("What is the gender of player?");
  ifInUnder13 = prompt("if player ever played in under 13 team?(yes/no)");
  ifInUnder19 = prompt("if player ever played in under 19 team?(yes/no)");
  isInT20 = prompt("if player is in T20 team?(yes/no)");
  isInODI = prompt("if player is in ODI team?(yes/no)");
  teamTeam = prompt("if player is in current team?(yes/no)");
  totalTestMatch = +prompt("How many test matches player has played?");
  totalTestInnings = +prompt("How many test innings player has played?");

  // checking random variables in console under the scope of function 
  console.log(playerName + " " + ifInUnder13 + " " + totalTestInnings)
}
getPlayerData();