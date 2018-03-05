const gender = ['boy', 'girl'];

const foods = ['cheeseburger', 'bread', 'cherries', 'salad', 'chocolate', 'fortune cookie', 'taco', 'soup', 'lollipop', 'coffee', 'donut', 'pie', 'chicken', 'coconut', 'sandwich', 'bacon'];

const feelings = ['happiness', 'hunger', 'anger', 'sick', 'love', 'tired', 'thinking', 'smart', 'needy'];

const events = ['eat', 'die', 'poop', 'got sick', 'bites', 'sleep', 'run away', 'think', 'crave', 'grow'];

const outcomes = ['accept', 'reject'];

random = function (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
};

test = function () {
    console.log(`I've hatched, I'm a ${gender[random(0, gender.length)]}`)
    const hunger = feelings[1];
    console.log(`I'm feeling ${hunger}`);
    console.log(`What will you feed me?`);
    console.log(`Food: ${foods[random(0, foods.length)]}`);
    const outcome = outcomes[random(0, outcomes.length)];
    console.log(`Outcome: ${outcome}`);
    if (outcome === 'reject') {
        console.log(`You've been bitten!`);
    } else {
        console.log(`Nom nom nom!`);
    }
    
    // console.log(`Random: ${random(0, 14)}`);
    // console.log(`Food: ${foods[random(0, foods.length - 1)]}`);
    // console.log(`Feeling: ${feelings[random(0, feelings.length - 1)]}`);
    // console.log(`Event: ${events[random(0, events.length - 1)]}`);
    // console.log(`Outcome: ${outcomes[random(0, outcomes.length - 1)]}`);
};

test();