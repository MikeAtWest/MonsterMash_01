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

    public mod(score: number): string {
        const modifier = Math.floor((score - 10) / 2);
        if (modifier < 0) {
            return "" + modifier;
        } else {
            return "+" + modifier;
        }
    }

    public render() {
        return (
            <div>
                <h1>{this.props.monster.name}</h1>
                <div className="typeAndAlign">{this.props.monster.size} {this.props.monster.type}, {this.props.monster.alignment}</div>
                <div>
                    <table className="abilityTable">
                        <tbody>
                            <tr>
                                <td>STR</td>
                                <td>DEX</td>
                                <td>CON</td>
                                <td>INT</td>
                                <td>WIS</td>
                                <td>CHA</td>
                            </tr>
                            <tr>
                                <td>{this.props.monster.str} ({this.mod(this.props.monster.str)})</td>
                                <td>{this.props.monster.dex} ({this.mod(this.props.monster.dex)})</td>
                                <td>{this.props.monster.con} ({this.mod(this.props.monster.con)})</td>
                                <td>{this.props.monster.int} ({this.mod(this.props.monster.int)})</td>
                                <td>{this.props.monster.wis} ({this.mod(this.props.monster.wis)})</td>
                                <td>{this.props.monster.cha} ({this.mod(this.props.monster.cha)})</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}
