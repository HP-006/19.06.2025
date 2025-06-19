function add(a,b){
    console.log(a+b);
}


let newObject = {
    name: "John Doe",
    age:25,
    func: (a, b) => {
        console.log(a,b)
    },
};
console.log(newObject.name);
console.log(newObject.age);
newObject.func(2,3);

let person = {
    name: "John Doe",
    age:25,
};
let newDetails = {
    ...person,
    role: "developer"
}



