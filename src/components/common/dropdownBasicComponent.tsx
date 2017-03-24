import * as React from "react";

export interface IProps extends React.Props<DropdownBasic> {
    name: string;
    items: string[];
    selectedValue: string;
    onChange: any; // TODO: find correct type for this event.
}

export default class DropdownBasic extends React.Component<IProps, {}> { // TODO: make this a stateless component.

  public state: any = {};

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
        <select name={this.props.name} onChange={(e) => this.props.onChange(e)} value={this.props.selectedValue} >
          {this.props.items.map((item, i) => {
            return <option value={item} key={i}>{item}</option>;
          })}
        </select>
     );
  }
}
