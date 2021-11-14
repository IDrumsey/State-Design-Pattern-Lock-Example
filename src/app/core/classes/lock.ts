import { LockStates } from "./singletons/lock-states";
import { LockState } from "./state/lock-state";

// context
export class Lock {
    constructor(locked: boolean){
        this.state = locked ? LockStates.getInstance().locked : LockStates.getInstance().unlocked
    }


    private state: LockState

    changeState(newState: LockState): void {
        this.state = newState
    }

    lock(): void {
        if(this.state == LockStates.getInstance().unlocked){
            this.state.toggle(this)
        }
    }

    unlock(): void {
        if(this.state == LockStates.getInstance().locked){
            this.state.toggle(this)
        }
    }

    isLocked(): boolean {
        return this.state == LockStates.getInstance().locked
    }
}
