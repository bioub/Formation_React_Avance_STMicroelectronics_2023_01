import React, { Component, ComponentClass, FunctionComponent } from "react";

type Props = {
}

type State = {
  show: boolean;
}

export function withHiddenButton(InnerComponent: ComponentClass | FunctionComponent) {
  class OuterComponent extends Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = {
        show: false,
      };
    }

    handleClick = () => {
      const { show } = this.state;
      this.setState({
        show: !show
      })
    }
    
    render(): React.ReactNode {
      const { show } = this.state;
      return <div className="withHiddenButton">
        {show && <InnerComponent />}
        <button onClick={this.handleClick}>On/Off</button>
      </div>
    }
  }

  return OuterComponent;
}