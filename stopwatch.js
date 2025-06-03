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

