// Example array of names
const names = ["John", "Jane", "Mark", "Alice"];

// Function to determine greeting based on the first letter of the name
function greet(name) {
    if (name.charAt(0).toLowerCase() === 'j') {
        return "Goodbye " + name;
    } else {
        return "Hello " + name;
    }
}

// Loop through the array and print greetings to the console
for (let i = 0; i < names.length; i++) {
    console.log(greet(names[i]));
}

