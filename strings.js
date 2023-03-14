//Extract the first four characters from the string below;
//"beautiful"

let word = "beautiful";
console.log(word[0] +word[1] +word[2] +word[3]);
//nsert the following string at the tenth index of the below variable:
//"eat"
const food = "I did not have appetite today";
console.log(`${food[10]}eat`)

//Count how many times the following string appears in the string variable:
//1. "the"
//2."s"
const story= "She sells sea shells at the sea shore";
var count = (story.match(/s/g)).length;
console.log(count);
var count =(story.match(/the/g)).length;


//Convert the following strings into the specified format:
//1. UpperCase: "CONfidant"
//2. LowerCase: "amazing", "beautiFUL"
//3. Title case "A busy office"
 console.log("CONfidant".toUpperCase());
 console.log("amazing","beautiFUL".toLowerCase());
 console.log("A busy office".toLocaleUpperCase());
 
//  Using JavaScript,Find the following word form the followng strings;
//  1."market"
//  const string1=The lady went to the market   with her sister";
//   const string2 ="my favorite season is spring"
//  2."season"
const string1="The lady went to the market   with her sister";
console.log(string1.slice(20,27));

const string2="my favorite season is spring";
console.log(string2.slice(12,19)); 

