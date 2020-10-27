// Initialize the  Arrays

let user = {
    id : 1,
    name : "Shashank",
    Address : "Varanasi",
    age : 24,
    hobbies : [
        "Cricket","Travelling"
    ]
}

user.id = "Shashank";
console.log(user.id);

// Assign Object

const target_name = {Roshan : 1, Choudhar : 2};
const source_name = {Shashank : 3, Baranwal : 4};

const returendtarget = Object.assign(target_name, source_name);

console.log(target_name);
console.log(returendtarget);

// Create Object methods

let person1 = {
    id : 2,
    name : "Roshan",
    age : 24,
    Location : "Lucknow",
    details: function() {
        console.log('My name is ${this.name}. my age is ${this.age). and my nlocation is ${this.Location');
    }
};

const obj1 = Object.create(person);
obj1.id = 4;
obj1.name = "Ravi";
obj1.age = 32;
obj1.Location = "varanasi";

obj1.details();

// IsExtensible Object methods

const Name = [];
console.log(Object.isExtensible(Name));
Object.preventExtensions(Name);

console.log(Object.isExtensible(Name));

// Objects keys methods

const person = {
    name : "Shashank",
    age : 24,
    Location : "Varanasi",
    Area : "Vishwananath" 
};

console.log(Object.keys(person));
console.log(Object.values(person));

// Entries Objects Methods

const users = {
    a: 'Gsoc',
    b: 41
  };
  
  for (const [key, value] of Object.entries(users)) {
    console.log(`${key}: ${value}`);
  }
  
// Freeze Objects Methods

const gamer = {
    id : 23,
    Name : "Shashank"
};

Object.freeze(gamer); 
gamer.id = 33;
gamer.Name = "Rohan";

console.log(gamer.id);
console.log(gamer.Name);

// Frozen Objects Methods

const person = {
    a: 42
};
console.log(Object.isFrozen(person));
Object.freeze(person);
console.log(Object.isFrozen(person));

/// Sealed Objects Methods

const person = {
    id: 42
};
// false means objects not sealed
console.log(Object.isSealed(person));
Object.seal(person);
// True means Objects sealed
console.log(Object.isSealed(person));

/// Object.getOwnProperty Names Methods

const users = {
    id: 1,
    name: "Shashank",
    age: 24
  };
  
  console.log(Object.getOwnPropertyNames(users));





  /* 
let validateEmail = (email) => {
    const regex = /\w+.\w+@successive.tech$/i;
    return regex.test(email)
}

console.log(users[0].TraineeEmail);
*/