/*
    myName : string =  "Waheed Ahmed"
    myRollNo: number = 000208505
    myEmailId: string =  "waheedahmedsoomro@gmail.com"
    myDaySlot: string = "Saturday (07:00 - 10:00)"
*/
import chalk from "chalk";
let countDown = () => {
    let nextDate = new Date("05/22/2024"); // Give a Date
    let currentDate = new Date(); // Pick the Current Date (SYSDATE)
    let diff = Math.abs(nextDate.getTime() - currentDate.getTime());
    // Calculate The Days
    let days = Math.floor(diff / (1000 * 3600 * 24) % 24);
    // Calculate The Hours
    let hours = Math.floor(diff / (1000 * 60 * 60) % 24);
    // Calculate The Minutes
    let min = Math.floor(diff / (1000 * 60) % 60);
    // Calculate The Seconds
    let sec = Math.floor(diff / 1000) % 60;
    // Print All the Values with time Interval
    console.log(chalk.red.bold(`Days: ${days} - Hours: ${hours} - Min: ${min} - Sec ${sec}`));
};
// setInterval : Repeatedly run code at every time interval
setInterval(countDown, 1000);
