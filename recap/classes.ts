class Elevator {
  identifier: string;
  maxFloors: number;
  private _currentFloor: number;
  targetFloor: number;
  private intervalHandle: number;

  constructor(identifier: string, maxFloors: number) {
    this.identifier = identifier;
    this.maxFloors = maxFloors;
    this._currentFloor = 0;
    this.targetFloor = 0;
    this.intervalHandle = 0;
  }

  get currentFloor() {
    return this._currentFloor;
  }

  set currentFloor(newFloor: number) {
    if (newFloor > this.maxFloors || newFloor < 0) {
      console.log("Ungültiges Stockwerk");
    } else {
      this._currentFloor = newFloor;
    }
  }

  move(targetFloor: number) {
    if (targetFloor < 0 || targetFloor > this.maxFloors) return;
    this.targetFloor = targetFloor;
    this.intervalHandle = setInterval(() => {
      this.next();
    }, 1000);
  }

  next() {
    if (this.targetFloor === this._currentFloor) {
      clearInterval(this.intervalHandle);
      console.log(this.identifier, "ist am Ziel");
      return;
    }
    if (this.targetFloor > this._currentFloor) {
      this._currentFloor++;
    } else {
      this._currentFloor--;
    }
    console.log(
      this.identifier,
      "ist unterwegs (Stockwerk:",
      this._currentFloor,
      ")",
    );
  }
}

const elevator = new Elevator("Aufzug 1", 5);
const elevator2 = new Elevator("Aufzug 2", 5);

elevator2.currentFloor = 7;
console.log("Elevator 2, currentFloor:", elevator2.currentFloor);

elevator.move(3);
elevator2.move(1);
