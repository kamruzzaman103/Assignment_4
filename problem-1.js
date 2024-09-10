function calculateTax(income, expenses) {
    if((0<=income && 0<=expenses) && income >=expenses){
        let revenue = income-expenses;
        let tax=revenue * 0.2;
        return tax;
    }
    else{
        return "Invalid Input";
    }
    
}

let result= calculateTax(10000, 3000);
console.log("Result:",result);
result= calculateTax(34000, 1753)
console.log("Result:",result);
result= calculateTax(5000, 1500)
console.log("Result:",result);
result= calculateTax(7000, 7000)
console.log("Result:",result);
result= calculateTax(-5000, 2000)
console.log("Result:",result);
result= calculateTax(6000, -1500)
console.log("Result:",result);
