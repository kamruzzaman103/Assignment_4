function calculateFinalScore(obj) {
    if (typeof obj !== "object" || typeof obj.name !== "string" || 
        typeof obj.testScore !== "number" || typeof obj.schoolGrade !== "number" || 
        typeof obj.isFFamily !== "boolean" || obj.testScore > 50 || obj.schoolGrade > 30) {
        return "Invalid Input";
    }
    let finalScore = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily ==true) {
        finalScore += 20;
    }
    return finalScore >= 80 ? true : false;
}

// Sample Inputs and Outputs
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));  // Output: true
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false })); // Output: false
console.log(calculateFinalScore("hello"));                                                             // Output: "Invalid Input"
console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true }));  // Output: false
console.log(calculateFinalScore({ name: "Rajib", testScore: 55, schoolGrade: 30, isFFamily: false }));