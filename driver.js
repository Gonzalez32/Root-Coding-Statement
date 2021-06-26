// create a class called Driver
class Driver {
    constructor(name) {
        this.name = name;
        this.trip = [];
    }
    
    addTrip = function(startTime, stopTime, milesDriven) {
        this.trip.push({
            startTime,
            stopTime,
            milesDriven
        });
    };
    
    tripsReport = function() {
        return this.addAllTripsReport();
    };
    
    addAllTripsReport = function() {
        const totals = this.trip.reduce(
            (sumTrip, trip) => {
                const numStopTime = parseFloat(trip.stopTime.replace(":", "."));
                const numStartTime = parseFloat(trip.startTime.replace(":", "."));
    
                return {
                    milesDriven: sumTrip.milesDriven + parseFloat(trip.milesDriven),
                    timeSpentDriving: sumTrip.timeSpentDriving + (numStopTime - numStartTime)
                };
            },
            { 
                milesDriven: 0, 
                timeSpentDriving: 0 
            }
        );
    
        let averageSpeed = 0;
        
        // If the speed is less than 5mph or greater than 100mph it shall be discarded
        if (totals.timeSpentDriving < 0.5)
            averageSpeed = (totals.milesDriven / (totals.timeSpentDriving * 100)) * 60;
        else {
            let [hours, minutes] = totals.timeSpentDriving
                .toFixed(2)
                .toString()
                .split(".")
            const totalTimeAsMinutes = (hours * 60) / 100 + minutes / 100;
            averageSpeed = (totals.milesDriven * 60) / totalTimeAsMinutes / 100;
        }
    
        const report = {
            ...totals,
            averageSpeed
        };
    
        return report;
    };
}

module.exports = {
    Driver
};
