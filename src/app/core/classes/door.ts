import { Lock } from "./lock";

export class Door {
    constructor(locked: boolean) {
        this.lock = new Lock(locked)
    }

    lock: Lock

    lockDoor(): void {
        this.lock.lock()
    }

    unlockDoor(): void {
        this.lock.unlock()
    }

    isLocked(): boolean {
        return this.lock.isLocked()
    }
}
