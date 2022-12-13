import React from "react";

export default class MouseFollower extends React.Component {
  state = {
    left: 0,
    top: 0
  };
  componentDidMount = () => {
    document.addEventListener("mousemove", this.updatePosition);
  };
  componentWillUnmount = () => {
    document.removeEventListener("mousemove", this.updatePosition);
  };
  updatePosition = event => {
    this.setState({
      left: event.clientX,
      top: event.clientY
    });
  };
  render() {
    const styles = {
      width: 10,
      height: 10,
      position: "fixed",
      left: this.state.left,
      top: this.state.top,
      border: "1px solid red"
    };
    return <div style={styles} />;
  }
}