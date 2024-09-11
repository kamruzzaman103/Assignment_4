function waitingTime(waitingTimes, serialNumber) {
    if (serialNumber > waitingTimes.length && Array.isArray(waitingTimes)
         && typeof (serialNumber) == "number") {
        let sum = 0;
        for (const element of waitingTimes) {
            sum += element;
        }
        let avg = sum / waitingTimes.length;
        let finalAvg = Math.round(avg);
        let a = serialNumber - 1;
        let b = a-waitingTimes.length ;
        const isratWaitingTime = b * finalAvg;
        return isratWaitingTime;
    }
    else
        return "Invalid Input"

}


console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7 , 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
