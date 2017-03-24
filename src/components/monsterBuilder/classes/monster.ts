import { IMonster } from "./imonster";

export class Monster implements IMonster {
    public name: string = "Orc";
    public size: string = "Medium";
    public type: string = "Humanoid";
    public alignment: string = "Chaotic evil";
    public str: number = 16;
    public dex: number = 12;
    public con: number = 16;
    public int: number = 7;
    public wis: number = 11;
    public cha: number = 10;
    public expectedCR: string = "1/2";
}
