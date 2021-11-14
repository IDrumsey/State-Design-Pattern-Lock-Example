// https://refactoring.guru/design-patterns/singleton/typescript/example

import { Locked } from "../state/locked"
import { Unlocked } from "../state/unlocked"

export class LockStates {
    private static instance: LockStates

    private constructor(){}

    public static getInstance(): LockStates {
        if(!LockStates.instance){
            LockStates.instance = new LockStates()
        }

        return LockStates.instance
    }

    locked = new Locked()
    unlocked = new Unlocked()
}
