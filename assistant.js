//https://github.com/chen21414/cs81-module6b-assistant
function PersonalAssistant(name) {
  //stores the name 
  this.name = name;

  //stores array
  this.tasks = [];

  this.mood = "productive";
}

PersonalAssistant.prototype.addTask = function(task) {

  this.tasks.push(task);

  console.log("Added task: " + task);
};

//removes the first task in the tasks array.
PersonalAssistant.prototype.completeTask = function() {
  //Check any tasks 
  if (this.tasks.length === 0) {
    console.log("There are no tasks left to complete.");
    this.mood = "relaxed";
    return;
  }

  //removes the first task 
  const completedTask = this.tasks.shift();

  console.log("Completing task: " + completedTask);
  console.log("Now you have " + this.tasks.length + " task(s) left.");

  this.mood = "accomplished";
};

//displays the assistant's current mood.
PersonalAssistant.prototype.reportMood = function() {

  console.log("Mood: " + this.mood);
};

PersonalAssistant.prototype.introduce = function() {
  console.log("Hi! I'm " + this.name + ", your personal assistant.");
  console.log("You currently have " + this.tasks.length + " task(s).");
};

//Create a new PersonalAssistant object.
const myAssistant = new PersonalAssistant("MikeBot");

myAssistant.introduce();

myAssistant.reportMood();

console.log("\nAdding today's tasks...");

myAssistant.addTask("Finish the JavaScript personal assistant assignment");
myAssistant.addTask("Review pending codes");
myAssistant.addTask("Study for the exam");

console.log("\nCurrent task list:");
console.log(myAssistant.tasks);

console.log("\nStarting work...");

// Complete two tasks.
myAssistant.completeTask();
myAssistant.completeTask();

// Report the new mood after completing tasks.
myAssistant.reportMood();

console.log("\nRemaining tasks:");
console.log(myAssistant.tasks);


