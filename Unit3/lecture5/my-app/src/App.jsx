import React from "react";

class Counter extends React.Component {

  constructor() {
    super();

    // Initial state                                               // this.state is use to store the initital value of state here the count is a state with inital value 0
    this.state = {
      count: 0
    };
  }

  // Increase Function
  increase = () => {                                               // this.setstate is a updater funciton 
    this.setState({
      count: this.state.count + 1
    });
  };

  // Decrease Function
  decrease = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  // Reset Function
  reset = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    return (
      <>
        <h1>Counter App</h1>

        <h2>{this.state.count}</h2>

        <button onClick={this.increase}>
          Increase
        </button>

        <button
          onClick={this.decrease}
          disabled={this.state.count === 0}
        >
          Decrease
        </button>

        <button onClick={this.reset}>
          Reset
        </button>
      </>
    );
  }
}

export default Counter;