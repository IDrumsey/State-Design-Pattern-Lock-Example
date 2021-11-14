import { Lock } from "../lock";

// abstract state class
export abstract class LockState {
    constructor(){}
    
    abstract toggle(lock: Lock): void
}
