import * as React from "react";

import { IMonster } from "./classes/imonster";
import { Monster } from "./classes/monster";

interface IProps extends React.Props<MonsterDisplayComponent> {
  monster: IMonster;
}

export default class MonsterDisplayComponent extends React.Component<IProps, {}> {

  public state: any = {};

  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <h1>{this.props.monster.name}</h1>
      </div>
    );
  }
}
