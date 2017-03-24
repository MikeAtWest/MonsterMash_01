import { IMonster} from "./imonster";

export class Monster implements IMonster {
    public name: string = "";

    constructor(name: string) {
        this.name = name;
    }

}
