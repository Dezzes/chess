import { Colors } from "./Colors";

export class Player {
    color: Colors;
    isInCheck: boolean;

    constructor(playerColor: Colors) {
        this.color = playerColor;
        this.isInCheck = false;
    }
    
}