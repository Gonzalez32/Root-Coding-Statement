# Root-Coding-Statement

### Problem Statement
Let's write some code to track driving history for people.

The code will process an input file. You can either choose to accept the input via stdin (e.g. if you're using Ruby cat input.txt | ruby yourcode.rb), or as a file name given on the command line (e.g. ruby yourcode.rb input.txt). You can use any programming language that you want. Please choose a language that allows you to best demonstrate your programming ability.

Each line in the input file will start with a command. There are two possible commands.

The first command is Driver, which will register a new Driver in the app. Example:
```
Driver Dan
```
The second command is Trip, which will record a trip attributed to a driver. The line will be space delimited with the following fields: the command (Trip), driver name, start time, stop time, miles driven. Times will be given in the format of hours:minutes. We'll use a 24-hour clock and will assume that drivers never drive past midnight (the start time will always be before the end time). Example:
```
Trip Dan 07:15 07:45 17.3
```
Discard any trips that average a speed of less than 5 mph or greater than 100 mph.

Generate a report containing each driver with total miles driven and average speed. Sort the output by most miles driven to least. Round miles and miles per hour to the nearest integer.

Example input:
```
Driver Dan
Driver Lauren
Driver Kumi
Trip Dan 07:15 07:45 17.3
Trip Dan 06:12 06:32 21.8
Trip Lauren 12:01 13:16 42.0
```

Expected output:
```
Lauren: 42 miles @ 34 mph
Dan: 39 miles @ 47 mph
Kumi: 0 miles
```

## My Outlook Process

Before any code is written, I wrote all my logic down and review on how I would tackle this problem down.
![note](https://i.imgur.com/ivA8NNI.jpg)
At first, my thought was to generate express but after re-reading the problem statement I was overthinking it.
In the **driver.js** file I decided to make a class for driver knowing is has one assocation, trip. This is where (one to many) comes to play, as a driver has many trips. First command is Driver as it will register a new driver in the app. Second command is Trip which is connected to driver in this statement.

## Usage
* From the root directory we can run the program in our command line using `node runProgram.js` that will get a list of drivers including mileage & mph.