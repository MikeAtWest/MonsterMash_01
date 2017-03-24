import * as React from "react";
import "./monsterBuilderComponent.css";

import { IMonster } from "./classes/imonster";
import { Monster } from "./classes/monster";

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
    this.state.monster = new Monster("Orc");

    this.onChange = this.onChange.bind(this);
  }

  public onChange(event: React.KeyboardEvent<HTMLInputElement>): void {
    const field = event.currentTarget.name;
    const value = event.currentTarget.value;

    // console.log(field + " - " + value); // tslint:disable-line
    this.state.monster[field] = value;
    return this.setState({ monster: this.state.monster });
  }

  public render() {
    return (
      <div>
        <h1>Monster Builder from React:</h1>

        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td><TextInput name="name" text={this.state.monster.name} onChange={this.onChange} /></td>
            </tr>
          </tbody>
        </table>

        <MonsterDisplay monster={this.state.monster} />

      </div>
    );
  }
}
