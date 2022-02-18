class Holiday{
    constructor(destination,day){
        this.destination = destination;
        this.day = day;
    }
    info(){
        alert(`${this.destination} will take ${this.day} days.`);
    }
}

class Expedtion extends Holiday{
    constructor(destination,day,gear){
        super(destination,day);
        this.gear = gear;
    }
    info(){
        super.info();
        alert(`Bring your ${this.gear.join('and your')}`);
    
    }
}

const tripWithGear = new Expedtion('Semeru', 10, ['Sunglasses', 'Flags', 'Camera']);
tripWithGear.info();