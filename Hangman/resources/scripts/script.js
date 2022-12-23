// Array for words
// For loop that gpes pver and changes visibility style with for loop (use array[1].length)
// Use math.random for words 
// use `underscore{underscoreType}
/* const words = ['space', 'actor', 'apple', 'grape', 'chair']; // Array of all the words
let letterPosition = 0;
const randomNum = Math.ceil(Math.random() * words.length - 1); // Generates random number

console.log(words[randomNum]);

function addLetter(letter) {
    if (letter == words[randomNum].charAt(letterPosition)) {
        document.getElementById('word').innerHTML += letter;
        letterPosition += 1;
    } else {
        alert('no');
    }
}  */
console.log('Script is working');

let stage = 1;
let letterPosition = 0; // Position for the letter 

const words = [
    "apple",
    "banana",
    "orange",
    "grape",
    "strawberry",
    "mango",
    "pear",
    "watermelon",
    "pineapple",
    "kiwi",
    "lemon",
    "lime",
    "coconut",
    "apricot",
    "peach",
    "plum",
    "cherry",
    "blueberry",
    "raspberry",
    "blackberry",
    "dog",
    "cat",
    "bird",
    "fish",
    "hamster",
    "rabbit",
    "turtle",
    "lizard",
    "snake",
    "frog",
    "butterfly",
    "bee",
    "ant",
    "spider",
    "ladybug",
    "book",
    "pen",
    "pencil",
    "paper",
    "notebook",
    "folder",
    "desk",
    "chair",
    "table",
    "window",
    "door",
    "wall",
    "floor",
    "ceiling",
    "light",
    "fan",
    "computer",
    "phone"
  ];  // Array of all the words
const randomWord = words[Math.ceil(Math.random() * words.length - 1)]; // Generates a random word
console.log(randomWord);

for (let i = 1; i <= randomWord.length; i++) { // Checks length and changes how much underscores are present depending on the words length
    console.log(i); 
    document.getElementById(`underscore${i}`).style.visibility = 'visible';
} 

function addLetter(letter) {
    if (stage == 7) {
        alert('You have lost the game');
    } else {
        if (letter == randomWord.charAt(letterPosition)) {
            document.getElementById('word').innerHTML += letter;
            letterPosition += 1;
            if (document.getElementById('word').innerHTML == randomWord) {
                console.log('Winner');
                alert(`You've won the game!`);
            }
        } else {
            stage += 1;
            document.getElementById('stageImg').src = `./resources/imgs/stage${stage}.png`; // Gets img and changes img everytime
        }
    }
}