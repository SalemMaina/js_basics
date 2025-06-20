/*
Author: Salem Maina
Date: 10/06/2025
This is my learning of JavaScript. Jump in the journey with me.
Here's the miniproject test description:
StopWatch

Description: A stopwatch that returns duration between when it started and stopped.
*/
function Stopwatch(duration) {
    this.duration = 0; // in seconds
    this.startTime = null;
    this.endTime = null
    this.running = false;
    this.start = function() {
        if (this.running != true){
            this.startTime = Date.now();
            this.running = true;
        }
    }
    this.stop = function() {
        if (this.running == true){
            this.endTime = Date.now();
            this.duration = (this.endTime - this.startTime)/1000;
            this.running = false;
        }
    }
    this.reset = function() {
        this.duration = 0;
        this.startTime = null;
        this.endTime = null;
        this.running = false;
    }
}
let sw = new Stopwatch();
//stopwatch.start();

