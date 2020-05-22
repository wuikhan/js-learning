/**
 * Coding Challenge 2
 * john and mike play basket ball in diferent teams.
 * in the last 3 games, john's team scored 89, 120 and 103 points. while mike's team scored 116, 94 and 123 points.
 * 1. calculate the average score for each team.
 * 2. decide which teams wins in avrage (highest average score), and print the winner to the console.
 * Also include the avrage score in the output.
 * 3. then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
 * 4. extra mary also plays basketball, and her team scored 97, 134 and 185 points. Like before, log the average winner to the console. HINT you will need 
 * the && operator to take the decision. if you can't solve this one just watch the solution it's no problem)
 * 5. Like before change the scores to generate different winners keeping in ming there might be draws.
 */

 var johnTeam = 111 + 11 + 11;
 var mikeTeam = 11 + 11 + 11;
 var maryTeam = 11 + 11 + 11;

 var johnAvg = johnTeam / 3;
 var mikeAvg = mikeTeam / 3;
 var maryAvg = maryTeam / 3;

 console.log(johnAvg, mikeAvg, maryAvg);

 if(johnAvg > mikeAvg && johnAvg > maryAvg){
     console.log('John\'s team is the winner '+johnAvg);
 } else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
     console.log('Mike\'s team is the winner '+mikeAvg);
 } else if (maryAvg > johnAvg && maryAvg > mikeAvg) {
     console.log('Mary\'s team is the winner '+maryAvg);
 } else {
     console.log('it\'s a draw');
 }