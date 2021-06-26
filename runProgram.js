// connecting driver.js within this file
const { Driver } = require("./driver");
// readline module provides an interface for reading data from a readable streams one line at a time
const readline = require("readline");
// file system - module enables interacting with the fs in a way modeled on standard POSIX functions
const fs = require("fs");

let drivers = [];

// create interface that uses input info within input.txt file
const userInterface = readline.createInterface({
    input: fs.createReadStream("input.txt"),
    console: false,
});

userInterface.on("line", (line) => {
    const lineArray = line.toString().split(" ");
    const [command, ...data] = lineArray;

    if (command == "Driver") {
        let driver = createDriver(data[0]);
        drivers.push(driver);
    } else {
        createDriverTrip(data);
    }
});

// create new driver name
const createDriver = (name) => {
    let driver = new Driver(name);
    return driver;
};

// create driver trip 
const createDriverTrip = (args) => {
    let [name, startTime, stopTime, milesDriven] = args;
    let [sameDriver] = drivers.filter(driver => driver.name === name);
    sameDriver.addTrip(startTime, stopTime, milesDriven);
};

// report all drivers info 
const reportAllDriversInfo = () => {
    const allDriverReport = drivers.reduce((x, driver) => {
        return [
            ...x,
            {
                name: driver.name,
                ...driver.tripsReport()
            }
        ];
    }, []);

    const allDriversReportSorted = allDriverReport.sort(
        (driverReport1, driverReport2) => driverReport2.milesDriven - driverReport1.milesDriven
    );
    
    // Here will Log out our message for driver and trip
    allDriversReportSorted.forEach(driverReport => {
        // console.log(`===========================`)
        console.log(
            `${driverReport.name}: ${Math.round(driverReport.milesDriven)} miles ${!isNaN(driverReport.averageSpeed) ? `@ ${Math.round(driverReport.averageSpeed)} mph` : ""}`
        );
        console.log(`===========================`)
    });
};

userInterface.on("close", () => {
    reportAllDriversInfo();
});

fs.createReadStream("input.txt");