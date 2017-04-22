
//Constructor function that passes the front and back of the flashcard as parameters
function BasicCard(front, back) {
	this.front = front;
	this.back = back;
};



//Testing the constructor function by creating two constructors
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");


console.log(firstPresident.front);
console.log(firstPresident.back);




var superbowl51 = new BasicCard (
	"Which team won Super Bowl 51?", "New England Patriots")


console.log(superbowl51.front);
console.log(superbowl51.back);

