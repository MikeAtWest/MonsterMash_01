import * as React from "react";

export interface IProps extends React.Props<TextInput> {
    name: string;
    text: string;
    onChange: any; // TODO: find correct type for this event.
}

export default class TextInput extends React.Component<IProps, {}> { // TODO: make this a stateless component.

  public state: any = {};

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
        <input type="text" name={this.props.name} value={this.props.text} onChange={(e) => this.props.onChange(e)} />
    );
  }
}
