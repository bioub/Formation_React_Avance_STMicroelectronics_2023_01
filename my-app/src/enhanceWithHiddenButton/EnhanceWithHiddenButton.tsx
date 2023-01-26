import { Component, PropsWithChildren, ReactNode } from "react";

type Props = {
  defaultShow?: boolean;
  renderButtonContent?(show: boolean): ReactNode;
}

type State = {
  show: boolean;
}

class EnhanceWithHiddenButton extends Component<PropsWithChildren<Props>, State> {
  
  constructor(props: PropsWithChildren<Props>) {
    super(props);
    this.state = {
      show: props.defaultShow ?? false,
    };
  }

  handleClick = () => {
    const { show } = this.state;
    this.setState({
      show: !show
    })
  }

  render() {
    const { show } = this.state;
    const { renderButtonContent } = this.props;
    return <div className="EnhanceWithHiddenButton">
      {show && this.props.children}
      <button onClick={this.handleClick}>{renderButtonContent ? renderButtonContent(show) : 'On/Off'}</button>
    </div>;
  }
}

export default EnhanceWithHiddenButton;
