import * as React from "react";
import "./monsterBuilderComponent.css";

import { IMonster } from "./classes/imonster";
import { Monster } from "./classes/monster";

import DropdownBasic from "../common/dropdownBasicComponent";
import Dropdown from "../common/dropdownComponent";
import DropdownNumeric from "../common/dropdownNumericComponent";
import TextInput from "../common/textInputComponent";

import MonsterDisplay from "./monsterDisplayComponent";

interface IProps extends React.Props<MonsterBuilderComponent> {
  monster: IMonster;
}

export default class MonsterBuilderComponent extends React.Component<IProps, {}> {

  public state: any = {};

  constructor(props: IProps) {
    super(props);

    this.state = {};
    this.state.monster = new Monster();

    this.state.sizes = ["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"];

    this.state.types = ["Abberation", "Beast", "Celestial", "Construct", "Dragon", "Elemental", "Fey", "Fiend", "Giant", "Humanoid", "Monstrostity", "Ooze", "Plant", "Undead"];

    this.state.alignments = ["Lawful good", "Neutral good", "Chaotic good", "Lawful neutral", "Neutral", "Chaotic neutral", "Lawful evil", "Neutral evil", "Chaotic evil", "Unaligned"];

    this.state.challengeRatings = ["0", "1/8", "1/4", "1/2"];
    for(let c: number = 1; c<= 30; c++) {
      this.state.challengeRatings.push(c + "");
    }
    // this.state.challengeRatings = [
    //   { cr: "0", profBonus: 2, ac: 13, minHP: 1, maxHP: 6, attackBonus: 3, minDam: 0, maxDam: 1, saveDC: 13 },
    //   { cr: "1/8", profBonus: 2, ac: 13, minHP: 7, maxHP: 35, attackBonus: 3, minDam: 2, maxDam: 3, saveDC: 13 },
    //   { cr: "1/4", profBonus: 2, ac: 13, minHP: 36, maxHP: 49, attackBonus: 3, minDam: 4, maxDam: 5, saveDC: 13 },
    // ];

    this.onTextChange = this.onTextChange.bind(this);
    this.onDropdownChange = this.onDropdownChange.bind(this);
  }

  public onTextChange(event: React.KeyboardEvent<HTMLInputElement>): void {
    const field = event.currentTarget.name;
    const value = event.currentTarget.value;

    // console.log(field + " - " + value); // tslint:disable-line
    this.state.monster[field] = value;
    return this.setState({ monster: this.state.monster });
  }

  public onDropdownChange(event: React.KeyboardEvent<HTMLSelectElement>): void {
    const field = event.currentTarget.name;
    const value = event.currentTarget.value;

    console.log(field + " - " + value); // tslint:disable-line
    this.state.monster[field] = value;
    return this.setState({ monster: this.state.monster });
  }

  public mod(score: number): number {
    return Math.floor((score - 10) / 2);
  }

  public render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td colSpan={5}><TextInput name="name" text={this.state.monster.name} onChange={this.onTextChange} /></td>
            </tr>
            <tr>
              <td>Size:</td>
              <td colSpan={5}><DropdownBasic name="size" items={this.state.sizes} onChange={this.onDropdownChange} selectedValue={this.state.monster.size} /></td>
            </tr>
            <tr>
              <td>Type:</td>
              <td colSpan={5}><DropdownBasic name="type" items={this.state.types} onChange={this.onDropdownChange} selectedValue={this.state.monster.type} /></td>
            </tr>
            <tr>
              <td>Alignment:</td>
              <td><DropdownBasic name="alignment" items={this.state.alignments} onChange={this.onDropdownChange} selectedValue={this.state.monster.alignment} /></td>
            </tr>
            <tr>
              <td>STR:</td>
              <td><DropdownNumeric name="str" min={1} max={30} onChange={this.onDropdownChange} selectedValue={this.state.monster.str} /></td>
              <td>DEX:</td>
              <td><DropdownNumeric name="dex" min={1} max={30} onChange={this.onDropdownChange} selectedValue={this.state.monster.dex} /></td>
              <td>CON:</td>
              <td><DropdownNumeric name="con" min={1} max={30} onChange={this.onDropdownChange} selectedValue={this.state.monster.con} /></td>
            </tr>
            <tr>
              <td>INT:</td>
              <td><DropdownNumeric name="int" min={1} max={30} onChange={this.onDropdownChange} selectedValue={this.state.monster.int} /></td>
              <td>WIS:</td>
              <td><DropdownNumeric name="wis" min={1} max={30} onChange={this.onDropdownChange} selectedValue={this.state.monster.wis} /></td>
              <td>CHA:</td>
              <td><DropdownNumeric name="cha" min={1} max={30} onChange={this.onDropdownChange} selectedValue={this.state.monster.cha} /></td>
            </tr>
            <tr>
              <td>Expected CR:</td>
              <td><DropdownBasic name="expectedCR" items={this.state.challengeRatings} onChange={this.onDropdownChange} selectedValue={this.state.monster.expectedCR} /></td>
            </tr>            
          </tbody>
        </table>

        <MonsterDisplay monster={this.state.monster} />

      </div>
    );
  }
}
