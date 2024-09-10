function sendNotification(email) {
    if (email.includes("@")) {
        const devidedTwoPart = email.split("@");
        const userName = devidedTwoPart[0];
        const domainName = devidedTwoPart[1];
        return `${userName} sent you an email from ${domainName}`;
    }
    else
        return "Invalid Email"
}
console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com")); 
