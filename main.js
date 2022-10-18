const prompt = require('prompt-sync')({sigint: true});

/* Global variables */
let caughtFish = [];
// let fish1 = generateRandomFish();
// let fish2 = generateRandomFish();

// caughtFish.push(fish1,fish2);



/* Game Flow */

console.log("You've gone fishing! Try to maximize the value of your caught fish. You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.");
console.log('                                                       ');



for(let i = 6; i < 12; i++){
    console.log('======================================\n');

console.log(`The time is ${i}:00am. So far you have caught: `);



//'The time is ${i} :00 am. So far you have caught: '
//1. current fish list - keep track of our fish and print list
// - # of fish = .length of caughtFish
// - weight/value - function to calculate total weight and total value of fish in caughtFish array

console.log(`${caughtFish.length} fish, ${getTotalWeight()}lbs, $${getTotalValue()}`)
console.log('                                    ')
for(let i = 0;i < caughtFish.length;i++){
    console.log(`  --  ${caughtFish[i].name}, ${caughtFish[i].weight}lbs, $${caughtFish[i].value}`);
}
console.log('                                                       ');


//2. logging out our random fish - generateRandomFish()

let fish = generateRandomFish();

console.log(`You caught a ${fish.name} weighing ${fish.weight} lbs and valued at $${fish.value}`);

// - check if weight exceeds 10 lbs, if so - auto release, make them press enter, make sure that they are not prompted to catch/release
// 

let currentTotalWeight = getTotalWeight();

if(currentTotalWeight + fish.weight > 10){
    console.log(`\nThis fish would put you over 10 lbs, so you should release it.\n`);

    console.log(`Press any key to continue`);
    prompt(`> `);

    continue;

}
// if(i === 12){ 
//     console.log(`The time is ${i}:00pm. Times up!`);


// }



//3. catch or release - user prompt
//error check for valunes NOT C/R
// make sure we are not catching over 10 lbs

console.log("\nYour action: [C]atch or [R]elease or [RR]elease?")
let action = prompt(`> `);



while(action !== "C" && action !== "R" && action !== "RR"){
    console.log(`Please enter [C] or [R] or [RR]`);
    action = prompt(`> `);

}

while(action === "RR" && caughtFish.length === 0){
        console.log('You have yet to catch any fish. Please [C]atch at least one, before using this option');
        action = prompt(`> `);
    }





if(action === 'C'){
    // catch
    /*
    -push fish into the array
    -message: You chose to keep the fish.
    */
   caughtFish.push(fish);
   console.log(`\n You chose to keep the ${fish.name}!\n`);


}else if(action === 'R'){
    //release
    /*
    -console.log release message: You chose to release the fish
     */
    console.log(`\n You chose to release the ${fish.name}.\n`);

 
}else if(action === 'RR'){
    
    console.log(`Please enter [A],[B],[C],[D],[E] or [F] to cancel RR `)
    action = prompt('> ')

    while(action === "B" && caughtFish.length < 2 ||  action === "C" && caughtFish.length < 3 || action === "D" && caughtFish.length < 4 || action === "E" && caughtFish.length < 5){console.log('You have yet to catch that many fish. Please choose an action option that corresponds to a caught fish.');
        action = prompt(`> `);
    }

    if(action === 'A'){
        caughtFish.splice(0,1);
        console.log(`\n You rereleased the chosen fish!\n`);
    }else if(action === 'B'){
        caughtFish.splice(1,1);
        console.log(`\n You rereleased the chosen fish!\n`);
    }else if(action === 'C'){
        caughtFish.splice(2,1);
        console.log(`\n You rereleased the chosen fish!\n`);
    }else if(action === 'D'){
        caughtFish.splice(3,1);
        console.log(`\n You rereleased the chosen fish!\n`);
    }else if(action === 'E'){
        caughtFish.splice(4,1);
        console.log(`\n You rereleased the chosen fish!\n`);
    }else if(action === 'F'){
        console.log(`\n Press any key to cancel rerelease \n`);
        prompt(`> `);

    continue;


    }
    


}
}



 
/*
generateRandomWeight
parameters: none
return weight(number)
*/
function generateRandomWeight(){
let weight = Number((Math.random() * 5).toPrecision(3));

while(weight < 1){
    weight = Number((Math.random() * 5).toPrecision(3));
}

return weight;

}

//console.log(generateRandomWeight());


function generateRandomValue(){

    let value = Number((Math.random() * 5).toPrecision(3));

    while(value < .1){
        value = Number((Math.random() * 5).toPrecision(3));
}  // this ensures that we only get 2 digits after . and not 3 (ex. .098)





    if(value < 1){
        // value = (Math.random() * 5).toPrecision(3);
        value = Number(value.toPrecision(2));
}

return value;

}

// console.log(generateRandomValue());


// name //////////////////////////////////////

/* name - 2 descriptors + 1 (fish)type
// adjective array ['enormous', 'red','scaly']

// type array = ['salmon','bass','trout']
// Math.floor(Math.random() * type.length)
// adj1 + adj2 + type

// red red salmon

// check to make sure adj1 !== adj2
// if so, re-randomize 
*/

function generateRandomName(){
    let adjectives = ['Shiny', 'Red','Dull', 'Blue', 'Slimy', 'Green', 'Dry', 'Yellow', 'Vibrant', 'Purple', 'Floppy', 'Orange', 'Silly', 'Silver'];

    let types = ['Salmon','Bass', 'Trout', 'Flounder', 'Perch','Snapper','Cod','Catfish','Grouper','Tuna', 'Blobfish','Blowfish']

    // index - Math.floor(Math.random())

    let adj1 = adjectives[Math.floor(Math.random() * adjectives.length)];

    let adj2 = adjectives[Math.floor(Math.random() * adjectives.length)];

   while(adj1 === adj2){adj2 = adjectives[Math.floor(Math.random() * adjectives.length)];
}

    let type = types[Math.floor(Math.random() * types.length)];

    return adj1 + " " + adj2 + " " + type;

}

// console.log(generateRandomName());

function generateRandomFish(){
    let fish = {};
    fish.name = generateRandomName();
    fish.weight = generateRandomWeight();
    fish.value = generateRandomValue();

    return fish;
}


// console.log(generateRandomFish());

/*
total the weight of all caughtFish
*/
function getTotalWeight(){
    let totalWeight = 0;
    for(let i = 0; i < caughtFish.length;i++){
        totalWeight += caughtFish[i].weight;
    }
    
    return Number(totalWeight.toPrecision(3));
    
}

function getTotalValue(){
    let totalValue = 0;
    /* for(let fish of caughtFish){
        //fish.value - gets us the value property of each fish in our caught fish array 1 at a time
        totalValue = totalValue + fish.value;
      
    }
    return Number(totalValue.toPrecision(3));
    */
    for(let i = 0; i < caughtFish.length;i++){
        totalValue += caughtFish[i].value;
    }
    
    return Number(totalValue.toPrecision(3));



    
}


 
  

console.log('\n======================================\n');
console.log(`\nThe time is 12:00pm. Times up!\n`)
console.log(`You caught ${caughtFish.length} fish: `);
console.log('                                      ');
let i = 0
while(i < caughtFish.length){
    console.log(`*  ${caughtFish[i].name}, ${caughtFish[i].weight}lbs, $${caughtFish[i].value}`);
    i++;
}
console.log('                                      ');
console.log(`Total weight: ${getTotalWeight()} lbs`);
console.log(`Total value: $${getTotalValue()}`);

















/*
fish
-weight: number(pounds)
-name (2 descriptors + type): string
-value: number

fish = {
-name: string 
-weight: number
-value: number
}

// Weight //

Math.random
weight 0-5 lbs (feel free to adjust)
console.log((Math.random()* 5).toPrecision(3));
let rand = Math.random() * 5;
console.log(rand);
console.log(Number(rand.toPrecision(3)));
// need a way to offset decimals with 3 places ie 0.574

// Value of fish //

value 0-5
Math.random() * 5).toPrecision(3)
// need a way to offset decimals with 3 places ie 0.574

// name //
name - 2 descriptors + 1 (fish)type
adjective array ['enormous', 'red','scaly']

type array = ['salmon','bass','trout']
Math.floor(Math.random() * type.length)
adj1 + adj2 + type

red red salmon

// check to make sure adj1 !== adj2
// if so, re-randomize


*/
