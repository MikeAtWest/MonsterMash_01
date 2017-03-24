import * as React from "react";

export interface IProps extends React.Props<DropdownNumeric> {
  name: string;
  min: number;
  max: number;
  selectedValue: number;
  onChange: any; // TODO: find correct type for this event.
}

export default class DropdownNumeric extends React.Component<IProps, {}> { // TODO: make this a stateless component.

  public state: any = {};

  constructor(props: any) {
    super(props);
  }

  public render() {
    const items = [];
    for (let i = this.props.min; i <= this.props.max; i++) {
      items.push(i);
    }

    return (
      <select name={this.props.name} onChange={(e) => this.props.onChange(e)} value={this.props.selectedValue} >
        {items.map((item, i) => {
          return <option value={item} key={i}>{item}</option>;
        })}
      </select>
    );
  }
}
