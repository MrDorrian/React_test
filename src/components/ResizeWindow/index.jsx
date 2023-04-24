import React, { Component } from 'react';

class ResizeWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }
  handlerResize = ({ target: { innerHeight, innerWidth } }) => {
    this.setState({ y: innerHeight, x: innerWidth });
  };
  componentDidMount() {
    window.addEventListener('resize', this.handlerResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handlerResize);
  }

  render() {
    const { x, y } = this.state;
    return (
      <div>
        Current Window Sizes: x - {x} y - {y}
      </div>
    );
  }
}

export default ResizeWindow;
