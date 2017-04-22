
//Constructor function that passes the full text and cloze deletion parameters
function ClozeCard(text, clozeDeleted) {
	if (text.search(clozeDeleted) !== -1) {
		this.text = text;
		this.clozeDeleted = clozeDeleted;
//This method splits the full text string into an array of sub-strings, find the cloze deletion phrase, and replace it with "..."
		this.partial = this.text.split(this.clozeDeleted).join("...");
  	}	else {
  		console.log("Sorry, your request cannot be completed. Please make sure that the cloze deletion appears in the full text.")
  	} 
}

//Testing the constructor function by creating two constructors
var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");


console.log(firstPresidentCloze.text);
console.log(firstPresidentCloze.clozeDeleted);
console.log(firstPresidentCloze.partial);


var superBowl51Cloze = new ClozeCard (
	"The New England Patriots were the Super Bowl 51 champions.", "New England Patriots")

console.log(superBowl51Cloze.text);
console.log(superBowl51Cloze.clozeDeleted);
console.log(superBowl51Cloze.partial);




