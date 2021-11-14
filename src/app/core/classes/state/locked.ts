import { Lock } from "../lock";
import { LockStates } from "../singletons/lock-states";
import { LockState } from "./lock-state";

// conrete state class 1
export class Locked extends LockState {
    constructor() {
        super()
    }

    toggle(lock: Lock): void {
        lock.changeState(LockStates.getInstance().unlocked)
    }
}
