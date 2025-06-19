function hello(){
    console.log("Hello Js");
}

hello();

function add(a,b) {
console.log(a+b);
}
add(1,4);


function displayAnotherFunction(func){
    func(1,2);
}
 displayAnotherFunction(add);

 let varFunc = add;
 varFunc(1,4);
//Anonymous fnx inside a variable
 let newFuncVar = function() {
    console.log("var func");
 };

newFuncVar();

const arrowFuncVar =  () => {
    console.log("Arrow fnx");
};
arrowFuncVar();