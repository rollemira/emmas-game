const foods = ['cheeseburger', 'bread', 'cherries', 'salad', 'chocolate', 'fortune cookie', 'taco', 'soup', 'lollipop', 'coffee', 'donut', 'pie', 'chicken', 'coconut', 'sandwich'];

const feelings = ['happiness', 'hunger', 'anger', 'sick', 'love', 'tired', 'thinking', 'smart'];

const events = ['eat', 'reject', 'die', 'poop', 'got sick', 'bites', 'sleep', 'run away', 'hatches', 'think', 'crave', 'grow'];

random = function (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
};

console.log(`Random: ${random(0, 14)}`);

console.log(`Food I like: ${foods[random(0, foods.length - 1)]}`);

console.log(`Feelings I have: ${feelings[random(0, feelings.length - 1)]}`);

console.log(`Things that happen: ${events[random(0, events.length - 1)]}`);