let items = 2095+799+1899;

let shipping = 499;
let totalBeforeTax = items + shipping;
let estimTax = totalBeforeTax /100;
let orderTot =  totalBeforeTax+(estimTax*10);

console.log("items(3):   ",items);
console.log("Shipping & handling:   ",shipping);
console.log("Total before tax:   ",totalBeforeTax);
console.log("Estimated tax(10%):   ",estimTax*10);
console.log("Order total:   ",orderTot);