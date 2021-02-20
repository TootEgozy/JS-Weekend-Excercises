
let arr = [1,2,3,4,5,6,7];

arr.ForEach = function(callbackFunc) {
    for (i=0; i<this.length; i++)
        callbackFunc(this[i],i,this);
}

function callbackPrintEven(element) {
    if (element % 2 === 0) console.log(element);
}


let people = [
    {name : "John", age : 40},
    {name : "Richard", age : 20},
    {name : "Molly", age : 50},
    {name : "Lizzy", age : 15},
    {name : "Patrick", age: 25},
]

people.ForEach = function(callbackFunc) {
    for (i = 0; i < this.length; i++)
        callbackFunc(this[i],i,this);
}

people.Map = function(callbackFunc) {
    let result = [];
    for (i = 0; i < this.length; i++) {
        result.push(callbackFunc(this[i],i,this.length));
    }
    return result;
}


people.Filter = function(callbackFunc) {
    let result = [];
    for (i = 0; i < this.length; i++) {
        if(callbackFunc(this[i],i,this.length)) {
        result.push(this[i]);
        }
    }
    return result;
}

let result =[];
function callbackFilterUnder30(person, index) {
    if (person.age <= 30) {
        person.index = index;
        result.push(person);
    }
}


////////test ForEach
people.ForEach(callbackFilterUnder30);

for (i = 0; i<result.length; i++) console.log(result[i]);

////////test Map
function callbackHuman(person) {
    person.human = "true";
    return person;
}


console.log(people.Map(callbackHuman));

/////////test Filter
function callbackFilter(person) { return (person.age >= 40); }

console.log("_________________________");

console.log(people.Filter(callbackFilter));