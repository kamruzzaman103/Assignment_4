function checkDigitsInName(name) {
    if (Array.isArray(name)) {
        return "Invalid Input";
    }  
    const findNumberInString = /\d+/g;
    return findNumberInString.test(name);
}


console.log(checkDigitsInName('Raj123'));    
console.log(checkDigitsInName('Suman'));    
console.log(checkDigitsInName('Name2024'));  
console.log(checkDigitsInName('!@#'));       
console.log(checkDigitsInName(['Raj']));    
console.log(checkDigitsInName(454757)); 